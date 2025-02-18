"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Flip } from "gsap/all";
import { Physics2DPlugin } from "gsap-trial/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NextImg from "@/component/common/next-img";

gsap.registerPlugin(ScrollTrigger, useGSAP, Flip, Physics2DPlugin);

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
        keyframes: [
          { background: "red" },
          { background: "blue" },
          { background: "green" },
          { background: "purple" },
          { background: "yellow" },
          { background: "pink" },
          { background: "orange" },
        ],
        duration: 14,
        repeat: -1,
        repeatRefresh: true,
      });

      gsap.to(".line-card", {
        keyframes: [
          { left: "100%", duration: 2 },
          { top: "100%", duration: 2 },
          { left: 0, duration: 2 },
          { top: 0, duration: 2 },
        ],
        repeat: -1,
      });

      gsap.to(".line-card-2", {
        keyframes: [{ left: "100%" }, { top: "100%" }, { left: 0 }, { top: 0 }],
        rotate: "+=360",
        duration: 8,
        repeat: -1,
      });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        repeatRefresh: true,
      });
      gsap.set(".ball", {
        backgroundColor: "random([#663399,#84d100,#cc9900,#0066cc,#993333])",
        scale: "0.1",
      });

      tl.set(".chill", {});

      tl.fromTo(
        ".chill",
        { opacity: 1 },
        {
          top: "40%",
          duration: 1,
          opacity: 1,
        }
      ).to(".chill", {
        width: "10px",
        height: "10px",
        background: "red",
        scale: "0.1",
        duration: 0.1,
      });
      tl.to(
        ".ball, .chill",
        {
          duration: 4,
          physics2D: {
            velocity: "random(50, 650)",
            angle: "random(-360, 360)",
            gravity: 500,
          },
          scale: "random(0.4, 1)",
          delay: "random(0, 0.2)",
          repeat: -1,
          repeatDelay: 1,
        },
        1
      );
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
          <div className="gradient-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+16px)] h-[calc(100%+16px)] blur-xl z-[1]"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-2xl bg-black z-[2] p-[20px]">
            <div className="text-white text-2xl">heading</div>
            <div className="text-white text-xl">description</div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-around items-center">
        <div className="w-full h-[100vh] bg-black flex justify-center items-center">
          <div className="h-[500px] w-[400px] rounded-2xl relative flex justify-center items-center overflow-hidden bg-gray-500/50">
            <div className="h-[calc(100%-4px)] w-[calc(100%-4px)] bg-black rounded-2xl z-[1] p-4">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <NextImg
                  src="/assets/images/bg-9.jpg"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="text-white text-2xl mt-4">heading</div>
              <div className="text-white text-xl">description</div>
            </div>

            <div className="line-card absolute w-[80px] h-[80px] bg-gradient-to-tl from-[#18CCFC] to-[#AE48FF] top-0 left-0 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
          </div>
        </div>

        <div className="w-full h-[100vh] bg-black flex justify-center items-center">
          <div className="h-[500px] w-[400px] rounded-2xl relative flex justify-center items-center overflow-hidden bg-gray-500/50">
            <div className="h-[calc(100%-4px)] w-[calc(100%-4px)] bg-black rounded-2xl z-[1] p-4">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <NextImg
                  src="/assets/images/bg-9.jpg"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="text-white text-2xl mt-4">heading</div>
              <div className="text-white text-xl">description</div>
            </div>

            <div className="line-card-2 absolute w-[80px] h-[80px] bg-gradient-to-b from-[#18CCFC] via-[#AE48FF] to-[#AE48FF]/10 top-0 left-0 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
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

      <div className="w-full flex justify-center items-center bg-black">
        <div className="relative w-[100vw] h-[100vh] overflow-hidden">
          <div className="chill absolute top-[90%] left-1/2 -translate-x-1/2 w-[5px] h-[30px] opacity-1 bg-gradient-to-b from-[#18CCFC] via-[#AE48FF] to-[#AE48FF]/10 rounded-full"></div>
          {Array.from({ length: 500 }).map((_, index) => (
            <div
              key={index}
              className="ball absolute w-[10px] h-[10px] rounded-full will-change-transform top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
