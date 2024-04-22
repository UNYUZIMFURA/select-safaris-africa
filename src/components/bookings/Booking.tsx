import "@/app/globals.css"
import Image from "next/image"
import { FaRegCalendarAlt } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"

type BookingProps = {
    image: string
    booking: string
    amount: number
}

const Booking: React.FC<BookingProps> = ({ image, booking, amount }) => {
    return (
        <div className="flex w-full flex-col items-center gap-4 bg-white text-black xs:flex-row xs:rounded-md">
            <div className="load-dark relative h-[9rem] w-[100%] max-w-[10rem] cursor-pointer overflow-hidden xs:w-[30%]">
                <Image
                    src={`/images/${image}.webp`}
                    fill
                    alt=""
                    className="object-cover xs:rounded-l-md"
                />
            </div>
            <div className="flex flex-col gap-4 text-sm sm:w-[80%] sm:flex-row sm:justify-between sm:pr-6 sm:text-base xl:w-[90%]">
                <div className="flex flex-col gap-1 sm:gap-4 sm:px-3 md:px-0 lg:px-6">
                    <span className="font-bold">{booking}</span>
                    <span className="font-bold text-brand">RWF {amount}</span>
                    <div className="flex w-full flex-col gap-8 xs:flex-row">
                        <div className="flex items-center gap-2">
                            <FaRegCalendarAlt />
                            <span className="text-secondary">03/03/2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoIosPeople size={24} />
                            <span className="text-secondary">5 people</span>
                        </div>
                    </div>
                </div>
                <span className="cursor-pointer font-bold text-[#FF7E7E]">
                    Cancel
                </span>
            </div>
        </div>
    )
}

export default Booking
