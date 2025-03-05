"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Observer } from "gsap/all";

gsap.registerPlugin(useGSAP, Observer);

export default function FlipCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".flip-card", { perspective: 1000 });
      gsap.set(".front-card", { backfaceVisibility: "hidden" });
      gsap.set(".back-card", { backfaceVisibility: "hidden", rotateY: 180 });
      Observer.create({
        target: ".flip-card",
        type: "pointer,touch",
        onHover: () => {
          gsap.to(".flip-card-wrap", {
            rotateY: 180,
            duration: 1,
          });
        },
        onHoverEnd: () => {
          gsap.to(".flip-card-wrap", {
            rotateY: 0,
            duration: 1,
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="">
      <div className="flip-card relative group w-[300px] h-[400px] rounded-2xl">
        <div
          className="flip-card-wrap relative size-full rounded-2xl "
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="front-card absolute size-full bg-[#8A2BE2] rounded-2xl">
            <div className="size-full flex justify-center items-center text-white text-2xl">
              Flip card
            </div>
          </div>

          <div className="back-card absolute size-full bg-[#00F7FF] rounded-2xl">
            <div className="size-full flex justify-center items-center text-black text-2xl">
              Flip card
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
