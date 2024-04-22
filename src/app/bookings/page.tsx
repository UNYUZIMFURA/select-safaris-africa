"use client"
import { useAppSelector } from "@/redux/store"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import TopSection from "@/components/bookings/TopSection"
import Booking from "@/components/bookings/Booking"

const Page = () => {
    const activeLink = useAppSelector(
        (state) => state.bookingsTogglerReducer.value,
    )
    return (
        <div className="w-full">
            <div className="flex w-full flex-col bg-[#F3F8F5]">
                <Header />
                <div
                    className="relative w-full bg-cover bg-center py-[6rem] md:py-[8rem] lg:py-[9rem] xl:py-[10rem]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(0,0,0,0.8), transparent),url('/images/mountain.webp')",
                    }}
                ></div>
                <TopSection />
                {activeLink.state === "bookings" ? (
                    <div className="flex flex-col px-4 py-[14rem] xs:py-[7rem] md:ml-[17rem] md:py-[4rem] lg:ml-[20rem] min-[1200px]:px-[4rem] xl:ml-[23rem] 2xl:px-[11rem]">
                        <span className="text-xl font-bold sm:py-4 md:text-2xl xl:py-6 xl:text-3xl">
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
                            <Booking
                                booking="Akagera Tour"
                                image="lion"
                                amount={400000}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col px-4 py-[14rem] xs:py-[7rem] md:ml-[17rem] md:py-[4rem] lg:ml-[20rem] min-[1200px]:px-[4rem] xl:ml-[23rem] 2xl:px-[11rem]">
                        <span className="text-xl font-bold sm:py-4 md:text-2xl xl:py-6 xl:text-3xl">
                            Settings
                        </span>
                        <form className="flex w-full max-w-[45rem] flex-col gap-6 py-8">
                            <span className="font-bold text-brand">
                                User settings
                            </span>
                            <div className="flex flex-col gap-5">
                                <label>Full names:</label>
                                <input
                                    placeholder=""
                                    className="rounded-md px-4 py-4"
                                />
                            </div>
                            <div className="flex flex-col gap-5">
                                <label>Email address:</label>
                                <input
                                    placeholder=""
                                    className="rounded-md px-4 py-4"
                                />
                            </div>
                            <button className="mt-4 max-w-[10rem] rounded-md bg-[#96c47f2c] p-4 font-bold text-brand">
                                Save changes
                            </button>
                        </form>
                        <div className="flex max-w-[40rem] flex-col gap-8 py-6">
                            <span className="font-bold text-brand">
                                Account
                            </span>
                            <div className="flex flex-col gap-4">
                                <span className="font-bold">
                                    Delete account
                                </span>
                                <span className="max-w-[30rem] text-[#696778]">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Maxime mollitia, molestiae
                                    quas vel sint commodi repudiandae
                                    consequuntur voluptatum .
                                </span>
                                <button className="mt-4 max-w-[10rem] rounded-md bg-[#fcefef] p-4 font-bold text-[#FF7E7E]">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Page
