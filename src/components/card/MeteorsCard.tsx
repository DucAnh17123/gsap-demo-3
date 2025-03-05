"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";
import { Physics2DPlugin } from "gsap-trial/all";
gsap.registerPlugin(useGSAP, Physics2DPlugin);

export default function MeteorsCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const rains = gsap.utils.toArray(".rain");
      rains.forEach((item: any) => {
        const isXRandom = Math.random() > 0.5;

        gsap.set(item, {
          x: isXRandom ? gsap.utils.random(0, 200) : 0,
          y: isXRandom ? 0 : gsap.utils.random(0, 200),
          xPercent: -1100,
          yPercent: -100,
        });

        gsap.fromTo(
          item,
          { autoAlpha: 1 },
          {
            autoAlpha: 0,
            physics2D: {
              velocity: "random(50, 300)",
              angle: 45,
            },
            duration: "random(4,6)",
            delay: "random(0, 4)",
            repeat: -1,
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="">
      <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden border-[2px] border-gray-500">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="rain -rotate-45 absolute w-[2px] h-[50px] -translate-x-[1100%] -translate-y-[100%] top-0 left-0 bg-gradient-to-t from-blue-500/70 to-black/50 rounded-full"
          >
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-blue-500/70 size-[2.5px] rounded-full"></div>
          </div>
        ))}

        <div className="z-[2] size-full text-white text-2xl flex items-center justify-center">
          Meteors
        </div>
      </div>
    </div>
  );
}
