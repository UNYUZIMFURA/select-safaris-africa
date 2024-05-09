import "@/components/travels/styles/travels.css"
import Travel from "@/components/travels/Travel"

const parks = [
    {
        name: "Virunga National Park",
        image: "park_1",
        amount: 1500,
        description:
            "Embark on an awe-inspiring journey through Virunga National Park, home to the endangered mountain gorillas",
        location: "Rwanda",
    },
    {
        name: "Akagera National Park",
        image: "park_2",
        amount: 850,
        description:
            " Embark on a safari adventure in Akagera Park. Witness a spectacle of wildlife, from majestic lions to graceful giraffes.",
        location: "Rwanda",
    },
    {
        name: "Nyungwe National Park",
        image: "park_3",
        amount: 700,
        description:
            "Unveil the secrets of Nyungwe Park. Rare chimps, vibrant birds, cascading waterfalls.",
        location: "Rwanda",
    },
    {
        name: "Gishwati National Park",
        image: "park_4",
        amount: 500,
        description:
            "Embrace the emerald embrace of Gishwati Forest. Hike through a canopy teeming with chimpanzees and golden monkeys.",
        location: "Rwanda",
    },
]

const DestinationsRecommended = () => {
    return (
        <div className="flex flex-col gap-6 bg-white py-10 min-[1200px]:pl-[4rem] 2xl:pl-[8.5rem] ">
            <div className="flex flex-col gap-4 pl-2">
                <span className="font-bold text-brand">TRAVELS</span>
                <h2 className="text-[24px] font-bold text-tertiary2 lg:text-[28px]">
                    More like this
                </h2>
                <span className="max-w-[34rem] text-lg text-secondary">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros.
                </span>
            </div>
            <div className="travels">
                {parks.map((el, index) => (
                    <Travel
                        key={index}
                        name={el.name}
                        image={el.image}
                        amount={el.amount}
                        location={el.location}
                        description={el.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default DestinationsRecommended
