"use client"
import Image from "next/image";
import "@/app/globals.css";
import { FaLocationDot } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface Props {
  img: string;
  name: string;
}

const Travel: React.FC<Props> = (props) => {
  const router = useRouter()
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-[20px] p-5 shadow-lg xl:max-w-[380px]">
      <div className="load-dark relative overflow-hidden h-[20rem] w-full cursor-pointer rounded-[20px] min-[600px]:h-[22rem] min-[700px]:h-[20rem]">
        <Image
          src={`/images/${props.img}.webp`}
          alt=""
          fill={true}
          className="object-cover brightness-75 transition hover:brightness-100"
        />
      </div>
      <div className="flex w-full flex-col gap-4 xl:gap-3 px-1 sm:px-2">
        <span className="cursor-pointer text-lg font-semibold">
          {props.name}
        </span>
        <div className="flex justify-between">
          <span className="font-semibold text-brand">RWF 4,500</span>
          <div className="flex items-center gap-3">
            <FaLocationDot color="#10A969" />
            <span className="text-base font-medium text-brand">Kigali</span>
          </div>
        </div>
        <span className="text-base font-medium text-secondary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit
        </span>
        <button className="cursor-pointer rounded-lg bg-brand p-4 font-medium text-tertiary1" onClick={() => router.push("/destination")}>
          Details
        </button>
      </div>
    </div>
  );
};

export default Travel;
