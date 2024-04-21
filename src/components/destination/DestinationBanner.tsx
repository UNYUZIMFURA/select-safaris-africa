import Image from "next/image";
import "@/app/globals.css"
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";

const DestinationBanner = () => {
  const [hoveredImg, setHoveredImg] = useState<string>("banner-1");
  return (
    <div
      className="relative h-[20rem] w-full text-tertiary1 bg-slate-200 flex flex-col items-start py-10 px-4 sm:px-6 md:h-[25rem] 2xl:h-[28rem] 2xl:pl-[8.5rem] min-[1200px]:pl-[4rem] gap-8 bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent),url('/images/mountain.webp')",
      }}
    >
      <div className="flex items-center gap-4">
        <span>Destinations</span>
        <RiArrowRightSLine size={24} color="#10A969" />
        <span>Muhazi Lake Resort</span>
      </div>
      <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold tracking-wide">
        Muhazi Lake Resort Hotel & Restaurant
      </h3>
      <div className="flex items-center gap-3">
        <FaLocationDot color="#10A969" size={22} />
        <span className="font-medium text-brand">Kigali</span>
      </div>
      <div className="flex lg:gap-3 transition h-[25rem] md:h-[28rem] 2xl:h-[32rem] md:-bottom-[18rem] absolute w-full px-3 min-[1200px]:px-14 -bottom-[20rem] left-0 right-0 mx-auto 2xl:px-[8rem]">
        <div
          onMouseOver={() => setHoveredImg("banner-1")}
          className={`load-light-2 cursor-pointer relative overflow-hidden w-full flex flex-col px-4 pb-4 gap-4 justify-end rounded-lg h-full bg-cover md:px-8 md:pb-8 ${hoveredImg == "banner-1" ? "lg:w-[60%]" : "lg:w-[20%]"} `}
        >
          <Image src="/images/car.webp" fill alt="" className="object-cover" />
        </div>
        <div
          className={`load-light-2 cursor-pointer relative brightness-75 hidden lg:flex h-full rounded-[20px] overflow-hidden ${hoveredImg == "banner-2" ? "lg:w-[60%]" : "lg:w-[20%]"}`}
          onMouseOver={() => setHoveredImg("banner-2")}
        >
          <Image
            src="/images/mountains.webp"
            fill
            alt=""
            className="object-cover"
          />
        </div>
        <div
          className={`load-light-2 cursor-pointer relative brightness-75 overflow-hidden hidden lg:flex h-full w-[20%] rounded-[20px] ${hoveredImg == "banner-3" ? "lg:w-[60%]" : "lg:w-[20%]"}`}
          onMouseOver={() => setHoveredImg("banner-3")}
        >
          <Image
            src="/images/about.webp"
            fill
            alt=""
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationBanner;
