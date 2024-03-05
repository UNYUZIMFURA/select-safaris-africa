import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

type BookingProps = {
  image: string;
  booking: string;
  amount: number;
};

const Booking: React.FC<BookingProps> = ({ image, booking, amount }) => {
  return (
    <div className="flex flex-col xs:flex-row w-full gap-4 items-center xs:rounded-md bg-white text-black">
      <div className="cursor-pointer relative overflow-hidden h-[9rem] w-[100%] xs:w-[30%] max-w-[10rem]">
        <Image
          src={`/images/${image}.webp`}
          fill
          alt=""
          className="object-cover xs:rounded-l-md"
        />
      </div>
      <div className="flex flex-col gap-4 text-sm sm:text-base sm:flex-row sm:justify-between sm:w-[80%] xl:w-[90%] sm:pr-6">
        <div className="flex flex-col gap-1 sm:gap-4 sm:px-3 md:px-0 lg:px-6">
          <span className="font-bold">{booking}</span>
          <span className="text-brand font-bold">RWF {amount}</span>
          <div className="w-full flex flex-col xs:flex-row gap-8">
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt />
              <span className="text-secondary">03/03/2024</span>
            </div>
            <div className="flex items-center gap-2">
              <IoIosPeople size={24} />
              <span className="text-secondary">5 people</span>
            </div>
          </div>
        </div>
        <span className="cursor-pointer text-[#FF7E7E] font-bold">Cancel</span>
      </div>
    </div>
  );
};

export default Booking;
