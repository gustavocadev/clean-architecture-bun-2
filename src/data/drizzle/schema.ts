import { text, pgTable, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  last_name: text('last_name').notNull(),
  password: text('password').notNull(),
  email: text('email').notNull(),
});
