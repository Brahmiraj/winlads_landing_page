import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function GiveawayCards({ img }) {
  return (
    <div className="4xl:scale-150">
      <div className="bg-white rounded-3xl shadow-2xl poppins relative flex flex-col justify-center items-center max-sm:min-w-80">
        <img src={img} alt="img1" className="p-3" />
        <div className="bg-white rounded-full flex justify-center items-center absolute right-5 top-5 text-sm font-semibold px-2"><MdOutlineStarPurple500 className="text-yellow-300"/>3.5</div>
        <div className="py-3">
          <h1 className="font-semibold text-lg">Winner_name</h1>
          <h1 className="font-medium text-sm text-gray-500">Lorem ipsum dolor sit amet</h1>
        </div>
      </div>
    </div>
  );
}
