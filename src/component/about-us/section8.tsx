"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import React from "react";
import NextImg from "@/component/common/next-img";

gsap.registerPlugin(ScrollTrigger);

export default function Section8() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".box",
        {
          top: "40%",
          left: "70%",
          height: "80px",
          width: "200px",
        },
        {
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "bottom bottom",
            end: "-=100%",
            scrub: 10,
            pin: true,
            snap: 1 / 3,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    // <section
    //   ref={containerRef}
    //   className="relative w-full h-[100vh] bg-black overflow-hidden grid grid-cols-3"
    // >
    //   <div className="box absolute z-[1] bg-red-500/50"></div>
    //   <div className="absolute inset-0 w-full h-full">
    //     <div className="relative w-full h-full">
    //       <NextImg
    //         src="/assets/images/duda-1.jpg"
    //         alt="UPSC"
    //         objectFit="cover"
    //       />
    //     </div>
    //   </div>
    // </section>
    <section
    ref={containerRef}
    className="relative w-full h-[100vh] bg-black overflow-hidden grid grid-cols-3"
  >
    <div className="box absolute z-[1] bg-red-500/50"></div>
    <div className="absolute inset-0 w-full h-full">
      <div className="relative w-full h-full">
        <NextImg
          src="/assets/images/duda-1.jpg"
          alt="UPSC"
          objectFit="cover"
        />
      </div>
    </div>
  </section>
  );
}
