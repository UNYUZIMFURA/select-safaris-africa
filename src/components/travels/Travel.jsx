const Travel = () => {
    return (
      <div className="p-4 border border-black gap-4 flex flex-col items-center rounded-lg shadow-lg max-w-[420px]">
        <div className="h-[18rem] w-full border border-black"></div>
        <div className="flex flex-col w-full gap-4">
          <span className="text-lg font-semibold">Muhazi lake resort</span>
          <div className="flex  justify-between">
            <span className="text-[#10A969] font-semibold">RWF 4,500</span>
            <span className="text-[#10A969] text-base font-medium">Kigali</span>
          </div>
          <span className="text-base text-[#AAB2BA] font-medium">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </span>
          <button className="rounded-lg bg-[#10A969] p-4 text-white">
            Details
          </button>
        </div>
      </div>
    );
}

export default Travel