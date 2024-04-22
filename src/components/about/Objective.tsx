type IconProps = {
    fill: string
    size: number
}

interface Props {
    Icon: (props: IconProps) => JSX.Element
    title: string
    description?: string
    iterable?: string[]
}

const Objective: React.FC<Props> = ({ Icon, title, description, iterable }) => {
    return (
        <div className="flex w-full cursor-pointer flex-col items-center gap-5 rounded-[10px] border border-brand bg-white px-3 py-12 text-tertiary2 shadow-lg md:px-5 xl:px-3">
            <div className="flex flex-col items-center gap-4">
                <div className="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-[18px] bg-[#E7F6F3]">
                    <Icon fill="#10A969" size={20} />
                </div>
                <h3 className="text-xl font-bold md:text-[1.3rem]">{title}</h3>
            </div>
            {description && (
                <p className="max-w-[28rem] text-center leading-[2rem] text-secondary md:text-[1.2rem] min-[880px]:text-[14px] xl:w-full 2xl:px-6 2xl:text-[16px]">
                    {description}
                </p>
            )}
            {iterable && (
                <ul className="flex w-full list-disc flex-col gap-4 px-6 text-secondary">
                    {iterable.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            )}
        </div>
    )
}

export default Objective
