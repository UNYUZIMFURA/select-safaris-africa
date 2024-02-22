import Image from "next/image";
import Header from "@/components/header/Header";
import Travel from "@/components/travels/Travel";
import { BiSearch } from "react-icons/bi";
import "@/components/travels/styles/travels.css"

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
        <form className="w-full px-7 absolute -bottom-8 md:max-w-[55rem] md:left-0 md:right-0 mx-auto">
          <div className="items-center flex justify-between pr-2 h-[4rem] rounded-full bg-white shadow-lg w-full md:max-w-[80rem]">
            <input
              className="text-tertiary2 pl-7 rounded-l-full h-full w-[75%] outline-none"
              placeholder="Where to?"
            />
            <div className="h-4/5 bg-brand px-6 md:px-8 gap-6 rounded-full flex items-center justify-center">
              <span className="hidden md:flex">Search</span>
              <BiSearch size={20} className="cursor-pointer" />
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col bg-white py-[5rem] px-4 lg:py-[8rem] 2xl:px-[8rem] min-[1200px]:px-[3rem]">
        <div className="flex flex-col gap-4">
          <span className="text-brand font-bold">TRAVELS</span>
          <h2 className="font-bold text-tertiary2 text-[24px]">
            Suggested for you
          </h2>
          <span className="text-lg text-secondary">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </span>
        </div>
        <div className="travels">
          <Travel img="hand" name="Kigali City" />
          <Travel img="mountain" name="Gishwati Forest" />
          <Travel img="road" name="Nyungwe Park" />
          <Travel img="zebra" name="Akagera Park" />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
