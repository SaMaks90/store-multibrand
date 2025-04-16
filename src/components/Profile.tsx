import { FaRegCircleUser } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { RiAccountBoxLine } from "react-icons/ri";
import {
  MdArrowForwardIos,
  MdDeleteForever,
  MdOutlineEdit,
} from "react-icons/md";
import { PiSignOutLight } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { redirect } from "next/navigation";
import { IUser } from "@/src/app/lib/definitions";
import { logout } from "@/src/app/lib/actions/auth";
import { PrimaryButton } from "@/components/Button";

interface IProfileViewProps {
  user: IUser;
}

interface ITitleSubPageProps {
  title: string;
}

interface IInputFormProps {
  label: string;
  type: "text" | "password" | "email";
  placeholder: string;
}

const TitleSubPage = ({ title }: ITitleSubPageProps) => {
  return (
    <h3 className={"text-3xl font-(--font-weight-bold) text-(--dark)"}>
      {title}
    </h3>
  );
};

const AddressView = () => {
  return (
    <section
      className={
        "relative border-b-1 border-(--light) w-full flex flex-row gap-20 py-10"
      }
    >
      <button className={"absolute top-2 right-60 cursor-pointer"}>
        <MdOutlineEdit className={"w-30 h-30"} />
      </button>
      <button className={"absolute top-0 right-10 cursor-pointer"}>
        <MdDeleteForever className={"w-32 h-32 text-(--status-error)"} />
      </button>
      <RiAccountBoxLine className={"w-32 h-32"} />
      <section>
        <section className={"flex flex-row gap-20 pb-20 items-center"}>
          <h5 className={"text-(--dark) text-2xl"}>Jhon Doe</h5>
          <span
            className={
              "rounded-[8] p-10 bg-(--status-inprogress) opacity-60 text-sm font-(--font-weight-bold)"
            }
          >
            Default
          </span>
        </section>
        <p className={"text-lg text-(--grey) flex flex-row gap-6 items-center"}>
          <span>jhon@gmail.com</span>
          <span className={"w-4 h-4 bg-(--grey) rounded-[100%] flex"}></span>
          <span>+6281234567890</span>
        </p>
        <p className={"text-lg text-(--grey)"}>
          Jl. Mawar Mutih No. 34, Malang, East Java, Indonesia, 12012
        </p>
      </section>
    </section>
  );
};

const InputForm = ({ label, type, placeholder }: IInputFormProps) => {
  const labelClassName =
    "text-(--dark) font-(--font-weight-bold) text-xl flex flex-col gap-6 w-full";
  const inputClassName =
    "outline-none rounded-[8] border-1 border-(--dark) text-(--dark) text-lg font-(--font-weight-normal) h-50 px-12";

  return (
    <label className={labelClassName}>
      {label}
      <input type={type} className={inputClassName} placeholder={placeholder} />
    </label>
  );
};

export const ProfileView = ({ user }: IProfileViewProps) => {
  return (
    <section
      className={"flex flex-row gap-6 items-center cursor-pointer relative"}
    >
      <FaRegCircleUser className={"w-32 h-32 text-(--white)"} />
      <span className={"text-(--white) text-lg"}>
        {user.name.slice(0, 6)}...
      </span>
      <MdArrowForwardIos className={"rotate-90 text-(--white)"} />
      <section
        className={
          "absolute top-40 bg-(--white) flex flex-col gap-20 rounded-[8]"
        }
      >
        <button
          onClick={() => redirect("/")}
          className={
            "flex flex-row justify-center items-center gap-20 text-lg text-(--dark)"
          }
        >
          <BsBoxSeam className={"w-24 h-24"} />
          My Order
        </button>
        <button
          onClick={() => redirect("/")}
          className={
            "flex flex-row justify-center items-center gap-20 text-lg text-(--dark)"
          }
        >
          <BsPerson className={"w-24 h-24"} />
          Account
        </button>
        <button
          onClick={async () => await logout()}
          className={
            "flex flex-row justify-center items-center gap-20 text-lg text-(--dark)"
          }
        >
          <PiSignOutLight className={"w-24 h-24"} />
          Sign Out
        </button>
      </section>
    </section>
  );
};

export const ProfileData = () => {
  return (
    <>
      <TitleSubPage title={"Profile Data"} />
      <section className={"flex flex-col gap-10"}>
        <h4 className={"text-xl font-(--font-weight-bold) text-(--dark)"}>
          Avatar
        </h4>
        <section className={"flex flex-row items-end gap-16"}>
          <BsPerson className={"w-190 h-190"} />
          <label
            className={
              "cursor-pointer p-10 bg-none text-(--main-color) text-2xl"
            }
          >
            <input type={"file"} className={"hidden"} />
            Edit
          </label>
          <button
            className={
              "cursor-pointer p-10 bg-none text-(--status-error) text-2xl"
            }
          >
            Delete
          </button>
        </section>
      </section>
      <form className={"grid grid-cols-2 gap-20 w-full"}>
        <InputForm
          label={"First Name"}
          type={"text"}
          placeholder={"First Name"}
        />
        <InputForm
          label={"Last Name"}
          type={"text"}
          placeholder={"Last Name"}
        />
        <InputForm label={"Email"} type={"email"} placeholder={"Email"} />
        <InputForm
          label={"Phone number"}
          type={"text"}
          placeholder={"Phone number"}
        />
        <PrimaryButton
          label={"Save"}
          type={"submit"}
          className={"w-190 mt-40 h-60"}
        />
      </form>
    </>
  );
};

export const ChangePassword = () => {
  return (
    <>
      <TitleSubPage title={"Change Password"} />
      <form className={"flex flex-col gap-20 w-434"}>
        <InputForm
          type={"password"}
          label={"Current Password"}
          placeholder={"Current Password"}
        />
        <InputForm
          type={"password"}
          label={"New Password"}
          placeholder={"New Password"}
        />
        <InputForm
          type={"password"}
          label={"Retype New Password"}
          placeholder={"Retype New Password"}
        />
        <PrimaryButton
          label={"Save"}
          type={"submit"}
          className={"mt-20 w-190"}
        />
      </form>
    </>
  );
};

export const BillingAddress = () => {
  return (
    <>
      <section className={"flex flex-row justify-between"}>
        <TitleSubPage title={"Billing & Address"} />
        <button className={"p-10 text-(--main-color) text-2xl cursor-pointer"}>
          + Add New Address
        </button>
      </section>
      <AddressView />
    </>
  );
};
