import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Faq() {
  return (
    <div className="poppins flex flex-col gap-10 justify-center items-center px-40 pb-20 max-2xl:px-20 max-sm:px-5 max-w-[2400px] mx-auto 4xl:pt-60">
      <div className="text-5xl font-semibold 4xl:text-8xl max-sm:text-3xl">Faq</div>
      <div className="w-full flex flex-col gap-5 4xl:gap-10">
        <div className="flex justify-between items-center text-xl font-bold 4xl:text-4xl max-sm:text-xs"><h1>Is this promotion valid Australia wide?</h1><IoIosArrowForward/></div>
        <div className="flex justify-between items-center text-xl font-bold 4xl:text-4xl max-sm:text-xs"><h1>Is this an ongoing payment?</h1><IoIosArrowForward/></div>
        <div className="flex justify-between items-center text-xl font-bold 4xl:text-4xl max-sm:text-xs"><h1>Do I receive Entries?</h1><IoIosArrowForward/></div>
        <div className="flex justify-between items-center text-xl font-bold 4xl:text-4xl max-sm:text-xs"><h1>Is the cash tax free?</h1><IoIosArrowForward/></div>
        <div className="flex justify-between items-center text-xl font-bold 4xl:text-4xl max-sm:text-xs"><h1>Do I need to be watching the live or answer my phone to win?</h1><IoIosArrowForward/></div>
      </div>
    </div>
  );
}
