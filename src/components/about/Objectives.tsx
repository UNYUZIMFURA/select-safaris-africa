import Objective from "./Objective"

const Objectives = () => {
    return (
        <div
            className="flex flex-col items-center gap-14 bg-[#F5FBFA] bg-cover px-4 py-8 lg:pl-10 min-[1200px]:pl-[4rem] xl:py-[6rem] 2xl:gap-20 2xl:pl-[8.5rem]"
            style={{
                backgroundPosition: "50% 70%",
                backgroundImage:
                    "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('/images/park_3.webp')",
            }}
        >
            <div className="flex max-w-[30rem] flex-col items-center gap-5 text-center lg:max-w-[45rem]">
                <span className="text-xl font-bold text-brand">FOUNDATION UNVEILED</span>
                <h2 className="text-2xl text-white font-bold leading-10 text-tertiary2 md:text-[1.6rem] lg:text-[1.9rem] xl:text-[2.2rem] xl:leading-[3rem] 2xl:text-[2.3rem]">
                    Our Guiding Principles
                </h2>
            </div>
            <div className="flex flex-col items-center gap-5 md:gap-2 min-[880px]:flex-row lg:gap-4 xl:gap-8">
                <Objective
                   image="mission"
                    title="Our mission"
                    description="We purpose to design and deliver unforgettable adventures that immerse our guests in local cultures, inspire personal growth, and create memories that last a lifetime."
                />
                <Objective
                    image="vision"
                    title="Our vision"
                    description="We aim to be the leading force in crafting transformative travel experiences that ignite a passion for exploration of Africa's mysterious nature"
                />
                <Objective
                    image="values"
                    title="Our values"
                    description="Building success and trust starts with our core values which are: Guest Centricity, Authenticity, Integrity, and Sustainability"
                />
            </div>
        </div>
    )
}

export default Objectives
