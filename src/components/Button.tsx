interface IButtonProps {
  label: string;
  type: "button" | "submit";
  actionForButton?: () => void;
  className?: string;
}

const PrimaryButton = ({
  label,
  type,
  actionForButton,
  className,
}: IButtonProps) => {
  return (
    <button
      className={
        "bg-(--dark) text-(--white) py-12 px-20 rounded-[8px] font-semibold text-2xl cursor-pointer " +
        className
      }
      type={type}
      onClick={actionForButton}
    >
      {label}
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
