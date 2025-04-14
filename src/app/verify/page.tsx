import { Metadata } from "next";
import { Suspense } from "react";
import VerifyEmail from "@/components/VerifyEmail";

export const metadata: Metadata = {
  title: "Verify Email",
};

const Page = () => {
  return (
    <Suspense>
      <VerifyEmail />
    </Suspense>
  );
};

export default Page;
