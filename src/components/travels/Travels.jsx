import Travel from "./Travel";
import "./styles/index.css"

const Travels = () => {
  return (
    <div className="flex flex-col gap-2 px-3 py-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-bold text-[#10A969]">TRAVELS</h2>
        <p className="text-2xl font-bold">
          Some of the most visited places{" "}
          <span className="text-[#10A969]">you should visit</span>
        </p>
      </div>
      <div className="travels">
        <Travel />
      </div>
    </div>
  );
};

export default Travels;
