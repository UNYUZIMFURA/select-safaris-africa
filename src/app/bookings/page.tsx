import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import TopSection from "@/components/bookings/TopSection";
import Booking from "@/components/bookings/Booking";

const Page = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <div
        className="relative py-[6rem] md:py-[8rem] lg:py-[9rem] xl:py-[10rem] w-full bg-slate-200 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.8), transparent),url('/images/mountain.webp')",
        }}
      ></div>
      <TopSection />
      <div className="flex flex-col py-[7rem] md:py-[4rem] md:ml-[17rem] px-4 min-[1200px]:px-[4rem] lg:ml-[20rem] xl:ml-[23rem] 2xl:px-[8.5rem]">
        <span className="text-white text-xl font-bold">Your bookings</span>
        <div className="flex flex-col gap-4 py-4">
          <Booking />
        </div>
      </div>
      {/* <Footer />   */}
    </div>
  );
};

export default Page;
