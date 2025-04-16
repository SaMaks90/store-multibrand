"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  ProfileData,
  ChangePassword,
  BillingAddress,
} from "@/components/Profile";

const Page = () => {
  const params = useSearchParams();

  if (params.get("billing-address")) {
    return (
      <Suspense>
        <BillingAddress />
      </Suspense>
    );
  }

  if (params.get("change-password")) {
    return (
      <Suspense>
        <ChangePassword />
      </Suspense>
    );
  }

  return (
    <Suspense>
      <ProfileData />
    </Suspense>
  );
};

export default Page;
