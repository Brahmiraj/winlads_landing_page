import React from "react";
import logo from "../assets/header/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-20 pt-5 max-2xl:px-10 max-sm:px-5 max-sm:pt-3 max-w-[2400px] mx-auto">
      <div className="flex-1">
        <motion.img  
                animate={{
                    y: 20,
                }}
                transition={{
                    delay: 0.5,
                    duration: 1,
                    ease: [1, 0.165, 0.82, 0.075],
                    repeat: Infinity,
                    repeatType: "reverse",
                    rotate: {
                        delay: 1,
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                    },
                }} src={logo} alt="logo" className="w-32 max-2xl:w-28 max-md:w-24 4xl:w-80"/>
      </div>
      <div className="flex justify-between items-center flex-1 max-sm:justify-end max-2xl:gap-5 max-lg:gap-3 poppins text-2xl 4xl:text-5xl">
        <div className="flex justify-between items-center max-sm:hidden w-4/5 text-white font-medium cursor-pointer z-20">
          <motion.h1 whileHover={{scale: 1.1 }} transition={{ type: "spring", damping: 3 }}>Review</motion.h1>
          <motion.h1 whileHover={{scale: 1.1 }} transition={{ type: "spring", damping: 3 }}>Tips</motion.h1>
          <motion.h1 whileHover={{scale: 1.1 }} transition={{ type: "spring", damping: 3 }}>Alert</motion.h1>
          <motion.h1 whileHover={{scale: 1.1 }} transition={{ type: "spring", damping: 3 }}>Blog</motion.h1>
        </div>
        <div className="">
          <motion.button whileHover={{scale: 1.1}} transition={{ type: "spring", damping: 3 }} className="p-2 px-5 rounded-lg bg-white text-blue-500 font-medium max-sm:text-base 4xl:p-5 4xl:px-10">
            Login
          </motion.button>
        </div>
        <div className="sm:hidden"><RxHamburgerMenu className="text-white"/></div>
      </div>
      <div>

      </div>
    </div>

  );
}
