import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import "@/app/globals.css";
import Link from "next/link";

const Description2 = () => {
  return (
    <div className="py-8 px-4 flex flex-col items-center gap-6 md:gap-8 text-tertiary1 border-white bg-white md:flex-row lg:gap-[4rem] xl:justify-between lg:py-[5rem] lg:px-[2rem] 2xl:px-[9.5rem] min-[1200px]:px-[3rem]">
      <div className="flex flex-col gap-6 md:max-w-[47rem]">
        <h1 className="text-[#10A969] text-md font-bold lg:text-lg xl:text-xl">
          SELECT SAFARIS AFRICA CO.
        </h1>
        <h2 className="font-bold text-2xl text-black lg:text-3xl xl:text-4xl">
          No dream, enjoy the adventure of Africa with us
        </h2>
        <span className="text-secondary lg:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </span>
        <span className="text-secondary lg:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </span>
        <div className="flex items-center gap-4">
          <Link href="/about" className="text-brand font-semibold cursor-pointer">
            Learn more
          </Link>
          <BsArrowRight
            color="#10A969"
            size={24}
            className="animate-bounce cursor-pointer"
          />
        </div>
      </div>
      <div className="load-dark relative overflow-hidden w-full md:max-w-[714px] p-4 h-[20rem] md:h-[22rem] border rounded-[20px] lg:h-[30rem] cursor-pointer">
        <Image
          src={"/images/mountains.webp"}
          alt=""
          fill={true}
          className="object-cover brightness-75 transition hover:brightness-100"
        />
      </div>
    </div>
  );
};

export default Description2;
