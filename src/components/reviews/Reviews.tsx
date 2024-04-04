"use client"
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="flex flex-col gap-[6rem] md:gap-[6rem] px-4 py-8 text-tertiary2 bg-white lg:py-[4rem] lg:px-[2rem] 2xl:px-[9rem] min-[1200px]:px-[3rem]">
      <div className="flex flex-col items-center text-center gap-6 md:gap-4">
        <h2 className="text-brand font-bold text-[20px]">FROM CLIENT</h2>
        <p className="font-extrabold text-2xl leading-[33px] lg:text-3xl lg:max-w-[25rem] lg:leading-[45px]">
          What <span className="text-brand">our clients</span> have been talking
          about us
        </p>
      </div>
      <div className="flex flex-col gap-[5rem] items-center md:flex-row md:justify-center md:gap-2 min-[1200px]:gap-8">
          <Review />
          <Review />
          <Review />
      </div>
    </div>
  );
};

export default Reviews;
