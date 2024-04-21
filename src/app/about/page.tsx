import Image from "next/image";
import Header from "@/components/header/Header";
import AboutUs from "@/components/about/AboutUs";
import Objectives from "@/components/about/Objectives";
import Partners from "@/components/about/Partners";
import Footer from "@/components/footer/Footer";

const page = () => {
  return (
    <div className="max-w-[125rem] flex flex-col w-full text-white">
      <Header />
      <div
        className="relative py-[5rem] w-full bg-slate-200 flex flex-col gap-6 bg-cover bg-center 2xl:py-[7rem]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6)),url('/images/sunset.webp')",
        }}
      >
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-3xl font-bold">About us</h2>
          <Image src="/images/underline.png" alt="" height={1} width={140} />
        </div>
      </div>
      <AboutUs />
      <Objectives />
      <Partners />
      <Footer />
    </div>
  );
};

export default page;
