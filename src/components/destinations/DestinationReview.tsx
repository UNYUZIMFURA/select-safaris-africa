import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

type Props = {
  reviewer: string;
};

const DestinationReview: React.FC<Props> = ({ reviewer }) => {
  return (
    <div className="cursor-pointer border border-brand w-full flex flex-col gap-6 p-4 shadow-lg py-8 max-w-[40rem] rounded-lg">
      <div className="flex flex-col gap-4">
        <div className="relative overflow-hidden h-[3rem] w-[3rem] rounded-full">
          <Image src="/images/reviewer.webp" fill alt="Reviewer" className="object-cover" />
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
      <span className="text-secondary leading-[1.8rem] max-w-[25rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum .
      </span>
    </div>
  );
};

export default DestinationReview;
