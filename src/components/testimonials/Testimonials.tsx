"use client"
import Testimonial from "./Testimonial"

const Testimonials = () => {
    return (
        <div className="flex flex-col gap-[6rem] bg-white px-4 py-8 text-tertiary2 md:gap-[6rem] lg:px-[2rem] lg:py-[4rem] min-[1200px]:px-[3rem] 2xl:px-[9rem]">
            <div className="flex flex-col items-center gap-6 text-center md:gap-4">
                <h2 className="text-[20px] font-bold text-brand">
                    FROM CLIENT
                </h2>
                <p className="text-2xl font-extrabold leading-[33px] lg:max-w-[30rem] lg:text-3xl lg:leading-[45px]">
                    What <span className="text-brand">our clients</span> have
                    been talking about us
                </p>
            </div>
            <div className="flex flex-col items-center gap-[5rem] min-[800px]:flex-row min-[800px]:justify-center min-[800px]:gap-2 min-[1200px]:gap-6">
                <Testimonial
                    image="testimonial_1"
                    name="Jeff Davis"
                    testimonial="I recently had the best honeymoon with my girlfriend Anna on Lake Kivu. Select Safaris made this moment unforgettable. I can't wait to visit Rwanda again 😍"
                />
                <Testimonial
                    image="testimonial_2"
                    name="Brian Adams"
                    testimonial="Select Safaris Africa made my Akagera trip formidable! From the culinary delights of hotels suggested to their seamless transport services, everything exceeded my expectations."
                />
                <Testimonial
                    image="testimonial_3"
                    name="James William"
                    testimonial="I recently explored the serene beaches of Lake Kivu with Select Safaris Africa. Their impeccable service and peaceful lodgings ensured a truly unforgettable experience"
                />
            </div>
        </div>
    )
}

export default Testimonials
