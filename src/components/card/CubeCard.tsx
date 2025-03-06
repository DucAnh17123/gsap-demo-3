"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";
import NextImg from "../common/next-img";

gsap.registerPlugin(useGSAP);

export default function CubeCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".layer-1", {
        translateZ: 100,
      });
      gsap.set(".layer-2", {
        translateZ: -100,
      });
      gsap.set(".layer-3", {
        translateX: 100,
        rotateY: 90,
      });
      gsap.set(".layer-4", {
        translateX: -100,
        rotateY: -90,
      });
      gsap.set(".layer-5", {
        translateY: 100,
        rotateX: -90,
      });
      gsap.set(".layer-6", {
        translateY: -100,
        rotateX: 90,
      });

      gsap.to(".cube-card", {
        keyframes: {
          "0%": { rotateX: 45, rotateY: 45 },
          "10%": { rotateX: -45, rotateY: 45 },
          "20%": { rotateX: -180, rotateY: 90 },
          "30%": { rotateX: -45, rotateY: -45 },
          "40%": { rotateX: 45, rotateY: -45 },
          "50%": { rotateX: 360, rotateY: 90 },
          "60%": { rotateX: 45, rotateY: 45 },
          "70%": { rotateX: 90, rotateY: -180 },
          "80%": { rotateX: 45, rotateY: 180 },
          "90%": { rotateX: 270, rotateY: 225 },
          "100%": { rotateX: 45, rotateY: 45 },
        },
        easeEach: "power4.inOut",
        duration: 14,
        repeat: -1,
        repeatRefresh: true,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="flex h-full items-center">
      <div
        className="cube-card relative w-[200px] h-[200px] rounded-2xl"
        style={{
          transformStyle: "preserve-3d",
          //   perspective: "500px",
        }}
      >
        <div className="layer-1 absolute inset-0 size-full">
          <NextImg src="/assets/images/bg-6.jpg" objectFit="cover" alt="" />
        </div>
        <div className="layer-2 absolute inset-0 size-full">
          <NextImg src="/assets/images/bg-7.jpg" objectFit="cover" alt="" />
        </div>
        <div className="layer-3 absolute inset-0 size-full">
          <NextImg src="/assets/images/bg-8.jpg" objectFit="cover" alt="" />
        </div>
        <div className="layer-4 absolute inset-0 size-full">
          <NextImg src="/assets/images/bg-9.jpg" objectFit="cover" alt="" />
        </div>
        <div className="layer-5 absolute inset-0 size-full">
          <NextImg src="/assets/images/bg-10.jpg" objectFit="cover" alt="" />
        </div>
        <div className="layer-6 absolute inset-0 size-full">
          <NextImg src="/assets/images/bg-11.jpg" objectFit="cover" alt="" />
        </div>
      </div>
    </div>
  );
}
