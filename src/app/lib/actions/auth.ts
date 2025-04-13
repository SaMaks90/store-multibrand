"use server";

import postgres from "postgres";
import * as process from "node:process";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import {
  type IUser,
  type FormStateSignup,
  type FormStateSignin,
  SignupSchema,
  SigninSchema,
} from "@/src/app/lib/definitions";
import {
  createSession,
  updateSession,
  deleteSession,
} from "@/src/app/lib/session";

const sql = postgres(`${process.env.DATABASE_URL}`);

export const signup = async (
  prevState: FormStateSignup,
  formData: FormData,
): Promise<FormStateSignup> => {
  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const password = (formData.get("password") as string) || "";

  const validatedFields = SignupSchema.safeParse({
    name,
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      data: { name, email, password },
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const data = (await sql`
    INSERT INTO users (name, email, password)
    VALUES (${name}, ${email}, ${hashedPassword})
    RETURNING *
  `) as IUser[];

  const user = data[0];

  if (!user) {
    return {
      data: { name, email, password },
      message: "An error occurred while creating your account.",
    };
  }

  await createSession(user.id);
  redirect("/profile");
};

export const login = async (prevState: FormStateSignin, formData: FormData) => {
  const email = (formData.get("email") as string) || "";
  const password = (formData.get("password") as string) || "";

  const validatedFields = SigninSchema.safeParse({
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      data: { email, password },
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = (await sql`
    SELECT * FROM users WHERE email = ${email}
  `) as IUser[];

  const user = data[0];

  if (!user) {
    return {
      data: { email, password },
      message:
        "We couldn't find a user with that email address. Please check for typos or try a different one.",
    };
  }

  const pwMatched = await bcrypt.compare(password, user.password);

  if (!pwMatched) {
    return { data: { email, password }, message: "Invalid password." };
  }

  await createSession(user.id);
  redirect("/profile");
};

export const logout = async () => {
  await deleteSession();
  redirect(`/login`);
};

export const refresh = async () => {
  await updateSession();
};
