"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { useAppSelector } from "@/redux/store"
import { hideSidebar } from "@/redux/features/sidebar"
import { GoHomeFill } from "react-icons/go"
import { IoMdInformationCircle } from "react-icons/io"
import { IoCloseOutline } from "react-icons/io5"
import { FaLocationDot } from "react-icons/fa6"
import { IoChevronDownOutline } from "react-icons/io5"

const Sidebar = () => {
    const sidebarOpen = useAppSelector(
        (state) => state.sidebarVisibilityReducer.value.state,
    )
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const navigateToRoute = (route: string) => {
        router.push(route)
        dispatch(hideSidebar())
    }
    return (
        <div
            className={`absolute left-0 top-0 z-30 flex h-screen w-full transition-transform duration-500 ease-in ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
        >
            <div className="z-60 flex h-full w-[80%] flex-col gap-8 rounded-r-2xl bg-white px-4 py-6">
                <div className="flex justify-between">
                    <Image
                        src="/images/favicon.png"
                        alt="Lion head logo h-auto"
                        height={20}
                        width={38}
                        className="cursor-pointer"
                    />
                    <div
                        className="rounded-full bg-[#10a96925] p-2"
                        onClick={() => dispatch(hideSidebar())}
                    >
                        <IoCloseOutline color="#10A969" size={24} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-[#323232]">Menu</span>
                    <div className="flex flex-col gap-3">
                        <div
                            className="flex gap-3 rounded-lg bg-[#10a96925] p-4"
                            onClick={() => navigateToRoute("/")}
                        >
                            <GoHomeFill color="#10A969" size={24} />
                            <span className="text-brand">Home</span>
                        </div>
                        <div
                            className="flex gap-3 rounded-lg p-4"
                            onClick={() => navigateToRoute("/about")}
                        >
                            <IoMdInformationCircle color="#2C2C2C" size={24} />
                            <span className="text-[#2C2C2C]">About Us</span>
                        </div>
                        <div
                            className="flex items-center justify-between rounded-lg p-4"
                            onClick={() => navigateToRoute("/destinations")}
                        >
                            <div className="flex w-full gap-3">
                                <FaLocationDot color="#2C2C2C" size={22} />
                                <span className="text-[#2C2C2C]">
                                    Destinations
                                </span>
                            </div>
                            <IoChevronDownOutline size={16} color="#2C2C2C" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-12 md:flex-row md:gap-8">
                    <div className="flex flex-col gap-4 text-[#323232] md:w-1/2 md:rounded-lg md:border md:p-2">
                        <span className="text-[#323232]">Language</span>
                        <div className="flex justify-between px-3 md:p-0">
                            <div className="flex items-center gap-3">
                                <div className="relative h-[20px] w-[32px]">
                                    <Image
                                        src={"/icons/us.png"}
                                        alt=""
                                        fill={true}
                                    />
                                </div>
                                <span className="text-[#323232]">English</span>
                            </div>
                            <IoChevronDownOutline size={16} color="#2C2C2C" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-[#323232] md:w-1/2">
                        <span className="text-[#323232]">Get Started</span>
                        <button
                            className="h-[50px] w-full rounded-lg bg-brand text-white"
                            onClick={() => navigateToRoute("/login")}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`h-full w-[20%] backdrop-blur-[2px] transition-none ${sidebarOpen ? "" : "backdrop-blur-0"}`}
                onClick={() => dispatch(hideSidebar())}
            ></div>
        </div>
    )
}

export default Sidebar
