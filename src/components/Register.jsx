import React from "react";
import bg from "../assets/register/bg.png";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <div className="relative max-w-[2400px] mx-auto px-20 max-sm:px-5">
      <img src={bg} alt="bg" className="-z-10 w-full h-full object-contain" />
      {/* <img src={mobileBg} alt="mobileBg" className="-z-10 pt-20 sm:hidden" /> */}
      <div className="flex flex-col justify-center items-center gap-10 absolute top-1/3 max-sm:top-5 max-lg:top-10 left-1/2 transform -translate-x-1/2 w-full poppins max-sm:gap-5">
        <h1 className="text-5xl font-semibold w-1/2 text-white text-center 4xl:text-8xl 4xl:w-2/3 max-sm:text-lg max-sm:w-4/5 max-2xl:text-3xl ">
          Don’t Miss The 50% Discount if You register Today
        </h1>
        <button className="bg-white text-blue-500 rounded-xl p-3 px-6 4xl:text-4xl 4xl:p-5 4xl:px-10 max-sm:px-4 max-sm:p-2 hover:bg-opacity-30 transition duration-500">
          Register Today
        </button>
      </div>
    </div>
  );
}
