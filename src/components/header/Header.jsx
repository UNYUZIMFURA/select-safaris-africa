import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiLanguage } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-theme1 px-6 py-10 text-tertiary1 min-[1200px]:px-[4rem] 2xl:px-[8.5rem]">
      <Image
        src="/images/logo.png"
        alt="Lion head logo"
        height={42}
        width={42}
        className="cursor-pointer"
      />
      <div className="md:flex items-center gap-6 hidden lg:gap-8 xl:gap-14">
        <span className="text-brand font-bold cursor-pointer">Home</span>
        <span className="cursor-pointer">Destinations</span>
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">Contact us</span>
        <span className="cursor-pointer">Get started</span>
      </div>
      <RxHamburgerMenu
        color="#10A969"
        size={28}
        cursor="pointer"
        className="md:hidden"
      />
      <div className="md:flex items-center gap-4 hidden lg:gap-6 xl:gap-8">
        <HiLanguage color="white" size={27} className="cursor-pointer" />
        <button className="py-3 px-10 rounded-lg border-2 outline-none border-brand text-brand">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
