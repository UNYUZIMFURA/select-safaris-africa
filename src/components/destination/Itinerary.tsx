import "./itinerary.css"
import "@/app/globals.css"
import Image from "next/image"

const Itinerary = () => {
    const itineraryDays = [
        {
            title: "Day 1: Kigali to Volcano National Park",
            activity:
                "Wake up early in Kigali, embark on a scenic journey to Volcanoes National Park. Arrive in Kinigi, a charming town nestled at the foot of Virunga Mountains. Check into a comfortable lodge amidst stunning scenery. Receive a briefing on gorilla trekking and responsible practices. Enjoy dinner and rest for the next day's adventure.",
            image: "wildlife_1.webp",
        },
        {
            title: "Day 2: Unforgettable Gorilla trek in the Volcano National Park",
            activity:
                "Fuel your adventure with breakfast at the hotel bar, savoring Rwanda's invigorating coffee. Prepare for gorilla trekking with essentials in your daypack. Drive to Volcano National Park headquarters for trek preparations. Encounter gorilla families in their natural habitat with expert guidance. Capture captivating photos and gain deeper insights into their behaviors. Conclude the encounter and return to the hotel for a relaxing evening.",
            image: "wildlife_3.webp",
        },
        {
            title: " Day 3: Iby'iwacu Cultural Village Visit and the Dian Fossey Tomb Hike",
            activity:
                "Conclude your Volcanoes National Park adventure with a visit to Iby'iwacu Cultural Village. Immerse in Rwandan traditions through interactive experiences and cultural performances. Then, hike to Dian Fossey's Tomb, honoring her legacy in gorilla conservation amidst breathtaking mountain views. Return to your lodge in Kinigi, reflecting on the day's experiences. Prepare for departure to Kigali, cherishing newfound appreciation for Rwanda's rich heritage and natural beauty.",
            image: "waterbody_4.webp",
        },
        {
            title: "Day 4: Departure back to Kigali",
            activity:
                "With a heart brimming with memories, depart Kinigi carrying a piece of Rwanda's magic back to Kigali.",
            image: "hotel.webp",
        },
    ]
    return (
        <section className="flex flex-col items-center gap-10 bg-white py-10 text-secondary md:gap-[4rem]">
            <div className="flex max-w-[45rem] flex-col items-center px-2 text-center leading-[28px]">
                <h2 className="text-2xl font-bold text-[#1E1E1E]">
                    4 days Gorilla Magic with Select Safaris
                </h2>
            </div>
            <div className="timeline-items relative mx-auto flex max-w-[1200px] flex-col gap-8 px-1">
                {itineraryDays.map((el, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} timeline-item gap-5 md:w-full`}
                    >
                        <div className="absolute left-0 top-[10px] flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-brand text-white md:left-[calc(50%-15px)]">
                            <span>{index + 1}</span>
                        </div>
                        <div
                            className={`flex w-full flex-col gap-3 pl-[38px] pt-[10px] text-start md:w-1/2 ${index % 2 === 0 ? "md:pl-[15px] md:pr-[30px]" : "md:pl-[52px] md:pr-[15px]"} leading-[28px]`}
                        >
                            <h3 className="text-lg font-bold text-brand">
                                {el.title}
                            </h3>
                            <p>{el.activity}</p>
                        </div>
                        <div
                            className={`load-dark relative ml-[30px] h-[300px] w-[calc(100%-40px)] cursor-pointer overflow-hidden rounded-xl md:w-[calc(50%-60px)] ${index % 2 === 0 ? "md:ml-[30px]" : "md:mr-[30px]"} md:m-0 md:mt-1`}
                        >
                            <Image
                                src={`/images/${el.image}`}
                                fill={true}
                                alt=""
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Itinerary
