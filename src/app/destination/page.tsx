"use client";
import Header from "@/components/header/Header";
import DestinationBanner from "@/components/destinations/DestinationBanner";
import DestinationInfo from "@/components/destinations/DestinationInfo";
import DestinationServices from "@/components/destinations/DestinationServices";

const Destination = () => {
  return (
    <div className="bg-white max-w-[125rem] w-full flex flex-col">
      <Header />
      <DestinationBanner />
      <DestinationInfo />
      <DestinationServices />
    </div>
  );
};

export default Destination;
