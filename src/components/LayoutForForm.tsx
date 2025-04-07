import { ReactNode } from "react";
import { LogoWhite } from "@/components/Logo";

interface ILayoutFroFromProps {
  children: ReactNode;
}

const LayoutForForm = ({ children }: ILayoutFroFromProps) => {
  return (
    <section
      className={
        "bg-linear-(--gradient-gold) flex-grow flex justify-center w-full items-center"
      }
    >
      <section className={"w-7xl flex flex-row justify-between h-full"}>
        <section className={"flex flex-col gap-4 justify-center"}>
          <LogoWhite width="400" height="400" />
          <p className={"text-2xl text-(--white)"}>
            The top online store for branded goods in Qatar
          </p>
        </section>
        {children}
      </section>
    </section>
  );
};

export default LayoutForForm;
