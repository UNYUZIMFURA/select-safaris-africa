import { BiSearch } from "react-icons/bi"
import Image from "next/image"

const DestinationsBanner = () => {
    return (
        <div
            className="relative flex w-full flex-col gap-8 bg-slate-200 bg-cover py-[4rem] pb-[8rem]"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent),url('/images/destinations-banner.webp')",
                backgroundPosition: "100% 60%",
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
    )
}

export default DestinationsBanner
