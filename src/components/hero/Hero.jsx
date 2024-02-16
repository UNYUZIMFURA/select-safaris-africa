import { PiPlayBold } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="flex flex-col gap-6 bg-[#0E150F] text-white min-[1200px]:flex-row min-[1200px]:justify-around">
      <div className="flex flex-col items-center gap-6 px-4 pt-[4.5rem] text-center min-[370px]:gap-8 min-[1200px]:w-1/2 min-[1200px]:items-start min-[1200px]:px-[3rem] min-[1200px]:text-start">
        <h1 className="text-sm font-bold text-[#10A969] min-[370px]:text-[16px] min-[1200px]:text-[20px]">
          SELECT SAFARIS EAST AFRICA CO.
        </h1>
        <p className="max-w-[32rem] text-2xl font-bold leading-[40px] min-[370px]:text-3xl min-[370px]:leading-[50px] min-[400px]:text-[36px] min-[700px]:text-5xl min-[700px]:leading-[70px] min-[1200px]:max-w-[90%] min-[1200px]:text-[60px] min-[1200px]:leading-[80px]">
          No dream, enjoy the adventure of East Africa with us
        </p>
        <span className="max-w-[35rem] text-[1rem] leading-[28px] text-[#88939E] min-[370px]:text-lg min-[370px]:leading-[31.25px] min-[400px]:px-3 min-[400px]:text-xl min-[400px]:leading-[32px] min-[1200px]:p-0 min-[1200px]:pr-8">
          Lorem ipsum dolor sit amet, consecteuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </span>
        <div className="flex flex-col items-center gap-6 min-[1200px]:flex-row">
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
      <div className="flex items-end justify-center gap-1 min-[1200px]:h-[738px] min-[1200px]:w-1/2">
        <div className="relative h-[150px] w-[30%] max-w-[200px] rounded-t-[144.5px] border min-[1200px]:h-[245px]"></div>
        <div className="relative h-[200px] w-[30%] max-w-[250px] rounded-t-[144.5px] border min-[1200px]:h-[458px]"></div>
        <div className="relative h-[300px] w-[40%] max-w-[330px] rounded-tl-[300px] border min-[1200px]:h-[738px]"></div>
      </div>
    </div>
  );
};

export default Hero;
