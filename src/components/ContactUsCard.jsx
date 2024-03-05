import React from "react";
import sidecard from "../assets/contactUs/sidecard.png";
import { motion } from "framer-motion";
import ScrollCarousel from "scroll-carousel-react";

export default function ContactUsCard() {
  new ScrollCarousel(".my-carousel");
  return (
    <div className="flex justify-center items-center poppins relative max-sm:scale-50">
      <div className="w-[500px]">
        <ScrollCarousel
          autoplay={false}
          autoplaySpeed={10}
          speed={15}
          onReady={() => console.log("I am ready")}
        >
          <img
            src={sidecard}
            alt="sidecard"
            className="w-[500px] h-[800px] object-none rounded-3xl"
          />{" "}
          <img
            src={sidecard}
            alt="sidecard"
            className="w-[500px] h-[800px] object-none rounded-3xl"
          />{" "}
          <img
            src={sidecard}
            alt="sidecard"
            className="w-[500px] h-[800px] object-none rounded-3xl"
          />
        </ScrollCarousel>
      </div>

      <div className="absolute">
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", damping: 3 }}
          className="relative right-60 bg-white shadow-xl p-3 rounded-3xl"
        >
          <h1 className="text-blue-500 text-3xl font-semibold 4xl:text-6xl">
            $6000
          </h1>
          <h1 className="4xl:text-4xl">Cashouts</h1>
        </motion.div>
      </div>
      <div className="absolute">
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", damping: 3 }}
          className="relative left-60 bottom-80 bg-white shadow-xl p-3 rounded-3xl"
        >
          <h1 className="text-blue-500 text-3xl font-semibold 4xl:text-6xl">
            300+
          </h1>
          <h1 className="4xl:text-4xl">Total Members</h1>
        </motion.div>
      </div>
      <div className="absolute">
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", damping: 3 }}
          className="relative left-60 top-40 bg-white shadow-xl p-3 rounded-3xl"
        >
          <h1 className="text-blue-500 text-3xl font-semibold 4xl:text-6xl">
            20
          </h1>
          <h1 className="4xl:text-4xl">Giveaways</h1>
        </motion.div>
      </div>
    </div>
  );
}