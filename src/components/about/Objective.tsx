import { ReactNode } from "react";

type IconProps = {
    fill: string;
    size: number;
}

interface Props {
    Icon: (props:IconProps) => JSX.Element
}

const Objective: React.FC<Props> = ({Icon}) => {
    return (
      <div className="w-full flex flex-col gap-4 py-10 px-3 text-tertiary2 bg-white items-center rounded-[10px]">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center h-[3.2rem] w-[3.2rem] rounded-[18px] bg-[#E7F6F3]">
            <Icon
              fill="#10A969"
              size={20}
            />
          </div>
          <h3 className="text-lg font-bold">Our Goal</h3>
        </div>
        <p className="text-center text-secondary max-w-[30rem] 2xl:px-10">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
          odio.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
          odio.
        </p>
      </div>
    );
}

export default Objective