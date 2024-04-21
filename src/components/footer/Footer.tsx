"use client";
import Image from "next/image";
import Link from "next/link";
import BackToTop from "../back-to-top/BackToTop";
import { usePathname, useRouter } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { LuMail } from "react-icons/lu";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
    const links = [
    { linkName: "Home", linkTo: "/" },
    { linkName: "About Us", linkTo: "/about" },
    { linkName: "Destinations", linkTo: "/destinations" },
  ];
  const contacts = [
    {
      icon: MdPhone,
      contact: "+250 788 995 497",
    },
    {
      icon: LuMail,
      contact: "info@selectsafarisafrica.com",
    },
  ];
  return (
    <div className="bg-[#19211A] flex flex-col py-8 gap-10 px-5 min-[600px]:px-14 lg:py-[4rem] 2xl:px-[8rem] md:gap-12 md:justify-between lg:flex-row  text-tertiary1">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between lg:w-[calc(100%-20rem)] 2xl:w-[calc(90%-20rem)]">
        <div className="flex flex-col gap-6">
          <div
            className="h-[4rem] w-[4rem] flex items-center justify-center bg-white rounded-full cursor-pointer"
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
          <span className="font-thin text-secondary leading-[2rem] max-w-[20rem] md:max-w-[15rem] xl:max-w-[30rem]">
            Embark on unforgettable memories in Africa's wilderness with Select
            Safaris Africa, a leading tour operator. Craft your dream African
            adventure with Personalized itineraries and meet expert drivers for
            an unforgettable safari experience.
          </span>
          <div className="flex items-center gap-6">
            <FaLinkedin color="#10A969" size={24} className="cursor-pointer" />
            <FaInstagram color="#10A969" size={24} className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-4 text-secondary">
          <span className="font-bold text-lg py-2 text-tertiary1">
            Quick Links
          </span>
          {links.map((el, index) => {
            const isActive = pathname === el.linkTo;
            return (
              <Link
                key={index}
                className={`${isActive ? "text-brand font-bold" : ""} tracking-wide cursor-pointer hover:text-brand`}
                href={el.linkTo}
              >
                {el.linkName}
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
      </div>
      <div className="flex flex-col md:max-w-[40rem] lg:w-[20rem] min-[1200px]:w-[20rem] 2xl:w-[25rem]">
        <span className="font-bold text-lg py-2 text-tertiary1">
          Stay Updated
        </span>
        <form className="flex flex-col gap-5 py-4">
          <input
            placeholder="Enter your email"
            className="indent-3 p-4 rounded-full text-secondary"
          />
          <button className="bg-brand rounded-full p-4">Subscribe</button>
        </form>
      </div>
      <BackToTop />
    </div>
  );
};

export default Footer;
