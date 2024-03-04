import React from "react";
import { RiFacebookFill, RiTwitterFill,RiInstagramLine, RiTiktokFill  } from "react-icons/ri";
import { motion } from "framer-motion";

export default function SocialButton() {
  return (
      <div className="flex flex-col gap-2 fixed right-5 bottom-5 4xl:scale-150 4xl:right-20 4xl:bottom-20 cursor-pointer z-50">
        <motion.div  whileHover={{scale: 1.1 }} transition={{ type: "spring", damping: 3 }} className="bg-[#4B69B1] p-2 rounded-full">
          <RiFacebookFill className="text-white w-6 h-6" />
        </motion.div>
        <motion.div  whileHover={{scale: 1.1 }} transition={{ type: "spring", damping: 3 }} className="bg-[#37B1E2] p-2 rounded-full">
          <RiTwitterFill className="text-white w-6 h-6" />
        </motion.div>
        <motion.div  whileHover={{scale: 1.1 }} transition={{ type: "spring", damping: 3 }} className="bg-[#C23772] p-2 rounded-full">
          <RiInstagramLine className="text-white w-6 h-6" />
        </motion.div>
        <motion.div  whileHover={{scale: 1.1 }} transition={{ type: "spring", damping: 3 }} className="bg-[#404040] p-2 rounded-full">
          <RiTiktokFill className="text-white w-6 h-6" />
      </motion.div>
    </div>
  );
}
