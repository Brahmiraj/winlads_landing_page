import React from "react";
import logo from "../assets/header/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-20 max-2xl:px-10 max-sm:px-5 pt-5 max-sm:pt-3 max-w-[2400px] mx-auto">
      <div className="flex-1">
        <img src={logo} alt="logo" className="w-32 max-2xl:w-28 max-md:w-24 4xl:w-80"/>
      </div>
      <div className="flex justify-between items-center flex-1 max-sm:justify-end max-2xl:gap-5 max-lg:gap-3 poppins text-2xl 4xl:text-5xl">
        <div className="flex justify-between items-center max-sm:hidden w-4/5 text-white font-medium">
          <h1>Review</h1>
          <h1>Tips</h1>
          <h1>Alert</h1>
          <h1>Blog</h1>
        </div>
        <div className="">
          <button className="p-2 px-5 rounded-lg bg-white text-blue-500 font-medium max-sm:text-base 4xl:p-5 4xl:px-10">
            Login
          </button>
        </div>
        <div className="sm:hidden"><RxHamburgerMenu className="text-white"/></div>
      </div>
    </div>
  );
}
