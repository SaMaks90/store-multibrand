import type { Metadata } from "next";
import { ReactNode } from "react";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <html lang="en" className={openSans.className}>
      <body className={"flex flex-col min-h-screen"}>
        <Header />
        <main className={"flex-grow"}>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
