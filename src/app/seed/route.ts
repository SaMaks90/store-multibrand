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

const seedSessions = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS sessions (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      expires TIMESTAMPTZ NOT NULL
    );
  `;
};

const seedVerificationTokens = async () => {
  await sql`CREATE TABLE IF NOT EXISTS email_verification_tokens (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL,
    token TEXT NOT NULL,
    expires TIMESTAMP NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  )`;
};

const GET = async () => {
  try {
    await sql.begin(() => [
      seedUsers(),
      seedSessions(),
      seedVerificationTokens(),
    ]);

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};

export { GET };
