import React from "react";
import img1 from "../assets/ad/img1.png";
import img2 from "../assets/ad/img2.png";
import { RiFacebookFill, RiTwitterFill,RiInstagramLine, RiTiktokFill  } from "react-icons/ri";

export default function Ad() {
  return (
    <div className="flex justify-between items-end pb-40 px-20 4xl:px-0 max-2xl:px-10 max-sm:px-5 max-w-[2400px] mx-auto gap-20 relative max-2xl:gap-5">
      <img src={img1} alt="img1" className="w-full max-2xl:w-1/2" />
      <img src={img2} alt="img2" className="w-full max-2xl:w-1/2" />
      <div className="flex flex-col gap-2 absolute right-5 bottom-40 4xl:scale-150 4xl:bottom-60 4xl:right-[-100px] max-2xl:hidden">
        <div className="bg-[#4B69B1] p-2 rounded-full"><RiFacebookFill className="text-white w-6 h-6"/></div>
        <div className="bg-[#37B1E2] p-2 rounded-full"><RiTwitterFill  className="text-white w-6 h-6"/></div>
        <div className="bg-[#C23772] p-2 rounded-full"><RiInstagramLine  className="text-white w-6 h-6"/></div>
        <div className="bg-[#404040] p-2 rounded-full"><RiTiktokFill  className="text-white w-6 h-6"/></div>
      </div>
    </div>
  );
}
