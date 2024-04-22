import "@/components/travels/styles/travels.css"
import Travel from "@/components/travels/Travel"

const DestinationsRecommended = () => {
    return (
        <div className="flex flex-col gap-6 bg-white py-10 min-[1200px]:pl-[4rem] 2xl:pl-[8.5rem] ">
            <div className="flex flex-col gap-4 pl-2">
                <span className="font-bold text-brand">TRAVELS</span>
                <h2 className="text-[24px] font-bold text-tertiary2 lg:text-[28px]">
                    More like this
                </h2>
                <span className="max-w-[34rem] text-lg text-secondary">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros.
                </span>
            </div>
            <div className="travels">
                <Travel img="road" name="Nyungwe Park" />
                <Travel img="zebra" name="Akagera Park" />
                <Travel img="hand" name="Kigali City" />
                <Travel img="mountain" name="Gishwati Forest" />
            </div>
        </div>
    )
}

export default DestinationsRecommended
