import "./destination.css"
import Image from "next/image"
import { useState } from "react"
import { FaLocationDot } from "react-icons/fa6"
import { RiArrowRightSLine } from "react-icons/ri"

const DestinationBanner = () => {
    const [hoveredImg, setHoveredImg] = useState<string>("banner-1")
    return (
        <div
            className="relative flex w-full flex-col items-start gap-8 bg-cover px-4 pb-[10rem] pt-10 text-tertiary1 sm:px-6 md:pb-[11rem] min-[1200px]:pl-[4rem] xl:pb-[13rem] 2xl:pb-[16rem] 2xl:pl-[8.5rem]"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent),url('/images/landscape_2.webp')",
            }}
        >
            <div className="hidden items-center gap-4 xs:flex">
                <span>Destinations</span>
                <RiArrowRightSLine size={24} color="#10A969" />
                <span>Park</span>
            </div>
            <h3 className="text-xl font-bold tracking-wide md:text-2xl 2xl:text-3xl">
                Virunga National Park
            </h3>
            <div className="hidden items-center gap-3 xs:flex">
                <FaLocationDot color="#10A969" size={22} />
                <span className="font-medium text-brand">Burera</span>
            </div>
            <div className="absolute -bottom-[17rem] left-0 right-0 mx-auto flex h-[25rem] w-full px-3 md:-bottom-[18rem] transition md:h-[27rem] md:gap-2 lg:gap-3 min-[1200px]:px-14 xl:-bottom-[16.5rem] 2xl:-bottom-[17rem] 2xl:h-[31rem] 2xl:px-[8rem]">
                <div
                    onMouseOver={() => setHoveredImg("banner-1")}
                    className={`destination-div load-light-2 relative flex h-full w-full cursor-pointer flex-col justify-end gap-4 overflow-hidden rounded-lg bg-cover px-4 pb-4 duration-75 ease-in-out md:px-8 md:pb-8 ${hoveredImg == "banner-1" ? "md:w-[60%]" : "md:w-[20%]"} `}
                >
                    <Image
                        src="/images/park_3.webp"
                        fill
                        alt=""
                        className="object-cover"
                    />
                </div>
                <div
                    className={`destination-div load-light-2 relative hidden h-full cursor-pointer overflow-hidden rounded-[20px] brightness-75 duration-75 ease-in-out md:flex ${hoveredImg == "banner-2" ? "md:w-[60%]" : "md:w-[20%]"}`}
                    onMouseOver={() => setHoveredImg("banner-2")}
                    onMouseLeave={() => setHoveredImg("banner-1")}
                >
                    <Image
                        src="/images/landscape_1.webp"
                        fill
                        alt=""
                        className="object-cover"
                    />
                </div>
                <div
                    className={`destination-div load-light-2 relative hidden h-full w-[20%] cursor-pointer overflow-hidden rounded-[20px] brightness-75 duration-75 ease-in-out md:flex ${hoveredImg == "banner-3" ? "md:w-[60%]" : "md:w-[20%]"}`}
                    onMouseOver={() => setHoveredImg("banner-3")}
                    onMouseLeave={() => setHoveredImg("banner-1")}
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
