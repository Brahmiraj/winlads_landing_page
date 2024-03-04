import React from "react";
import img1 from "../assets/ad/img1.png";
import img2 from "../assets/ad/img2.png";
import { motion } from "framer-motion";

export default function Ad() {
  return (
    <div className="flex justify-between items-end pb-40 max-sm:pb-0 px-20 max-2xl:px-10 max-sm:px-5 max-w-[2400px] mx-auto gap-5 relative max-2xl:gap-5 max-2xl:flex-col max-2xl:items-center">
      <motion.img  whileHover={{scale: 1.05 }} transition={{ type: "spring", damping: 3 }} src={img1} alt="img1" className="w-full max-2xl:w-full" />
      <motion.img  whileHover={{scale: 1.05 }} transition={{ type: "spring", damping: 3 }} src={img2} alt="img2" className="w-full max-2xl:w-full" />
    </div>
  );
}
