import { useState } from "react";

const DestinationServices = () => {
    const [services] = useState(["Akagera park tour", "Dining services", "Accomodations", "Transport services"])
  return (
    <div className="bg-white flex flex-col py-10 px-4 gap-3 min-[1200px]:px-[4rem] 2xl:px-[8.5rem]">
      <h3 className="font-bold text-2xl tracking-wide">Provided services</h3>
      <span className="text-secondary">We offer the following services</span>
      <div className="grid grid-cols-1 gap-4 py-4 min-[470px]:grid-cols-2 min-[830px]:grid-cols-4 lg:gap-0 lg:max-w-[55rem]">
        {services.map((service, index) => (
          <button
            key={index}
            className="border border-[#DDEDEA] hover:border-brand text-sm py-4 px-8 rounded-full text-brand bg-[#96c47f1c] lg:max-w-[12rem]"
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DestinationServices;
