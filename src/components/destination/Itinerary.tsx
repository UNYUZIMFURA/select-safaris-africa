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
      title:
        " Day 3: Iby'iwacu Cultural Village Visit and the Dian Fossey Tomb Hike",
      activity:
        "Conclude your Volcanoes National Park adventure with a visit to Iby'iwacu Cultural Village. Immerse in Rwandan traditions through interactive experiences and cultural performances. Then, hike to Dian Fossey's Tomb, honoring her legacy in gorilla conservation amidst breathtaking mountain views. Return to your lodge in Kinigi, reflecting on the day's experiences. Prepare for departure to Kigali, cherishing newfound appreciation for Rwanda's rich heritage and natural beauty.",
      image: "waterbody_4.webp",
    },
    {
      title: "Day 4: Departure back to Kigali",
      activity: "With a heart brimming with memories, depart Kinigi carrying a piece of Rwanda's magic back to Kigali.",
      image: "hotel.webp",
    },
  ];
    return (
      <section className="bg-white flex flex-col items-center gap-10 py-10 md:gap-[4rem] text-secondary">
        <div className="flex flex-col items-center text-center max-w-[45rem] px-2 leading-[28px]">
          <h2 className="text-[#1E1E1E] font-bold text-2xl">4 days Gorilla Magic with Select Safaris</h2>
        </div>
        <div className="timeline-items flex flex-col px-1 gap-8 relative max-w-[1200px] mx-auto">
          {itineraryDays.map((el, index) => (
            <div
              key={index}
              className={`flex flex-col relative ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} timeline-item gap-5 md:w-full`}
            >
              <div className="cursor-pointer bg-brand text-white h-[30px] w-[30px] absolute left-0 rounded-full md:left-[calc(50%-15px)] top-[10px] flex items-center justify-center">
                <span>{index + 1}</span>
              </div>
              <div
                className={`pl-[38px] pt-[10px] flex flex-col text-start gap-3 w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-[30px] md:pl-[15px]":"md:pl-[52px] md:pr-[15px]"} leading-[28px]`}
              >
                <h3 className="text-brand font-bold text-lg">
                  {el.title}
                </h3>
                <p>
                 {el.activity}
                </p>
              </div>
              <div
                className={`load-dark h-[300px] w-[calc(100%-40px)] cursor-pointer relative overflow-hidden rounded-xl ml-[30px] md:w-[calc(50%-60px)] ${index % 2 === 0 ? "md:ml-[30px]" : "md:mr-[30px]"} md:mt-1 md:m-0`}
              >
                <Image src={`/images/${el.image}`} fill={true} alt="" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}

export default Itinerary