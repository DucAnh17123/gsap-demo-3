"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import React from "react";
import NextImg from "@/component/common/next-img";

gsap.registerPlugin(ScrollTrigger);

export default function Section6() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap
        .timeline()
        .from(".red", {
          xPercent: -100,
        })
        .from(".orange", {
          xPercent: 100,
        })
        .from(".purple", {
          yPercent: 100,
        })
        .from(".green", {
          yPercent: -100,
        });

      ScrollTrigger.create({
        animation: tl,
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 5,
        pin: true,
        snap: 1 / 3,
        anticipatePin: 1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] bg-black overflow-hidden flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 w-full h-full red bg-red-500/50">
        ONE
      </div>
      <div className="absolute top-0 left-0 w-full h-full orange bg-blue-500/50">
        TWO
      </div>
      <div className="absolute top-0 left-0 w-full h-full purple bg-green-500/50">
        THREE
      </div>
      <div className="absolute top-0 left-0 w-full h-full green bg-purple-500/50">
        FOUR
      </div>
    </section>
  );
}
