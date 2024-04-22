import Objective from "./Objective";
import { BiSolidBinoculars } from "react-icons/bi";
import { IoDiamond } from "react-icons/io5";
import { FaMountainSun } from "react-icons/fa6";

const Objectives = () => {
  return (
    <div className="flex flex-col items-center gap-14 2xl:gap-20 px-4 py-8 bg-[#F5FBFA] lg:pl-10 min-[1200px]:pl-[4rem] 2xl:pl-[8.5rem] xl:py-[6rem]">
      <div className="flex flex-col items-center gap-5 text-center max-w-[30rem] lg:max-w-[45rem]">
        <span className="text-brand font-bold text-xl">WHO WE ARE</span>
        <h2 className="font-bold text-2xl text-tertiary2 md:text-[1.6rem] lg:text-[1.9rem] leading-10 xl:text-[2.2rem] 2xl:text-[2.3rem] xl:leading-[3rem]">
          Our Guiding Principles towards crafting Unforgettable African
          Adventures
        </h2>
      </div>
      <div className="flex flex-col items-center gap-5 min-[880px]:flex-row md:gap-2 lg:gap-4 xl:gap-8">
        <Objective
          Icon={FaMountainSun}
          title="Our mission"
          description="We design and deliver unforgettable adventures that immerse our guests in local cultures, inspire personal growth, and create memories that last a lifetime."
        />
        <Objective
          Icon={BiSolidBinoculars}
          title="Our vision"
          description="We aim to be the leading force in crafting transformative travel experiences that ignite a passion for exploration of Africa's mysterious nature"
        />
        <Objective
          Icon={IoDiamond}
          title="Our values"
          iterable={[
            "Guest Centricity",
            "Authenticity",
            "Integrity",
            "Sustainability",
          ]}
        />
      </div>
    </div>
  );
};

export default Objectives;
