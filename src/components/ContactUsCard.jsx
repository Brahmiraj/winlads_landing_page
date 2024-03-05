import React from "react";
import sidecard from "../assets/contactUs/sidecard.png";
import { motion } from "framer-motion";
import ScrollCarousel from "scroll-carousel-react";

export default function ContactUsCard() {
  new ScrollCarousel(".my-carousel");
  return (
    <div className="flex justify-center items-center poppins relative">
      <div className="w-[500px] max-sm:w-80">
        <ScrollCarousel
          autoplay={true}
          autoplaySpeed={0.5}
          speed={5}
        >
          <img
            src={sidecard}
            alt="sidecard"
            className="w-[500px] h-[800px] max-sm:w-[400px] max-sm:h-[600px] object-none rounded-3xl"
          />
          <img
            src={sidecard}
            alt="sidecard"
            className="w-[500px] h-[800px] max-sm:w-[400px] max-sm:h-[600px] object-none rounded-3xl"
          />
          <img
            src={sidecard}
            alt="sidecard"
            className="w-[500px] h-[800px] max-sm:w-[400px] max-sm:h-[600px] object-none rounded-3xl"
          />
        </ScrollCarousel>
      </div>

      <div className="absolute">
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", damping: 3 }}
          className="relative right-60 bg-white shadow-xl p-3 rounded-3xl max-sm:right-36"
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
          className="relative left-60 bottom-80 bg-white shadow-xl p-3 rounded-3xl max-sm:left-32 max-sm:bottom-60"
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
          className="relative left-60 top-40 bg-white shadow-xl p-3 rounded-3xl max-sm:left-36 max-sm:top-60"
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