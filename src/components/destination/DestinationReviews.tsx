import DestinationReview from './DestinationReview';

const DestinationReviews = () => {
  return (
    <div className="bg-white flex flex-col py-4 px-4 gap-3 min-[1200px]:px-[4rem] 2xl:px-[8.5rem]">
      <h3 className="font-bold text-2xl tracking-wide">Reviews</h3>
      <span className="text-secondary">Top Customer Reviews</span>
      <div className="py-8 flex flex-col gap-6">
        <div className="flex flex-col items-cente gap-5 md:flex-row">
          <DestinationReview reviewer="Brandon Thomas" />
          <DestinationReview reviewer="Brandon Thomas" />
          <DestinationReview reviewer="Brandon Thomas" />
        </div>
        <button className="text-brand bg-[#E7F6F3] p-4 max-w-[15rem] rounded-md mt-4">
          Add your review
        </button>
      </div>
    </div>
  );
}

export default DestinationReviews