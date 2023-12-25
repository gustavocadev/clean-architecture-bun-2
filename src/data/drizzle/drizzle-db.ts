import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import Database from 'better-sqlite3';
import process from 'node:process';
import * as schema from './schema.ts';

const betterSqlite = new Database(process.env.DB_URL!);

export const db = drizzle(betterSqlite, {
  schema,
});

// this is important to bring the schema into the database, otherwise the tables won't be created
migrate(db, { migrationsFolder: 'drizzle' });
betterSqlite.close();
