import React from "react";

const Explore = () => {
  return (
    <div className="w-full flex justify-center 2xl:px-[9.5rem] py-7 lg:py-[5rem] bg-white px-4 text-white min-[1200px]:px-[3rem]">
      <div
        className="h-[25rem] w-full border p-10 rounded-[20px] flex flex-col gap-4 justify-center bg-cover md:gap-6 "
        style={{
          backgroundImage:
            "linear-gradient(to right, black, transparent),url('/images/mountains.jpg')",
        }}
      >
        <h2 className="text-[#10A969] font-bold text-[20px]">Explore</h2>
        <p className="font-bold text-[24px] md:max-w-[25rem] md:text-[30px] lg:text-[40px]">
          Adventure has never been this easier{" "}
        </p>
        <span className="text-[#ffffffc2]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit
        </span>
        <button className="p-4 bg-[#ffffff28] rounded-md max-w-[22rem]">
          Explore Destinations
        </button>
      </div>
    </div>
  );
};

export default Explore;
