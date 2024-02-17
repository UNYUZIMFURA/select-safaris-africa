import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Description1 = () => {
  return (
    <div className="py-7 px-4 flex flex-col items-center gap-6 md:gap-8 text-white border-white bg-white md:flex-row lg:gap-[4rem] xl:justify-between lg:py-[5rem] lg:px-[2rem] 2xl:px-[9.5rem]">
      <div className="relative w-full md:max-w-[714px] p-4 h-[20rem] md:h-[22rem] border rounded-[20px] lg:h-[30rem] cursor-pointer">
        <Image
          src={"/images/giraffes.jpg"}
          alt=""
          fill={true}
          className="object-cover rounded-[20px] brightness-75 transition hover:brightness-100"
        />
      </div>
      <div className="flex flex-col gap-6 md:max-w-[47rem]">
        <h1 className="text-[#10A969] text-md font-bold lg:text-lg xl:text-xl">
          SELECT SAFARIS EAST AFRICA CO.
        </h1>
        <h2 className="font-bold text-2xl text-black lg:text-3xl xl:text-4xl">
          No dream, enjoy the adventure of East Africa with us
        </h2>
        <span className="text-[#AAB2BA] lg:text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </span>
        <span className="text-[#AAB2BA] lg:text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </span>
        <div className="flex items-center gap-4">
          <span className="text-[#10A969] font-semibold">Learn more</span>
          <BsArrowRight color="#10A969" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Description1;
