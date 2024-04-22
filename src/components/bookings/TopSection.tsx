"use client"
import "@/app/globals.css"
import Image from "next/image"
import { useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import {
    toggleToBookings,
    toggleToSettings,
} from "@/redux/features/bookingsToggler"
import { MdLibraryBooks } from "react-icons/md"
import { IoSettingsSharp } from "react-icons/io5"

const TopSection = () => {
    const dispatch = useDispatch<AppDispatch>()
    const activeLink = useAppSelector(
        (state) => state.bookingsTogglerReducer.value,
    )

    const onClickBookings = () => {
        dispatch(toggleToBookings())
    }

    const onClickSettings = () => {
        dispatch(toggleToSettings())
    }
    return (
        <div className="relative flex w-full flex-col">
            <div className="absolute -bottom-[13rem] flex w-full flex-col gap-2 px-2 py-2 xs:-bottom-[5rem] xs:flex-row xs:items-center min-[500px]:-bottom-[5.5rem] min-[500px]:gap-6 min-[500px]:px-4 sm:-bottom-[6.5rem] md:-bottom-[8rem] md:gap-8 lg:-bottom-[8.5rem] lg:gap-[3rem] min-[1200px]:px-[4rem] xl:-bottom-[9rem] 2xl:px-[8.5rem]">
                <div className="flex flex-col items-center justify-center gap-4 rounded-md border bg-white px-2 py-4 min-[500px]:px-4 md:p-10 lg:px-14 xl:px-[5rem]">
                    <div className="load-dark relative h-[3rem] w-[3rem] cursor-pointer overflow-hidden rounded-full border sm:h-[5rem] sm:w-[5rem] xl:h-[7rem] xl:w-[7rem]">
                        <Image
                            fill
                            src="/images/client.webp"
                            alt=""
                            className="object-cover object-top"
                        />
                    </div>
                    <span className="text-xs font-semibold min-[350px]:text-sm sm:text-base lg:text-lg xl:text-xl">
                        John Ivan Doe
                    </span>
                    <span className="text-xs text-secondary min-[350px]:text-sm xl:text-[0.9rem]">
                        johnivan130@gmail.com
                    </span>
                </div>
                <div className="flex w-full items-center rounded-md text-xs sm:text-base">
                    <div className="flex w-full flex-col gap-6 rounded-md bg-white p-4 min-[450px]:flex-row sm:gap-10 sm:px-10 md:gap-[4rem] lg:gap-[6rem]">
                        <div
                            className="flex cursor-pointer items-center gap-4"
                            onClick={onClickBookings}
                        >
                            <MdLibraryBooks
                                size={24}
                                style={{
                                    color:
                                        activeLink.state === "bookings"
                                            ? "#10A969"
                                            : "#aab2ba",
                                }}
                            />
                            <span
                                className={`${activeLink.state === "bookings" ? "text-brand" : "text-secondary"} font-bold`}
                            >
                                Bookings
                            </span>
                        </div>
                        <div
                            className="flex cursor-pointer items-center gap-4"
                            onClick={onClickSettings}
                        >
                            <IoSettingsSharp
                                size={24}
                                style={{
                                    color:
                                        activeLink.state === "settings"
                                            ? "#10A969"
                                            : "#aab2ba",
                                }}
                            />
                            <span
                                className={`${activeLink.state === "settings" ? "text-brand" : "text-secondary"} font-bold`}
                            >
                                Settings
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSection
