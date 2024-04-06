"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiLanguage } from "react-icons/hi2";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const links = [
    { linkName: "Home", linkTo: "/" },
    { linkName: "About Us", linkTo: "/about" },
    { linkName: "Destinations", linkTo: "/destinations" },
  ];

  return (
    <div className="border-b border-[rgba(255,255,255,0.2)] sticky top-0 z-20 bg-theme1 w-full flex items-center justify-between px-6 py-6 text-tertiary1 min-[1200px]:px-[4rem] 2xl:px-[8.5rem]">
      <Image
        src="/images/favicon.png"
        alt="Lion head logo"
        height={42}
        width={42}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      <div className="min-[800px]:flex items-center gap-6 hidden lg:gap-12 xl:gap-16 2xl:gap-18">
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
      <RxHamburgerMenu
        color="#10A969"
        size={28}
        cursor="pointer"
        className="min-[800px]:hidden"
      />
      <div className="min-[800px]:flex items-center gap-4 hidden lg:gap-8 xl:gap-10 2xl:gap-12">
        <HiLanguage color="white" size={27} className="cursor-pointer" />
        <button
          className="py-3 px-10 rounded-lg border-2 border-brand text-brand"
          onClick={() => router.push("/login")}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
