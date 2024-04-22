import Step from "./Step"

const Process = () => {
    return (
        <div className="flex flex-col gap-10 bg-white px-5 py-10 text-tertiary2 md:gap-[2rem] lg:gap-[3rem] lg:py-[4rem] min-[1200px]:px-[3rem] 2xl:px-[8.5rem]">
            <div className="flex max-w-[36rem] flex-col gap-5">
                <p className="text-lg font-bold text-brand">JOYFUL & FAST</p>
                <h2 className="text-[24px] font-bold lg:text-[28px] 2xl:text-[40px]">
                    It's just simple steps that turn your{" "}
                    <span className="text-brand">adventure into enjoyment</span>
                </h2>
                <h3 className="text-secondary lg:max-w-[23rem] xl:text-[17px]">
                    Turn your dream trip into reality with just a few clicks.
                    We'll make your journey unforgettable.
                </h3>
            </div>
            <div className="flex flex-col items-center gap-5 md:flex-row md:gap-2 lg:gap-4 xl:gap-8">
                <Step
                    no={1}
                    title="Select a destination"
                    description="From bustling cities to serene beaches, we offer something for every travel style."
                />
                <Step
                    no={2}
                    title="Submit a reservation"
                    description="Secure your hotel spot, grab meals from professionals and ensure an unforgettable stay!"
                />
                <Step
                    no={3}
                    title="Enjoy Adventure"
                    description="Crafted around your destination, your awaited itinerary ensures an enjoyable visit!"
                />
            </div>
        </div>
    )
}

export default Process
