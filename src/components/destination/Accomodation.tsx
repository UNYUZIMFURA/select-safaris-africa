import Image from "next/image"
import "@/app/globals.css"
import { MdOutlineBedroomParent } from "react-icons/md"
import { MdWifi } from "react-icons/md"
import { CgGym } from "react-icons/cg"
import { LiaCarSideSolid } from "react-icons/lia"
import { MdPool } from "react-icons/md"

interface Props {
    name: string
    image: string
}

const amenities = [
    { icon: <MdOutlineBedroomParent />, amenity: "4-Bedrooms" },
    { icon: <MdWifi />, amenity: "2 Wi-Fis" },
    { icon: <CgGym />, amenity: "3-Gyms" },
    { icon: <LiaCarSideSolid />, amenity: "5-Parking Lots" },
    { icon: <MdPool />, amenity: "2 Pools" },
]

const Accomodation: React.FC<Props> = ({ name, image }) => {
    return (
        <div className="flex max-w-[675px] flex-col gap-4 rounded-lg bg-[#10a96921] p-4 min-[550px]:flex-row md:min-w-[675px] md:gap-8">
            <div className="load-dark relative h-[12rem] w-full overflow-hidden rounded-lg min-[550px]:max-w-[255px]">
                <Image
                    src={`/images/${image}.webp`}
                    alt=""
                    fill={true}
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-4">
                <span className="font-bold text-brand">{name}</span>
                <div className="flex flex-wrap gap-3">
                    {amenities.map((el, index) => (
                        <span
                            key={index}
                            className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-brand"
                        >
                            {el.icon}
                            {el.amenity}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Accomodation
