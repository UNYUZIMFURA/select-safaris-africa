"use client"
import Image from "next/image"
import Link from "next/link"
import BackToTop from "../back-to-top/BackToTop"
import { usePathname, useRouter } from "next/navigation"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { MdPhone } from "react-icons/md"
import { LuMail } from "react-icons/lu"

const Footer = () => {
    const router = useRouter()
    const pathname = usePathname()
    const links = [
        { linkName: "Home", linkTo: "/" },
        { linkName: "About Us", linkTo: "/about" },
        { linkName: "Destinations", linkTo: "/destinations" },
    ]
    const contacts = [
        {
            icon: MdPhone,
            contact: "+250 788 995 497",
        },
        {
            icon: LuMail,
            contact: "info@selectsafarisafrica.com",
        },
    ]
    return (
        <div className="flex flex-col gap-10 bg-[#19211A] px-5 pb-[5rem] pt-8 text-tertiary1 min-[600px]:px-14 md:justify-between md:gap-12 lg:flex-row lg:py-[4rem] 2xl:px-[8rem]">
            <BackToTop />
            <div className="flex flex-col gap-8 md:flex-row md:justify-between lg:w-[calc(100%-20rem)] 2xl:w-[calc(90%-20rem)]">
                <div className="flex flex-col gap-6">
                    <div
                        className="flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-full bg-white"
                        onClick={() => router.push("/")}
                    >
                        <Image
                            src="/images/favicon.png"
                            alt="Lion head logo"
                            height={36}
                            width={36}
                            className="cursor-pointer"
                        />
                    </div>
                    <span className="max-w-[20rem] font-thin leading-[2rem] text-secondary md:max-w-[15rem] xl:max-w-[30rem]">
                        The gladest moment in human life is a departure to an
                        unknown land, choose Select Safaris Africa your gateway
                        to Africa's captivating landscapes and vibrant cultures
                    </span>
                    <div className="flex items-center gap-6">
                        <FaFacebook
                            color="#10A969"
                            size={24}
                            className="cursor-pointer"
                        />
                        <FaInstagram
                            color="#10A969"
                            size={24}
                            className="cursor-pointer"
                        />
                        <FaLinkedin
                            color="#10A969"
                            size={24}
                            className="cursor-pointer"
                        />
                        <FaYoutube
                            color="#10A969"
                            size={24}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-secondary">
                    <span className="py-2 text-lg font-bold text-tertiary1">
                        Quick Links
                    </span>
                    {links.map((el, index) => {
                        const isActive = pathname === el.linkTo
                        return (
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
                <div className="flex flex-col gap-2 text-secondary">
                    <span className="py-2 text-lg font-bold text-tertiary1">
                        Find Us
                    </span>
                    {contacts.map((el, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 py-2"
                        >
                            <el.icon
                                color="#10A969"
                                size={24}
                                className="cursor-pointer"
                            />
                            <span>{el.contact}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col md:max-w-[40rem] lg:w-[20rem] min-[1200px]:w-[20rem] 2xl:w-[25rem]">
                <span className="py-2 text-lg font-bold text-tertiary1">
                    Stay Updated
                </span>
                <form className="flex flex-col gap-5 py-4">
                    <input
                        placeholder="Enter your email"
                        className="rounded-full p-4 indent-3 text-secondary"
                    />
                    <button className="rounded-full bg-brand p-4">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Footer
