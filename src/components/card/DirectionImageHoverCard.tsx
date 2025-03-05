"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Observer } from "gsap/all";
import NextImg from "../common/next-img";

gsap.registerPlugin(useGSAP, Observer);

export default function DirectionImageHoverCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    Observer.create({
      target: ".top",
      type: "pointer, touch",
      onHover: (self: any) => {
        gsap.to(imageRef.current, {
          yPercent: -60,
        });
        gsap.to(".top", {
          scale: 3,
          zIndex: 3,
        });
      },
    });

    Observer.create({
      target: ".left",
      type: "pointer, touch",
      onHover: (self: any) => {
        gsap.to(imageRef.current, {
          xPercent: -40,
        });
        gsap.to(".left", {
          scale: 3,
          zIndex: 3,
        });
      },
    });

    Observer.create({
      target: ".bottom",
      type: "pointer, touch",
      onHover: (self: any) => {
        gsap.to(imageRef.current, {
          yPercent: -40,
        });
        gsap.to(".bottom", {
          scale: 3,
          zIndex: 3,
        });
      },
    });

    Observer.create({
      target: ".right",
      type: "pointer, touch",
      onHover: (self: any) => {
        gsap.to(imageRef.current, {
          xPercent: -60,
        });
        gsap.to(".right", {
          scale: 3,
          zIndex: 3,
        });
      },
    });

    Observer.create({
      target: cardRef.current,
      type: "pointer, touch",
      onHoverEnd: (self: any) => {
        gsap.to(imageRef.current, {
          yPercent: -50,
          xPercent: -50,
        });
        gsap.to(".layer", {
          scale: 1,
          zIndex: 1,
        });
      },
    });
  });

  return (
    <div ref={containerRef}>
      <div
        ref={cardRef}
        className="relative group w-[300px] h-[400px] bg-red-500 rounded-2xl overflow-hidden"
      >
        <div
          ref={imageRef}
          className="absolute group-hover:brightness-75 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%]"
        >
          <NextImg src="/assets/images/bg-5.jpg" objectFit="cover" alt="" />
        </div>

        <div
          className="top layer absolute -top-1/2 left-0 w-full h-full z-[1]"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        ></div>
        <div
          className="right layer absolute top-1/2 -translate-y-1/2 left-1/2 w-full h-full z-[1]"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        ></div>
        <div
          className="bottom layer absolute top-1/2 left-0 w-full h-full z-[1]"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        ></div>
        <div
          className="left layer absolute top-1/2 -translate-y-1/2 -left-1/2 w-full h-full z-[1]"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        ></div>

        <div className="absolute inset-0 size-full text-white text-2xl flex items-center justify-center">
          Direction image hover
        </div>
      </div>
    </div>
  );
}
