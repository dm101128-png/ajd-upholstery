import { and, eq, gt, or } from "drizzle-orm";
import { getDb } from "../../db/index.ts";
import { quoteRequests } from "../../db/schema.ts";
import type { QuoteRepository } from "./quote-repository.ts";

/**
 * Real D1-backed repository, used in production. Resolves the D1 binding
 * eagerly so callers can fail fast (and fall back to email-only) if it
 * isn't configured yet, instead of failing on the first query. Kept in its
 * own file (separate from quote-repository.ts) because it transitively
 * imports "cloudflare:workers", which only resolves inside the Workers
 * runtime — importing it from a plain Node test process throws immediately.
 */
export function createD1QuoteRepository(): QuoteRepository {
  const db = getDb();
  return {
    async hasRecentSubmission(payload, windowSeconds) {
      const conditions = [
        payload.email ? eq(quoteRequests.email, payload.email) : null,
        payload.phone ? eq(quoteRequests.phone, payload.phone) : null,
      ].filter((c): c is NonNullable<typeof c> => c !== null);
      if (conditions.length === 0) return false;

      const cutoff = new Date(Date.now() - windowSeconds * 1000).toISOString().slice(0, 19).replace("T", " ");
      const rows = await db
        .select({ id: quoteRequests.id })
        .from(quoteRequests)
        .where(and(or(...conditions), gt(quoteRequests.createdAt, cutoff)))
        .limit(1);
      return rows.length > 0;
    },
    async insert(payload) {
      const [row] = await db
        .insert(quoteRequests)
        .values({
          customerName: payload.name,
          phone: payload.phone || null,
          email: payload.email || null,
          vehicleYear: payload.vehicleYear,
          vehicleMake: payload.vehicleMake,
          vehicleModel: payload.vehicleModel,
          workType: payload.workType,
          description: payload.description,
          preferredContactMethod: payload.contactMethod,
          status: "new",
        })
        .returning({ id: quoteRequests.id });
      if (!row) throw new Error("D1 insert returned no row");
      return row.id;
    },
    async markStatus(id, status) {
      await db.update(quoteRequests).set({ status }).where(eq(quoteRequests.id, id));
    },
  };
}
