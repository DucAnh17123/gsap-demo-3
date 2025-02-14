"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Demo2() {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.set(".box", { autoAlpha: 0, y: 100 });

      ScrollTrigger.batch(".box", {
        // start: "top center",
        // batchMax: 3,
        // interval: 4,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: { each: 0.15 },
          }),

        onLeave: (batch) =>
          gsap.set(batch, { autoAlpha: 0, y: -100, overwrite: true }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, { autoAlpha: 0, y: 100, overwrite: true }),
      });

      ScrollTrigger.matchMedia({"(min-width: 800px)": function() { },})
    },

    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="m-[100px]">
      <div className="w-full grid grid-cols-6 gap-4">
        {Array.from({ length: 60 }).map((_, index) => (
          <div
            key={index}
            className="box h-[300px] bg-red-500/50 rounded-2xl"
          ></div>
        ))}
      </div>
    </div>
  );
}
