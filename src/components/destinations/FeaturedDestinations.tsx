import Travel from "@/components/travels/Travel"
import { FeaturedDestinationsTypes } from "@/app/types";

interface Props {
    category: string;
    title: string;
    featuredDestinations: FeaturedDestinationsTypes[];
}

const FeaturedDestinations:React.FC<Props> = ({category, title, featuredDestinations}) => {
    return (
        <div className="flex flex-col gap-6 bg-white">
            <div className="flex flex-col gap-4 pl-2">
                <span className="font-bold text-brand">TOP DESTINATIONS</span>
                <h2 className="text-[24px] font-bold text-tertiary2 lg:text-[28px]">
                    {category}
                </h2>
                <span className="max-w-[34rem] text-lg text-secondary">
                  {title}
                </span>
            </div>
            <div className="travels">
                {
                    featuredDestinations.map((el, index) => (
                        <Travel key={index} name={el.name} image={el.image} amount={el.amount} location={el.location} description={el.description} />
                 ))   
              }
            </div>
        </div>
    )
}

export default FeaturedDestinations
