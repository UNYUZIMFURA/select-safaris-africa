import Image from "next/image"
import "@/app/globals.css"

interface Props {
    no: number
    title: string
    description: string
}

const Step: React.FC<Props> = ({ no, title, description }) => {
    return (
        <div className="relative flex w-full flex-col gap-10 rounded-[10px] bg-[#10a9691c] px-4 pb-12 pt-7 text-tertiary1">
            <div className="load-dark absolute right-1 top-0 h-[95px] w-[135px] cursor-pointer overflow-hidden rounded-b-[60px] bg-white xl:h-[100px] xl:w-[140px]">
                <Image src={`/images/step_${no}.webp`} alt="" fill={true} />
            </div>
            <div className="text-primary flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-theme4">
                <span className="font-bold text-brand">{no}</span>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="pl-1 text-[20px] font-bold text-black">
                    {title}
                </h2>
                <p className="pl-1 text-secondary xl:max-w-[28rem]">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Step
