import React from "react";
import Objective from "./Objective";
import { GoGoal } from "react-icons/go";
import { BiSolidBinoculars } from "react-icons/bi";
import { IoDiamond } from "react-icons/io5";
import { FaMountainSun } from "react-icons/fa6";

const Objectives = () => {
  return (
    <div className="flex flex-col items-center gap-14 px-4 py-8 bg-[#F5FBFA] lg:pl-10 min-[1200px]:pl-[4rem] 2xl:pl-[8.5rem] xl:py-[6rem]">
      <div className="flex flex-col items-center gap-5 text-center max-w-[30rem] lg:max-w-[45rem]">
        <span className="text-brand font-bold text-xl">JOYFUL & FAST</span>
        <h2 className="font-bold text-2xl text-tertiary2 md:text-[1.6rem] lg:text-[1.9rem] leading-10 xl:text-[2.2rem] 2xl:text-[2.3rem] xl:leading-[3.3rem]">
          We aim for our customer's satisfaction and that's all
        </h2>
        <p className="text-[#000B0B] lg:text-[1.2rem] xl:max-w-[30rem]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 min-[880px]:flex-row md:gap-2 lg:gap-4 xl:gap-8">
        <Objective Icon={GoGoal} title="Our Goal" />
        <Objective Icon={FaMountainSun} title="Our mission" />
        <Objective Icon={BiSolidBinoculars} title="Our vision" />
        <Objective Icon={IoDiamond} title="Our values" />
      </div>
    </div>
  );
};

export default Objectives;
