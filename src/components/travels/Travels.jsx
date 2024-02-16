import Travel from "./Travel";
import "./styles/index.css";

const Travels = () => {
  return (
    <div className="bg-white flex flex-col gap-12 px-4 py-7 lg:py-[3rem]">
      <div className="flex flex-col gap-6 min-[1700px]:pl-4">
        <h2 className="font-bold text-[#10A969] sm:text-lg lg:text-xl">
          TRAVELS
        </h2>
        <p className="xl:w-[35rem] tracking-[0.022rem] text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-[40px] xl:leading-[3.3rem]">
          Some of the most visited places{" "}
          <span className="text-[#10A969]">we recommend</span>
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
