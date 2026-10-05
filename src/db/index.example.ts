// Rename to src/db/index.ts ONLY if you don't already have a db client file.
// If you do, make sure it reads process.env.DATABASE_URL like below.
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const globalForDb = globalThis as unknown as { pool?: Pool };

const pool =
  globalForDb.pool ??
  new Pool({
    connectionString,
    // Hosted databases (Neon, Supabase) require SSL
    ssl: connectionString.includes("127.0.0.1") || connectionString.includes("localhost")
      ? false
      : { rejectUnauthorized: false },
    max: 5,
  });

if (process.env.NODE_ENV !== "production") globalForDb.pool = pool;

export const db = drizzle(pool);
