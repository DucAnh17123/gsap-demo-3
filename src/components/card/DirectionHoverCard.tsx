"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Observer } from "gsap/all";

gsap.registerPlugin(useGSAP, Observer);

export default function DirectionHoverCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      Observer.create({
        target: cardRef.current,
        type: "pointer,touch",
        onHover: (self: any) => {
          if (!cardRef.current) return;
          const rect = cardRef.current.getBoundingClientRect();
          const tl = gsap.timeline();
          tl.to(".ball", {
            left: () => self.x - rect.left,
            top: () => self.y - rect.top,
            xPercent: -50,
            yPercent: -50,
            duration: 0.1,
          }).to(".ball", {
            scale: 1,
          });
        },
        onMove: (self: any) => {
          if (!cardRef.current) return;
          const rect = cardRef.current.getBoundingClientRect();
          gsap.to(".ball", {
            left: () => self.x - rect.left,
            top: () => self.y - rect.top,
            xPercent: -50,
            yPercent: -50,
          });
        },
        onHoverEnd: (self: any) => {
          if (!cardRef.current) return;
          const rect = cardRef.current.getBoundingClientRect();
          const tl = gsap.timeline();

          tl.to(".ball", {
            left: () => self.x - rect.left,
            top: () => self.y - rect.top,
            xPercent: -50,
            yPercent: -50,
            duration: 0.1,
          }).to(".ball", {
            scale: 0,
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="">
      <div
        ref={cardRef}
        className="relative bg-[#FF6EB4] rounded-2xl w-[300px] h-[400px] overflow-hidden"
      >
        <div className="ball absolute z-[1] top-0 left-0 bg-[#8A2BE2] size-[1000px] rounded-full scale-0"></div>

        <div className="absolute z-[2] size-full text-black text-2xl flex items-center justify-center">
          Direction hover
        </div>
      </div>
    </div>
  );
}
