import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { showDiv} from "@/redux/features/bookingVisibilitySlice";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const DestinationInfo = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="bg-white flex flex-col pt-[23rem] px-4 gap-10 md:flex-row md:justify-between min-[1200px]:px-14 2xl:px-[8.5rem]">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-bold tracking-wide">Muhazi Lake Resort</h3>
        <p className="text-secondary leading-[1.7rem] max-w-[34rem]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum
          dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit
          amet, consectetuer adipiscing elitLorem ipsum dolor sit amet,
          consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer
          adipiscing elit
        </p>
        <button className="bg-brand text-white py-3 px-4 rounded-lg max-w-[15rem]" onClick={() => dispatch(showDiv())}>
          New booking
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-xl font-bold tracking-wide">User rating</span>
        <div className="flex gap-4">
          <span className="text-brand text-xl font-bold">3.0</span>
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
  );
};

export default DestinationInfo;
