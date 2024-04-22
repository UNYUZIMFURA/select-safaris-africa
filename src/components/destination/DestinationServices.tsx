import { useState } from "react"

const DestinationServices = () => {
    const [services] = useState([
        "Akagera park tour",
        "Dining services",
        "Accomodations",
        "Transport services",
    ])
    return (
        <div className="flex flex-col gap-3 bg-white px-4 py-10 min-[1200px]:px-[4rem] 2xl:px-[8.5rem]">
            <h3 className="text-2xl font-bold tracking-wide">
                Provided services
            </h3>
            <span className="text-secondary">
                We offer the following services
            </span>
            <div className="grid grid-cols-1 gap-4 py-4 min-[470px]:grid-cols-2 min-[830px]:grid-cols-4 lg:max-w-[55rem] lg:gap-0">
                {services.map((service, index) => (
                    <button
                        key={index}
                        className="rounded-full border border-[#DDEDEA] bg-[#96c47f1c] px-8 py-4 text-sm text-brand hover:border-brand lg:max-w-[12rem]"
                    >
                        {service}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default DestinationServices
