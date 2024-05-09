import Image from "next/image"

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center gap-6 bg-white py-10 text-center lg:flex-row lg:items-center lg:justify-between">
            <section className="flex flex-col items-center gap-10 px-4 md:px-10 lg:w-[60%] lg:pl-10 min-[1200px]:pl-[4rem] 2xl:pl-[8.5rem]">
                <div className="flex flex-col gap-2 text-start">
                    <h2 className="text-2xl font-bold text-tertiary2 md:max-w-[40rem] md:text-3xl md:leading-[3rem] lg:max-w-[35rem] lg:leading-[2.5rem] 2xl:max-w-[45rem] 2xl:text-4xl 2xl:leading-[3rem]">
                        Unforgettable Adventures & Empowering in East Africa
                        <span className="text-brand"> (Since 2018)</span>
                    </h2>
                    <span className="text-[1.1rem] leading-[2rem] text-[#363535] lg:max-w-[45rem] lg:px-0 xl:max-w-[52rem]">
                        Born from a passion for service and a love for East
                        Africa,
                        <span className="font-bold text-brand">
                            {" "}
                            Select Safaris Africa
                        </span>{" "}
                        was founded in 2018 by{" "}
                        <span className="font-bold text-brand">
                            Mr. Phillip.{" "}
                        </span>
                        Recognizing his talent for creating exceptional
                        experiences for international travelers,{" "}
                        <span className="font-bold text-brand">Phillip </span>
                        envisioned a company that not only crafted unforgettable
                        adventures but also serving back to the communities.
                        This is why 20% of the company profits directly support
                        vulnerable mothers struggling financially across East
                        Africa. We believe in sustainable tourism that enriches
                        both travelers and the local people
                    </span>
                </div>
                <div className="lg:max-[45rem] flex flex-col gap-4 text-start text-[1.1rem] leading-[1.8rem] text-[#363535] lg:px-0 xl:max-w-[52rem]">
                    <h2 className="text-2xl font-bold text-brand">
                        Why Choose Us?
                    </h2>
                    <div className="flex flex-col gap-2">
                        <p>
                            <span className="font-bold text-brand">
                                Expertly Crafted Tours:{" "}
                            </span>
                            We design immersive experiences that take you beyond
                            the tourist trail, showcasing the true essence of
                            East Africa.
                        </p>
                        <p>
                            <span className="font-bold text-brand">
                                Unwavering Commitment:
                            </span>{" "}
                            Your satisfaction is our priority. We go the extra
                            mile to ensure every detail is perfect and that you
                            create memories of a lifetime with affordable
                            budget.
                        </p>
                        <p>
                            <span className="font-bold text-brand">
                                Giving Back:{" "}
                            </span>
                            By traveling with us, you're not just a tourist,
                            you're a contributor. You're helping empower
                            vulnerable mothers and their young ones .
                        </p>
                    </div>
                </div>
            </section>
            <div className="relative z-10 hidden lg:block lg:h-[37rem] lg:w-[40%] 2xl:pl-44">
                <div className="absolute bottom-0 right-0 -z-10 h-full w-full cursor-pointer overflow-hidden rounded-bl-[300px] rounded-tl-[300px] bg-[#96c47f2f]">
                    <Image
                        src={"/images/woman.webp"}
                        alt=""
                        fill={true}
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
