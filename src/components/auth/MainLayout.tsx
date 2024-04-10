"use client"
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { InputProps } from "@/app/types";
import { useRouter } from "next/navigation";

type Props = {
  name: string;
  buttonName: string
  title: string;
  subtitle: string;
  inputs: InputProps[];
};

const MainLayout: React.FC<Props> = ({ name, buttonName, title, subtitle, inputs }) => {
  const router = useRouter()
  return (
    <div className="flex w-full min-h-screen">
      <div className="bg-white border w-full lg:w-[40%] h-full  flex flex-col items-center justify-center p-4">
        <div className="text-black lg:py-[4rem] rounded-md flex flex-col w-full p-4 max-w-[28rem]">
          <div className="flex flex-col gap-4 py-5">
            <Image
              src="/images/favicon.png"
              alt="Lion head logo"
              height={42}
              width={42}
              className="cursor-pointer"
              onClick={() => router.push("/")}
            />
            <span className="font-bold text-lg tracking-wide">
              Welcome back!
            </span>
            <span className="text-secondary">
              Enter your credentials to login
            </span>
          </div>
          <form className="w-full">
            <div className="flex flex-col w-full">
              {inputs.map((input, index) => (
                <div key={index} className="py-3 flex flex-col gap-4">
                  <label>{input.label}</label>
                  <input
                    placeholder={input.placeholder}
                    type={input.type}
                    className="text-[#0000008e] border p-4 rounded-md"
                  />
                </div>
              ))}
            </div>
            <button className="bg-brand w-full p-4 text-white rounded-md mt-4">
              {buttonName}
            </button>
            <div className="cursor-pointer flex p-4 items-center w-full mt-4 gap-8 border rounded-md">
              <FcGoogle size={25} />
              <span className="text-secondary">Continue with google</span>
            </div>
            <div className="cursor-pointer flex p-4 items-center w-full mt-4 gap-8 border rounded-md">
              <Image height={23} width={23} alt="" src="/icons/instagram.png" />
              <span className="text-secondary">Continue with instagram</span>
            </div>
            <div className="cursor-pointer flex p-4 items-center w-full mt-4 gap-8 border rounded-md">
              <FaFacebook size={25} fill="#1877F2" />
              <span className="text-secondary">Continue with facebook</span>
            </div>
          </form>
        </div>
      </div>
      <div
        className="text-white hidden lg:w-[60%] items-center lg:flex justify-center flex-col h-full bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url('/images/sunset.webp')",
        }}
      >
        <div
          className={`flex flex-col gap-8 mb-[5rem] ${name === "login" ? "max-w-[29rem] 2xl:max-w-[35rem]" : "max-w-[34rem] 2xl:max-w-[43rem]"} xl:gap-10`}
        >
          <span className="text-brand mr-[12rem] 2xl:text-lg">
            SELECT SAFARIS EAST AFRICA CO.
          </span>
          <h2 className="text-5xl font-bold tracking-wider leading-[4rem] 2xl:text-6xl 2xl:leading-[5rem]">
            {title}
          </h2>
          <p className="text-secondary text-lg 2xl:text-xl 2xl:leading-[2rem]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
