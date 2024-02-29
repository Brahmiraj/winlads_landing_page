import React from "react";
import CommentCard from "./CommentCard";
import img1 from '../assets/comment/img1.png'
import img2 from '../assets/comment/img2.png'

export default function Comment() {
  return (
    <div className="flex justify-between max-w-[2400px] mx-auto px-20 max-2xl:px-10 max-sm:px-5 gap-20 py-20 overflow-x-scroll">
      <CommentCard img={img1}/>
      <CommentCard img={img2}/>
    </div>
  );
}
