import { parseQuotePayload, validateQuotePayload, type QuotePayload } from "../../lib/quote-validation.ts";
import type { QuoteRepository } from "../../lib/quote-repository.ts";

const RATE_LIMIT_WINDOW_SECONDS = 60;

export interface EmailResult {
  sent: boolean;
  reason?: string;
}

export interface QuoteHandlerDeps {
  /** Null when D1 isn't available/configured (e.g. not provisioned yet). */
  repository: QuoteRepository | null;
  sendEmail: (payload: QuotePayload) => Promise<EmailResult>;
}

export interface QuoteHandlerResult {
  status: number;
  body: { success: true; id: number | null } | { error: string };
}

/**
 * Pure request handler for POST /api/quote — no Cloudflare/D1/fetch APIs
 * touched directly, so it's fully unit-testable with fakes. The route.ts
 * wrapper supplies the real D1 repository and Resend email sender.
 */
export async function handleQuoteSubmission(rawBody: unknown, deps: QuoteHandlerDeps): Promise<QuoteHandlerResult> {
  const payload = parseQuotePayload(rawBody);

  // Honeypot: pretend success without doing any work, so bots don't learn
  // it was rejected.
  if (payload.companyWebsite) {
    return { status: 201, body: { success: true, id: null } };
  }

  const validationError = validateQuotePayload(payload);
  if (validationError) {
    return { status: 400, body: { error: validationError } };
  }

  const { repository, sendEmail } = deps;

  if (repository) {
    try {
      const isDuplicate = await repository.hasRecentSubmission(payload, RATE_LIMIT_WINDOW_SECONDS);
      if (isDuplicate) {
        return {
          status: 429,
          body: { error: "You already submitted a request a moment ago. We'll be in touch shortly." },
        };
      }
    } catch (error) {
      console.warn("[quote] rate-limit check failed:", error instanceof Error ? error.message : error);
    }
  }

  let insertedId: number | null = null;
  let workingRepository = repository;
  if (workingRepository) {
    try {
      insertedId = await workingRepository.insert(payload);
    } catch (error) {
      console.error("[quote] insert failed:", error instanceof Error ? error.message : error);
      workingRepository = null; // fall through to the email-only path below
    }
  }

  const emailResult = await sendEmail(payload);

  if (insertedId !== null && workingRepository) {
    try {
      await workingRepository.markStatus(insertedId, emailResult.sent ? "emailed" : "email_failed");
    } catch {
      // Non-fatal: the quote is already safely stored.
    }
    return { status: 201, body: { success: true, id: insertedId } };
  }

  // No durable D1 record — the only remaining path is the email. Only claim
  // success if it actually sent, so a request is never silently discarded.
  if (emailResult.sent) {
    return { status: 201, body: { success: true, id: null } };
  }

  console.error("[quote] no delivery path succeeded:", emailResult.reason ?? "unknown");
  return {
    status: 500,
    body: { error: "We couldn't process your request right now. Please try again, or reach us directly at ajd.david.upholstery@gmail.com." },
  };
}
