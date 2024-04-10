"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"
import { AppDispatch } from "@/redux/store"
import { useAppSelector } from "@/redux/store";
import { hideSidebar } from "@/redux/features/sidebar";
import { useDispatch } from "react-redux";
import { GoHomeFill } from "react-icons/go";
import { IoMdInformationCircle } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoChevronDownOutline } from "react-icons/io5";

const Sidebar = () => {
  const sidebarOpen = useAppSelector(
    (state) => state.sidebarVisibilityReducer.value.state,
  );
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const navigateToRoute = (route: string) => {
    router.push(route)
    dispatch(hideSidebar())
  }
  return (
    <div
      className={`flex h-screen w-full absolute top-0 left-0 z-30 transition-transform ease-in duration-500 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
    >
      <div className="flex h-full flex-col gap-8 py-6 px-4 w-[80%] bg-white z-60 rounded-r-2xl">
        <div className="flex justify-between">
          <Image
            src="/images/favicon.png"
            alt="Lion head logo h-auto"
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
          <div className="flex flex-col gap-3">
            <div
              className="flex gap-3 p-4 bg-[#10a96925] rounded-lg"
              onClick={() => navigateToRoute("/")}
            >
              <GoHomeFill color="#10A969" size={24} />
              <span className="text-brand">Home</span>
            </div>
            <div
              className="flex gap-3 p-4 rounded-lg"
              onClick={() => navigateToRoute("/about")}
            >
              <IoMdInformationCircle color="#2C2C2C" size={24} />
              <span className="text-[#2C2C2C]">About Us</span>
            </div>
            <div
              className="flex items-center p-4 rounded-lg justify-between"
              onClick={() => navigateToRoute("/destinations")}
            >
              <div className="w-full flex gap-3">
                <FaLocationDot color="#2C2C2C" size={22} />
                <span className="text-[#2C2C2C]">Destinations</span>
              </div>
              <IoChevronDownOutline size={16} color="#2C2C2C" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 md:flex-row md:gap-8">
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
            <button
              className="bg-brand h-[50px] w-full text-white rounded-lg"
              onClick={() => navigateToRoute("/login")}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div
        className={`h-full w-[20%] backdrop-blur-[2px] transition-all duration-75 ${sidebarOpen ? "" : "backdrop-blur-0"}`}
        onClick={() => dispatch(hideSidebar())}
      ></div>
    </div>
  );
};

export default Sidebar;
