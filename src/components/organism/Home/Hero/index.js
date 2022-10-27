import React from "react";
import Image from "next/image";
import { Assets } from "assets";

export const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative flex w-full h-screen max-w-5xl mx-auto bg-white">
        <div className="absolute w-full px-6 py-20 overflow-hidden md:relative md:px-0">
          <div className="flex flex-col justify-center h-full space-y-10">
            <h2 className="text-[#232340] text-5xl md:text-6xl  md:w-full z-[10] font-bold">
              Stand Out from The Crowd.
            </h2>
            <p className="text-[#606060] text-base md:text-lg text-left w-full z-[10]">
              Agency is a full-service agency , busy designing and building
              beautiful digital products, brands, and experiences.
            </p>
            <button
              style={{ transition: "0.5s" }}
              className="w-[8.5rem] px-2 py-[0.65rem] bg-[#5468E7] text-base rounded-md text-white font-semibold hover:scale-95"
            >
              Recent Work
            </button>
          </div>
        </div>
        <div className="md:w-[125rem] w-[29rem] md:h-full flex items-center absolute md:relative md:left-[2.5rem] md:top-0 -left-[1rem] -bottom-[0rem]">
          <Image
            src={Assets.Hero}
            alt="Assets Hero"
            // width={1500}
            // height={2000}
          />
        </div>
      </div>
    </div>
  );
};
