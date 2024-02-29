import React from "react";
import quote from "../assets/comment/quote.png";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function CommentCard({img}) {
  return (
    <div className="rounded-3xl bg-white poppins shadowbg relative flex flex-col justify-center items-center gap-10 px-20 text-center pt-10 max-sm:min-w-[400px]">
      <img src={quote} alt="quote" className="absolute top-10"/>
      <div className="flex flex-col justify-center items-center relative top-12 gap-5">

      <h1 className="text-2xl font-medium pt-5 4xl:text-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </h1>
      <div className="flex flex-col gap-5 4xl:py-5">
        <h1 className="text-blue-500 text-xl font-medium 4xl:text-3xl">-Giveaway</h1>
        <h1 className="text-gray-400 text-xl font-medium 4xl:text-3xl">Winner name</h1>
      </div>
      <div className="relative 4xl:scale-150">
        <img src={img} alt="img" />
        <div className="bg-white rounded-full flex justify-center items-center text-xs font-semibold px-1 absolute top-2 right-[-10px]">
          <MdOutlineStarPurple500 className="text-yellow-300" />
          3.5
        </div>
      </div>
      </div>
    </div>
  );
}
