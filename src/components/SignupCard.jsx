import React from "react";
import { motion } from "framer-motion";

export default function SignupCard({ img }) {
  return (
    <motion.div whileHover={{scale: 1.1}}>
      <div className="4xl:scale-150 py-10 w-[430px] 4xl:py-40">
        <div className="bg-white rounded-3xl shadow-lg poppins relative flex flex-col">
          <img src={img} alt="img1" className="p-5 pr-12" />
          <h1 className="text-slate-400 text-2xl absolute right-[-80px] top-48 rotate-90 spacing">
            Lorem ipsum
          </h1>
          <button className="text-blue-400 bg-blue-50 fot-medium p-3 px-3 rounded-2xl self-end m-3">
            Sign up now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
