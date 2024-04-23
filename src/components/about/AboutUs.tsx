import Image from "next/image"

const AboutUs = () => {
    return (
        <div className="relative flex flex-col items-center gap-6 bg-white px-4 py-8 text-center lg:flex-row lg:items-start lg:justify-between lg:px-0 lg:py-[3rem]">
            <div className="flex flex-col items-center gap-7 lg:w-1/2 lg:items-start lg:pl-10 lg:text-start min-[1200px]:pl-[4rem] 2xl:py-[1rem] 2xl:pl-[8.5rem] ">
                <h2 className="text-2xl font-bold text-tertiary2 md:max-w-[40rem] md:text-3xl md:leading-[3rem] lg:max-w-[35rem] lg:leading-[2.5rem] 2xl:max-w-[45rem] 2xl:text-4xl 2xl:leading-[3.5rem]">
                    Let Select Safaris Africa show you the soul of
                    <span className="text-brand"> Africa</span>
                </h2>
                <span className="text-[1.1rem] leading-[1.8rem] text-[#000B0B] md:px-10 lg:max-w-[45rem] lg:px-0 xl:max-w-[52rem]">
                    Select Safaris Africa is a locally based top leading tourism
                    company. It is beyond a tour operator agency but also a
                    trusted team fueled by a deep love for Africa with
                    authenticity towards our service in addition to that Select
                    Safaris Africa has got 11 years of experience in Africa's
                    Tourism industry with our team of local experts, seasoned
                    guides, and travel enthusiasts and hence ensuring a
                    welcoming and supportive environment throughout your
                    adventure.
                </span>
                <span className="text-[1.1rem] leading-[1.8rem] text-[#000B0B] md:px-10 lg:max-w-[45rem] lg:px-0">
                    For 11 years, Select Safaris Africa has been a trusted guide
                    to exploring the wonders of Africa. We curate a diverse
                    range of safaris and itineraries, from thrilling gorilla and
                    chimpanzee trekking to unforgettable game drives across
                    breathtaking national parks. At Select Safaris Africa,{" "}
                    <span className="font-bold text-brand">
                        customization is our passion.
                    </span>{" "}
                    Every safari suggestion is adaptable, and we're happy to
                    design entirely new itineraries to create the African
                    adventure of your dreams
                </span>
            </div>
            <div className="relative z-10 flex w-full justify-center py-14 lg:block lg:h-[33rem] lg:w-1/2 xl:w-[40rem] 2xl:pl-44 ">
                <Image
                    src="/images/elephants.png"
                    alt="Image showing elephants"
                    height={100}
                    width={400}
                    className="lg:h-[250px] lg:w-[500px] lg:translate-y-[6rem] 2xl:-translate-x-[15.5rem]"
                />
                <div className="absolute bottom-0 right-0 -z-10 hidden h-full w-11/12 rounded-bl-[300px] rounded-tl-[300px] bg-[#96c47f2f] lg:flex"></div>
            </div>
        </div>
    )
}

export default AboutUs
