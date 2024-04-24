"use client"
import "@/app/globals.css"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { hideBookingModal } from "@/redux/features/bookingPopup"
import { FaLocationDot } from "react-icons/fa6"

const BookDestination = () => {
    const dispatch = useDispatch<AppDispatch>()
    const closeModal = (e: React.MouseEvent) => {
        const bookingModalHolder = document.getElementById("booking-modal-holder")
        const clickedElement = e.target as HTMLElement
        if (clickedElement === bookingModalHolder) {
            dispatch(hideBookingModal())
        }
    }

    return (
        <div id="booking-modal-holder" className="fixed top-0 z-20 h-screen w-screen bg-[rgba(0,0,0,0.4)] px-2" onClick={(e) => closeModal(e)}>
            <div className="mx-auto mt-[10rem] flex h-[37rem] w-full max-w-[45rem] flex-col overflow-x-hidden overflow-y-scroll rounded-md bg-white md:mt-[12rem]">
                <div className="w-full border-b px-2 py-3 xs:px-5 md:px-9">
                    <div className="items-cente flex cursor-pointer flex-col gap-6 bg-[#F3F8F5] p-4 min-[500px]:flex-row min-[500px]:items-center">
                        <div className="load-dark relative h-[10rem] w-full overflow-hidden rounded-md min-[500px]:max-w-[13rem]">
                            <Image
                                fill
                                src="/images/sunset.webp"
                                alt=""
                                className="object-cover"
                            />
                        </div>
                        <div className="flex w-full flex-col gap-4 min-[500px]:gap-6">
                            <span className="font-bold md:text-xl md:tracking-wide">
                                Selena Hotels, Kivu - Rwanda
                            </span>
                            <div className="flex flex-col gap-2 min-[500px]:max-w-[17.5rem] min-[600px]:flex-row min-[600px]:gap-6">
                                <span className="font-bold text-brand">
                                    RWF 100,000
                                </span>
                                <div className="flex items-center gap-2">
                                    <FaLocationDot color="#10A969" />
                                    <span className="text-base text-brand">
                                        Gisenyi, Rwanda
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-4 py-5 xs:px-6 md:px-10">
                    <span className="py-2 text-lg font-bold tracking-wide">
                        New booking
                    </span>
                    <span className="max-w-[35rem] py-2 text-secondary">
                        You've made a right choice, next let's make a
                        reservation for you
                    </span>
                    <form className="flex w-full flex-col gap-5">
                        <div className="flex w-full flex-col gap-3 py-4">
                            <div className="flex w-full flex-col gap-3">
                                <label className="text-[#64676A]">
                                    Arrival Date
                                </label>
                                <input
                                    className="w-full rounded-md border border-[#F0F4FD] px-4 py-3 text-secondary placeholder:text-secondary"
                                    type="date"
                                />
                            </div>
                            <div className="flex w-full flex-col gap-3">
                                <label className="text-[#64676A]">
                                    Departure Date
                                </label>
                                <input
                                    className="w-full rounded-md border border-[#F0F4FD] px-4 py-3 text-secondary placeholder:text-secondary"
                                    type="date"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-[#64676A]">
                                Number of people
                            </label>
                            <input
                                className="rounded-md border border-[#F0F4FD] px-4 py-3 text-secondary placeholder:text-secondary"
                                type="number"
                                placeholder="0"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-[#64676A]">
                                More remarks
                            </label>
                            <textarea
                                className="h-[8rem] resize-none rounded-md border border-[#F0F4FD] p-4 text-secondary placeholder:text-secondary"
                                placeholder="Add a message here"
                            />
                        </div>
                        <div className="flex justify-center gap-3 sm:gap-3 md:gap-4">
                            <button
                                className="w-full rounded-md border p-4 text-secondary"
                                onClick={() => dispatch(hideBookingModal())}
                            >
                                Cancel
                            </button>
                            <button
                                className="w-full rounded-md bg-brand text-white"
                                onClick={() => dispatch(hideBookingModal())}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookDestination
