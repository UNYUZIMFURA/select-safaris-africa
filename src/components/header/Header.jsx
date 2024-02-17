import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-[#0E150F] px-6 py-8 text-white 2xl:px-[7rem]">
      <Image
        src="/images/logo.png"
        alt="Lion head logo"
        height={42}
        width={42}
        className="cursor-pointer"
      />
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
