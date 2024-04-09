/* eslint-disable react/no-unescaped-entities */
import "@/app/globals.css"
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { hideDiv } from "@/redux/features/bookingPopup";
import { FaLocationDot } from "react-icons/fa6";

const BookDestination = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="w-screen h-screen fixed bg-[rgba(0,0,0,0.4)] z-20 top-0 px-2">
      <div className="h-[37rem] overflow-y-scroll overflow-x-hidden w-full flex flex-col max-w-[45rem] bg-white rounded-md mt-[10rem] md:mt-[12rem] mx-auto">
        <div className="w-full py-3 px-2 border-b xs:px-5 md:px-9">
          <div className="flex flex-col bg-[#F3F8F5] items-cente cursor-pointer p-4 gap-6 min-[500px]:flex-row min-[500px]:items-center">
            <div className="load-dark w-full relative overflow-hidden h-[10rem] rounded-md min-[500px]:max-w-[13rem]">
              <Image
                fill
                src="/images/sunset.webp"
                alt=""
                className="object-cover"
              />
            </div>
            <div className="flex flex-col w-full gap-4 min-[500px]:gap-6">
              <span className="font-bold md:text-xl md:tracking-wide">
                Selena Hotels, Kivu - Rwanda
              </span>
              <div className="flex flex-col gap-2 min-[500px]:max-w-[17.5rem] min-[600px]:flex-row min-[600px]:gap-6">
                <span className="text-brand font-bold">RWF 100,000</span>
                <div className="flex items-center gap-2">
                  <FaLocationDot color="#10A969" />
                  <span className="text-base text-brand">Gisenyi, Rwanda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-5 px-4 xs:px-6 md:px-10">
          <span className="font-bold text-lg tracking-wide py-2">
            New booking
          </span>
          <span className="text-secondary max-w-[35rem] py-2">
            You've made a right choice, next let's make a reservation for you
          </span>
          <form className="flex flex-col w-full gap-5">
            <div className="flex flex-col w-full gap-3 py-4">
              <div className="w-full flex flex-col gap-3">
                <label className="text-[#64676A]">Arrival Date</label>
                <input
                  className="py-3 px-4 w-full placeholder:text-secondary text-secondary border border-[#F0F4FD] rounded-md"
                  type="date"
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label className="text-[#64676A]">Departure Date</label>
                <input
                  className="py-3 px-4 border border-[#F0F4FD] w-full placeholder:text-secondary text-secondary rounded-md"
                  type="date"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[#64676A]">Number of people</label>
              <input
                className="py-3 px-4 border border-[#F0F4FD] placeholder:text-secondary text-secondary rounded-md"
                type="number"
                placeholder="0"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[#64676A]">More remarks</label>
              <textarea
                className="resize-none h-[8rem] p-4 border border-[#F0F4FD] placeholder:text-secondary text-secondary rounded-md"
                placeholder="Add a message here"
              />
            </div>
            <div className="flex justify-center gap-3 sm:gap-3 md:gap-4">
              <button className="p-4 w-full text-secondary border rounded-md" onClick={() => dispatch(hideDiv())}>Cancel</button>
              <button className="bg-brand text-white w-full rounded-md" onClick={() => dispatch(hideDiv())}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDestination;
