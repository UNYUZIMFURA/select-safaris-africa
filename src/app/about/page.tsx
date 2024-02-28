import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";

const page = () => {
  return (
    <div className="max-w-[125rem] flex flex-col w-full text-white">
      <Header />
      <div
        className="relative py-[5rem] w-full bg-slate-200 flex flex-col gap-8 bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent),url('/images/mountain.webp')",
        }}
      >
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-4xl font-bold">About us</h2>
          <Image src="/images/underline.png" alt="" height={1} width={190} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 items-center lg:justify-center md:py-[4rem] lg:items-start text-center px-4 py-8 bg-white">
        <div className="flex flex-col gap-7 lg:w-1/2 lg:items-start lg:text-start">
        <span className="text-brand font-bold text-[20px]">JOYFUL & FAST</span>
        <h2 className="text-tertiary2 text-2xl md:text-3xl font-bold lg:max-w-[35rem] md:leading-[3rem] lg:leading-[2.5rem]">
          We're just a dedicated team that believes adventures in{" "}
          <span className="text-brand">East Africa</span> can be better
        </h2>
        <span className="text-secondary leading-[1.8rem] lg:max-w-[45rem] md:px-10 lg:px-0">
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
          <Image src="/images/team.png" alt="" height={500} width={500} className="py-12 px-8" />
      </div>
      <Footer />
    </div>
  );
};

export default page;
