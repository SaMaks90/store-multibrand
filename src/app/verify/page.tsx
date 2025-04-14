import { Metadata } from "next";
import VerifyEmail from "@/components/VerifyEmail";

export const metadata: Metadata = {
  title: "Verify Email",
};

const Page = () => {
  return <VerifyEmail />;
};

export default Page;
