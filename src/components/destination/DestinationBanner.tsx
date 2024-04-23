import Image from "next/image"
import "@/app/globals.css"
import { useState } from "react"
import { FaLocationDot } from "react-icons/fa6"
import { RiArrowRightSLine } from "react-icons/ri"

const DestinationBanner = () => {
    const [hoveredImg, setHoveredImg] = useState<string>("banner-1")
    return (
        <div
            className="relative flex h-[20rem] w-full flex-col items-start gap-8 bg-slate-200 bg-cover px-4 py-10 text-tertiary1 sm:px-6 md:h-[25rem] min-[1200px]:pl-[4rem] 2xl:h-[28rem] 2xl:pl-[8.5rem]"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent),url('/images/landscape_2.webp')",
            }}
        >
            <div className="flex items-center gap-4">
                <span>Destinations</span>
                <RiArrowRightSLine size={24} color="#10A969" />
                <span>Volcanoes National Park</span>
            </div>
            <h3 className="text-xl font-bold tracking-wide md:text-2xl 2xl:text-3xl">
                Virunga National Park Safari
            </h3>
            <div className="flex items-center gap-3">
                <FaLocationDot color="#10A969" size={22} />
                <span className="font-medium text-brand">Musanze</span>
            </div>
            <div className="absolute -bottom-[20rem] left-0 right-0 mx-auto flex h-[25rem] w-full px-3 transition md:-bottom-[18rem] md:h-[28rem] lg:gap-3 min-[1200px]:px-14 2xl:h-[32rem] 2xl:px-[8rem]">
                <div
                    onMouseOver={() => setHoveredImg("banner-1")}
                    className={`load-light-2 relative flex h-full w-full cursor-pointer flex-col justify-end gap-4 overflow-hidden rounded-lg bg-cover px-4 pb-4 md:px-8 md:pb-8 ${hoveredImg == "banner-1" ? "lg:w-[60%]" : "lg:w-[20%]"} `}
                >
                    <Image
                        src="/images/park_3.webp"
                        fill
                        alt=""
                        className="object-cover"
                    />
                </div>
                <div
                    className={`load-light-2 relative hidden h-full cursor-pointer overflow-hidden rounded-[20px] brightness-75 lg:flex ${hoveredImg == "banner-2" ? "lg:w-[60%]" : "lg:w-[20%]"}`}
                    onMouseOver={() => setHoveredImg("banner-2")}
                >
                    <Image
                        src="/images/landscape_1.webp"
                        fill
                        alt=""
                        className="object-cover"
                    />
                </div>
                <div
                    className={`load-light-2 relative hidden h-full w-[20%] cursor-pointer overflow-hidden rounded-[20px] brightness-75 lg:flex ${hoveredImg == "banner-3" ? "lg:w-[60%]" : "lg:w-[20%]"}`}
                    onMouseOver={() => setHoveredImg("banner-3")}
                >
                    <Image
                        src="/images/landscape_2.webp"
                        fill
                        alt=""
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default DestinationBanner
