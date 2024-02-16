import { FaLocationDot } from "react-icons/fa6";

const Travel = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-xl border border-[#00000094] px-5 py-4 shadow-lg xl:max-w-[380px]">
      <div className="h-[20rem] w-full cursor-pointer rounded-xl border border-[#0000006b] min-[600px]:h-[22rem] min-[700px]:h-[20rem]"></div>
      <div className="flex w-full flex-col gap-4 xl:gap-3">
        <span className="cursor-pointer text-lg font-semibold">
          Muhazi lake resort
        </span>
        <div className="flex justify-between">
          <span className="font-semibold text-[#10A969]">RWF 4,500</span>
          <div className="flex items-center gap-3">
            <FaLocationDot color="#10A969" />
            <span className="text-base font-medium text-[#10A969]">Kigali</span>
          </div>
        </div>
        <span className="text-base font-medium text-[#AAB2BA]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit
        </span>
        <button className="cursor-pointer rounded-lg bg-[#10A969] p-4 font-medium text-white">
          Details
        </button>
      </div>
    </div>
  );
};

export default Travel;
