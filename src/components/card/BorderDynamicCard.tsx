"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import NextImg from "../common/next-img";

gsap.registerPlugin(useGSAP);

export default function BorderDynamicCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".line-card", {
        keyframes: [{ left: "100%" }, { top: "100%" }, { left: 0 }, { top: 0 }],
        rotate: "+=360",
        duration: 8,
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="">
      <div className="h-[400px] w-[300px] rounded-2xl relative flex justify-center items-center overflow-hidden bg-gray-500/50">
        <div className="h-[calc(100%-4px)] w-[calc(100%-4px)] bg-black rounded-2xl z-[1] p-4">
          <div className="size-full text-2xl text-white flex justify-center items-center">
            Border dynamic
          </div>
        </div>

        <div className="line-card absolute w-[160px] h-[160px] bg-gradient-to-b from-[#18CCFC] via-[#AE48FF] to-[#AE48FF]/10 top-0 left-0 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
      </div>
    </div>
  );
}
