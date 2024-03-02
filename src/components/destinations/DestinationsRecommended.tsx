import "@/components/travels/styles/travels.css";
import Travel from "@/components/travels/Travel";

const DestinationsRecommended = () => {
  return (
    <div className="flex flex-col bg-white gap-6 py-10 2xl:pl-[8.5rem] min-[1200px]:pl-[4rem] ">
      <div className="flex flex-col gap-4 pl-2">
        <span className="text-brand font-bold">TRAVELS</span>
        <h2 className="font-bold text-tertiary2 text-[24px] lg:text-[28px]">
          More like this
        </h2>
        <span className="text-lg text-secondary max-w-[34rem]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </span>
      </div>
      <div className="travels">
        <Travel img="road" name="Nyungwe Park" />
        <Travel img="zebra" name="Akagera Park" />
        <Travel img="hand" name="Kigali City" />
        <Travel img="mountain" name="Gishwati Forest" />
      </div>
    </div>
  );
};

export default DestinationsRecommended;
