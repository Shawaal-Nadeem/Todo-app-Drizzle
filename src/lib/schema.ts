import { pgTable,serial,text,varchar,boolean } from 'drizzle-orm/pg-core';
  
export const todosTable = pgTable("todos", {
    id: serial("id").primaryKey(),
    taskName: text("taskName"),
  });