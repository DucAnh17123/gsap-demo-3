"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";

gsap.registerPlugin(useGSAP);

export default function BlobCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".blob-card", {
        keyframes: {
          "0%": {
            attr: { style: "border-radius: 50% 50% 53% 47% / 81% 84% 16% 19%" },
          },
          "10%": {
            attr: {
              style: "border-radius: 27% 73% 48% 52% / 81% 28% 72% 19% ",
            },
          },
          "20%": {
            attr: {
              style: "border-radius: 65% 35% 32% 68% / 53% 28% 72% 47%",
            },
          },
          "30%": {
            attr: {
              style: "border-radius: 21% 79% 22% 78% / 53% 10% 90% 47%",
            },
          },
          "40%": {
            attr: {
              style: "border-radius: 18% 82% 47% 53% / 82% 41% 59% 18%",
            },
          },
          "50%": {
            attr: {
              style: "border-radius: 42% 58% 8% 92% / 59% 14% 86% 41%",
            },
          },
          "60%": {
            attr: {
              style: "border-radius: 72% 28% 85% 15% / 13% 70% 30% 87%",
            },
          },
          "70%": {
            attr: {
              style: "border-radius: 74% 26% 46% 54% / 56% 29% 71% 44%",
            },
          },
          "80%": {
            attr: {
              style: "border-radius: 72% 28% 79% 21% / 15% 80% 20% 85%",
            },
          },
          "90%": {
            attr: {
              style: "border-radius: 21% 79% 55% 45% / 73% 90% 10% 27%",
            },
          },
          "100%": {
            attr: {
              style: "border-radius: 50% 50% 53% 47% / 81% 84% 16% 19%",
            },
          },
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
    <div ref={containerRef} className="flex items-center">
      <div className="blob-card relative size-[300px] bg-gradient-to-t from-[#8A2BE2] to-[#FF6EB4] flex justify-center items-center text-2xl text-white">
        Blob card
      </div>
    </div>
  );
}
