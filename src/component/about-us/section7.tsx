"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import React from "react";
import NextImg from "@/component/common/next-img";

gsap.registerPlugin(ScrollTrigger);

export default function Section7() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".box", {
        height: "140vw",
        width: "140vw",
      });

      gsap.fromTo(
        ".box",
        {
          scale: 0.0001,
        },
        {
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom center",
            scrub: 1,
            pin: true,
            snap: 1/3,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] bg-black overflow-hidden flex items-center justify-center"
    >
      <div className="box absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-red-500/50 rounded-full">
        <div>

        </div>
      </div>

      <div className="absolute z-[1] top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 text-black text-8xl font-semibold">
        DUNNA
      </div>
    </section>
  );
}
