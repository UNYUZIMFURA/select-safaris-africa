"use client";
import Header from "@/components/header/Header";
import DestinationBanner from "@/components/destinations/DestinationBanner";
import DestinationInfo from "@/components/destinations/DestinationInfo";
import DestinationServices from "@/components/destinations/DestinationServices";
import DestinationReviews from "@/components/destinations/DestinationReviews";
import Footer from "@/components/footer/Footer";
import DestinationsRecommended from "@/components/destinations/DestinationsRecommended";

const Destination = () => {
  return (
    <div className="max-w-[125rem] w-full flex flex-col">
      <Header />
      <DestinationBanner />
      <DestinationInfo />
      <DestinationServices />
      <DestinationReviews />
      <DestinationsRecommended />
      <Footer />
    </div>
  );
};

export default Destination;
