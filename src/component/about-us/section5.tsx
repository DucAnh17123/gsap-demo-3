"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import React from "react";
import NextImg from "@/component/common/next-img";

gsap.registerPlugin(ScrollTrigger);

export default function Section5() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(".image", {
        height: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          pin: true,
          end: "+=100%",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] bg-black overflow-hidden flex items-center justify-center"
    >
      <div className="absolute w-full h-full top-0 left-0">
        <div className="relative w-full h-full">
          <NextImg
            src="/assets/images/duda-1.jpg"
            alt="UPSC"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="absolute image w-full h-full top-0 left-0">
        <div className="relative w-full h-full">
          <NextImg
            src="/assets/images/duda-2.jpg"
            alt="UPSC"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-semibold">
        SECTION 5
      </div>
    </section>
  );
}
