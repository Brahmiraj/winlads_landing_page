import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { motion } from "framer-motion";

export default function GiveawayCards({ img }) {
  return (
    <motion.div whileHover={{scale: 1.1}}>
    <div className="4xl:scale-150 w-80 py-10 4xl:py-40">
      <div className="bg-white rounded-3xl shadow-lg poppins relative flex flex-col justify-center items-center max-sm:min-w-80">
        <img src={img} alt="img1" className="p-3" />
        <div className="bg-white rounded-full flex justify-center items-center absolute right-10 top-5 text-sm font-semibold px-2"><MdOutlineStarPurple500 className="text-yellow-300"/>3.5</div>
        <div className="py-3">
          <h1 className="font-semibold text-lg">Winner_name</h1>
          <h1 className="font-medium text-sm text-gray-500">Lorem ipsum dolor sit amet</h1>
        </div>
      </div>
    </div>
     </motion.div>
  );
}
