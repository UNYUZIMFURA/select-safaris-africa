import Image from "next/image"
import Header from "@/components/header/Header"
import AboutUs from "@/components/about/AboutUs"
import Objectives from "@/components/about/Objectives"
import Partners from "@/components/about/Partners"
import Footer from "@/components/footer/Footer"

const page = () => {
    return (
        <div className="flex w-full max-w-[125rem] flex-col text-white">
            <Header />
            <div
                className="relative flex w-full flex-col gap-6 bg-slate-200 bg-cover bg-center py-[5rem] 2xl:py-[7rem]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6)),url('/images/sunset.webp')",
                }}
            >
                <div className="flex flex-col items-center gap-3">
                    <h2 className="text-3xl font-bold cursor-pointer">About us</h2>
                    <Image
                        src="/images/underline.png"
                        alt=""
                        height={1}
                        width={140}
                    />
                </div>
            </div>
            <AboutUs />
            <Objectives />
            <Partners />
            <Footer />
        </div>
    )
}

export default page
