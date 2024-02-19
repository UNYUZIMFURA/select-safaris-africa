import Step from "./Step";

const Process = () => {
  return (
    <div className="py-8 px-5 flex flex-col gap-6 bg-black text-white 2xl:px-[8rem] min-[1200px]:px-[3rem] md:gap-[2rem] lg:py-[4rem] lg:gap-[3rem]">
      <div className="flex flex-col gap-5 max-w-[36rem]">
        <p className="text-[#10A969] text-[20px] font-bold">JOYFUL & FAST</p>
        <h2 className="text-[24px] font-bold lg:text-[32px] xl:text-[40px]">
          It's just simple steps that turn your{" "}
          <span className="text-[#10A969]">adventure into enjoyment</span>
        </h2>
        <h3 className="text-[#ffffffc2] lg:max-w-[23rem] xl:text-[17px]">
          Lorem ipsum dolor sit amet, consectetuer adipscing elit. Donec odio.
        </h3>
      </div>
      <div className="flex flex-col items-center gap-5 md:flex-row md:gap-2 lg:gap-4 xl:gap-8">
        <Step no="1" title="Select a destination" />
        <Step no="2" title="Submit a reservation" />
        <Step no="3" title="Enjoy Adventure" />
      </div>
    </div>
  );
};

export default Process;
