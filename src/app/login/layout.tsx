import { ReactNode } from "react";
import LayoutForForm from "@/components/LayoutForForm";
import { Metadata } from "next";

interface IRootProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Login",
};

const Layout = ({ children }: IRootProps) => {
  return <LayoutForForm>{children}</LayoutForForm>;
};

export default Layout;
