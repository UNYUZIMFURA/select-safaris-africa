import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="relative flex flex-col lg:flex-row gap-6 items-center lg:justify-between lg:px-0 lg:py-[3rem] lg:items-start text-center px-4 py-8 bg-white">
      <div className="flex flex-col items-center gap-7 lg:w-1/2 lg:items-start lg:text-start lg:pl-10 min-[1200px]:pl-[4rem] 2xl:py-[1rem] 2xl:pl-[8.5rem] ">
        <h2 className="text-tertiary2 text-2xl md:text-3xl font-bold md:max-w-[40rem] lg:max-w-[35rem] md:leading-[3rem] lg:leading-[2.5rem] 2xl:text-4xl 2xl:leading-[3.5rem] 2xl:max-w-[45rem]">
          Let Select Safaris Africa Co. show you the soul of
          <span className="text-brand"> Africa</span>
        </h2>
        <span className="text-secondary leading-[1.8rem] lg:max-w-[45rem] xl:max-w-[52rem] md:px-10 lg:px-0">
          Select Safaris Africa is a locally based top leading tourism company.
          It is beyond a tour operator agency but also a trusted team fueled by
          a deep love for Africa with authenticity towards our service in
          addition to that Select Safaris Africa has got 11 years of experience
          in Africa's Tourism industry with our team of local experts, seasoned
          guides, and travel enthusiasts and hence ensuring a welcoming and
          supportive environment throughout your adventure.
        </span>
        <span className="text-secondary leading-[1.8rem] lg:max-w-[45rem] md:px-10 lg:px-0">
          For 11 years, Select Safaris Africa Co. has been a trusted guide to
          exploring the wonders of Africa. We curate a diverse range of safaris
          and itineraries, from thrilling gorilla and chimpanzee trekking to
          unforgettable game drives across breathtaking national parks. At
          Select Safaris Africa,{" "}
          <span className="text-brand font-bold">
            customization is our passion.
          </span>{" "}
          Every safari suggestion is adaptable, and we're happy to design
          entirely new itineraries to create the African adventure of your
          dreams
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
