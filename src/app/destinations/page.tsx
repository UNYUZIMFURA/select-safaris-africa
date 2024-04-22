import "@/app/globals.css"
import "@/components/travels/styles/travels.css"
import { BiSearch } from "react-icons/bi"
import Image from "next/image"
import Header from "@/components/header/Header"
import Travel from "@/components/travels/Travel"
import Footer from "@/components/footer/Footer"

const Destinations = () => {
    const travelCategories = [
        {
            title: "Game Parks",
            image: "lion",
        },
        {
            title: "Restaurants and Resorts",
            image: "restaurant",
        },
        {
            title: "Lakes and rivers",
            image: "lake",
        },
        {
            title: "Hotels and Motels",
            image: "hotel",
        },
    ]
    return (
        <div className="flex w-full max-w-[125rem] flex-col text-white">
            <Header />
            <div
                className="relative flex w-full flex-col gap-8 bg-slate-200 bg-cover py-[4rem] pb-[8rem]"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent),url('/images/mountain.webp')",
                }}
            >
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-4xl font-bold">Destinations</h2>
                    <Image
                        src="/images/underline.png"
                        alt=""
                        height={1}
                        width={210}
                    />
                </div>
                <div className="flex w-full flex-wrap justify-center gap-3">
                    <button className="rounded-full bg-theme3 px-8 py-4">
                        Hotels
                    </button>
                    <button className="rounded-full bg-theme3 px-8 py-4">
                        Bars and Restaurants
                    </button>
                    <button className="rounded-full bg-theme3 px-8 py-4">
                        Game parks
                    </button>
                    <button className="rounded-full bg-theme3 px-8 py-4">
                        Lakes and rivers
                    </button>
                </div>
                <form className="absolute -bottom-8 mx-auto w-full px-7 md:left-0 md:right-0 md:max-w-[55rem]">
                    <div className="flex h-[4.3rem] w-full items-center justify-between rounded-full bg-white pr-2 shadow-lg md:max-w-[80rem]">
                        <input
                            className="h-full w-[75%] rounded-l-full pl-7 text-tertiary2"
                            placeholder="Where to?"
                        />
                        <div className="flex h-4/5 cursor-pointer items-center justify-center gap-6 rounded-full bg-brand px-6 md:px-8">
                            <span className="hidden md:flex">Search</span>
                            <BiSearch size={20} className="cursor-pointer" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex w-full flex-col gap-[5rem] bg-white px-4 pb-[4rem] pt-[5rem] 2xl:px-[8rem]">
                <div className="flex flex-col gap-6 bg-white">
                    <div className="flex flex-col gap-4 pl-2">
                        <span className="font-bold text-brand">
                            RECOMMENDED
                        </span>
                        <h2 className="text-[24px] font-bold text-tertiary2 lg:text-[28px]">
                            Most visited places
                        </h2>
                        <span className="max-w-[34rem] text-lg text-secondary">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                        </span>
                    </div>
                    <div className="travels">
                        <Travel img="hand" name="Kigali City" />
                        <Travel img="mountain" name="Gishwati Forest" />
                        <Travel img="road" name="Nyungwe Park" />
                        <Travel img="zebra" name="Akagera Park" />
                    </div>
                </div>
                <div className="flex flex-col gap-6 bg-white">
                    <div className="flex flex-col gap-4 pl-2">
                        <span className="font-bold text-brand">
                            NATIONAL PARKS
                        </span>
                        <h2 className="text-[24px] font-bold text-tertiary2 lg:text-[28px]">
                            Most visited places
                        </h2>
                        <span className="max-w-[34rem] text-lg text-secondary">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                        </span>
                    </div>
                    <div className="travels">
                        <Travel img="hand" name="Kigali City" />
                        <Travel img="mountain" name="Gishwati Forest" />
                        <Travel img="road" name="Nyungwe Park" />
                        <Travel img="zebra" name="Akagera Park" />
                    </div>
                </div>
                <div className="flex flex-col gap-6 bg-white">
                    <div className="flex flex-col gap-4 pl-2">
                        <span className="font-bold text-brand">VOLCANOES</span>
                        <h2 className="text-[24px] font-bold text-tertiary2 lg:text-[28px]">
                            Suggested for you
                        </h2>
                        <span className="max-w-[34rem] text-lg text-secondary">
                            Explore the 5 Volcanoes in Rwanda with the best tour
                            agency in Africa
                        </span>
                    </div>
                    <div className="travels">
                        <Travel img="hand" name="Kigali City" />
                        <Travel img="mountain" name="Gishwati Forest" />
                        <Travel img="road" name="Nyungwe Park" />
                        <Travel img="zebra" name="Akagera Park" />
                    </div>
                </div>
                <div className="flex flex-col gap-6 bg-white">
                    <div className="flex flex-col gap-4 pl-2">
                        <span className="font-bold text-brand">LAKES</span>
                        <h2 className="text-[24px] font-bold text-tertiary2 lg:text-[28px]">
                            Suggested for you
                        </h2>
                        <span className="max-w-[34rem] text-lg text-secondary">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Donec odio. Quisque volutpat mattis eros.
                        </span>
                    </div>
                    <div className="travels">
                        <Travel img="hand" name="Kigali City" />
                        <Travel img="mountain" name="Gishwati Forest" />
                        <Travel img="road" name="Nyungwe Park" />
                        <Travel img="zebra" name="Akagera Park" />
                    </div>
                </div>
                {/* <div className="flex flex-col bg-white gap-6">
          <div className="flex flex-col gap-4 pl-2">
            <span className="text-brand font-bold">CATEGORIES</span>
            <h2 className="font-bold text-tertiary2 text-[24px] lg:text-[28px]">
              Book by Category
            </h2>
            <span className="text-lg text-secondary max-w-[34rem]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </span>
          </div>
          <div className="travels">
            {travelCategories.map((el, index) => (
              <div
                className="load-dark w-full relative cursor-pointer rounded-xl"
                key={index}
              >
                <div className="overflow-hidden relative h-[22rem] rounded-xl">
                  <Image
                    src={`/images/${el.image}.webp`}
                    alt=""
                    fill={true}
                    className="object-cover brightness-75 transition hover:brightness-100"
                  />
                </div>
                <span className="text-tertiary1 font-bold text-tertiary absolute bottom-6 left-6">
                  {el.title}
                </span>
              </div>
            ))}
          </div>
        </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default Destinations
