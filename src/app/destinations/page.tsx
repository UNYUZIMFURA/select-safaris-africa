import Image from "next/image";
import Header from "@/components/header/Header";
import { IoSearchOutline } from "react-icons/io5";

const Destinations = () => {
  return (
    <div className="flex flex-col w-full text-white">
      <div
        className="relative pb-[8rem] w-full bg-slate-200 flex flex-col gap-8 bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent),url('/images/mountain.webp')",
        }}
      >
        <Header />
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-4xl font-bold">Destinations</h2>
          <Image
            src="/images/underline.png"
            alt=""
            height={1}
            width={210}
            className="cursor-pointer"
          />
        </div>
        <div className="flex w-full flex-wrap justify-center gap-3">
          <button className="outline-none py-4 px-8 rounded-full bg-theme3">
            Hotels
          </button>
          <button className="outline-none py-4 px-8 rounded-full bg-theme3">
            Bars and Restaurants
          </button>
          <button className="outline-none py-4 px-8 rounded-full bg-theme3">
            Game parks
          </button>
          <button className="outline-none py-4 px-8 rounded-full bg-theme3">
            Lakes and rivers
          </button>
        </div>
        <form className="w-full px-7 absolute -bottom-8">
          <div className="items-center flex justify-between pr-2 h-[4rem] rounded-full bg-white w-full">
            <input className="text-tertiary2 px-7 rounded-l-full h-full w-[75%] outline-none" />
            <div className="h-4/5 bg-brand w-[5rem] rounded-full flex items-center justify-center">
              <IoSearchOutline size={22} className="cursor-pointer" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Destinations;
