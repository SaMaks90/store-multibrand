import { Suspense } from "react";
import { ProfilePage } from "@/components/Profile";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading profile....</div>}>
      <ProfilePage />
    </Suspense>
  );
};

export default Page;
