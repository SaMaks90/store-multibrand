"use server";

import { cache } from "react";
import { redirect } from "next/navigation";
import postgres from "postgres";
import { getCurrentSession } from "@/src/app/lib/session";
import { IUser } from "@/src/app/lib/definitions";

const sql = postgres(`${process.env.DATABASE_URL}`);

export const verifySession = cache(async () => {
  const { payload } = await getCurrentSession();
  if (!payload?.userId) {
    redirect("/login");
  }

  return { isAuth: true, userId: payload.userId };
});

export const getUser = cache(async () => {
  const session = await verifySession();

  if (!session) return null;

  try {
    const data =
      (await sql`SELECT * FROM users WHERE userId = ${session.userId}`) as IUser[];

    return data[0];
  } catch (e) {
    console.log("Failed to fetch user: ", e);
    return null;
  }
});
