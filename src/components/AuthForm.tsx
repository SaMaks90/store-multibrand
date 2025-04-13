"use client";

import { Suspense, useState, useActionState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FaRegEye } from "react-icons/fa";
import SocialAuthForm from "@/components/SocialAuthForm";
import { PrimaryButton } from "@/components/Button";
import { login, signup } from "@/src/app/lib/actions/auth";

interface ILoginFormProps {
  isForgotPassword: boolean;
  setIsForgotPassword: () => void;
}

interface IForgotPasswordProps {
  setIsForgotPassword: () => void;
}

const LoginForm = ({
  isForgotPassword,
  setIsForgotPassword,
}: ILoginFormProps) => {
  const [type, setType] = useState<"password" | "text">("password");
  const [formState, formAction, isPending] = useActionState(login, undefined);

  const changeType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  if (isForgotPassword) {
    return <ForgotPassword setIsForgotPassword={setIsForgotPassword} />;
  }

  return (
    <>
      <form action={formAction} className={"w-532 flex flex-col gap-32"}>
        <section className={"flex flex-col gap-20"}>
          <label className={"w-full flex flex-col gap-10"}>
            <span className={"text-xl font-(--font-weight-bold) text-(--dark)"}>
              Email
            </span>
            <input
              className={
                "border-1 border-(--dark) rounded-[10] py-14 px-20 outline-none"
              }
              type={"email"}
              id={"email"}
              name={"email"}
              placeholder={"example@example.com"}
            />
            {formState?.errors?.email && (
              <p className={"text-red-500 text-sm"}>{formState.errors.email}</p>
            )}
          </label>
          <label className={"w-full flex flex-col gap-10 relative"}>
            <span
              className={
                "text-xl font-(--font-weight-bold) text-(--dark) w-full"
              }
            >
              Password
            </span>
            <input
              className={
                "border-1 border-(--dark) rounded-[10] py-14 px-20 outline-none  w-full"
              }
              type={type}
              id={"password"}
              name={"password"}
              placeholder={"Your Password"}
            />
            <button
              className={"absolute top-52 right-20 cursor-pointer"}
              type={"button"}
              onClick={changeType}
            >
              <FaRegEye className={"w-25 h-24 text-[#5E5E5E]"} />
            </button>
            <section className={"flex justify-end"}>
              <button
                className={"cursor-pointer text-xl text-(--dark) flex"}
                onClick={setIsForgotPassword}
              >
                Forgot Password
              </button>
            </section>
            {formState?.errors?.password && (
              <section className={"text-sm text-red-500"}>
                <p>Password must:</p>
                <ul>
                  {formState.errors.password.map((error) => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
              </section>
            )}
          </label>
        </section>
        <PrimaryButton
          label={"Log In"}
          type={"submit"}
          className={"w-full"}
          ariaDisabled={isPending}
        />
        {formState?.message && (
          <>
            <p className={"text-sm text-red-500"}>{formState.message}</p>
          </>
        )}
      </form>
      <p className={"text-xl text-[#78788c]"}>
        Didn’t Have Account?{" "}
        <Link
          href={"/registration"}
          className={"font-(--font-weight-bold) text-(--dark)"}
        >
          Register
        </Link>
      </p>
    </>
  );
};

const ForgotPassword = ({ setIsForgotPassword }: IForgotPasswordProps) => {
  return (
    <>
      <form className={"w-532 flex flex-col gap-32"}>
        <section className={"flex flex-col gap-20"}>
          <label className={"w-full flex flex-col gap-10"}>
            <span className={"text-xl font-(--font-weight-bold) text-(--dark)"}>
              Email
            </span>
            <input
              className={
                "border-1 border-(--dark) rounded-[10] py-14 px-20 outline-none"
              }
              type={"email"}
              placeholder={"example@example.com"}
            />
          </label>
        </section>
        <PrimaryButton
          label={"Request New Password"}
          type={"button"}
          className={"w-full"}
        />
      </form>
      <p className={"text-xl text-[#78788c]"}>
        Back to{" "}
        <button
          className={"font-(--font-weight-bold) text-(--dark) cursor-pointer"}
          onClick={setIsForgotPassword}
        >
          Log In?
        </button>
      </p>
    </>
  );
};

const RegistrationForm = () => {
  const [type, setType] = useState<"password" | "text">("password");
  const [formState, formAction, isPending] = useActionState(signup, {
    data: { name: "", password: "", email: "" },
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const changeType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <>
      <form action={formAction} className={"w-532 flex flex-col gap-32"}>
        <section className={"flex flex-col gap-20"}>
          <label className={"w-full flex flex-col gap-10"}>
            <span className={"text-xl font-(--font-weight-bold) text-(--dark)"}>
              Name
            </span>
            <input
              className={
                "border-1 border-(--dark) rounded-[10] py-14 px-20 outline-none"
              }
              type={"text"}
              id={"name"}
              name={"name"}
              placeholder={"Your Name"}
              defaultValue={formState?.data?.name}
            />
            {formState?.errors?.name && (
              <p className={"text-red-500 text-sm"}>{formState.errors.name}</p>
            )}
          </label>
          <label className={"w-full flex flex-col gap-10"}>
            <span className={"text-xl font-(--font-weight-bold) text-(--dark)"}>
              Email
            </span>
            <input
              className={
                "border-1 border-(--dark) rounded-[10] py-14 px-20 outline-none"
              }
              id={"email"}
              name={"email"}
              type={"email"}
              defaultValue={formState?.data.email}
              placeholder={"example@example.com"}
            />
            {formState?.errors?.email && (
              <p className={"text-red-500 text-sm"}>{formState.errors.email}</p>
            )}
          </label>
          <label className={"w-full flex flex-col gap-10 relative"}>
            <span className={"text-xl font-(--font-weight-bold) text-(--dark)"}>
              Password
            </span>
            <input
              className={
                "border-1 border-(--dark) rounded-[10] py-14 px-20 outline-none"
              }
              type={type}
              id={"password"}
              name={"password"}
              defaultValue={formState?.data.password}
              placeholder={"Your Password"}
            />
            <button
              className={"absolute top-52 right-20 cursor-pointer"}
              type={"button"}
              onClick={changeType}
            >
              <FaRegEye className={"w-25 h-24 text-[#5E5E5E]"} />
            </button>
            {formState?.errors?.password && (
              <section className={"text-sm text-red-500"}>
                <p>Password must:</p>
                <ul>
                  {formState.errors.password.map((error) => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
              </section>
            )}
          </label>
        </section>
        <input type={"hidden"} name={"redirectTo"} value={callbackUrl} />
        <PrimaryButton
          label={"Register"}
          type={"submit"}
          className={"w-full"}
          ariaDisabled={isPending}
        />
        {formState?.message && (
          <p className={"text-sm text-red-500"}>{formState.message}</p>
        )}
      </form>
      <p className={"text-xl text-[#78788c]"}>
        Have Account?{" "}
        <Link
          href={"/login"}
          className={"font-(--font-weight-bold) text-(--dark)"}
        >
          Log In
        </Link>
      </p>
    </>
  );
};

const AuthForm = () => {
  const pathname = usePathname();
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);

  const changeFormForgotPassword = () =>
    setIsForgotPassword((prevState) => !prevState);

  return (
    <section
      className={"flex flex-col gap-32 p-42 bg-(--base-color-background)"}
    >
      <h2 className={"text-4xl font-(--font-weight-bold) text-(--dark)"}>
        {pathname === "/registration" && "Register"}
        {pathname === "/login" && !isForgotPassword && "Sign In"}
        {pathname === "/login" && isForgotPassword && "Forgot Password"}
      </h2>
      <SocialAuthForm />
      <section
        className={"flex flex-row gap-11 items-center text-[#cacaca] w-full"}
      >
        <span className={"flex border-t-1  w-full"}></span>
        <span className={"text-2xl text-[#78788c]"}>OR</span>
        <span className={"flex border-t-1 text-[#cacaca] w-full"}></span>
      </section>
      <Suspense>
        {pathname === "/registration" && <RegistrationForm />}
        {pathname === "/login" && !isForgotPassword && (
          <LoginForm
            isForgotPassword={isForgotPassword}
            setIsForgotPassword={changeFormForgotPassword}
          />
        )}
        {pathname === "/login" && isForgotPassword && (
          <ForgotPassword setIsForgotPassword={changeFormForgotPassword} />
        )}
      </Suspense>
    </section>
  );
};

export default AuthForm;
