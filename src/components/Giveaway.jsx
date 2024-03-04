import React, { useState } from "react";
import GiveawayCards from "./GiveawayCards";
import img1 from '../assets/giveaway/img1.png'
import img2 from '../assets/giveaway/img2.png'
import img3 from '../assets/giveaway/img3.png'
import img4 from '../assets/giveaway/img4.png'
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Giveaway() {
  const [selectedButton, setSelectedButton] = useState("all");

  const handleButtonClick = (category) => {
    setSelectedButton(category);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 4000, 
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1023,
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
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center px-20 max-2xl:px-10 max-sm:px-5 max-w-[2400px] mx-auto gap-5 pb-20 4xl:gap-10">
      <div className="poppins text-5xl font-semibold">Past Giveaways</div>
      <div className="flex gap-20 py-3 4xl:scale-150">
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", damping: 3 }}
          className={`${
            selectedButton === "all"
              ? "bg-gray-100 text-blue-500 p-3 rounded-2xl"
              : "p-3"
          }`}
          onClick={() => handleButtonClick("all")}
        >
          All
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", damping: 3 }}
          className={`${
            selectedButton === "vehicle"
              ? "bg-gray-100 text-blue-500 p-3 rounded-2xl"
              : "p-3"
          }`}
          onClick={() => handleButtonClick("vehicle")}
        >
          Vehicle
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", damping: 3 }}
          className={`${
            selectedButton === "cash"
              ? "bg-gray-100 text-blue-500 p-3 rounded-2xl"
              : "p-3"
          }`}
          onClick={() => handleButtonClick("cash")}
        >
          Cash
        </motion.button>
      </div>
      <div className="w-full">
        <Slider {...settings}>
          <GiveawayCards img={img1} />
          <GiveawayCards img={img2} />
          <GiveawayCards img={img3} />
          <GiveawayCards img={img4} />
        </Slider>
      </div>
    </div>
  );
}
