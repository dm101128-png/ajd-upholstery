import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const quoteRequests = sqliteTable("quote_requests", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  customerName: text("customer_name").notNull(),
  phone: text("phone"),
  email: text("email"),
  vehicleYear: text("vehicle_year").notNull(),
  vehicleMake: text("vehicle_make").notNull(),
  vehicleModel: text("vehicle_model").notNull(),
  workType: text("work_type").notNull(),
  description: text("description").notNull(),
  preferredContactMethod: text("preferred_contact_method").notNull(),
  // JSON-encoded array of attachment URLs/metadata. Not populated yet — no
  // file storage (R2) is wired up. Reserved for when that's added.
  attachments: text("attachments"),
  // "new" | "emailed" | "email_failed"
  status: text("status").notNull().default("new"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
