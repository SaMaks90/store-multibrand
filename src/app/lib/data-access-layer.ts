"use server";

import { cache } from "react";
import postgres from "postgres";
import { getCurrentSession } from "@/src/app/lib/session";
import { IUser } from "@/src/app/lib/definitions";

const sql = postgres(`${process.env.DATABASE_URL}`);

export const verifySession = cache(async () => {
  const { payload } = await getCurrentSession();
  return { isAuth: true, userId: payload?.userId };
});

export const getUser = cache(async () => {
  const session = await verifySession();

  try {
    if (session.userId) {
      const data =
        (await sql`SELECT * FROM users WHERE id = ${session.userId}`) as IUser[];

      return data[0];
    }
    return null;
  } catch (e) {
    console.log("Failed to fetch user: ", e);
    return null;
  }
});
