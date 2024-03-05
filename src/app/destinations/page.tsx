import "@/app/globals.css";
import "@/components/travels/styles/travels.css";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import Header from "@/components/header/Header";
import Travel from "@/components/travels/Travel";
import Footer from "@/components/footer/Footer";

const Destinations = () => {
  const travelCategories = [
    {
      title: "Game Parks",
      image: "lion",
    },
    {
      title: "Restaurants and Resorts",
      image: "restaurant",
    },
    {
      title: "Lakes and rivers",
      image: "lake",
    },
    {
      title: "Hotels and Motels",
      image: "hotel",
    },
  ];
  return (
    <div className="max-w-[125rem] flex flex-col w-full text-white">
      <Header />
      <div
        className="relative py-[4rem] pb-[8rem] w-full bg-slate-200 flex flex-col gap-8 bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent),url('/images/mountain.webp')",
        }}
      >
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-4xl font-bold">Destinations</h2>
          <Image src="/images/underline.png" alt="" height={1} width={210} />
        </div>
        <div className="flex w-full flex-wrap justify-center gap-3">
          <button className="py-4 px-8 rounded-full bg-theme3">
            Hotels
          </button>
          <button className="py-4 px-8 rounded-full bg-theme3">
            Bars and Restaurants
          </button>
          <button className="py-4 px-8 rounded-full bg-theme3">
            Game parks
          </button>
          <button className="py-4 px-8 rounded-full bg-theme3">
            Lakes and rivers
          </button>
        </div>
        <form className="w-full px-7 absolute -bottom-8 md:max-w-[55rem] md:left-0 md:right-0 mx-auto">
          <div className="items-center flex justify-between pr-2 h-[4.3rem] rounded-full bg-white shadow-lg w-full md:max-w-[80rem]">
            <input
              className="text-tertiary2 pl-7 rounded-l-full h-full w-[75%]"
              placeholder="Where to?"
            />
            <div className="cursor-pointer h-4/5 bg-brand px-6 md:px-8 gap-6 rounded-full flex items-center justify-center">
              <span className="hidden md:flex">Search</span>
              <BiSearch size={20} className="cursor-pointer" />
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col 2xl:px-[8rem] px-4 pt-[5rem] gap-[5rem] pb-[4rem] w-full bg-white">
        <div className="flex flex-col bg-white gap-6">
          <div className="flex flex-col gap-4 pl-2">
            <span className="text-brand font-bold">RECOMMENDED</span>
            <h2 className="font-bold text-tertiary2 text-[24px] lg:text-[28px]">
              Suggested for you
            </h2>
            <span className="text-lg text-secondary max-w-[34rem]">
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
        <div className="flex flex-col bg-white gap-6">
          <div className="flex flex-col gap-4 pl-2">
            <span className="text-brand font-bold">POPULAR</span>
            <h2 className="font-bold text-tertiary2 text-[24px] lg:text-[28px]">
              Most visited places
            </h2>
            <span className="text-lg text-secondary max-w-[34rem]">
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
        <div className="flex flex-col bg-white gap-6">
          <div className="flex flex-col gap-4 pl-2">
            <span className="text-brand font-bold">CATEGORIES</span>
            <h2 className="font-bold text-tertiary2 text-[24px] lg:text-[28px]">
              Book by Category
            </h2>
            <span className="text-lg text-secondary max-w-[34rem]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </span>
          </div>
          <div className="travels">
            {travelCategories.map((el, index) => (
              <div
                className="load-dark w-full relative cursor-pointer rounded-xl"
                key={index}
              >
                <div className="overflow-hidden relative h-[22rem] rounded-xl">
                  <Image
                    src={`/images/${el.image}.webp`}
                    alt=""
                    fill={true}
                    className="object-cover brightness-75 transition hover:brightness-100"
                  />
                </div>
                <span className="text-tertiary1 font-bold text-tertiary absolute bottom-6 left-6">
                  {el.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Destinations;
