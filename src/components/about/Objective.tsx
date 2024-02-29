type IconProps = {
    fill: string;
    size: number;
}

interface Props {
    Icon: (props:IconProps) => JSX.Element
    title: string
}

const Objective: React.FC<Props> = ({Icon, title}) => {
    return (
      <div className="shadow-lg w-full flex flex-col gap-5 py-12 px-3 text-tertiary2 bg-white items-center rounded-[10px]">
        <div className="flex flex-col items-center gap-4">
          <div className="cursor-pointer flex items-center justify-center h-[3.5rem] w-[3.5rem] rounded-[18px] bg-[#E7F6F3]">
            <Icon
              fill="#10A969"
              size={20}
            />
          </div>
          <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
        </div>
        <p className="text-center text-secondary max-w-[33rem] md:text-[1.2rem] 2xl:px-10 leading-[2rem] min-[880px]:text-[16px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
          odio.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
          odio.
        </p>
      </div>
    );
}

export default Objective