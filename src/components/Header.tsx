import { BiSolidCategory } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaBagShopping, FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";
import { LogoWhite } from "@/components/Logo";
import { PrimaryButton } from "@/components/Button";

const Category = () => {
  return (
    <section className={"text-(--white) flex flex-row gap-8 cursor-pointer"}>
      <BiSolidCategory className={"w-24 h-24"} />
      <span className={"flex flex-row items-center gap-8"}>
        Category
        <MdArrowForwardIos className={"rotate-90"} />
      </span>
    </section>
  );
};

const Searching = () => {
  return (
    <section className={"flex w-665 relative"}>
      <input
        type={"text"}
        className={
          "w-full bg-(--white) rounded-[8px] text-sm text-(--dark) p-15 outline-none focus:outline-none"
        }
        placeholder={"Searching..."}
      />
      <button
        className={
          "absolute bg-(--light) w-70 h-42 top-4 right-4 rounded-[4px] flex items-center justify-center cursor-pointer"
        }
      >
        <CiSearch className={"w-24 h-24"} />
      </button>
    </section>
  );
};

const HistorySearching = () => {
  return (
    <ul className={"absolute top-55"}>
      <li className={"flex flex-row gap-10"}>
        <Link href="/" className={"text-(--white) text-xs"}>
          Card Holder
        </Link>
        <Link href="/" className={"text-(--white) text-xs"}>
          Bucket hat
        </Link>
        <Link href="/" className={"text-(--white) text-xs"}>
          Hoodie
        </Link>
        <Link href="/" className={"text-(--white) text-xs"}>
          Jumpsuit
        </Link>
      </li>
    </ul>
  );
};

const Header = () => {
  const isLogged = false;

  return (
    <header
      className={
        "w-full flex bg-gradient-to-r from-[#8f641a] to-[#dfc150] justify-center"
      }
    >
      <section
        className={"w-7xl flex flex-row py-24 items-center justify-between"}
      >
        <LogoWhite width={"84"} height={"84"} />
        <Category />
        <section className={"relative"}>
          <Searching />
          <HistorySearching />
        </section>
        <FaHeart className={"w-32 h-32 text-(--white)"} />
        <section className={"relative"}>
          <FaBagShopping className={"w-32 h-32 text-(--white)"} />
          <span
            className={
              "absolute w-24 h-24 bg-(--status-error) rounded-[50%] flex items-center justify-center left-16 bottom-16 border-2 border-(--white)"
            }
          >
            2
          </span>
        </section>
        {!isLogged && <PrimaryButton label={"Log In"} />}
        {isLogged && (
          <section className={"flex flex-row gap-6 items-center"}>
            <FaRegCircleUser className={"w-32 h-32 text-(--white)"} />
            <span className={"text-(--white) text-lg"}>User Testing</span>
            <MdArrowForwardIos className={"rotate-90 text-(--white)"} />
          </section>
        )}
      </section>
    </header>
  );
};

export default Header;
