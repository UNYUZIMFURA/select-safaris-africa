import { MdLibraryBooks } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <div
        className="relative py-[6rem] md:py-[8rem] lg:py-[9rem] xl:py-[10rem] w-full bg-slate-200 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.8), transparent),url('/images/about.webp')",
        }}
      ></div>
      <div className="w-full relative flex flex-col">
        <div className="w-full flex-col min-[500px]:px-4 min-[500px]:gap-6 md:gap-8 absolute -bottom-[13rem] sm:-bottom-[6.5rem] md:-bottom-[8rem] lg:-bottom-[8.5rem] xl:-bottom-[9rem] lg:gap-[3rem] min-[300px]:items-center min-[300px]:-bottom-[5rem] min-[500px]:-bottom-[5.5rem] px-2 min-[300px]:flex-row flex py-2 gap-2 min-[1200px]:px-[4rem] 2xl:px-[8.5rem]">
          <div className="bg-white rounded-md py-4 px-2 min-[500px]:px-4 md:p-10 lg:px-14 xl:px-[5rem] border flex flex-col items-center justify-center gap-4">
            <div className="h-[3rem] w-[3rem] sm:h-[5rem] sm:w-[5rem] xl:h-[7rem] xl:w-[7rem] rounded-full relative overflow-hidden border cursor-pointer">
              <Image fill src="/images/client.webp" alt="" className="object-cover object-top"/>
            </div>
            <span className="text-xs min-[350px]:text-sm sm:text-base lg:text-lg font-semibold">John Ivan Doe</span>
            <span className="text-xs min-[350px]:text-sm text-secondary">johnivan130@gmail.com</span>
          </div>
          <div className="flex items-center w-full rounded-md">
            <div className="w-full flex-col flex min-[450px]:flex-row p-4 gap-6 bg-white rounded-md sm:gap-8 md:gap-[4rem]">
              <div className="flex gap-4 items-center">
                <MdLibraryBooks fill="#10A969" />
                <span className="text-brand">Bookings</span>
              </div>
              <div className="flex gap-4 items-center">
                <IoSettingsOutline color="#10A969" />
                <span className="text-brand">Settings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer />   */}
    </div>
  );
};

export default Page;
