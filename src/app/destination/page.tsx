"use client";
import DestinationBanner from "@/components/destinations/DestinationBanner";
import Header from "@/components/header/Header";

const Destination = () => {
  return (
    <div className="max-w-[125rem] w-full flex flex-col">
      <Header />
      <DestinationBanner />
    </div>
  );
};

export default Destination;
