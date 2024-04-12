const Search = () => {
  const countries = ["Rwanda", "Kenya", "Tanzania", "Egypt", "South Sudan", "Morocco","Ethiopia","Namibia","More"]
  const durations = ["1-3 Days", "4 Days", "5 Days", "6 Days", "7 Days", "15 Days"]
  const months = ["Apr 2024", "May 2024", "June 2024", "July 2024", "August 2024", "September 2024", "October 2024","November 2024","December 2024"];
  return (
    <div className="w-full max-w-[35rem] mb-4 mt-4 text-[#2C2C2C] flex flex-col items-center gap-3 py-5 bg-[rgba(16,169,105,0.3)] rounded-md md:max-w-[45rem] min-[1200px]:max-w-full">
      <div className="flex flex-col min-[500px]:flex-row w-full gap-3 px-3 sm:px-3 md:gap-4 2xl:px-4">
        <select
          name="countries"
          className="border-r-[0.625rem] border-transparent p-2.5 py-4 w-full rounded-md cursor-pointer"
        >
          <option value="" disabled selected hidden>
            Where to?
          </option>
          {countries.map((country, index) => (
            <option key={index} className="p-4">
              {country}
            </option>
          ))}
        </select>
        <select
          name="months"
          className="border-r-[0.625rem] border-transparent p-2.5 py-4 w-full rounded-md cursor-pointer"
        >
          <option value="" disabled selected hidden>
            When?
          </option>
          {months.map((month, index) => (
            <option key={index} className="p-4">
              {month}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-3 px-3 sm:px-3 md:gap-4 2xl:px-4">
        <select
          name="duration"
          className="border-r-[0.625rem] border-transparent p-2.5 py-4 w-full rounded-md cursor-pointer"
        >
          <option value="" disabled selected hidden>
            How long?
          </option>
          {durations.map((duration, index) => (
            <option key={index} className="p-4">
              {duration}
            </option>
          ))}
        </select>
        <button className="p-4 bg-brand w-full text-white rounded-full">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
