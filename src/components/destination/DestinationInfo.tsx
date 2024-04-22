import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { showDiv } from "@/redux/features/bookingPopup"
import { FaRegStar } from "react-icons/fa"
import { FaStar } from "react-icons/fa"

const DestinationInfo = () => {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className="flex flex-col gap-10 bg-white px-4 pt-[23rem] md:flex-row md:justify-between min-[1200px]:px-14 2xl:px-[8.5rem]">
            <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold tracking-wide">
                    About the Place
                </h3>
                <p className="max-w-[34rem] leading-[1.7rem] text-secondary">
                    For over a century, visitors across the globe have been
                    drawn to Virunga National Park, Africa's oldest. Nestled in
                    Congo, it boasts diverse landscapes from volcanoes to
                    forests, harboring endangered species like mountain
                    gorillas, captivating global attention
                </p>
                <button
                    className="max-w-[15rem] rounded-lg bg-brand px-4 py-3 text-white"
                    onClick={() => dispatch(showDiv())}
                >
                    Place a book
                </button>
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-xl font-bold tracking-wide">
                    User rating
                </span>
                <div className="flex gap-4">
                    <span className="text-xl font-bold text-brand">4.0</span>
                    <div className="flex items-center gap-4">
                        <FaStar color="#10A969" size={20} />
                        <FaStar color="#10A969" size={20} />
                        <FaStar color="#10A969" size={20} />
                        <FaStar color="#10A969" size={20} />
                        <FaRegStar color="#10A969" size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationInfo
