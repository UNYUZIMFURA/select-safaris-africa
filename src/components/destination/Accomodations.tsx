import Accomodation from "./Accomodation"

const Accomodations = () => {
    return (
      <div className="flex flex-col bg-white py-10 px-4 min-[1200px]:px-[3.5rem] 2xl:px-[9rem]">
        <div className="flex flex-col gap-3 max-w-[45rem]">
          <h2 className="font-bold text-xl text-[#1E1E1E]">Accomodations</h2>
          <p className="text-secondary">
            Where you will sleep & relax while enjoying this Safari. Explore
            amenities available for different hotels and place your book
          </p>
        </div>
        <div className="flex flex-col gap-3 pt-8 md:flex-row md:overflow-x-scroll scrollbar-hide">
          <Accomodation name="One & Only Gorilla's Nest" image="step_2" />
          <Accomodation name="The Palm Beach Resort" image="sunset" />
          <Accomodation name="Galaxy Kivu Hotel" image="hotel" />
        </div>
      </div>
    );
}

export default Accomodations