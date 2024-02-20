import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-[#0E150F] px-6 py-8 text-white min-[1200px]:px-[4rem] 2xl:px-[8.5rem]">
      <Image
        src="/images/logo.png"
        alt="Lion head logo"
        height={42}
        width={42}
        className="cursor-pointer"
      />
      {/* <div className="items-center gap-4 hidden min-[700px]:flex">
        <span className="text-[#10A969]">Home</span>
        <span>Destinations</span>
        <span>About</span>
        <span>Contact us</span>
        <span>Get Started</span>
      </div> */}
      <RxHamburgerMenu
        color="#10A969"
        size={28}
        cursor="pointer"
        className="min-[700px]:hidden"
      />
      
    </div>
  );
};

export default Header;
