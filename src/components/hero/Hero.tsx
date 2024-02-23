import Image from "next/image";
import "@/app/globals.css";
import HeroButtons from "./HeroButtons";

const Hero = () => {
  return (
    <div className="flex flex-col gap-6 bg-theme1 text-tertiary1 min-[1200px]:flex-row min-[1200px]:justify-between min-[1200px]:pl-[3rem] min-[1200px]:pt-[2rem] min-[1200px] 2xl:pl-[8rem]">
      <div className="flex w-full flex-col items-center gap-6 px-4 pt-[4.5rem] text-center min-[370px]:gap-8 min-[1200px]:w-[40%] min-[1200px]:items-start min-[1200px]:text-start min-[1200px]:gap-12">
        <h1 className="text-sm font-bold text-[#10A969] min-[370px]:text-[16px] min-[1200px]:text-[18px] 2xl:text-[20px]">
          SELECT SAFARIS AFRICA CO.
        </h1>
        <p className="max-w-[50rem] text-2xl font-bold leading-10 min-[370px]:text-[30px] min-[370px]:leading-[3.5rem] min-[400px]:text-[36px] min-[700px]:text-[2.8rem] min-[700px]:leading-[4.2rem] min-[1200px]:text-[45px] 2xl:leading-[5rem] 2xl:text-[56px]">
          No dream, enjoy the adventure of Africa with us
        </p>
        <span className="max-w-[32rem] text-[1rem] leading-[28px] text-[#88939E] min-[370px]:text-lg min-[400px]:text-lg">
          Lorem ipsum dolor sit amet, consecteuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </span>
       <HeroButtons />
      </div>
      <div className="flex items-end justify-center gap-1 min-[1200px]:h-[650px] min-[1200px]:w-[60%]">
        <div className="load-light overflow-hidden relative h-[150px] w-[30%] rounded-t-[144.5px] min-[900px]:h-[180px] lg:h-[250px] min-[1200px]:h-[215px] min-[1200px]:w-[300px cursor-pointer">
          <Image
            src={"/images/mountain.webp"}
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="load-light overflow-hidden relative h-[200px] w-[32%] rounded-t-[144.5px] min-[900px]:h-[230px] lg:h-[300px] min-[1200px]:h-[428px] cursor-pointer">
          <Image
            src={"/images/gorilla.webp"}
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="load-light relative overflow-hidden h-[300px] w-[38%] rounded-tl-[300px] min-[900px]:h-[330px] lg:h-[400px] min-[1200px]:h-full cursor-pointer">
          <Image
            src={"/images/elephant.webp"}
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
