import type { QuotePayload } from "./quote-validation.ts";

export type QuoteStatus = "new" | "emailed" | "email_failed";

/**
 * The narrow slice of persistence behavior the quote endpoint needs.
 * Deliberately framework-agnostic — no Cloudflare/D1 imports in this file —
 * so it (and the in-memory implementation below) can be imported from plain
 * Node tests. The real D1-backed implementation lives in
 * quote-repository-d1.ts, which route.ts imports directly.
 */
export interface QuoteRepository {
  /** True if the same email or phone submitted within the last `windowSeconds`. */
  hasRecentSubmission(payload: QuotePayload, windowSeconds: number): Promise<boolean>;
  /** Inserts the quote, returning its new id. */
  insert(payload: QuotePayload): Promise<number>;
  /** Best-effort status update after attempting the notification email. */
  markStatus(id: number, status: QuoteStatus): Promise<void>;
}

/** In-memory repository for tests — no Cloudflare/D1 involved. */
export function createInMemoryQuoteRepository(): QuoteRepository & { rows: Array<QuotePayload & { id: number; status: QuoteStatus; createdAt: number }> } {
  const rows: Array<QuotePayload & { id: number; status: QuoteStatus; createdAt: number }> = [];
  let nextId = 1;
  return {
    rows,
    async hasRecentSubmission(payload, windowSeconds) {
      const cutoff = Date.now() - windowSeconds * 1000;
      return rows.some(
        (r) =>
          r.createdAt >= cutoff &&
          ((payload.email && r.email === payload.email) || (payload.phone && r.phone === payload.phone)),
      );
    },
    async insert(payload) {
      const id = nextId++;
      rows.push({ ...payload, id, status: "new", createdAt: Date.now() });
      return id;
    },
    async markStatus(id, status) {
      const row = rows.find((r) => r.id === id);
      if (row) row.status = status;
    },
  };
}
