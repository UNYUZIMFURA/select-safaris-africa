import Review from "./Review";

const Reviews = () => {
  return (
    <div className="flex flex-col gap-[5rem] px-4 py-8 text-black bg-[#EBFCF5] lg:py-[5rem] lg:px-[2rem] 2xl:px-[9.5rem] min-[1200px]:px-[3rem]">
      <div className="flex flex-col text-center gap-8">
        <h2 className="text-[#10A969] font-bold text-[20px]">FROM CLIENT</h2>
        <p className="font-extrabold text-2xl leading-[33px]">
          What <span className="text-[#10A969]">our clients</span> have been
          talking about us
        </p>
      </div>
      <div className="flex flex-col gap-[5rem] items-center md:flex-row md:gap-2 min-[1200px]:gap-8">
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default Reviews;
