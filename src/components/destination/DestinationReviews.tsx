import DestinationReview from './DestinationReview';

const DestinationReviews = () => {
  return (
    <div className="bg-white flex flex-col py-3 px-4 gap-3 min-[1200px]:px-[4rem] 2xl:px-[8.5rem]">
      <h3 className="font-bold text-2xl tracking-wide">Reviews</h3>
      <span className="text-secondary">Top Customer Reviews</span>
      <div className="py-8 flex flex-col gap-6">
        <div className="flex flex-col items-cente gap-5 md:flex-row">
          <DestinationReview
            reviewer="Elena Summers"
            review="My trip to Volcanoes National Park with Select Safaris Africa was truly remarkable! From booking to trekking, their exceptional service exceeded expectations. Comfortable accommodations in Kinigi made for a perfect base camp."
          />
          <DestinationReview
            reviewer="Liam Parker"
            review="My journey to Volcanoes National Park was an unforgettable odyssey! Every moment with Nature's Edge Expeditions was expertly crafted. Moreover I liked the food in Rwanda especially Isombe and Ugali!"
          />
          <DestinationReview
            reviewer="Sofia Evans"
            review="Visiting Volcanoes National Park with Select Safaris Africa was an absolute delight! From sunrise treks to serene moments with mountain gorillas, every aspect was flawlessly organized. The knowledgeable guides and luxurious accommodations made for an unforgettable adventure."
          />
        </div>
        <button className="text-brand bg-[#E7F6F3] p-4 max-w-[15rem] rounded-md mt-4">
          Add your review
        </button>
      </div>
    </div>
  );
}

export default DestinationReviews