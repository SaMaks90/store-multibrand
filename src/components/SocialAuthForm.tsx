import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const SocialAuthForm = () => {
  return (
    <section className={"w-full flex flex-row gap-20"}>
      <button
        className={
          "flex flex-row gap-15 text-(--white) bg-[#ce3100] items-center justify-center text-2xl w-full rounded-[10] h-50 cursor-pointer"
        }
      >
        <FaGoogle />
        <span>Google</span>
      </button>
      <button
        className={
          "flex flex-row gap-15 text-(--white) bg-[#395185] items-center justify-center text-2xl w-full rounded-[10] h-50 cursor-pointer"
        }
      >
        <FaFacebookF />
        <span>Facebook</span>
      </button>
    </section>
  );
};

export default SocialAuthForm;
