interface IButtonProps {
  label: string;
}

const PrimaryButton = ({ label }: IButtonProps) => {
  return (
    <button
      className={
        "bg-(--dark) text-(--white) py-12 px-20 rounded-[8px] font-semibold text-2xl cursor-pointer"
      }
    >
      {label}
    </button>
  );
};

const SecondaryButton = ({ label }: IButtonProps) => {
  return (
    <button
      className={
        "text-(--dark) py-12 px-20 rounded-[8px] font-semibold text-2xl cursor-pointer border-1 border-(--dark)"
      }
    >
      {label}
    </button>
  );
};

const SecondaryButtonWithoutBorder = ({ label }: IButtonProps) => {
  return (
    <button
      className={
        "text-(--dark) py-12 px-20 rounded-[8px] font-semibold text-2xl cursor-pointer"
      }
    >
      {label}
    </button>
  );
};

export { PrimaryButton, SecondaryButton, SecondaryButtonWithoutBorder };
