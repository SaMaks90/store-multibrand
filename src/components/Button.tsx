import { SyncLoader } from "react-spinners";
import clsx from "clsx";

interface IButtonProps {
  label: string;
  type: "button" | "submit";
  actionForButton?: () => void;
  className?: string;
  ariaDisabled?: boolean;
}

const PrimaryButton = ({
  label,
  type,
  actionForButton,
  className,
  ariaDisabled,
}: IButtonProps) => {
  return (
    <button
      aria-disabled={ariaDisabled}
      className={clsx(
        "bg-(--dark) text-(--white) py-12 px-20 rounded-[8px] font-semibold text-2xl cursor-pointer h-50",
        className && className,
        ariaDisabled && "bg-(--grey) items-center flex justify-center",
      )}
      type={type}
      onClick={actionForButton}
      disabled={ariaDisabled}
    >
      {ariaDisabled && <SyncLoader />}
      {!ariaDisabled && <>{label}</>}
    </button>
  );
};

const SecondaryButton = ({ label, type, actionForButton }: IButtonProps) => {
  return (
    <button
      className={
        "text-(--dark) py-12 px-20 rounded-[8px] font-semibold text-2xl cursor-pointer border-1 border-(--dark)"
      }
      type={type}
      onClick={actionForButton}
    >
      {label}
    </button>
  );
};

const SecondaryButtonWithoutBorder = ({
  label,
  type,
  actionForButton,
}: IButtonProps) => {
  return (
    <button
      className={
        "text-(--dark) py-12 px-20 rounded-[8px] font-semibold text-2xl cursor-pointer"
      }
      type={type}
      onClick={actionForButton}
    >
      {label}
    </button>
  );
};

export { PrimaryButton, SecondaryButton, SecondaryButtonWithoutBorder };
