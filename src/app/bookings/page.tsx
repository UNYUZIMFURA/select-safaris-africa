import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import TopSection from "@/components/bookings/TopSection";
import Booking from "@/components/bookings/Booking";

const Page = () => {
  return (
    <div className="w-full">
      <div className="bg-[#F3F8F5] w-full flex flex-col">
        <Header />
        <div
          className="relative py-[6rem] md:py-[8rem] lg:py-[9rem] xl:py-[10rem] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.8), transparent),url('/images/mountain.webp')",
          }}
        ></div>
        <TopSection />
        <div className="flex flex-col py-[14rem] xs:py-[7rem] md:py-[4rem] md:ml-[17rem] px-4 min-[1200px]:px-[4rem] lg:ml-[20rem] xl:ml-[23rem] 2xl:px-[8.5rem]">
          <span className="text-xl font-bold sm:py-4 md:text-2xl xl:text-3xl xl:py-8">
            Your bookings
          </span>
          <div className="flex flex-col gap-4 py-8">
            <Booking booking="Selena Hotels, Kivu - Rwanda" image="car" amount={200000} />
            <Booking booking="Muhazi Lake Resort" image="lake" amount={300000} />
            <Booking booking="Akagera Tour" image="lion" amount={400000} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
