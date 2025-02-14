"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import Link from "next/link";

gsap.registerPlugin(Observer);

const Demo5 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listBox = useRef<HTMLDivElement>(null);

  const { context, contextSafe } = useGSAP(
    () => {
      gsap.set(".circle", { autoAlpha: 0, scale: 0 });
      Observer.create({
        target: window, // Chỉ theo dõi sự kiện trong container
        type: "pointer,touch",
        onMove: (self) => {
          gsap.to(".circle", {
            left: self.x,
            top: self.y,
            xPercent: -50,
            yPercent: -50,
            autoAlpha: 1,
            scale: 1,
            duration: 0.5,
          });
        },
      });

      Observer.create({
        target: window, // Chỉ theo dõi sự kiện trong container
        type: "pointer,touch",
        onMove: (self) => {
          gsap.to(".circle-2", {
            left: self.x,
            top: self.y,
            xPercent: -50,
            yPercent: -50,
            autoAlpha: 1,
            scale: 1,
            duration: 1,
          });
        },
      });

      //   gsap.set(".circle", { autoAlpha: 0, scale: 0 });
      //   Observer.create({
      //     target: ".content", // Chỉ theo dõi sự kiện trong container
      //     type: "pointer,touch,scroll",
      //     onMove: (self) => {
      //       gsap.to(".circle", {
      //         left: self.x,
      //         top: self.y,
      //         xPercent: -50,
      //         yPercent: -50,
      //         autoAlpha: 1,
      //         duration: 0.5,
      //       });
      //     },
      //     onHover: () => gsap.to(".circle", { scale: 1, autoAlpha: 1 }),
      //     onHoverEnd: () => gsap.to(".circle", { scale: 0, autoAlpha: 0 }),
      //   });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className="w-full h-[900px]"></div>
      <div className="circle fixed top-0 left-0 size-[70px] bg-red-500/50 rounded-full z-[9999] pointer-events-none"></div>
      <div className="circle-2 fixed top-0 left-0 size-[30px] bg-red-500/70 rounded-full z-[9999] pointer-events-none"></div>

      <div className="content relative flex justify-center w-full bg-gray-500 h-[1000px] overflow-hidden">
        {/* <div className="circle fixed top-1/2 left-1/2 size-[100px] bg-blue-500/70 rounded-full"></div> */}
      </div>
      <Link href="/demo-1">demo-1</Link>

      <div id="black-div" className="w-full h-[1000px] bg-black"></div>
    </div>
  );
};

export default Demo5;
