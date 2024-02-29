import React from "react";
import sidecard from "../assets/contactUs/sidecard.png";

export default function ContactUsCard() {
  return (
    <div className="flex justify-center items-center poppins relative max-sm:scale-50">
      <img src={sidecard} alt="sidecard" className="relative" />
      <div className="absolute">
        <div className="relative right-60 bg-white shadow-xl p-3 rounded-3xl">
          <h1 className="text-blue-500 text-3xl font-semibold 4xl:text-6xl">$6000</h1>
          <h1 className="4xl:text-4xl">Cashouts</h1>
        </div>
      </div>
      <div className="absolute">
        <div className="relative left-60 bottom-80 bg-white shadow-xl p-3 rounded-3xl">
          <h1 className="text-blue-500 text-3xl font-semibold 4xl:text-6xl">300+</h1>
          <h1 className="4xl:text-4xl">Total Members</h1>
        </div>
      </div>
      <div className="absolute">
        <div className="relative left-60 top-40 bg-white shadow-xl p-3 rounded-3xl">
          <h1 className="text-blue-500 text-3xl font-semibold 4xl:text-6xl">20</h1>
          <h1 className="4xl:text-4xl">Giveaways</h1>
        </div>
      </div>
    </div>
  );
}
