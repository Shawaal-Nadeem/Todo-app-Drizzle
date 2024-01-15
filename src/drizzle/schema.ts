import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  taskname: text('taskname').notNull(),
});