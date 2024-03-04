import React from "react";
import SignupCard from "./SignupCard";
import img1 from "../assets/signup/img1.png";
import img2 from "../assets/signup/img2.png";
import img3 from "../assets/signup/img3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SignUp() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const responsiveSettings = [
    {
      breakpoint: 4000, 
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1535, 
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767, 
      settings: {
        slidesToShow: 1,
      },
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center pt-20 max-w-[2400px] mx-auto px-20 max-2xl:px-10 max-sm:px-5 max-sm:pt-0 4xl:gap-10 4xl:py-40">
      <div>
        <h1 className="poppins font-semibold text-5xl max-sm:text-center max-sm:text-2xl">
          7 Nights stay and its valued at $16,000
        </h1>
      </div>
      <div className="w-full">
        <Slider {...settings} responsive={responsiveSettings}>
          <div>
            <SignupCard img={img1} />
          </div>
          <div>
            <SignupCard img={img2} />
          </div>
          <div>
            <SignupCard img={img3} />
          </div>
        </Slider>
      </div>
    </div>
  );
}
