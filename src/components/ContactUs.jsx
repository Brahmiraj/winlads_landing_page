import React from "react";
import ContactUsCard from "./ContactUsCard";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="flex justify-center items-center max-w-[2400px] mx-auto max-2xl:flex-col max-2xl:gap-5 px-20 max-2xl:px-10 4xl:py-20">
      <div className="text-end poppins 2xl:flex-1 flex flex-col gap-20 justify-center items-end max-2xl:items-center max-2xl:text-center max-2xl:gap-10">
        <h1 className="poppins font-semibold text-5xl 4xl:text-9xl max-sm:text-4xl">Kim Kardashian’s</h1>
        <p className="text-xl text-gray-500 w-10/12 4xl:text-4xl">
          The architect has maintained specific processional routes that
          residents use to reach the beach during religious ceremonies, and he
          uses local materials such as Batu candi volcanic stone and gray
          sandstone from nearby riverbanks for the villa interiors. SCDA also
          worked with native craftspeople on the bronze and stone accents found
          throughout the resort, including in all 48 villas.
        </p>
        <button className="bg-blue-500 text-white p-4 rounded-lg 4xl:text-4xl hover:bg-blue-500/90 hover:shadow-lg transition duration-500">Contact Us</button>
      </div>
      <div className="2xl:flex-1 4xl:scale-125 max-sm:scale-50"><ContactUsCard/></div>
    </div>
  );
}
