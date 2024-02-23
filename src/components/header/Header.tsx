import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiLanguage } from "react-icons/hi2";

const Header = () => {
  const links = ["Destinations", "About", "Contact us", "Get started"];
  return (
    <div className="sticky top-0 z-20 bg-theme1 w-full flex items-center justify-between px-6 py-6 text-tertiary1 min-[1200px]:px-[4rem] 2xl:px-[8.5rem]">
      <Image
        src="/images/logo.png"
        alt="Lion head logo"
        height={42}
        width={42}
        className="cursor-pointer"
      />
      <div className="md:flex items-center gap-6 hidden lg:gap-8 xl:gap-14">
        <Link className="text-brand font-bold cursor-pointer" href="/">
          Home
        </Link>
        {links.map((el, index) =>
          el === "About" || el === "Contact us" || el === "Get started" ? (
            <Link
              key={index}
              className="cursor-pointer hover:text-brand"
              href="#"
            >
              {el}
            </Link>
          ) : (
            <Link
              key={index}
              className="cursor-pointer hover:text-brand"
              href={`/${el.toLowerCase()}`}
            >
              {el}
            </Link>
          ),
        )}
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
