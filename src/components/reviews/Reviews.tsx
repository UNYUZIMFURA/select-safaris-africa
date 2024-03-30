"use client"
import "react-multi-carousel/lib/styles.css";
import Review from "./Review";
import Carousel from "react-multi-carousel";

const Reviews = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="flex flex-col gap-[6rem] md:gap-[6rem] px-4 py-8 text-tertiary2 bg-white lg:py-[4rem] lg:px-[2rem] 2xl:px-[9rem] min-[1200px]:px-[3rem]">
      <div className="flex flex-col items-center text-center gap-6 md:gap-4">
        <h2 className="text-brand font-bold text-[20px]">FROM CLIENT</h2>
        <p className="font-extrabold text-2xl leading-[33px] lg:text-3xl lg:max-w-[25rem] lg:leading-[45px]">
          What <span className="text-brand">our clients</span> have been talking
          about us
        </p>
      </div>
      <div className="flex flex-col gap-[5rem] items-center md:flex-row md:justify-center md:gap-2 min-[1200px]:gap-8">
        {/* <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        > */}
          <Review />
          <Review />
          <Review />
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default Reviews;
