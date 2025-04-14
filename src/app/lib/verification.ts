"use server";

import { randomBytes } from "crypto";
import * as process from "node:process";
import nodemailer from "nodemailer";
import postgres from "postgres";
import { IUser } from "@/src/app/lib/definitions";

const sql = postgres(`${process.env.DATABASE_URL}`);

const getEmailTemplate = (name: string, verifyLink: string) => `
<section>
    <h2>Activate your account</h2>
    <p>Hi ${name},</p>
    <p>You're almost done! Simply click below to activate your account:</p>
    <a href="${verifyLink}">Activate</a>
</section>
`;

const generateToken = () => {
  return randomBytes(32).toString("hex");
};

export const sendVerificationEmail = async (user: IUser) => {
  const token = getToken(user.id);
  const verifyLink = `${process.env.DOMAIN}verify?token=${token}`;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: "Store-Multibrand",
    to: user.email,
    subject: "Verify your email",
    html: getEmailTemplate(user.name, verifyLink),
  });
};

const getToken = async (userId: string) => {
  const token = generateToken();
  const expires = new Date(Date.now() + 60 * 60 * 1000);

  await sql`
    INSERT INTO email_verification_tokens (user_id, token, expires)
    VALUES (${userId}, ${token}, ${expires})
  `;

  return token;
};

export const verifyEmail = async (
  token: string,
): Promise<{ message: string; error: boolean }> => {
  const result = await sql`
    SELECT * FROM email_verification_tokens
    WHERE token = ${token} AND expires > NOW()`;

  const row = result[0];

  if (!row) {
    console.log("Token is invalid or expired");
    return { message: "Token is invalid or expired", error: true };
  }

  await sql`
    UPDATE users
    SET is_verified = true
    WHERE id = ${row.user_id}`;

  await sql`
    DELETE FROM email_verification_tokens 
    WHERE user_id = ${row.user_id}`;

  return {
    error: false,
    message: "Your account is now active, happy shopping!",
  };
};
