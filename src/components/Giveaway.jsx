import React, { useState } from "react";
import GiveawayCards from "./GiveawayCards";
import img1 from '../assets/giveaway/img1.png'
import img2 from '../assets/giveaway/img2.png'
import img3 from '../assets/giveaway/img3.png'
import img4 from '../assets/giveaway/img4.png'

export default function Giveaway() {
  const [selectedButton, setSelectedButton] = useState("all");

  const handleButtonClick = (category) => {
    setSelectedButton(category);
  };

  return (
    <div className="flex flex-col justify-center items-center pb-40 px-20 max-2xl:px-10 max-sm:px-5 max-w-[2400px] mx-auto">
      <div className="poppins text-5xl font-semibold">Past Giveaways</div>
      <div className="flex gap-20 py-3 4xl:scale-150">
        <button
          className={`${
            selectedButton === "all"
              ? "bg-gray-100 text-blue-500 p-3 rounded-2xl"
              : "p-3"
          }`}
          onClick={() => handleButtonClick("all")}
        >
          All
        </button>
        <button
          className={`${
            selectedButton === "vehicle"
              ? "bg-gray-100 text-blue-500 p-3 rounded-2xl"
              : "p-3"
          }`}
          onClick={() => handleButtonClick("vehicle")}
        >
          Vehicle
        </button>
        <button
          className={`${
            selectedButton === "cash"
              ? "bg-gray-100 text-blue-500 p-3 rounded-2xl"
              : "p-3"
          }`}
          onClick={() => handleButtonClick("cash")}
        >
          Cash
        </button>
      </div>
      <div className="flex justify-between items-center w-full pt-20 max-sm:gap-7 overflow-x-scroll max-sm:py-4 max-2xl:gap-16">
        <GiveawayCards img={img1} />
        <GiveawayCards img={img2} />
        <GiveawayCards img={img3} />
        <GiveawayCards img={img4} />
      </div>
    </div>
  );
}
