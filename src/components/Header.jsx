import React, { useState } from "react";
import logo from "../assets/header/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const handleclick = () => {
    setIsOpenNav(true);
    console.log("clicked");
  };
  const closeModal = () => {
    setIsOpenNav(false);
  };

  return (
    <div className="flex justify-between items-center px-20 pt-5 max-2xl:px-10 max-sm:px-5 max-sm:pt-3 max-w-[2400px] mx-auto">
      <div className="flex-1">
        <img
          src={logo}
          alt="logo"
          className="w-32 max-2xl:w-28 max-md:w-24 4xl:w-80"
        />
      </div>
      <div className="flex justify-between items-center flex-1 max-sm:justify-end max-2xl:gap-5 max-lg:gap-3 poppins text-2xl 4xl:text-5xl">
        <div className="flex justify-between items-center max-sm:hidden w-4/5 text-white font-medium cursor-pointer z-20 text-xl 4xl:text-3xl max-2xl:text-sm">
          <h1
            className="hover:text-neutral-800 transition duration-500"
          >
            Become a Member
          </h1>
          <h1
            className="hover:text-neutral-800 transition duration-500"
          >
            Be a Partner
          </h1>
          <h1
            className="hover:text-neutral-800 transition duration-500"
          >
            Our Partner
          </h1>
          <h1
            className="hover:text-neutral-800 transition duration-500"
          >
            Shop
          </h1>
        </div>
          <button
            className="p-2 px-5 rounded-lg bg-white text-blue-500 font-medium max-sm:text-base 4xl:p-5 4xl:px-10 hover:bg-gray-200 hover:text-blue-700 hover:shadow-lg transition duration-500"
          >
            Login
          </button>
        <div className="sm:hidden">
          <RxHamburgerMenu className="text-white" onClick={handleclick}/>
        </div>
      </div>
      {isOpenNav && (
        <div className="absolute top-0 left-0 glass-effect-box-header w-full h-screen z-50 px-5 pt-5 overflow-hidden">
          <div className="flex justify-end cursor-pointer" onClick={closeModal}>
            <IoClose className="w-7 h-7 text-white" />
          </div>
          <div className="flex flex-col justify-center items-center gap-3 text-lg font-semibold text-white">
            <h1 className="NavLink">Become a Member</h1>
            <h1 className="NavLink">Be a Partner</h1>
            <h1 className="NavLink">Our Partner</h1>
            <h1 className="NavLink">Shop</h1>
          </div>
        </div>
      )}
    </div>
  );
}
