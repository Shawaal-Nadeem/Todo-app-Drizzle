import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
  
  export const todoTable = pgTable("todo", {
    id: serial("id").primaryKey(),
    title: text("title"),
    description: varchar("description"),
    status: boolean("status").default(true).notNull(),
  });
  
  export const db = drizzle(sql);