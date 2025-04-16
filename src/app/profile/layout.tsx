"use client";

import { ReactNode, Suspense } from "react";
import { NavigationProfile } from "@/components/Profile";

interface ILayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: ILayoutProps) => {
  return (
    <section className={"w-7xl flex flex-col gap-20"}>
      <h2 className={"text-4xl text-(--dark) font-(--font-weight-extrabold)"}>
        My Account
      </h2>
      <section className={"flex flex-row gap-20"}>
        <Suspense fallback={<div>Loading page...</div>}>
          <NavigationProfile />
        </Suspense>
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
