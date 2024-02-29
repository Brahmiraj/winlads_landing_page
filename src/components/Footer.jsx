import React from "react";
import footerLogo from "../assets/footer/footerLogo.png";

export default function Footer() {
  return (
    <div className="py-10 flex justify-between items-end gap-20 max-w-[2400px] mx-auto px-20 max-2xl:px-10 max-sm:px-5 text-xs Mulish 4xl:pt-60 max-sm:flex-col max-sm:items-start max-sm:gap-10">
      <div className="flex justify-between items-end sm:flex-1 max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:gap-10">
      <img src={footerLogo} alt="footerLogo" className="4xl:w-80"/>
      <div className="4xl:text-2xl">
        <h1 className="font-bold">Quick Links</h1>
        <h1 className="">Privacy Policy Terms and Conditions</h1>
      </div>
      <div className="4xl:text-2xl">
        <h1 className="font-bold">Contact us</h1>
        <h1>info@winladsgiveaway.con</h1>
      </div>
      </div>
      <h1 className="flex-1 4xl:text-xl max-sm:text-center">
        Copyright 2024 Winlads. All Rights Reserved.| ABN: 87671535149 | NSW:
        TP/03199 |Permit No: ACT TP 23/02687
      </h1>
    </div>
  );
}
