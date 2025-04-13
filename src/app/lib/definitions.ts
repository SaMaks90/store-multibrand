import { z } from "zod";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  is_verified: boolean;
}

export const SignupSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter valid email." }).trim(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    })
    .trim(),
});

export const SigninSchema = SignupSchema.omit({ name: true });

export type FormStateSignup =
  | {
      errors?: { name?: string[]; email?: string[]; password?: string[] };
      message?: string;
      data: { name: string; email: string; password: string };
    }
  | undefined;

export type FormStateSignin =
  | {
      errors?: { name?: string[]; email?: string[]; password?: string[] };
      message?: string;
      data: { email: string; password: string };
    }
  | undefined;

export interface ISessionPayload {
  sessionId: string;
  expiresAt: Date;
  userId: string;
}

export interface ISession {
  id: string;
  user_id: string;
  expires: Date;
}
