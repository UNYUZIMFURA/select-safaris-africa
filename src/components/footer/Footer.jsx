import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col py-8 gap-8 px-5 min-[600px]:px-14 lg:py-[4rem] md:flex-row 2xl:px-[8rem] min-[1200px]:px-[3rem md:px-0 md:gap-2 md:justify-around text-white">
      <div className="flex flex-col gap-4">
        <Image
          src="/images/logo.png"
          alt="Lion head logo"
          height={42}
          width={42}
          className="cursor-pointer"
        />
        <span className="font-thin text-[#AAB2BA] leading-[2rem] max-w-[20rem] md:max-w-[15rem] xl:max-w-[30rem]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse
        </span>
        <div className="flex items-center gap-6">
          <FaTwitter color="#10A969" size={20} />
          <FaLinkedin color="#10A969" size={20} />
          <FaInstagram color="#10A969" size={20} />
        </div>
      </div>
      <div className="flex flex-col gap-4 text-[#AAB2BA]">
        <span className="font-bold text-lg py-2 text-white ">Quick Links</span>
        <span>Home</span>
        <span>Destinations</span>
        <span>About</span>
        <span>Contact us</span>
        <span>Get started</span>
      </div>
      <div className="flex flex-col gap-2 text-[#AAB2BA]">
        <span className="font-bold text-lg py-2 text-white">Find Us</span>
        <div className="flex items-center gap-4 py-2">
          <MdPhone color="#10A969" size={20} />
          <span>+250 788 995 497</span>
        </div>
        <div className="flex items-center gap-4 py-2">
          <FaWhatsapp color="#10A969" size={20} />
          <span>Whatsapp</span>
        </div>
        <div className="flex items-center gap-4 py-2">
          <LuMail color="#10A969" size={20} />
          <span>info@selectsafaris.com</span>
        </div>
        <div className="flex items-center gap-4 py-2">
          <FaLocationDot color="#10A969" size={20} />
          <span>Somewhere, Kigali - Rwanda</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
