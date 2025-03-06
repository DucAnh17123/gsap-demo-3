"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Observer } from "gsap/all";
import NextImg from "../common/next-img";

gsap.registerPlugin(useGSAP);

export default function SlideCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      Observer.create({
        target: ".slide-card",
        type: "pointer,touch",
        onHover: () => {
          gsap.to(".slide-wrap", {
            top: 0,
            duration: 1,
          });
          gsap.to(".slide-image", {
            top: 0,
            duration: 1,
          });
        },
        onHoverEnd: () => {
          gsap.to(".slide-wrap", {
            top: "100%",
            duration: 1,
          });
          gsap.to(".slide-image", {
            top: "-100%",
            duration: 1,
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="">
      <div className="slide-card relative w-[300px] h-[400px] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 size-full flex justify-center items-center text-yellow-500 text-4xl z-[2] font-semibold uppercase">
          Slide hover
        </div>
        <NextImg src="/assets/images/bg-12.jpg" objectFit="cover" alt="" />

        <div className="slide-wrap absolute top-full left-0 size-full overflow-hidden ">
          <div className="slide-image absolute -top-full left-0 size-full ">
            <div className="absolute inset-0 size-full flex justify-center items-center text-blue-500 text-4xl z-[3] font-semibold uppercase">
              Slide hover
            </div>
            <NextImg src="/assets/images/bg-10.jpg" objectFit="cover" alt="" />
          </div>
        </div>

        {/* <div className="absolute inset-0 size-full text-white flex justify-center items-center text-2xl z-[100]">Slide hover</div> */}
      </div>
    </div>
  );
}
