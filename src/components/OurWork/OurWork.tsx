import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import "@/app/globals.css";
import Link from "next/link";

const OurWork = () => {
  return (
    <div className="py-8 px-4 flex flex-col items-center gap-6 md:gap-8 text-tertiary1 border-white bg-white md:flex-row lg:gap-[4rem] xl:justify-between lg:py-[5rem] lg:px-[2rem] 2xl:px-[9.5rem] min-[1200px]:px-[3rem]">
      <div className="load-dark relative overflow-hidden w-full md:max-w-[714px] p-4 h-[20rem] md:h-[22rem] border rounded-[20px] lg:h-[30rem] cursor-pointer">
        <Image
          src={"/images/island.webp"}
          alt=""
          fill={true}
          className="object-cover brightness-75 transition hover:brightness-100"
        />
      </div>
      <div className="flex flex-col gap-6 md:max-w-[47rem]">
        <h1 className="text-[#10A969] text-md font-bold lg:text-lg xl:text-xl">
          SELECT SAFARIS AFRICA CO.
        </h1>
        <h2 className="font-bold text-2xl text-black lg:text-3xl xl:text-4xl">
          No dream, enjoy the adventure of Africa with us
        </h2>
        <span className="text-secondary lg:text-[18px]">
          Select Safaris East Africa is a local based top leading and tourism
          company .It is beyond a tour operator agency but also a trusted team
          fueled by a deep love for East Africa with authenticity towards our
          service with Our team of local experts, seasoned guides, and travel
          enthusiasts
        </span>
        <span className="text-secondary lg:text-[18px]">
          We go beyond simply booking your trip,but also planning itineraries
          that reflect your interests, offer seamless reservations for
          comfortable accommodation, and ensure a welcoming and supportive
          environment throughout your adventure. With Select Safaris, your East
          African dream becomes reality, creating memories that will last a
          lifetime.
        </span>
        <div className="flex items-center gap-4">
          <Link
            href="/about"
            className="text-brand font-semibold cursor-pointer"
          >
            Learn more
          </Link>
          <BsArrowRight
            color="#10A969"
            size={24}
            className="animate-bounce cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
