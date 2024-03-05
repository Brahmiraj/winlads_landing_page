import React from "react";
import img1 from "../assets/ad/img1.jpg";
import img2 from "../assets/ad/img2.jpg";
import { motion } from "framer-motion";

export default function Ad() {
  return (
    <div className="flex justify-between items-end pb-40 max-sm:pb-0 px-20 max-2xl:px-10 max-sm:px-5 max-w-[2400px] mx-auto gap-5 relative max-2xl:gap-5 max-2xl:flex-col max-2xl:items-center">
      <img src={img1} alt="img1" className="w-1/2 max-2xl:w-full rounded-3xl bgcolorchange transition duration-500" />
      <img src={img2} alt="img2" className="w-1/2 max-2xl:w-full rounded-3xl bgcolorchange transition duration-500" />
    </div>
  );
}
