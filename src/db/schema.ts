import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

// Optional: for future use (orders). The store works without a database.
export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  total: integer("total").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
