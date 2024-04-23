import "@/app/globals.css"
import "@/components/travels/styles/travels.css"
import Header from "@/components/header/Header"
import DestinationsBanner from "@/components/destinations/DestinationsBanner"
import Footer from "@/components/footer/Footer"
import FeaturedDestinations from "@/components/destinations/FeaturedDestinations"

const Destinations = () => {
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
                " Embark on a safari adventure in Akagera Park. Witness a spectacle of wildlife including majestic lions and giraffes.",
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
                "  Embrace the emerald embrace of Gishwati Forest. Hike through a canopy teeming with chimpanzees and golden monkeys.",
            location: "Rwanda",
        },
    ]

      const lakes = [
          {
              name: "Lake Kivu",
              image: "lake_1",
              amount: 1200,
              description:
                  "Discover the serene allure of Lake Kivu, where azure waters meet lush greenery in a picturesque harmony",
              location: "Rwanda",
          },
          {
              name: "Lake Muhazi",
              image: "lake_2",
              amount: 800,
              description:
                  "Discover the tranquil charm of Lake Muhazi, a serene oasis bordered by verdant hills.",
              location: "Rwanda",
          },
          {
              name: "Lake Malawi",
              image: "lake_3",
              amount: 750,
              description:
                  "Dive into the mesmerizing blue depths of Lake Malawi, where vibrant aquatic life thrives amidst its serene shores.",
              location: "Malawi",
          },
          {
              name: "Lake Victoria",
              image: "lake_4",
              amount: 400,
              description:
                  "Embark on an adventure to Lake Victoria, Africa's largest lake, where shimmering waters teem with life",
              location: "Uganda",
          },
      ]

    return (
        <div className="flex w-full max-w-[125rem] flex-col text-white">
            <Header />
            <DestinationsBanner />
            <div className="flex w-full flex-col gap-[5rem] bg-white px-4 pb-[4rem] pt-[5rem] 2xl:px-[8rem]">
                <FeaturedDestinations
                    category="National Parks"
                    title="Wilderness Wonders: National Parks Edition"
                    featuredDestinations={parks}
                />
                <FeaturedDestinations
                    category="Lakes"
                    title="Tranquil Waters: Discover Nature's Masterpieces"
                    featuredDestinations={lakes}
                />
            </div>
            <Footer />
        </div>
    )
}

export default Destinations
