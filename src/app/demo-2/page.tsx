"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Flip } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP, Flip);

export default function Demo2() {
  const containerRef = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.set(".box", { autoAlpha: 0, y: 100 });

  //     ScrollTrigger.batch(".box", {
  //       // start: "top center",
  //       // batchMax: 3,
  //       // interval: 4,
  //       onEnter: (batch) =>
  //         gsap.to(batch, {
  //           autoAlpha: 1,
  //           y: 0,
  //           stagger: { each: 0.15 },
  //         }),

  //       onLeave: (batch) =>
  //         gsap.set(batch, { autoAlpha: 0, y: -100, overwrite: true }),
  //       onEnterBack: (batch) =>
  //         gsap.to(batch, {
  //           autoAlpha: 1,
  //           y: 0,
  //           stagger: 0.15,
  //           overwrite: true,
  //         }),
  //       onLeaveBack: (batch) =>
  //         gsap.to(batch, { autoAlpha: 0, y: 100, overwrite: true }),
  //     });

  //     ScrollTrigger.matchMedia({"(min-width: 800px)": function() { },})
  //   },

  //   { scope: containerRef }
  // );

  const { contextSafe } = useGSAP(
    () => {
      gsap.to(".gradient-card", {
        backgroundColor: gsap.utils.wrap([
          "red",
          "blue",
          "green",
          "yellow",
          "orange",
          "pink",
          "purple",
        ]),
        duration: 2,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });
    },
    { scope: containerRef }
  );

  const handleHover = contextSafe((index: any) => {
    const cardActive = document.querySelector(`card-${index}`);
    const box = document.querySelector(".box-blur");
    if (box && cardActive) {
      cardActive?.appendChild(box);
    }
    gsap.to(".box-blur", {
      autoAlpha: 1,
    });
    Flip.fit(".box-blur", `.card-${index}`, {
      scale: true,
      duration: 0.5,
      ease: "power1.inOut",
    });
  });

  const handleHoverLeave = contextSafe(() => {
    gsap.to(".box-blur", {
      autoAlpha: 0,
    });
  });

  return (
    // <div ref={containerRef} className="m-[100px]">
    //   <div className="w-full grid grid-cols-6 gap-4">
    //     {Array.from({ length: 60 }).map((_, index) => (
    //       <div
    //         key={index}
    //         className="box h-[300px] bg-red-500/50 rounded-2xl"
    //       ></div>
    //     ))}
    //   </div>
    // </div>
    <div ref={containerRef} className="relative overflow-hidden">
      <div className="w-full h-[100vh] bg-black flex justify-center items-center">
        <div className="h-[500px] w-[400px] rounded-2xl relative">
          <div className="gradient-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+16px)] h-[calc(100%+16px)] bg-blue-500 blur-xl z-[1]"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-2xl bg-black z-[2] p-[20px]">
            <div className="text-white text-2xl">heading</div>
            <div className="text-white text-xl">description</div>
          </div>
        </div>
      </div>

      <div className="w-full h-[100vh] bg-black flex justify-center items-center">
        <div className="grid grid-cols-3 w-auto">
          {Array.from({ length: 6 }).map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleHoverLeave}
              className={`card-${index} relative size-[300px] bg-black rounded-2xl p-[12px]`}
            >
              <div className="relative size-full border-[1px] border-gray-700 bg-black rounded-2xl z-[2] flex justify-center items-center text-white text-3xl">
                box {index + 1}
              </div>
              {index === 0 && (
                <div className="box-blur opacity-0 absolute inset-0 size-full bg-slate-800/80 rounded-2xl z-[1]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
