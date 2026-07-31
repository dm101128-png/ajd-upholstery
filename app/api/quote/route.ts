import { handleQuoteSubmission, type EmailResult } from "./handler";
import type { QuotePayload } from "../../lib/quote-validation";
import type { QuoteRepository } from "../../lib/quote-repository";

/**
 * The D1 repository and `cloudflare:workers`'s `env` are only resolvable
 * inside the real Workers runtime (Miniflare in dev, workerd in
 * production) — importing them at module top-level would make this whole
 * server bundle fail to load under a plain Node process (e.g. `vinext
 * start`'s local preview), breaking every other route along with it. A
 * dynamic import keeps that failure isolated to this one endpoint, which
 * gracefully falls back to email-only (see handler.ts) exactly like it
 * already does when D1 itself isn't provisioned yet.
 */
async function loadCloudflareDeps() {
  const [{ env }, { createD1QuoteRepository }, { sendQuoteEmail }] = await Promise.all([
    import("cloudflare:workers"),
    import("../../lib/quote-repository-d1"),
    import("../../lib/send-quote-email"),
  ]);
  return { env, createD1QuoteRepository, sendQuoteEmail };
}

export async function POST(request: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  let repository: QuoteRepository | null = null;
  let sendEmail: (payload: QuotePayload) => Promise<EmailResult> = async () => ({
    sent: false,
    reason: "Cloudflare Workers runtime unavailable",
  });

  try {
    const deps = await loadCloudflareDeps();
    sendEmail = (payload) => deps.sendQuoteEmail(deps.env, payload);
    try {
      repository = deps.createD1QuoteRepository();
    } catch (error) {
      console.warn("[quote] D1 unavailable, falling back to email-only:", error instanceof Error ? error.message : error);
    }
  } catch (error) {
    console.warn("[quote] Cloudflare Workers runtime unavailable:", error instanceof Error ? error.message : error);
  }

  const result = await handleQuoteSubmission(body, { repository, sendEmail });
  return Response.json(result.body, { status: result.status });
}
