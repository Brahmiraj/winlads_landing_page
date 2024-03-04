import React from "react";
import img7 from "../assets/followUs/img7.png";
import InstaGallery from "./Insta/InstaGallery";
import { motion } from "framer-motion";

export default function FollowUs() {
  return (
    <div className="poppins flex justify-end 4xl:justify-start items-end py-20 max-w-[2400px] mx-auto pl-20 4xl:pl-0 max-2xl:px-10 max-sm:px-5 max-sm:flex-col max-sm:justify-center max-sm:items-center">
      <div className="w-[70%] flex flex-col justify-end items-end relative top-20 max-2xl:w-full">
        <InstaGallery />
      </div>
      <div className="max-2xl:hidden relative 4xl:w-">
        <img src={img7} alt="img" className="rounded-l-2xl 4xl:w-[700px]" />
      </div>
    </div>
  );
}
