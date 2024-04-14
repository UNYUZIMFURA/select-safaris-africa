"use client";
import { useAppSelector } from "@/redux/store";
import Header from "@/components/header/Header";
import BookDestination from "@/components/destination/BookDestination";
import DestinationBanner from "@/components/destination/DestinationBanner";
import DestinationInfo from "@/components/destination/DestinationInfo";
import DestinationServices from "@/components/destination/DestinationServices";
import DestinationReviews from "@/components/destination/DestinationReviews";
import DestinationsRecommended from "@/components/destination/DestinationsRecommended";
import Footer from "@/components/footer/Footer";
import Itinerary from "@/components/destination/Itinerary";

const Destination = () => {
  const currentState = useAppSelector((state) => state.bookingPopupReducer.value.state);

  return (
    <div className="max-w-[125rem] w-full flex flex-col">
      <Header />
      {currentState && <BookDestination />}
      <DestinationBanner />
      <DestinationInfo />
      <DestinationServices />
      <Itinerary />
      <DestinationReviews />
      <DestinationsRecommended />
      <Footer />
    </div>
  );
};

export default Destination;
