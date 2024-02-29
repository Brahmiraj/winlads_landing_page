import React from "react";
import bg from "../assets/home/bg.png";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-full max-w-[2400px] mx-auto px-20 max-2xl:px-10 max-sm:px-5">
      <div className="absolute top-0 w-full -z-10">
        <img src={bg} alt="bg" className="w-full h-screen object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center max-sm:w-72 max-sm:pt-20 max-sm:gap-10 h-screen relative bottom-28 4xl:bottom-48">
        <div className="poppins text-center font-semibold text-[120px] text-white 4xl:text-[200px] max-sm:text-5xl">
          WIN A TRIP TO BALI!
        </div>
        <div className="font-semibold text-sm max-w-[750px] 4xl:max-w-[1600px] text-center max-sm:text-xs max-sm:w-full mulish 4xl:text-4xl max-sm:leading-7">
          Purchase a one off package today, or sign up to any subscription and
          unlock a range of extra benefits, including accumulating monthly
          entries into every giveaway, discounts in store with all our partners,
          access to your own personalised referral ID and so much more!
        </div>
      </div>
    </div>
  );
}
