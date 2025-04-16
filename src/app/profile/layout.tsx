"use client";

import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { BsPerson } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { PiPasswordLight } from "react-icons/pi";

interface ILayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: ILayoutProps) => {
  const params = useSearchParams();
  const activeClassName = "bg-(--main-color) rounded-[8] text-(--white)";
  const baseClassName = "h-50 flex items-center px-15 gap-20";

  return (
    <section className={"w-7xl flex flex-col gap-20"}>
      <h2 className={"text-4xl text-(--dark) font-(--font-weight-extrabold)"}>
        My Account
      </h2>
      <section className={"flex flex-row gap-20"}>
        <aside className={"w-295 flex flex-col"}>
          <Link
            href={"/profile"}
            className={clsx(
              baseClassName,
              !params.get("change-password") &&
                !params.get("billing-address") &&
                activeClassName,
            )}
          >
            <BsPerson className={"w-24 h-24"} />
            Profile Data
          </Link>
          <Link
            href={"/profile?billing-address=true"}
            className={clsx(
              baseClassName,
              params.get("billing-address") && activeClassName,
            )}
          >
            <IoHomeOutline className={"w-24 h-24"} />
            Billing & Address
          </Link>
          <Link
            href={"/profile?change-password=true"}
            className={clsx(
              baseClassName,
              params.get("change-password") && activeClassName,
            )}
          >
            <PiPasswordLight className={"w-24 h-24"} />
            Change Password
          </Link>
        </aside>
        <section
          className={
            "w-full p-20 flex flex-col gap-40 bg-(--white) rounded-[8]"
          }
        >
          {children}
        </section>
      </section>
    </section>
  );
};

export default Layout;
