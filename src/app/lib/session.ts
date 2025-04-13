"use server";

import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import postgres from "postgres";
import { ISession, ISessionPayload } from "@/src/app/lib/definitions";

const sql = postgres(`${process.env.DATABASE_URL}`);
const authSecret = process.env.AUTH_SECRET || "";
const encodedKey = new TextEncoder().encode(authSecret);

const encrypt = async (payload: ISessionPayload): Promise<string> => {
  return new SignJWT({ payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30m")
    .sign(encodedKey);
};

const decrypt = async (
  session: string | undefined = "",
): Promise<ISessionPayload | null> => {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });

    const data = payload as {
      payload: ISessionPayload;
      iat: number;
      exp: number;
    };

    return data.payload;
  } catch (e) {
    console.log("Failed to verify session: ", e);
    return null;
  }
};

export const getCurrentSession = async () => {
  const session = (await cookies()).get("session")?.value;
  const payload = await decrypt(session);

  return { session, payload };
};

export const createSession = async (id: string) => {
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000);
  const data = (await sql`
      INSERT INTO sessions(user_id, expires) 
      VALUES (${id}, ${expiresAt})
      RETURNING *
    `) as ISession[];

  const sessionId = data[0].id;
  const session = await encrypt({ userId: id, sessionId, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
};

export const updateSession = async () => {
  const { payload, session } = await getCurrentSession();

  if (!session || !payload) {
    return null;
  }

  const expiresAt = new Date(Date.now() + 30 * 60 * 1000);

  await sql`
    UPDATE sessions
    SET expires = ${expiresAt}
    WHERE id=${payload.sessionId}
  `;

  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
};

export const deleteSession = async () => {
  const { payload } = await getCurrentSession();

  if (!payload) {
    return null;
  }

  await sql`
    DELETE FROM sessions
    WHERE id=${payload.sessionId}
  `;

  const cookieStore = await cookies();
  cookieStore.delete("session");
};
