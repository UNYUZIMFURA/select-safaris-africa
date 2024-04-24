"use client"
import { useAppSelector } from "@/redux/store"
import Header from "@/components/header/Header"
import BookingModal from "@/components/destination/BookingModal"
import DestinationBanner from "@/components/destination/DestinationBanner"
import DestinationInfo from "@/components/destination/DestinationInfo"
import DestinationServices from "@/components/destination/DestinationServices"
import DestinationReviews from "@/components/destination/DestinationReviews"
import DestinationsRecommended from "@/components/destination/DestinationsRecommended"
import Itinerary from "@/components/destination/Itinerary"
import Accomodations from "@/components/destination/Accomodations"
import Footer from "@/components/footer/Footer"

const Destination = () => {
    const currentState = useAppSelector(
        (state) => state.bookingPopupReducer.value.state,
    )

    return (
        <div className="flex w-full max-w-[125rem] flex-col">
            <Header />
            {currentState && <BookingModal />}
            <DestinationBanner />
            <DestinationInfo />
            <DestinationServices />
            <Itinerary />
            <Accomodations />
            <DestinationReviews />
            <DestinationsRecommended />
            <Footer />
        </div>
    )
}

export default Destination
