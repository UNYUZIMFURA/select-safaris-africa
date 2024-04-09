"use client";
import Image from "next/image";
import { AppDispatch } from "@/redux/store";
import { hideSidebar } from "@/redux/features/sidebar";
import { useDispatch } from "react-redux";
import { GoHomeFill } from "react-icons/go";
import { IoMdInformationCircle } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoChevronDownOutline } from "react-icons/io5";

const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="lg:hidden z-30 flex absolute top-0 left-0 w-full backdrop-blur-[2px]">
      <div className="h-screen flex flex-col gap-8 py-6 px-4 w-[80%] bg-white rounded-r-2xl">
        <div className="flex justify-between">
          <Image
            src="/images/favicon.png"
            alt="Lion head logo"
            height={20}
            width={38}
            className="cursor-pointer"
          />
          <div
            className="p-2 rounded-full bg-[#10a96925]"
            onClick={() => dispatch(hideSidebar())}
          >
            <IoCloseOutline color="#10A969" size={24} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[#323232]">Menu</span>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 p-3 bg-[#10a96925] rounded-lg">
              <GoHomeFill color="#10A969" size={24} />
              <span className="text-brand">Home</span>
            </div>
            <div className="flex gap-3 p-3 rounded-lg">
              <IoMdInformationCircle color="#2C2C2C" size={24} />
              <span className="text-[#2C2C2C]">About Us</span>
            </div>
            <div className="flex items-center p-3 rounded-lg justify-between">
              <div className="flex gap-3">
                <FaLocationDot color="#2C2C2C" size={22} />
                <span className="text-[#2C2C2C]">Destinations</span>
              </div>
              <IoChevronDownOutline size={16} color="#2C2C2C" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 md:flex-row md:gap-8">
          <div className="text-[#323232] flex flex-col gap-4 md:w-1/2 md:border md:rounded-lg md:p-2">
            <span className="text-[#323232]">Language</span>
            <div className="flex justify-between px-3 md:p-0">
              <div className="flex gap-3 items-center">
                <div className="h-[20px] w-[32px] relative">
                  <Image src={"/icons/us.png"} alt="" fill={true} />
                </div>
                <span className="text-[#323232]">English</span>
              </div>
              <IoChevronDownOutline size={16} color="#2C2C2C" />
            </div>
          </div>
          <div className="text-[#323232] flex flex-col gap-4 md:w-1/2">
            <span className="text-[#323232]">Get Started</span>
            <button className="bg-brand h-[50px] w-full text-white rounded-lg">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
