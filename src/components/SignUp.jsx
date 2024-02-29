import React from "react";
import SignupCard from "./SignupCard";
import img1 from "../assets/signup/img1.png";
import img2 from "../assets/signup/img2.png";
import img3 from "../assets/signup/img3.png";

export default function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center pt-40 max-w-[2400px] mx-auto px-20 max-2xl:px-10 max-sm:px-5 max-sm:pt-0">
      <div>
        <h1 className="poppins font-semibold text-5xl max-sm:text-center max-sm:text-2xl">
          7 Nights stay and its valued at $16,000
        </h1>
      </div>
      <div className="flex justify-between items-center w-full max-sm:gap-7 overflow-x-scroll max-2xl:gap-16">
        <SignupCard img={img1} />
        <SignupCard img={img2} />
        <SignupCard img={img3} />
      </div>
    </div>
  );
}
