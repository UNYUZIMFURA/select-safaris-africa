"use client";
import { useRouter } from "next/navigation";
import { PiPlayBold } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";

const HeroButtons = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-8 2xl:gap-[5rem] min-[1200px]:flex-row">
      <div
        className="flex cursor-pointer items-center gap-4 rounded-lg bg-brand px-4 py-4 text-tertiary2 min-[320px]:px-4 min-[370px]:px-14 min-[1200px]:px-4 2xl:px-7"
        onClick={() => router.push("/destinations")}
      >
        <span className="text-[0.9rem] font-medium text-tertiary1 min-[370px]:text-base">
          Explore destinations
        </span>
        <BsArrowRight size={22} color="white" />
      </div>
      <div className="flex items-center gap-4">
        <div className="cursor-pointer rounded-full bg-brand p-3">
          <PiPlayBold color="white" size={17} />
        </div>
        <span className="cursor-pointer text-base font-medium text-brand">
          Watch video
        </span>
      </div>
    </div>
  );
};

export default HeroButtons;
