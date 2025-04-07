import Link from "next/link";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { SlPhone } from "react-icons/sl";
import { LuSend } from "react-icons/lu";
import Image from "next/image";
import { LogoGold } from "@/components/Logo";
import paymentMethod from "@/images/payment-method.png";

const PaymentMethod = () => {
  return (
    <section className={"flex flex-col gap-30"}>
      <h4 className={"text-(--white) text-xl font-extrabold"}>
        Payment method
      </h4>
      <ul className={"flex flex-col gap-35"}>
        <li className={"flex flex-col gap-15"}>
          <span
            className={
              "flex gap-8 text-(--white) text-lg font-normal leading-22"
            }
          >
            <FaRegCircleCheck className={"h-24 w-24 text-white"} />
            Payment Gateway
          </span>
          <Image
            src={paymentMethod}
            alt={"Payment method"}
            height={41}
            width={320}
          />
        </li>
        <li>
          <span
            className={
              "flex gap-8 text-(--white) text-lg font-normal leading-22"
            }
          >
            <FaRegCircleCheck className={"h-24 w-24 text-white"} />
            Cash on delivery
          </span>
        </li>
      </ul>
    </section>
  );
};

const ContactUs = () => {
  return (
    <section className={"flex flex-col gap-30"}>
      <h4 className={"text-(--white) text-xl font-extrabold"}>Contacts Us</h4>
      <ul className={"flex flex-col gap-15"}>
        <li
          className={
            "flex gap-10 items-center text-(--white) text-lg font-normal leading-22"
          }
        >
          <MdOutlineEmail className={"w-24 h-24"} />
          vipcommunity.team@gmail.com
        </li>
        <li
          className={
            "flex gap-10 items-center text-(--white) text-lg font-normal leading-22"
          }
        >
          <SlPhone className={"w-24 h-24"} />
          974 3337 8900
        </li>
      </ul>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className={"flex flex-col gap-30"}>
      <h4 className={"text-(--white) text-xl font-extrabold"}>Newsletter</h4>
      <section className={"flex flex-col gap-10"}>
        <p className={"text-(--white) text-lg font-normal leading-25"}>
          Simply subscribe for our newsletter to receive the most recent product
          information.
        </p>
        <div className={"relative"}>
          <input
            type={"email"}
            className={
              "w-full rounded-[8px] bg-(--white) text-(--dark) text-sm p-15 outline-none focus:outline-none"
            }
            placeholder={"Your email"}
          />
          <button
            className={
              "cursor-pointer w-70 h-42 bg-(--light) rounded-[8px] flex items-center justify-center absolute top-4 right-4"
            }
          >
            <LuSend className={"w-24 h-24"} />
          </button>
        </div>
      </section>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className={`bg-(--dark) flex justify-center`}>
      <section className={"w-7xl py-50 grid grid-cols-3 gap-x-30 gap-y-60"}>
        <section className={"flex flex-col w-full gap-20"}>
          <LogoGold width={"108"} height={"108"} />
          <p className={"text-(--white) text-lg font-normal leading-22"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eget orci eu erat rutrum dapibus. Vivamus porta at justo at egestas.
          </p>
          <section className={"flex flex-col gap-20"}>
            <h5 className={"text-(--white) text-xl font-normal leading-22"}>
              Follow Us
            </h5>
            <div className={"flex items-center gap-15 h-32"}>
              <ImFacebook2 className={"h-26 w-26 text-white"} />
              <FaTwitter className={"h-26 w-26 text-white"} />
              <FaInstagram className={"h-32 w-32 text-white"} />
            </div>
          </section>
        </section>
        <PaymentMethod />
        <section className={"flex flex-col gap-40"}>
          <ContactUs />
          <Newsletter />
        </section>
        <p className={"text-(--white) text-lg font-normal leading-22"}>
          2022 © VIP trading - All right reserved
        </p>
        <div className="col-span-1"></div>
        <section className={"col-span-1 flex justify-end gap-45"}>
          <Link
            href={"/terms-and-conditions"}
            className={"text-(--white) text-lg leading-22"}
          >
            Term Of Service
          </Link>
          <Link
            href={"/privacy-policy"}
            className={"text-(--white) text-lg leading-22"}
          >
            Privacy Policy
          </Link>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
