import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div className="relative flex flex-col items-center bg-white px-4 pb-[3rem] pt-[5.5rem] rounded-3xl">
        <div className="h-[7.5rem] w-[7.5rem] flex items-center justify-center bg-white absolute -top-14 rounded-full p-5">
            <div className="h-full w-full border border-black rounded-full cursor-pointer"></div>
        </div>
      <div className="flex flex-col gap-6 text-center items-center">
        <h2 className="font-bold text-[22px] md:text-[24px]">Jeff Davis</h2>
        <span className="text-[#AAB2BA] leading-[28px] sm:max-w-[28rem] font-light">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh viverra non semper suscipit posuere a pede
        </span>
        <div className="flex items-center gap-4">
          <FaStar color="#10A969" size={20} />
          <FaStar color="#10A969" size={20} />
          <FaStar color="#10A969" size={20} />
          <FaStar color="#10A969" size={20} />
          <FaRegStar color="#10A969" size={20} />
        </div>
      </div>
    </div>
  );
}

export default Review