"use client"
import "@/app/globals.css"
import Image from "next/image"
import { FaLocationDot } from "react-icons/fa6"
import { useRouter } from "next/navigation"

interface Props {
    name: string
    image: string
    amount: number
    location: string
    description: string
}

const Travel: React.FC<Props> = ({
    name,
    image,
    amount,
    location,
    description,
}) => {
    const router = useRouter()
    return (
        <div className="flex h-[37rem] w-full flex-col items-center gap-4 rounded-[20px] p-5 shadow-lg xl:max-w-[380px]">
            <div className="load-dark relative h-[20rem] w-full cursor-pointer overflow-hidden rounded-[20px] min-[600px]:h-[22rem] min-[700px]:h-[20rem]">
                <Image
                    src={`/images/${image}.webp`}
                    alt=""
                    fill={true}
                    className="object-cover transition 2xl:brightness-75 2xl:hover:brightness-100"
                />
            </div>
            <div className="flex w-full flex-col gap-4 px-1 pt-4 sm:px-2">
                <span className="cursor-pointer font-semibold text-brand">
                    {name}
                </span>
                <div className="flex justify-between">
                    <span className="font-semibold text-brand">${amount}</span>
                    <div className="flex items-center gap-2">
                        <FaLocationDot color="#10A969" />
                        <span className="text-base font-medium text-brand">
                            {location}
                        </span>
                    </div>
                </div>
                <span className="text-base font-medium text-secondary">
                    {description}
                </span>
                <button
                    className="cursor-pointer rounded-lg bg-brand p-4 font-medium text-tertiary1"
                    onClick={() => router.push("/destination")}
                >
                    Details
                </button>
            </div>
        </div>
    )
}

export default Travel
