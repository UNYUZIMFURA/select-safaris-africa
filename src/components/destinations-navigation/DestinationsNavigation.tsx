import Link from "next/link"
import { IoMdTrendingUp } from "react-icons/io";
import { FaVolcano } from "react-icons/fa6";
import { FaWater } from "react-icons/fa";
import { PiParkFill } from "react-icons/pi";
import { MdMuseum } from "react-icons/md";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { hideDestinationsNav } from "@/redux/features/destinationsNav";

const DestinationsNavigation = () => {
  const dispatch = useDispatch<AppDispatch>();

  const countries = [
    "Burundi",
    "Uganda",
    "Kenya",
    "Mali",
    "Nigeria",
    "South Africa",
  ];
  const attractions = [
    {
      category: "Volcanoes",
      icon: <FaVolcano size={20} fill="#10a969"/>,
      names: [
        "Mount Muhabura",
        "Mount Sabyinyo",
        "Mount Kalisimbi",
        "Mount Bisoke",
        "Mount Gahinga",
      ],
    },
    {
      category: "Water Bodies",
      icon: <FaWater size={20} fill="#10a969"/>,
      names: [
        "Lake Kivu",
        "Lake Muhazi",
        "Lake Ihema",
        "Lake Mugesera",
        "Lake Rweru",
        "Lake Burera",
        "Lake Ruhondo",
      ],
    },
    {
      category: "National Parks",
      icon: <PiParkFill size={28} fill="#10a969"/>,
      names: [
        "Volcanoes National Park",
        "Akagera National Park",
        "Nyungwe National Park",
        "Gishwati-Mukura Park",
      ],
    },
    {
      category: "Museums",
      icon: <MdMuseum size={20} fill="#10a969"/>,
      names: [
        "King's Palace Museum",
        "Kandt House Museum",
        "Rwanda Art Museum",
        "National Liberation Museum",
        "Kigali Genocide Memorial",
      ],
    },
    {
      category: "Others",
      icon: <PiDotsThreeCircleFill size={20} fill="#10a969"/>,
      names: [
        "Amahoro Stadium",
        "Kigali Convention Centre",
        "Radisson Blue",
        "BK Arena",
      ],
    },
  ];

  return (
    <div className="hidden lg:flex bg-white shadow-md text-[#2C2C2C] rounded-xl absolute w-[98%] top-[5rem] min-[1200px]:w-[calc(100%-9rem)] left-1/2 -translate-x-1/2 2xl:w-[calc(100%-17rem)]">
      <div className="flex flex-col p-4 gap-2 bg-[rgba(16,169,105,0.2)] w-[16%]">
        <span className="flex  items-center gap-2 text-brand font-bold p-1">
          <IoMdTrendingUp size={22} /> Trending
        </span>
        <div className="flex flex-col bg-brand rounded-md text-white">
          <span className="p-2 min-[1630px]:pl-4 font-bold cursor-pointer">
            Rwanda
          </span>
        </div>
        {countries.map((country, index) => (
          <span
            key={index}
            className="p-2 min-[1630px]:pl-4 hover:bg-[rgba(16,169,105,0.2)] cursor-pointer rounded-md"
          >
            {country}
          </span>
        ))}
        <button className="p-3 border border-brand rounded-full bg-[rgba(16,169,105,0.11)] text-brand font-bold cursor-pointer">
          See all
        </button>
      </div>
      {attractions.map((attraction, index) => (
        <div
          key={index}
          className={`flex flex-col p-4 gap-3 bg-white w-[16%] ${attraction.category === "Others" ? "rounded-r-xl" : ""}`}
        >
          <span className="font-bold p-2 min-[1630px]:pl-4 flex items-center gap-2">
            {attraction.icon}
            {attraction.category}
          </span>
          {attraction.names.map((name, index) => (
            <div className="flex flex-col rounded-md">
              <span
                key={index}
                className="p-2 min-[1630px]:pl-4 hover:bg-[rgba(16,169,105,0.2)] cursor-pointer rounded-md"
              >
                {name}
              </span>
            </div>
          ))}
          <Link
            href="/destinations"
            className="flex items-center gap-3 text-brand p-2 font-bold min-[1630px]:pl-4 cursor-pointer"
          >
            See all
            <BsArrowRight size={22} />
          </Link>
        </div>
      ))}
      <div
        className="h-[2rem] w-[2rem] flex items-center justify-center mt-6 cursor-pointer rounded-full bg-[#10a96925]"
        onClick={() => dispatch(hideDestinationsNav())}
      >
        <IoCloseOutline color="#10A969" size={24} />
      </div>
    </div>
  );
};

export default DestinationsNavigation;
