import Image from "next/image";
import Company1 from "../../../public/icons/company_1.png";
import Company2 from "../../../public/icons/company_2.png";
import Company3 from "../../../public/icons/company_3.png";
import Company4 from "../../../public/icons/company_4.png";
import Company5 from "../../../public/icons/company_5.png";
import Company6 from "../../../public/icons/company_6.png";
import Company7 from "../../../public/icons/company_7.png";
import Company8 from "../../../public/icons/company_8.png";

const Partners = () => {
  const arrayImgs = [
    Company1,
    Company2,
    Company3,
    Company4,
    Company5,
    Company6,
    Company7,
    Company8,
  ];
  return (
    <div className="flex flex-col bg-white items-center py-10 lg:py-[3rem]">
      <div className="flex flex-col items-center gap-6 text-center max-w-[30rem] lg:max-w-[35rem]">
        <span className="text-brand font-bold text-xl">TRUSTED PARTNERS</span>
        <h2 className="font-bold text-2xl text-tertiary2 md:text-[1.6rem] lg:text-[1.9rem] leading-10 xl:text-[2.2rem] 2xl:text-[2.5rem] xl:leading-[3.3rem]">
          Checkout the companies that{" "}
          <span className="text-brand">we partner with</span>
        </h2>
        <p className="text-[#000B0B] lg:text-[1.2rem] xl:max-w-[30rem]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        </p>
      </div>
      <div className="w-full grid grid-cols-2 justify-items-center gap-8 md:grid-cols-3 md:justify-between py-10 xl:py-[3rem] 2xl:px-[8rem]">
        {arrayImgs.map((img, index) => (
          <Image
            key={index}
            src={img}
            height={180}
            width={180}
            alt=""
            className="cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
