/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="relative flex flex-col lg:flex-row gap-6 items-center lg:justify-between lg:px-0 lg:py-[3rem] lg:items-start text-center px-4 2xl:py-[4rem] py-8 bg-white">
      <div className="2xl:py-[4rem] lg:pl-10 min-[1200px]:pl-[4rem] 2xl:pl-[8.5rem] flex flex-col items-center gap-7 lg:w-1/2 lg:items-start lg:text-start">
        <span className="text-brand font-bold text-[22px]">JOYFUL & FAST</span>
        <h2 className="text-tertiary2 text-2xl md:text-3xl font-bold md:max-w-[40rem] lg:max-w-[35rem] md:leading-[3rem] lg:leading-[2.5rem] xl:text-4xl xl:leading-[3.5rem] xl:max-w-[45rem]">
          We're just a small dedicated team that believes adventures in{" "}
          <span className="text-brand">East Africa</span> can be better.
        </h2>
        <span className="text-secondary leading-[1.8rem] lg:max-w-[45rem] xl:max-w-[52rem] xl:leading-[2rem] md:px-10 lg:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </span>
        <span className="text-secondary leading-[1.8rem] lg:max-w-[45rem] xl:max-w-[52rem] xl:leading-[2rem] md:px-10 lg:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </span>
      </div>
      <div className="2xl:pl-44 lg:py-24 z-10 py-8 relative">
        <Image
          src="/images/team.png"
          alt=""
          height={400}
          width={400}
          className="lg:h-[400px] lg:w-[450px] xl:h-[430px] xl:w-[480px] 2xl:-translate-x-44"
        />
        <div className="border-l border-t border-b border-[#96c47fe5] hidden lg:flex -z-10 w-11/12 h-full bg-[#96c47f2f] absolute bottom-0 right-0  rounded-tl-[300px] rounded-bl-[300px]"></div>
      </div>
    </div>
  );
};

export default AboutUs;
