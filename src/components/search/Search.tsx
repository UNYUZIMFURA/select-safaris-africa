const Search = () => {
  return (
    <div className="w-full max-w-[35rem] mb-4 mt-4 text-[#2C2C2C] flex flex-col items-center gap-4 py-5 bg-[rgba(16,169,105,0.3)] rounded-md md:max-w-[45rem] min-[1200px]:max-w-full">
      <div className="flex w-full gap-2 px-2 sm:px-3 md:gap-4">
        <input placeholder="Where to?" className="p-4 w-full rounded-md" />
        <input placeholder="When?" className="p-4 w-full rounded-md" type="date" />
      </div>
      <div className="flex w-full gap-2 px-2 sm:px-3 md:gap-4">
        <input placeholder="How long?" className="p-4 w-full rounded-md" />
        <button className="p-4 bg-brand w-full text-white rounded-full">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
