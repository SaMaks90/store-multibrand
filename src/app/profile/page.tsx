"use client";

import { useSearchParams } from "next/navigation";
import {
  ProfileData,
  ChangePassword,
  BillingAddress,
} from "@/components/Profile";

const Page = () => {
  const params = useSearchParams();

  if (params.get("billing-address")) {
    return <BillingAddress />;
  }

  if (params.get("change-password")) {
    return <ChangePassword />;
  }

  return <ProfileData />;
};

export default Page;
