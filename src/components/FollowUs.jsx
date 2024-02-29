import React from "react";
import img1 from "../assets/followUs/img1.png";
import img2 from "../assets/followUs/img2.png";
import img3 from "../assets/followUs/img3.png";
import img4 from "../assets/followUs/img4.png";
import img5 from "../assets/followUs/img5.png";
import img6 from "../assets/followUs/img6.png";
import img7 from "../assets/followUs/img7.png";
import img8 from "../assets/followUs/img8.png";

export default function FollowUs() {
  return (
    <div className="poppins flex py-20 max-w-[2400px] mx-auto 4xl:pt-80 max-sm:flex-col max-sm:justify-center max-sm:items-center">
      <div className="w-4/5 flex flex-col justify-end items-center 4xl:scale-150">
        <h1 className="text-5xl font-semibold max-sm:text-3xl">Follow Us On Instagram</h1>
        <div className="flex flex-col justify-center items-center max-sm:pt-5">
          <h1 className="text-2xl">@Winladsau</h1>
        <img src={img8} alt="img" className="rounded-2xl max-sm:scale-110 max-sm:pt-10 sm:hidden"/>
          <div className="grid grid-cols-3 gap-3 max-2xl:scale-90 max-sm:grid-cols-2 max-sm:scale-110 max-sm:pt-20">
            <img src={img1} alt="img" className="rounded-2xl"/>
            <img src={img2} alt="img" className="rounded-2xl"/>
            <img src={img3} alt="img" className="rounded-2xl"/>
            <img src={img4} alt="img" className="rounded-2xl"/>
            <img src={img5} alt="img" className="rounded-2xl"/>
            <img src={img6} alt="img" className="rounded-2xl"/>
          </div>
        </div>
      </div>
      <div className="max-sm:hidden">
        <img src={img7} alt="img" className="rounded-l-2xl 4xl:scale-150"/>
      </div>
    </div>
  );
}
