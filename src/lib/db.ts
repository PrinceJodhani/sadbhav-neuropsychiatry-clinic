import { Pool } from "pg"

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Fail fast instead of hanging a build or page render if the DB is unreachable.
  connectionTimeoutMillis: 10000,
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
