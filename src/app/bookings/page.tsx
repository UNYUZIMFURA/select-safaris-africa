"use client";
import { useAppSelector } from "@/redux/store";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import TopSection from "@/components/bookings/TopSection";
import Booking from "@/components/bookings/Booking";

const Page = () => {
  const activeLink = useAppSelector((state) => state.bookingsTogglerReducer.value)
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
        {activeLink.state === "bookings" ? (
          <div className="flex flex-col py-[14rem] xs:py-[7rem] md:py-[4rem] md:ml-[17rem] px-4 min-[1200px]:px-[4rem] lg:ml-[20rem] xl:ml-[23rem] 2xl:px-[11rem]">
            <span className="text-xl font-bold sm:py-4 md:text-2xl xl:text-3xl xl:py-6">
              Your bookings
            </span>
            <div className="flex flex-col gap-4 py-8">
              <Booking
                booking="Selena Hotels, Kivu - Rwanda"
                image="car"
                amount={200000}
              />
              <Booking
                booking="Muhazi Lake Resort"
                image="waterbody_1"
                amount={300000}
              />
              <Booking booking="Akagera Tour" image="lion" amount={400000} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col py-[14rem] xs:py-[7rem] md:py-[4rem] md:ml-[17rem] px-4 min-[1200px]:px-[4rem] lg:ml-[20rem] xl:ml-[23rem] 2xl:px-[11rem]">
            <span className="text-xl font-bold sm:py-4 md:text-2xl xl:text-3xl xl:py-6">
              Settings
            </span>
            <form className="flex flex-col py-8 gap-6 max-w-[45rem] w-full">
              <span className="text-brand font-bold">User settings</span>
              <div className="flex flex-col gap-5">
                <label>Full names:</label>
                <input placeholder="" className="px-4 py-4 rounded-md" />
              </div>
              <div className="flex flex-col gap-5">
                <label>Email address:</label>
                <input placeholder="" className="px-4 py-4 rounded-md" />
              </div>
              <button className="bg-[#96c47f2c] text-brand p-4 rounded-md mt-4 max-w-[10rem] font-bold">
                Save changes
              </button>
            </form>
            <div className="flex flex-col gap-8 max-w-[40rem] py-6">
              <span className="text-brand font-bold">Account</span>
              <div className="flex flex-col gap-4">
                <span className="font-bold">Delete account</span>
                <span className="text-[#696778] max-w-[30rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum .
                </span>
                <button className="bg-[#fcefef] text-[#FF7E7E] p-4 rounded-md mt-4 max-w-[10rem] font-bold">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
