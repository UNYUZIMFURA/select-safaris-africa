const Search = () => {
    const countries = [
        "Rwanda",
        "Kenya",
        "Tanzania",
        "Egypt",
        "South Sudan",
        "Morocco",
        "Ethiopia",
        "Namibia",
        "More",
    ]
    const durations = [
        "1-3 Days",
        "4 Days",
        "5 Days",
        "6 Days",
        "7 Days",
        "15 Days",
    ]
    const months = [
        "Apr 2024",
        "May 2024",
        "June 2024",
        "July 2024",
        "August 2024",
        "September 2024",
        "October 2024",
        "November 2024",
        "December 2024",
    ]
    return (
        <div className="mb-4 mt-4 flex w-full max-w-[35rem] flex-col items-center gap-3 rounded-md bg-[rgba(16,169,105,0.4)] py-4 text-[#2C2C2C] md:max-w-[45rem] min-[1200px]:max-w-full">
            <div className="flex w-full flex-col gap-3 px-3 min-[500px]:flex-row sm:px-3 md:gap-4 2xl:px-4">
                <select
                    defaultValue={"DEFAULT"}
                    name="countries"
                    className="w-full cursor-pointer rounded-md border-r-[0.625rem] border-transparent p-2.5 py-3 2xl:py-4"
                >
                    <option value="DEFAULT" disabled hidden>
                        Where to?
                    </option>
                    {countries.map((country, index) => (
                        <option key={index} className="p-4">
                            {country}
                        </option>
                    ))}
                </select>
                <select
                    defaultValue={"DEFAULT"}
                    name="months"
                    className="w-full cursor-pointer rounded-md border-r-[0.625rem] border-transparent p-2.5 py-3 2xl:py-4"
                >
                    <option value="DEFAULT" disabled hidden>
                        When?
                    </option>
                    {months.map((month, index) => (
                        <option key={index} className="p-4">
                            {month}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex w-full flex-col gap-3 px-3 sm:px-3 md:flex-row md:gap-4 2xl:px-4">
                <select
                    defaultValue={"DEFAULT"}
                    name="duration"
                    className="w-full cursor-pointer rounded-md border-r-[0.625rem] border-transparent p-2.5 py-3 2xl:py-4"
                >
                    <option value="DEFAULT" disabled hidden>
                        How long?
                    </option>
                    {durations.map((duration, index) => (
                        <option key={index} className="p-4">
                            {duration}
                        </option>
                    ))}
                </select>
                <button className="w-full rounded-full bg-brand p-3 text-white 2xl:p-4">
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search
