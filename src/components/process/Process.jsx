import Step from "./Step";

const Process = () => {
  return (
    <div className="py-8 px-5 flex flex-col gap-6 bg-black text-white">
      <div className="flex flex-col gap-5">
        <p className="text-[#10A969] text-[20px] font-bold">JOYFUL & FAST</p>
        <h2 className="text-[24px] font-bold">
          It's just simple steps that turn your{" "}
          <span className="text-[#10A969]">adventure into enjoyment</span>
        </h2>
        <h3 className="text-[#ffffffc2]">
          Lorem ipsum dolor sit amet, consectetuer adipscing elit. Donec odio.
        </h3>
      </div>
      <div className="flex flex-col items-center gap-5">
        <Step no="1" title="Select a destination" />
        <Step no="2" title="Submit your reservation" />
        <Step no="3" title="Enjoy stressless adventure on arrival" />
      </div>
    </div>
  );
};

export default Process;
