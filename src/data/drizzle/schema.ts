import { text, sqliteTable } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  last_name: text('last_name').notNull(),
  password: text('password').notNull(),
  email: text('email').notNull(),
});
