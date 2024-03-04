import React, { useEffect } from "react";
import InstaItem from "./InstaItem";
import img8 from "../../assets/followUs/img8.png";

const InstaPostContainer = ({ postIdArray }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-20">
        <h1 className="text-5xl font-semibold max-sm:text-3xl">
          Follow Us On Instagram
        </h1>
        <div className="flex flex-col justify-center items-center max-sm:pt-5">
          <h1 className="text-2xl">@Winladsau</h1>
        </div>
      </div>
      <img src={img8} alt="img" className="rounded-2xl 2xl:hidden"/>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:px-5 gap-2 md:gap-5">
        {postIdArray
          ? postIdArray.map((el) => <InstaItem Postid={el.id} key={el.id} />)
          : null}
      </div>
    </div>
  );
};

export default InstaPostContainer;
