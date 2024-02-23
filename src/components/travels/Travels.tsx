import Travel from "./Travel";
import "./styles/travels.css";

const Travels = () => {
  return (
    <div className="bg-white flex flex-col gap-12 px-4 py-8 lg:py-[3rem] 2xl:px-[8rem] min-[1200px]:px-[3rem]">
      <div className="flex flex-col gap-6 min-[1700px]:pl-5">
        <h2 className="font-bold text-brand sm:text-lg lg:text-xl">TRAVELS</h2>
        <p className="xl:w-[35rem] tracking-[0.022rem] text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-[40px] xl:leading-[3.3rem]">
          Some of the most visited places{" "}
          <span className="text-brand">we recommend</span>
        </p>
      </div>
      <div className="travels">
        <Travel img="hand" name="Kigali City" />
        <Travel img="mountain" name="Gishwati Forest" />
        <Travel img="road" name="Nyungwe Park" />
        <Travel img="zebra" name="Akagera Park" />
      </div>
    </div>
  );
};

export default Travels;
