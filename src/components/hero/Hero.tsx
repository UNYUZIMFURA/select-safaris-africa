"use client"
import "@/app/globals.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import HeroButtons from "./HeroButtons";
import WaterBody1 from "../../../public/images/waterbody_1.webp"
import WaterBody2 from "../../../public/images/waterbody_2.webp";
import WaterBody3 from "../../../public/images/waterbody_3.webp";
import WaterBody4 from "../../../public/images/waterbody_4.webp";
import WaterBody5 from "../../../public/images/waterbody_5.webp";
import Landscape1 from "../../../public/images/landscape_1.webp";
import Landscape2 from "../../../public/images/landscape_2.webp";
import Landscape3 from "../../../public/images/landscape_3.webp";
import Landscape4 from "../../../public/images/landscape_4.webp";
import Landscape5 from "../../../public/images/landscape_5.webp";
import Wildlife1 from "../../../public/images/wildlife_1.webp"
import Wildlife2 from "../../../public/images/wildlife_2.webp"
import Wildlife3 from "../../../public/images/wildlife_3.webp";
import Wildlife4 from "../../../public/images/wildlife_4.webp";
import Wildlife5 from "../../../public/images/wildlife_5.webp";
import Wildlife6 from "../../../public/images/wildlife_6.webp";
import Wildlife7 from "../../../public/images/wildlife_7.webp";
import Wildlife8 from "../../../public/images/wildlife_8.webp";

const Hero = () => {
  const [imgIndex, setImgIndex] = useState(1);
  const [wildlifeIndex, setWildlifeIndex] = useState(1);
  const [waterbodies] = useState([WaterBody1, WaterBody2, WaterBody3, WaterBody4, WaterBody5])
  const [landscapes] = useState([Landscape1, Landscape2, Landscape3, Landscape4, Landscape5])
  const [wildlife] = useState([
    Wildlife1,
    Wildlife2,
    Wildlife3,
    Wildlife4,
    Wildlife5,
    Wildlife6,
    Wildlife7,
    Wildlife8,
  ]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setImgIndex((prevIndex) => prevIndex + 1);
      if (imgIndex === 5) setImgIndex(1);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [imgIndex]);

 useEffect(() => {
   const timeout = setTimeout(() => {
     setWildlifeIndex((prevIndex) => prevIndex + 1);
     if (wildlifeIndex === 8) setWildlifeIndex(1);
   }, 5000);
   return () => {
     clearTimeout(timeout);
   };
 }, [wildlifeIndex]);
  return (
    <div className="flex flex-col gap-6 bg-theme1 text-tertiary1 min-[1200px]:flex-row min-[1200px]:justify-between min-[1200px]:pl-[3rem] min-[1200px]:pt-[2rem] min-[1200px] 2xl:pl-[8rem] bg-cover">
      <div className="flex w-full flex-col items-center gap-6 px-4 pt-[4.5rem] text-center min-[370px]:gap-8 min-[1200px]:w-[40%] min-[1200px]:items-start min-[1200px]:text-start min-[1200px]:gap-12">
        <h1 className="text-sm font-bold text-[#10A969] min-[370px]:text-[16px] min-[1200px]:text-[18px] 2xl:text-[20px]">
          SELECT SAFARIS AFRICA CO.
        </h1>
        <p className="max-w-[50rem] text-2xl font-bold leading-10 min-[370px]:text-[30px] min-[370px]:leading-[3.5rem] min-[400px]:text-[36px] min-[700px]:text-[2.8rem] min-[700px]:leading-[4.2rem] min-[1200px]:text-[45px] 2xl:leading-[5rem] 2xl:text-[56px]">
          No dream, enjoy the{" "}
          <span className="bg-gradient-to-r from-white via-[rgb(93,189,183)] to-[rgb(85,183,103)] inline-block text-transparent bg-clip-text">
            adventure
          </span>{" "}
          of Africa with us
        </p>
        <span className="max-w-[32rem] text-[1rem] leading-[28px] text-[#88939E] min-[370px]:text-lg min-[400px]:text-lg">
          Lorem ipsum dolor sit amet, consecteuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </span>
        <HeroButtons />
      </div>
      <div className="flex items-end justify-center gap-1 min-[1200px]:h-[650px] min-[1200px]:w-[60%]">
        <div className="load-light overflow-hidden relative h-[150px] w-[30%] rounded-t-[144.5px] min-[900px]:h-[180px] lg:h-[250px] min-[1200px]:h-[215px] min-[1200px]:w-[300px cursor-pointer">
          {waterbodies.map((waterbody, index) => (
            <Image
              key={index}
              src={waterbody}
              alt=""
              fill={true}
              className={`transition-all duration-1000 ease-in object-cover opacity-0 ${imgIndex === index + 1 ? "opacity-100" : ""}`}
            />
          ))}
        </div>
        <div className="load-light overflow-hidden relative h-[200px] w-[32%] rounded-t-[144.5px] min-[900px]:h-[230px] lg:h-[300px] min-[1200px]:h-[428px] cursor-pointer">
          {landscapes.map((landscape, index) => (
            <Image
              key={index}
              src={landscape}
              alt=""
              fill={true}
              className={`transition-all duration-1000 ease-in object-cover opacity-0 ${imgIndex === index + 1 ? "opacity-100" : ""}`}
            />
          ))}
        </div>
        <div className="load-light relative overflow-hidden h-[300px] w-[38%] rounded-tl-[300px] min-[900px]:h-[330px] lg:h-[400px] min-[1200px]:h-full cursor-pointer">
          {wildlife.map((wildlife, index) => (
            <Image
              key={index}
              src={wildlife}
              alt=""
              fill={true}
              className={`transition-all duration-1000 ease-in object-cover opacity-0 ${wildlifeIndex === index + 1 ? "opacity-100" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
