import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const downloadsTable = pgTable("downloads", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  title: text("title").notNull(),
  thumbnail: text("thumbnail"),
  platform: text("platform").notNull(),
  quality: text("quality").notNull(),
  ext: text("ext").notNull(),
  format_id: text("format_id").notNull(),
  downloaded_at: timestamp("downloaded_at").defaultNow().notNull(),
});

export const insertDownloadSchema = createInsertSchema(downloadsTable).omit({ id: true, downloaded_at: true });
export type InsertDownload = z.infer<typeof insertDownloadSchema>;
export type Download = typeof downloadsTable.$inferSelect;
