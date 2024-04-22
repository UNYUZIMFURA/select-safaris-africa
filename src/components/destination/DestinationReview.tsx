import Image from "next/image"
import { FaRegStar } from "react-icons/fa"
import { FaStar } from "react-icons/fa"

type Props = {
    reviewer: string
    review: string
}

const DestinationReview: React.FC<Props> = ({ reviewer, review }) => {
    return (
        <div className="flex w-full max-w-[40rem] cursor-pointer flex-col gap-7 rounded-lg border border-brand px-4 py-10 shadow-lg 2xl:px-8">
            <div className="flex flex-col gap-4">
                <div className="relative h-[3.3rem] w-[3.3rem] overflow-hidden rounded-full">
                    <Image
                        src="/images/reviewer.webp"
                        fill
                        alt="Reviewer"
                        className="object-cover"
                    />
                </div>
                <span className="font-bold tracking-wide">{reviewer}</span>
            </div>
            <div className="flex items-center gap-4">
                <FaStar color="#10A969" size={20} />
                <FaStar color="#10A969" size={20} />
                <FaStar color="#10A969" size={20} />
                <FaStar color="#10A969" size={20} />
                <FaRegStar color="#10A969" size={20} />
            </div>
            <span className="max-w-[25rem] leading-[1.8rem] text-secondary">
                {review}
            </span>
        </div>
    )
}

export default DestinationReview
