"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi2";

const Footer = () => {
  const pathname = usePathname();
  const links = ["Home", "Destinations", "About", "Contact us", "Get started"];
  const contacts = [
    {
      icon: MdPhone,
      contact: "+250 788 995 497",
    },
    {
      icon: FaWhatsapp,
      contact: "+250 738 995 497",
    },
    {
      icon: LuMail,
      contact: "info@selectsafarisafrica.com",
    },
    {
      icon: FaLocationDot,
      contact: "Nyarutarama, Kigali - Rwanda",
    },
  ];
  return (
    <div className="flex flex-col py-8 gap-8 px-5 min-[600px]:px-14 lg:py-[4rem] md:flex-row 2xl:px-[8rem] md:gap-2 md:justify-between text-tertiary1">
      <div className="flex flex-col gap-6">
        <Image
          src="/images/logo.png"
          alt="Lion head logo"
          height={42}
          width={42}
          className="cursor-pointer"
        />
        <span className="font-thin text-secondary leading-[2rem] max-w-[20rem] md:max-w-[15rem] xl:max-w-[30rem]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse
        </span>
        <div className="flex items-center gap-6">
          <FaTwitter color="#10A969" size={24} className="cursor-pointer" />
          <FaLinkedin color="#10A969" size={24} className="cursor-pointer" />
          <FaInstagram color="#10A969" size={24} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-4 text-secondary">
        <span className="font-bold text-lg py-2 text-tertiary1">
          Quick Links
        </span>
        {links.map((el, index) => {
          const currentPathname = pathname === "/" ? "/home" : pathname;
          const isActive = currentPathname === `/${el.toLowerCase()}`;
          return el === "Contact us" || el === "Get started" ? (
            <Link
              key={index}
              className={`${isActive ? "text-brand font-bold" : ""} tracking-wide cursor-pointer hover:text-brand`}
              href="#"
            >
              {el}
            </Link>
          ) : el === "Home" ? (
            <Link
              key={index}
              className={`${isActive ? "text-brand font-bold" : ""} tracking-wide cursor-pointer hover:text-brand`}
              href="/"
            >
              {el}
            </Link>
          ) : (
            <Link
              key={index}
              className={`${isActive ? "text-brand font-bold" : ""} tracking-wide cursor-pointer hover:text-brand`}
              href={`/${el.toLowerCase()}`}
            >
              {el}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 text-secondary">
        <span className="font-bold text-lg py-2 text-tertiary1">Find Us</span>
        {contacts.map((el, index) => (
          <div key={index} className="flex items-center gap-4 py-2">
            <el.icon color="#10A969" size={24} className="cursor-pointer" />
            <span>{el.contact}</span>
          </div>
        ))}
      </div>
      <div className="sticky bottom-[2rem] h-[4rem] w-[4rem] cursor-pointer rounded-full flex items-center justify-center bg-brand text-tertiary1 mt-2">
        <HiArrowUp size={20} />
      </div>
    </div>
  );
};

export default Footer;
