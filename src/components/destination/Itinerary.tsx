import "./itinerary.css"
import Image from "next/image"

const Itinerary = () => {
  const itineraryDays = [
    {
      activity: "",
      image: "wildlife_1.webp"
    },
    {
      activity: "",
      image:"wildlife_3.webp"
    },
    {
      activity: "",
      image:"waterbody_4.webp"
    },
    {
      activity: "",
      image:"hotel.webp"
    }
  ]
    return (
      <section className="bg-white flex flex-col items-center gap-10 min-h-screen py-10 md:gap-[4rem] text-secondary">
        <div className="flex flex-col gap-4 items-center text-center max-w-[45rem] px-2 leading-[28px]">
          <h2 className="text-[#1E1E1E] font-bold text-2xl">Itinerary</h2>
          <p>
            Customize your Safari! Our itineraries were carefully crafted by our
            safari consultants. They can be used as blue prints and customized
            according to your preferences, duration and budget.
          </p>
        </div>
        <div className="timeline-items flex flex-col px-1 gap-8 relative max-w-[1200px] mx-auto">
          {itineraryDays.map((el, index) => (
            <div
              key={index}
              className={`flex flex-col relative ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} timeline-item gap-5 md:w-full`}
            >
              <div className="bg-brand text-white h-[30px] w-[30px] absolute left-0 rounded-full md:left-[calc(50%-15px)] top-[10px] flex items-center justify-center">
                <span>{index + 1}</span>
              </div>
              <div
                className={`pl-[38px] pt-[10px] flex flex-col text-start gap-3 w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-[30px] md:pl-[15px]":"md:pl-[52px] md:pr-[15px]"} leading-[28px]`}
              >
                <h3 className="text-brand font-bold text-lg">
                   Activity of Day {index + 1}
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  aliquam quaerat dolor, repellat dolore magnam a unde, ad
                  dolorem neque corrupti illo quae ipsam ipsum similique vel
                  earum atque possimus. aliquam quaerat dolor, repellat dolore
                  magnam a unde, possimus. aliquam quaerat dolor, repellat
                  dolore magnam a unde,
                </p>
              </div>
              <div
                className={`h-[300px] w-[calc(100%-40px)] cursor-pointer relative overflow-hidden rounded-xl ml-[30px] md:w-[calc(50%-60px)] ${index % 2 === 0 ? "md:ml-[30px]" : "md:mr-[30px]"} md:mt-1 md:m-0`}
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