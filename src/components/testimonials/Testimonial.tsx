import "@/app/globals.css"
import Image from "next/image"
import { ImQuotesLeft } from "react-icons/im"
import { ImQuotesRight } from "react-icons/im"
import { FaRegStar } from "react-icons/fa"
import { FaStar } from "react-icons/fa"

interface Props {
    name: string
    testimonial: string
}

const Testimonial: React.FC<Props> = ({ name, testimonial }) => {
    return (
        <div className="relative flex flex-col items-center rounded-3xl bg-[#10a9691c] px-4 py-[5rem]">
            <ImQuotesLeft
                className="absolute left-[2.5rem] top-[2.5rem]"
                fill="rgba(0,0,0,0.2)"
                size={35}
            />
            <ImQuotesRight
                className="absolute bottom-[2.5rem] right-[2.5rem]"
                fill="rgba(0,0,0,0.2)"
                size={35}
            />
            <div className="absolute -top-14 flex h-[7.5rem] w-[7.5rem] items-center justify-center rounded-full bg-white p-4">
                <div className="load-light relative h-full w-full cursor-pointer overflow-hidden rounded-full">
                    <Image
                        src="/images/client.webp"
                        alt=""
                        fill={true}
                        className="object-cover object-top"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center gap-6 text-center">
                <h2 className="text-[22px] font-bold md:text-[24px]">{name}</h2>
                <span className="font-light leading-[28px] text-secondary sm:max-w-[28rem]">
                    {testimonial}
                </span>
                <div className="flex items-center gap-4">
                    <FaStar color="#10A969" size={20} />
                    <FaStar color="#10A969" size={20} />
                    <FaStar color="#10A969" size={20} />
                    <FaStar color="#10A969" size={20} />
                    <FaRegStar color="#10A969" size={20} />
                </div>
            </div>
        </div>
    )
}

export default Testimonial
