import "@/app/globals.css"
import Image from "next/image"
import { ImQuotesLeft } from "react-icons/im"
import { ImQuotesRight } from "react-icons/im"
import { FaRegStar } from "react-icons/fa"
import { FaStar } from "react-icons/fa"

interface Props {
    name: string
    testimonial: string
    image: string
}

const Testimonial: React.FC<Props> = ({ name, testimonial, image }) => {
    return (
        <div className="relative flex flex-col items-center rounded-3xl bg-[#10a9691c] px-2 pb-[2rem] pt-[3.5rem] min-[800px]:h-[23rem] min-[950px]:h-[19rem] xl:h-[17rem]">
            <ImQuotesLeft
                className="absolute left-[2.5rem] top-[2.5rem] min-[800px]:left-[1rem] lg:left-[2.5rem]"
                fill="rgba(0,0,0,0.2)"
                size={35}
            />
            <ImQuotesRight
                className="absolute bottom-[2.5rem] right-[2.5rem] min-[800px]:right-[0.5rem] lg:right-[2.5rem]"
                fill="rgba(0,0,0,0.2)"
                size={35}
            />
            <div className="absolute -top-14 flex h-[6rem] w-[6rem] items-center justify-center rounded-full bg-white p-3">
                <div className="load-light relative h-full w-full cursor-pointer overflow-hidden rounded-full">
                    <Image
                        src={`/images/${image}.webp`}
                        alt=""
                        fill={true}
                        className="object-cover object-top"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center gap-5 text-center">
                <h2 className="text-[22px] font-bold tracking-wide">{name}</h2>
                <span className="text-sm font-light leading-[28px] text-secondary sm:max-w-[28rem]">
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
