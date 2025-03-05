"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export default function NeonGradientCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".gradient-card", {
        keyframes: [
          { background: "#00FA9A" },
          { background: "#FF0000" },
          { background: "#00C3Fd" },
          { background: "#8A2BE2" },
          { background: "#FF6EB4" },
          { background: "#FCFF00" },
          { background: "#00F7FF" },
          { background: "#FFE7C7" },
          { background: "#FDB96E" },
        ],
        duration: 27,
        repeat: -1,
        repeatRefresh: true,
        ease: "none",
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="">
      <div className="h-[400px] w-[300px] rounded-2xl relative">
        <div className="gradient-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+16px)] h-[calc(100%+16px)] blur-xl z-[1]"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-2xl bg-gray-900 z-[2] p-[20px]">
          <div className="size-full text-white text-2xl flex items-center justify-center">
            Neon gradient
          </div>
        </div>
      </div>
    </div>
  );
}
