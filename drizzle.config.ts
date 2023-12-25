import type { Config } from 'drizzle-kit';
import process from 'node:process';

// We need to make sure the in the tsconfig.json file, we need to change the target at least to 'ES6'
export default {
  schema: './src/data/drizzle/schema.ts',
  out: './drizzle',
  driver: 'better-sqlite',
  dbCredentials: {
    url: process.env.DB_URL!,
  },
} satisfies Config;
