import { handleQuoteSubmission } from "./handler";
import type { QuoteRepository } from "../../lib/quote-repository";

export async function POST(request: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Keep the Workers-only database import isolated from plain Node previews.
  // Quote requests are saved in D1; no email account is connected.
  let repository: QuoteRepository | null = null;
  try {
    const { createD1QuoteRepository } = await import("../../lib/quote-repository-d1");
    repository = createD1QuoteRepository();
  } catch (error) {
    console.warn("[quote] D1 unavailable:", error instanceof Error ? error.message : error);
  }

  const result = await handleQuoteSubmission(body, { repository });
  return Response.json(result.body, { status: result.status });
}
