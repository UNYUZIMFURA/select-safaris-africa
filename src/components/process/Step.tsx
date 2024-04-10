import Image from "next/image";
import "@/app/globals.css"

interface Props {
  no: number;
  title: string;
}

const Step: React.FC<Props> = (props) => {
  return (
    <div className="relative w-full flex flex-col gap-10 pt-7 pb-12 px-4 text-tertiary1 bg-[#10a9691c] rounded-[10px]">
      <div className="load-dark overflow-hidden absolute top-0 right-1 h-[95px] w-[135px] xl:h-[100px] xl:w-[140px] rounded-b-[60px] bg-white cursor-pointer">
        <Image src={`/images/step_${props.no}.webp`} alt="" fill={true} />
      </div>
      <div className="h-[3.5rem] w-[3.5rem] flex items-center justify-center text-primary rounded-full bg-theme4">
        <span className="font-bold text-brand">{props.no}</span>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-black text-[20px] pl-1">{props.title}</h2>
        <p className="text-secondary pl-1 xl:max-w-[28rem]">
          Lorem ipsum dolor sit amet, consectetuer adipscing elit. Donnec odio.
        </p>
      </div>
    </div>
  );
};

export default Step;
