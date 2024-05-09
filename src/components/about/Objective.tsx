import Image from "next/image"

type IconProps = {
    fill: string
    size: number
}

interface Props {
    image: string
    title: string
    description?: string
}

const Objective: React.FC<Props> = ({ image, title, description }) => {
    return (
        <div className="relative flex h-[19rem] w-full cursor-pointer flex-col items-start justify-center gap-5 rounded-[10px] bg-white px-6 py-8 text-tertiary2 shadow-lg">
            <div className="load-dark relative h-[4rem] w-[4rem] cursor-pointer overflow-hidden rounded-full bg-white">
                <Image
                    src={`/images/${image}.webp`}
                    alt=""
                    fill={true}
                    className="object-cover"
                />
            </div>
            <div className="flex">
                <h3 className="text-xl font-bold text-brand md:text-[1.3rem]">
                    {title}
                </h3>
            </div>
            {description && (
                <p className="max-w-[28rem] text-start leading-[2rem] text-[#363535] md:text-[1.2rem] min-[880px]:text-[14px] xl:w-full 2xl:text-[16px]">
                    {description}
                </p>
            )}
        </div>
    )
}

export default Objective
