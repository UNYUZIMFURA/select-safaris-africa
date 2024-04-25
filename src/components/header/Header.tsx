"use client"
import Image from "next/image"
import Link from "next/link"
import Sidebar from "../sidebar/Sidebar"
import DestinationsNavigation from "../destinations-navigation/DestinationsNavigation"
import { usePathname, useRouter } from "next/navigation"
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { showDestinationsNav } from "@/redux/features/destinationsNav"
import { showSidebar } from "@/redux/features/sidebar"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoChevronDownOutline } from "react-icons/io5"

const Header = () => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const pathname = usePathname()
    const links = [
        { linkName: "Home", linkTo: "/" },
        { linkName: "About Us", linkTo: "/about" },
        { linkName: "Destinations", linkTo: "/destinations" },
    ]

    return (
        <div className="sticky top-0 z-30 flex w-full items-center justify-between border-b border-[rgba(255,255,255,0.2)] bg-theme1 px-6 py-3 text-tertiary1 min-[1200px]:px-[4rem] 2xl:px-[8.5rem]">
            <Sidebar />
            <DestinationsNavigation />
            <div
                className="cursor-pointer rounded-full bg-white p-3"
                onClick={() => router.push("/")}
            >
                <Image
                    src="/images/favicon.png"
                    alt="Lion head logo"
                    height={32}
                    width={32}
                    className="cursor-pointer"
                />
            </div>
            <div className="2xl:gap-18 hidden items-center gap-6 lg:flex lg:gap-12 xl:gap-16">
                {links.map((el, index) => {
                    const isActive = pathname === el.linkTo
                    return el.linkName === "Destinations" ? (
                        <Link
                            key={index}
                            className={`${isActive ? "font-bold text-brand" : ""} flex cursor-pointer items-center gap-2 tracking-wide hover:text-brand`}
                            href=""
                            onClick={() => dispatch(showDestinationsNav())}
                            onMouseEnter={() => dispatch(showDestinationsNav())}
                        >
                            {el.linkName}
                            <IoChevronDownOutline />
                        </Link>
                    ) : (
                        <Link
                            key={index}
                            className={`${isActive ? "font-bold text-brand" : ""} cursor-pointer tracking-wide hover:text-brand`}
                            href={el.linkTo}
                        >
                            {el.linkName}
                        </Link>
                    )
                })}
            </div>
            <RxHamburgerMenu
                color="#10A969"
                size={28}
                cursor="pointer"
                className="lg:hidden"
                onClick={() => dispatch(showSidebar())}
            />
            <div className="hidden items-center gap-4 lg:flex lg:gap-8">
                <div className="flex cursor-pointer items-center gap-2 rounded-[30px] bg-[#ffffff15] p-3 text-white">
                    <div className="relative h-[20px] w-[32px]">
                        <Image src={"/icons/us.png"} alt="" fill={true} />
                    </div>
                        <span className="text-sm font-bold">En</span>
                </div>
                <div className="flex cursor-pointer items-center gap-2 rounded-[30px] bg-[#ffffff15] p-3 text-white">
                    <div className="relative h-[20px] w-[32px]">
                        <Image src={"/icons/fr.png"} alt="" fill={true} />
                    </div>
                        <span className="text-sm font-bold">Fr</span>         
                </div>
                <button
                    className="rounded-lg border-2 border-brand px-10 py-2 text-brand"
                    onClick={() => router.push("/login")}
                >
                    Sign in
                </button>
            </div>
        </div>
    )
}

export default Header
