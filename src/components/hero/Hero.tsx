"use client"
import "@/app/globals.css"
import Image from "next/image"
import { useState, useEffect } from "react"
import Search from "../search/Search"
import WaterBody1 from "../../../public/images/waterbody_1.webp"
import WaterBody2 from "../../../public/images/waterbody_2.webp"
import WaterBody3 from "../../../public/images/waterbody_3.webp"
import WaterBody4 from "../../../public/images/waterbody_4.webp"
import WaterBody5 from "../../../public/images/waterbody_5.webp"
import Landscape1 from "../../../public/images/landscape_1.webp"
import Landscape2 from "../../../public/images/landscape_2.webp"
import Landscape3 from "../../../public/images/landscape_3.webp"
import Landscape4 from "../../../public/images/landscape_4.webp"
import Landscape5 from "../../../public/images/landscape_5.webp"
import Wildlife1 from "../../../public/images/wildlife_1.webp"
import Wildlife2 from "../../../public/images/wildlife_2.webp"
import Wildlife3 from "../../../public/images/wildlife_3.webp"
import Wildlife4 from "../../../public/images/wildlife_4.webp"
import Wildlife5 from "../../../public/images/wildlife_5.webp"

const Hero = () => {
    const [waterbodyIndex, setWaterbodyIndex] = useState(0)
    const [landscapeIndex, setLandscapeIndex] = useState(0)
    const [wildlifeIndex, setWildlifeIndex] = useState(0)

    const [waterbodies] = useState([
        WaterBody1,
        WaterBody2,
        WaterBody3,
        WaterBody4,
        WaterBody5,
    ])
    const [landscapes] = useState([
        Landscape1,
        Landscape2,
        Landscape3,
        Landscape4,
        Landscape5,
    ])
    const [wildlife] = useState([
        Wildlife1,
        Wildlife2,
        Wildlife3,
        Wildlife4,
        Wildlife5,
    ])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setWaterbodyIndex((prevIndex) => prevIndex + 1)
            setLandscapeIndex((prevIndex) => prevIndex + 1)
            setWildlifeIndex((prevIndex) => prevIndex + 1)

            if (
                waterbodyIndex === 4 ||
                landscapeIndex === 4 ||
                wildlifeIndex === 4
            ) {
                setWaterbodyIndex(0)
                setLandscapeIndex(0)
                setWildlifeIndex(0)
            }
        }, 5000)
        return () => {
            clearTimeout(timeout)
        }
    }, [waterbodyIndex, landscapeIndex, wildlifeIndex])

    return (
        <div className="flex flex-col gap-6 bg-theme1 bg-cover text-tertiary1 min-[1200px]:flex-row min-[1200px]:justify-between min-[1200px]:pl-[3rem] min-[1200px]:pt-[2rem] 2xl:pl-[8rem]">
            <div className="flex w-full flex-col items-center justify-between gap-6 px-4 pt-[4.5rem] text-center min-[370px]:gap-8 min-[1200px]:w-[40%] min-[1200px]:items-start min-[1200px]:gap-7 min-[1200px]:text-start 2xl:gap-8">
                <h1 className="text-sm font-bold text-[#10A969] min-[370px]:text-[16px] min-[1200px]:text-[18px] 2xl:text-[20px]">
                    SELECT SAFARIS AFRICA
                </h1>
                <p className="max-w-[50rem] text-2xl font-bold leading-10 min-[370px]:text-[30px] min-[370px]:leading-[3.5rem] min-[400px]:text-[36px] min-[700px]:text-[2.8rem] min-[700px]:leading-[4.2rem] min-[1200px]:text-[33px] min-[1200px]:leading-[3.3rem] 2xl:text-[56px] 2xl:leading-[5rem]">
                    People don't take 
                    <span className="inline-block bg-gradient-to-r from-white via-[rgb(93,189,183)] to-[rgb(85,183,103)] bg-clip-text text-transparent">
                        trips,
                    </span>{" "}
                    trips take people
                </p>
                <span className="max-w-[32rem] text-[1rem] leading-[28px] text-[#88939E] min-[370px]:text-lg min-[400px]:text-lg">
                    Select Safaris Africa, your entrusted travel partner
                </span>
                <Search />
            </div>
            <div className="flex items-end justify-center gap-1 min-[1200px]:h-[510px] min-[1200px]:w-[60%] 2xl:h-[650px]">
                <div className="load-light min-[1200px]:w-[300px relative flex h-[150px] w-[30%] cursor-pointer overflow-hidden rounded-t-[144.5px] min-[900px]:h-[180px] lg:h-[250px] min-[1200px]:h-[215px]">
                    {waterbodies.map((waterbody, index) => (
                        <Image
                            key={index}
                            src={waterbody}
                            alt=""
                            style={{
                                translate: `${-100.1 * waterbodyIndex}%`,
                            }}
                            className="block h-full w-full shrink-0 grow-0 object-cover transition-all duration-1000 ease-in"
                        />
                    ))}
                    <div className="absolute bottom-0 left-0 z-20 hidden w-full justify-between gap-2 bg-gradient-to-b from-transparent to-black px-2 pb-2 pt-[5rem] sm:flex lg:px-4 min-[1200px]:px-2 xl:px-4 2xl:px-6">
                        {waterbodies.map((_, index) => (
                            <div
                                key={index}
                                className={`h-[5px] w-[15%] rounded-md ${waterbodyIndex === index ? "bg-brand" : "bg-[rgba(255,255,255,.3)] hover:bg-[rgba(16,169,105,0.5)]"}`}
                                onClick={() => setWaterbodyIndex(index)}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="load-light relative flex h-[200px] w-[32%] cursor-pointer overflow-hidden rounded-t-[144.5px] min-[900px]:h-[230px] lg:h-[300px] min-[1200px]:h-[428px]">
                    {landscapes.map((landscape, index) => (
                        <Image
                            key={index}
                            src={landscape}
                            alt=""
                            style={{
                                translate: `${-100.1 * landscapeIndex}%`,
                            }}
                            className="block h-full w-full shrink-0 grow-0 object-cover transition-all duration-1000 ease-in"
                        />
                    ))}
                    <div className="absolute bottom-0 left-0 z-20 hidden w-full justify-between gap-2 bg-gradient-to-b from-transparent to-black px-2 pb-2 pt-[5rem] sm:flex lg:px-4 min-[1200px]:px-2 xl:px-4 2xl:px-6">
                        {landscapes.map((_, index) => (
                            <div
                                key={index}
                                className={`h-[5px] w-[15%] rounded-md ${landscapeIndex === index ? "bg-brand" : "bg-[rgba(255,255,255,.3)] hover:bg-[rgba(16,169,105,0.5)]"}`}
                                onClick={() => setLandscapeIndex(index)}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="load-light relative flex h-[300px] w-[38%] cursor-pointer overflow-hidden rounded-tl-[300px] min-[900px]:h-[330px] lg:h-[400px] min-[1200px]:h-full">
                    {wildlife.map((wildlife, index) => (
                        <Image
                            key={index}
                            src={wildlife}
                            alt=""
                            style={{
                                translate: `${-100.1 * wildlifeIndex}%`,
                            }}
                            className="block h-full w-full shrink-0 grow-0 object-cover transition-all duration-1000 ease-in"
                        />
                    ))}
                    <div className="absolute bottom-0 left-0 z-20 hidden w-full justify-between gap-2 bg-gradient-to-b from-transparent to-black px-2 pb-2 pt-[5rem] sm:flex lg:px-4 min-[1200px]:px-2 xl:px-4 2xl:px-6">
                        {wildlife.map((_, index) => (
                            <div
                                key={index}
                                className={`h-[5px] w-[15%] rounded-md ${wildlifeIndex === index ? "bg-brand" : "bg-[rgba(255,255,255,.3)] hover:bg-[rgba(16,169,105,0.5)]"}`}
                                onClick={() => setWildlifeIndex(index)}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
