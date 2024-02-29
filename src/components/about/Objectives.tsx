import React from "react";
import Objective from "./Objective";
import { GoGoal } from "react-icons/go";

const Objectives = () => {
  return (
    <div className="flex flex-col items-center gap-14 px-4 py-8 bg-[#EBFCF5] xl:py-[5rem lg:pl-10 min-[1200px]:pl-[4rem] 2xl:pl-[8.5rem]">
      <div className="flex flex-col items-center gap-4 text-center max-w-[30rem] lg:max-w-[45rem] xl:gap-6">
        <span className="text-brand font-bold text-xl">JOYFUL & FAST</span>
        <h2 className="font-bold text-2xl text-tertiary2 md:text-[1.6rem] lg:text-[1.9rem] leading-10 xl:text-[2.2rem] 2xl:text-[2.5rem] xl:leading-[3.3rem]">
          We aim for our customer's satisfaction and that's all
        </h2>
        <p className="text-tertiary2 lg:text-[1.2rem] xl:max-w-[30rem]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 min-[800px]:flex-row md:gap-2 lg:gap-4 xl:gap-8">
        <Objective Icon={GoGoal} />
        <Objective Icon={GoGoal} />
        <Objective Icon={GoGoal} />
        <Objective Icon={GoGoal} />
      </div>
    </div>
  );
};

export default Objectives;
