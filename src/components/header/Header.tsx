"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDownOutline } from "react-icons/io5";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const links = [
    { linkName: "Home", linkTo: "/" },
    { linkName: "About Us", linkTo: "/about" },
    { linkName: "Destinations", linkTo: "/destinations" },
  ];

  return (
    <div className="border-b border-[rgba(255,255,255,0.2)] sticky top-0 z-20 bg-theme1 w-full flex items-center justify-between px-6 py-2 text-tertiary1 min-[1200px]:px-[4rem] 2xl:px-[8.5rem]">
      <div
        className="p-3 bg-white rounded-full cursor-pointer"
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
        <div className="flex items-center gap-3 text-white p-4 rounded-[30px] bg-[#ffffff15] cursor-pointer">
          <div className="h-[22px] w-[35px] relative">
            <Image src={"/icons/us.png"} alt="" fill={true} />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold">En</span>
            <IoChevronDownOutline size={18} />
          </div>
        </div>
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
