import postgres from "postgres";
import * as process from "node:process";
import bcrypt from "bcryptjs";
import { users } from "@/src/app/lib/placeholder-data";

const sql = postgres(`${process.env.DATABASE_URL}`);

const seedUsers = async () => {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      is_verified BOOLEAN NOT NULL DEFAULT false,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await sql`INSERT INTO users (id, name, email, password) 
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;`;
    }),
  );

  return insertedUsers;
};

const seedVerificationToken = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS verification_token (
      identifier TEXT NOT NULL,
      expires TIMESTAMPTZ NOT NULL,
      token TEXT NOT NULL,
      PRIMARY KEY (identifier, token)
    );
  `;
};

const seedAccounts = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS accounts (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      type VARCHAR(255) NOT NULL,
      provider VARCHAR(255) NOT NULL,
      provider_account_id VARCHAR(255) NOT NULL,
      refresh_token TEXT,
      access_token TEXT,
      expires_at BIGINT,
      id_token TEXT,
      scope TEXT,
      session_state TEXT,
      token_type TEXT
    );
  `;
};

const seedSessions = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS sessions (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      expires TIMESTAMPTZ NOT NULL
    );
  `;
};

const GET = async () => {
  try {
    await sql.begin(() => [
      seedUsers(),
      // seedVerificationToken(),
      // seedAccounts(),
      seedSessions(),
    ]);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};

export { GET };
