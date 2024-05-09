/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link"
import { useEffect } from "react"
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { useAppSelector } from "@/redux/store"
import { hideDestinationsNav } from "@/redux/features/destinationsNav"
import { IoMdTrendingUp } from "react-icons/io"
import { FaVolcano } from "react-icons/fa6"
import { FaWater } from "react-icons/fa"
import { PiParkFill } from "react-icons/pi"
import { MdMuseum } from "react-icons/md"
import { PiDotsThreeCircleFill } from "react-icons/pi"
import { BsArrowRight } from "react-icons/bs"
import { IoCloseOutline } from "react-icons/io5"

const DestinationsNavigation = () => {
    const dispatch = useDispatch<AppDispatch>()
    const destinationsNavOpen = useAppSelector(
        (state) => state.DestinationsNavReducer.value.state,
    )

    useEffect(() => {
        if (destinationsNavOpen) {
            dispatch(hideDestinationsNav())
        }
    }, [])

    // Logic to close Destinations Navigation once there is a click that occured outside of it
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            const destinationsNav = document.getElementById("destinations-nav")
            const clickedElement = e.target
            if (
                destinationsNavOpen &&
                clickedElement !== destinationsNav &&
                !destinationsNav?.contains(clickedElement as Node)
            ) {
                dispatch(hideDestinationsNav())
            }
        }
        document.addEventListener("click", handleOutsideClick)
        return () => {
            document.removeEventListener("click", handleOutsideClick)
        }
    }, [destinationsNavOpen])

    const countries = [
        "Burundi",
        "Uganda",
        "Kenya",
        "Mali",
        "Nigeria",
        "South Africa",
    ]

    const attractions = [
        {
            category: "Volcanoes",
            icon: <FaVolcano size={20} fill="#10a969" />,
            names: [
                "Mount Muhabura",
                "Mount Sabyinyo",
                "Mount Kalisimbi",
                "Mount Bisoke",
                "Mount Gahinga",
            ],
        },
        {
            category: "Water Bodies",
            icon: <FaWater size={20} fill="#10a969" />,
            names: [
                "Lake Kivu",
                "Lake Muhazi",
                "Lake Ihema",
                "Lake Mugesera",
                "Lake Rweru",
                "Lake Burera",
                "Lake Ruhondo",
            ],
        },
        {
            category: "National Parks",
            icon: <PiParkFill size={28} fill="#10a969" />,
            names: [
                "Volcanoes National Park",
                "Akagera National Park",
                "Nyungwe National Park",
                "Gishwati-Mukura Park",
            ],
        },
        {
            category: "Museums",
            icon: <MdMuseum size={20} fill="#10a969" />,
            names: [
                "King's Palace Museum",
                "Kandt House Museum",
                "Rwanda Art Museum",
                "National Liberation Museum",
                "Kigali Genocide Memorial",
            ],
        },
        {
            category: "Others",
            icon: <PiDotsThreeCircleFill size={20} fill="#10a969" />,
            names: [
                "Amahoro Stadium",
                "Kigali Convention Centre",
                "Radisson Blue",
                "BK Arena",
            ],
        },
    ]

    return (
        <div
            id="destinations-nav"
            className={`${destinationsNavOpen ? "opacity-1 visible lg:flex" : "invisible opacity-0"} absolute left-1/2 top-[5rem] w-[98%] -translate-x-1/2 rounded-xl bg-white text-[#2C2C2C] shadow-md transition-opacity duration-300 ease-in-out min-[1200px]:w-[calc(100%-9rem)] 2xl:w-[calc(100%-22rem)]`}
        >
            <div className="flex w-[16%] flex-col gap-2 bg-[rgba(16,169,105,0.2)] p-4">
                <span className="flex  items-center gap-2 p-1 font-bold text-brand">
                    <IoMdTrendingUp size={22} /> Trending
                </span>
                <div className="flex flex-col rounded-md bg-brand text-white">
                    <span className="cursor-pointer p-2 font-bold min-[1630px]:pl-4">
                        Rwanda
                    </span>
                </div>
                {countries.map((country, index) => (
                    <span
                        key={index}
                        className="cursor-pointer rounded-md p-2 hover:bg-[rgba(16,169,105,0.2)] min-[1630px]:pl-4"
                    >
                        {country}
                    </span>
                ))}
                <button className="cursor-pointer rounded-full border border-brand bg-[rgba(16,169,105,0.11)] p-3 font-bold text-brand">
                    See all
                </button>
            </div>
            {attractions.map((attraction, index) => (
                <div
                    key={index}
                    className={`flex w-[16%] flex-col gap-3 bg-white p-4 ${attraction.category === "Others" ? "rounded-r-xl" : ""}`}
                >
                    <span className="flex items-center gap-2 p-2 font-bold min-[1630px]:pl-4">
                        {attraction.icon}
                        {attraction.category}
                    </span>
                    {attraction.names.map((name, index) => (
                        <Link
                            href="/destination"
                            key={index}
                            className="flex flex-col rounded-md"
                        >
                            <span className="cursor-pointer rounded-md p-2 hover:bg-[rgba(16,169,105,0.2)] min-[1630px]:pl-4">
                                {name}
                            </span>
                        </Link>
                    ))}
                    <Link
                        href="/destinations"
                        className="flex cursor-pointer items-center gap-3 p-2 font-bold text-brand min-[1630px]:pl-4"
                        onClick={() => dispatch(hideDestinationsNav())}
                    >
                        See all
                        <BsArrowRight size={22} />
                    </Link>
                </div>
            ))}
            <div
                className="mt-6 flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-full bg-[#10a96925]"
                onClick={() => dispatch(hideDestinationsNav())}
            >
                <IoCloseOutline color="#10A969" size={24} />
            </div>
        </div>
    )
}

export default DestinationsNavigation
