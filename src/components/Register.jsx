import React from "react";
import bg from "../assets/register/bg.png";
import mobileBg from "../assets/register/mobileBg.png";
import { RiFacebookFill, RiTwitterFill,RiInstagramLine, RiTiktokFill  } from "react-icons/ri";

export default function Register() {
  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-40 poppins gap-10 relative w-full px-20 max-2xl:px-10 max-sm:px-5 max-w-[2400px] mx-auto 4xl:pt-80">
      <img src={bg} alt="bg" className="absolute -z-10 w-full px-20 max-2xl:px-10 max-sm:px-5 max-sm:hidden" />
      <img src={mobileBg} alt="mobileBg" className="absolute -z-10 pt-20 sm:hidden" />
      <h1 className="text-5xl font-semibold w-1/2 text-white text-center 4xl:text-9xl 4xl:w-full max-sm:text-xl max-sm:w-4/5">Don’t Miss The 50% Discount if You register Today</h1>
      <button className="bg-white text-blue-500 rounded-xl p-3 px-6 4xl:text-4xl 4xl:p-5 4xl:px-10">Register Today</button>
      <div className="flex flex-col gap-2 absolute right-5 top-[-200px] 4xl:scale-150 4xl:bottom-60 4xl:right-[-100px] max-sm:top-[450px]">
        <div className="bg-[#4B69B1] p-2 rounded-full"><RiFacebookFill className="text-white w-6 h-6"/></div>
        <div className="bg-[#37B1E2] p-2 rounded-full"><RiTwitterFill  className="text-white w-6 h-6"/></div>
        <div className="bg-[#C23772] p-2 rounded-full"><RiInstagramLine  className="text-white w-6 h-6"/></div>
        <div className="bg-[#404040] p-2 rounded-full"><RiTiktokFill  className="text-white w-6 h-6"/></div>
      </div>
    </div>
  );
}
