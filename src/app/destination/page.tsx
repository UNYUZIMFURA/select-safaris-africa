import Image from "next/image";
import Header from "@/components/header/Header";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";
import Footer from "@/components/footer/Footer";

const Destination = () => {
  return (
    <div className="max-w-[125rem] w-full flex flex-col">
      <Header />
      <div
        className="relative h-[20rem] w-full text-tertiary1 bg-slate-200 flex flex-col items-start py-10 px-4 sm:px-6 md:h-[25rem] lg:h-[28rem] 2xl:pl-[8.5rem] min-[1200px]:pl-[4rem] gap-8 bg-cover"
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
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">
          Muhazi Lake Resort Hotel & Restaurant
        </h3>
        <div className="flex items-center gap-3">
          <FaLocationDot color="#10A969" size={22} />
          <span className="font-medium text-brand">Kigali</span>
        </div>
        <div className="flex lg:gap-8 h-[25rem] md:h-[28rem] xl:h-[32rem] md:-bottom-[18rem] absolute w-full px-4 min-[1200px]:px-14 -bottom-[20rem] left-0 right-0 mx-auto 2xl:px-[8rem]">
          <div
            className="w-full flex flex-col px-4 pb-4 gap-4 justify-end rounded-lg h-full border bg-cover md:px-8 md:pb-8 lg:w-[60%]"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,0.7), transparent),url('/images/gorilla.webp')",
            }}
          >
            <span className="font-bold text-lg tracking-wide md:text-xl">
              Akagera national park
            </span>
            <span className="text-secondary max-w-[23rem] md:text-lg">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </span>
          </div>
          <div className="border hidden lg:flex h-full w-[20%] rounded-[20px]"></div>
          <div className="border hidden lg:flex h-full w-[20%] rounded-[20px]"></div>
        </div>
          </div>
    </div>
  );
};

export default Destination;
