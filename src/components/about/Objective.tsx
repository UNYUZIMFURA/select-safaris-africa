type IconProps = {
    fill: string
    size: number
}

interface Props {
    Icon: (props: IconProps) => JSX.Element
    title: string
    description?: string
}

const Objective: React.FC<Props> = ({ Icon, title, description }) => {
    return (
        <div className="h-[20rem] flex w-full cursor-pointer flex-col items-start gap-5 rounded-[10px] bg-white px-6 text-tertiary2 shadow-lg pt-12">
            <div className="flex flex-col items-start gap-4">
                <div className="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-[18px] bg-[#E7F6F3]">
                    <Icon fill="#10A969" size={20} />
                </div>
                <h3 className="text-xl font-bold md:text-[1.3rem]">{title}</h3>
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
