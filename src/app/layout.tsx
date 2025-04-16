import type { Metadata } from "next";
import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import { refreshSession } from "@/src/app/lib/session";

interface IRootLayoutProps {
  readonly children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Store Multi brand",
    template: "%s | Store Multi brand",
  },
  description: "This is a store multi brand clothes",
};

const openSans = Open_Sans({ subsets: ["latin"] });

const RootLayout = async ({ children }: IRootLayoutProps) => {
  // await refreshSession();

  return (
    <html lang="en" className={openSans.className}>
      <body className={"flex flex-col min-h-screen"}>
        <Header />
        <main
          className={
            "flex-grow flex justify-center h-full py-40 bg-(--base-color-background)"
          }
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
