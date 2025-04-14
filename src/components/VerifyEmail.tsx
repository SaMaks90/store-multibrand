"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { verifyEmail } from "@/src/app/lib/verification";
import { BuyNow } from "@/components/AssetsSvg";

const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handlerToken = async () => {
    if (token) {
      const result = await verifyEmail(token);
      setMessage(result.message);
      setError(result.error);
    } else {
      redirect("/");
    }
  };

  useEffect(() => {
    handlerToken().then((r) => console.log(r));
  }, [token]);

  return (
    <section className={"flex-grow flex justify-center items-center"}>
      <section className={"w-7xl flex flex-col items-center gap-30"}>
        <BuyNow width={"386"} height={"263"} />
        <h3
          className={clsx(
            "text-(--dark) text-xl",
            error && "text-(--status-error)",
          )}
        >
          {message}
        </h3>
      </section>
    </section>
  );
};

export default VerifyEmail;
