import Travel from "./Travel";
import "./styles/index.css";

const Travels = () => {
  return (
    <div className="flex flex-col gap-14 px-4 py-7 2xl:px-[4.5rem] lg:py-[3rem]">
      <div className="flex flex-col gap-6 2xl:px-[1.5rem]">
        <h2 className="font-bold text-[#10A969] sm:text-lg lg:text-xl">
          TRAVELS
        </h2>
        <p className="text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-[40px] xl:w-[35rem] xl:leading-[3.3rem]">
          Some of the most visited places{" "}
          <span className="text-[#10A969]">you should visit</span>
        </p>
      </div>
      <div className="travels">
        <Travel />
        <Travel />
        <Travel />
        <Travel />
      </div>
    </div>
  );
};

export default Travels;
