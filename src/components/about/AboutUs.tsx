/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="relative flex flex-col lg:flex-row gap-6 items-center lg:justify-between lg:px-0 lg:py-[3rem] lg:items-start text-center px-4 py-8 bg-white">
      <div className="flex flex-col items-center gap-7 lg:w-1/2 lg:items-start lg:text-start lg:pl-10 min-[1200px]:pl-[4rem] 2xl:py-[1rem] 2xl:pl-[8.5rem] ">
        <span className="text-brand font-bold text-[22px]">JOYFUL & FAST</span>
        <h2 className="text-tertiary2 text-2xl md:text-3xl font-bold md:max-w-[40rem] lg:max-w-[35rem] md:leading-[3rem] lg:leading-[2.5rem] xl:text-4xl xl:leading-[3.5rem] xl:max-w-[45rem]">
          We're just a small dedicated team that believes adventures in{" "}
          <span className="text-brand">East Africa</span> can be better.
        </h2>
        <span className="text-secondary leading-[1.8rem] lg:max-w-[45rem] xl:max-w-[52rem] md:px-10 lg:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </span>
        <span className="text-secondary leading-[1.8rem] lg:max-w-[45rem] md:px-10 lg:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </span>
      </div>
      <div className="flex justify-center relative z-10 py-14 w-full xl:w-[40rem] 2xl:pl-44 lg:block lg:h-[33rem] lg:w-1/2 ">
        <Image
          src="/images/elephants.png"
          alt="Image showing elephants"
          height={100}
          width={400}
          className="lg:translate-y-[6rem] lg:h-[250px] lg:w-[500px] 2xl:-translate-x-[15.5rem]"
        />
        <div className="h-full w-11/12 hidden -z-10 bg-[#96c47f2f] absolute bottom-0 right-0 rounded-tl-[300px] rounded-bl-[300px] lg:flex"></div>
      </div>
    </div>
  );
};

export default AboutUs;
