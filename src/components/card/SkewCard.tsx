"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Observer } from "gsap/all";
import NextImg from "../common/next-img";

gsap.registerPlugin(useGSAP);

export default function SkewCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".skew-card, .skew-wrap", {
        perspective: 1000,
      });
      Observer.create({
        target: ".top-left",
        type: "pointer,touch",
        onHover: () => {
          gsap.to(".skew-card", {
            rotateX: -10,
            rotateY: 10,
            // scale: 0.95,
          });
        },
      });

      Observer.create({
        target: ".top-top",
        type: "pointer,touch",
        onHover: () => {
          gsap.to(".skew-card", {
            rotateX: -10,
            rotateY: 0,
            scale: 0.95,
          });
        },
      });


      Observer.create({
        target: ".top-left",
        type: "pointer,touch",
        onHover: () => {
          //   gsap.to(".skew-card", {
          //     rotateZ: 40,
          //   });
        },
        onHoverEnd: () => {
          gsap.to(".skew-card", {
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            skewX: 0,
            skewY: 0,
            skewZ: 0,
            scale: 1,
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="">
      <div
        className="skew-card relative w-[300px] h-[400px] rounded-2xl overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="skew-wrap absolute inset-0 size-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <NextImg src="/assets/images/bg-5.jpg" objectFit="cover" alt="" />
        </div>

        <div className="top-left absolute top-0 left-0 g-red-500 w-1/3 h-1/3"></div>
        <div className="top-top absolute top-0 left-1/3 g-blue-500 w-1/3 h-1/3"></div>
        <div className="absolute top-0 left-2/3 g-green-500 w-1/3 h-1/3"></div>
        <div className="absolute top-1/3 left-0 g-yellow-500 w-1/3 h-1/3"></div>
        <div className="absolute top-1/3 left-1/3 g-orange-500 w-1/3 h-1/3"></div>
        <div className="absolute top-1/3 left-2/3 g-pink-500 w-1/3 h-1/3"></div>
        <div className="absolute top-2/3 left-0 g-purple-500 w-1/3 h-1/3"></div>
        <div className="absolute top-2/3 left-1/3 g-black w-1/3 h-1/3"></div>
        <div className="absolute top-2/3 left-2/3 g-white w-1/3 h-1/3"></div>
      </div>
    </div>
  );
}
