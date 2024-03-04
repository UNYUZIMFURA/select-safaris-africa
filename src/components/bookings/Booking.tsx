import Image from "next/image";

const Booking = () => {
  return (
    <div className="flex flex-col xs:flex-row w-full gap-4 items-center xs:rounded-md bg-white text-black">
      <div className="cursor-pointer relative overflow-hidden h-[9rem] w-[100%] xs:w-[30%] max-w-[10rem]">
        <Image
          src="/images/car.webp"
          fill
          alt=""
          className="object-cover xs:rounded-l-md"
        />
      </div>
      <div className="flex flex-col gap-4 text-sm sm:text-base sm:flex-row sm:justify-between sm:w-[80%] xl:w-[90%] sm:pr-6">
        <div className="flex flex-col gap-1 sm:gap-4">
          <span className="">Selena Hotel, Kivu - Rwanda</span>
          <span className="text-brand font-bold">RWF 100,000</span>
          <div className="w-full flex flex-col xs:flex-row gap-4">
            <span>03/03/2024</span>
            <div className="flex items-center">5 people</div>
          </div>
        </div>
        <span className="cursor-pointer text-[#FF7E7E]">Cancel</span>
      </div>
    </div>
  );
};

export default Booking;
