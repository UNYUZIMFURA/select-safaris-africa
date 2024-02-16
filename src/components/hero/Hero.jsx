import { PiPlayBold } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="flex flex-col gap-6 bg-[#0E150F] text-white min-[1200px]:flex-row">
      <div className="flex w-full flex-col items-center gap-6 px-4 pt-[4.5rem] text-center min-[370px]:gap-8 min-[1200px]:w-[45%] min-[1200px]:items-start min-[1200px]:text-start min-[1200px]:gap-12 lg:pl-[3rem]">
        <h1 className="text-sm font-bold text-[#10A969] min-[370px]:text-[16px] min-[1200px]:text-[20px]">
          SELECT SAFARIS EAST AFRICA CO.
        </h1>
        <p className="max-w-[40rem] text-2xl font-bold leading-10 min-[370px]:text-[30px] min-[370px]:leading-[3.5rem] min-[400px]:text-[36px] min-[700px]:text-[2.8rem] min-[700px]:leading-[4.2rem] min-[1200px]:text-[50px]">
          No dream, enjoy the adventure of East Africa with us
        </p>
        <span className="max-w-[40rem] text-[1rem] leading-[28px] text-[#88939E] min-[370px]:text-lg min-[400px]:px-3 min-[400px]:text-xl">
          Lorem ipsum dolor sit amet, consecteuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </span>
        <div className="flex flex-col items-center gap-8 min-[1200px]:flex-row">
          <div className="flex cursor-pointer items-center gap-4 rounded-lg bg-[#10A969] px-3 py-4 text-black min-[320px]:px-4 min-[370px]:px-14">
            <span className="text-[0.9rem] font-medium text-white min-[370px]:text-base">
              Explore destinations
            </span>
            <BsArrowRight size={20} color="white" />
          </div>
          <div className="flex items-center gap-4">
            <div className="cursor-pointer rounded-full bg-[#10A969] p-3">
              <PiPlayBold color="white" size={17} />
            </div>
            <span className="cursor-pointer text-base font-medium text-[#10A969]">
              Watch video
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center gap-1 min-[1200px]:h-[710px] min-[1200px]:w-[55%]">
        <div className="relative h-[150px] w-[30%] rounded-t-[144.5px] border min-[900px]:h-[180px] lg:h-[250px] min-[1200px]:h-[215px]"></div>
        <div className="relative h-[200px] w-[30%] rounded-t-[144.5px] border min-[900px]:h-[230px] lg:h-[300px] min-[1200px]:h-[428px]"></div>
        <div className="relative h-[300px] w-[40%] rounded-tl-[300px] border min-[900px]:h-[330px] lg:h-[400px] min-[1200px]:h-[708px]"></div>
      </div>
    </div>
  );
};

export default Hero;
