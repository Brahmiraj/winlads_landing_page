import React from "react";

export default function SignupCard({ img }) {
  return (
    <div className="4xl:scale-150 py-40 min-w-80">
      <div className="bg-white rounded-3xl shadow-2xl poppins relative flex flex-col">
        <img src={img} alt="img1" className="p-5 pr-12" />
        <h1 className="text-slate-400 text-xl absolute right-[-60px] top-48 rotate-90 spacing">
          Lorem ipsum
        </h1>
        <button className="text-blue-400 bg-blue-50 fot-medium p-3 px-3 rounded-2xl self-end m-3">
          Sign up now
        </button>
      </div>
    </div>
  );
}
