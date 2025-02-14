"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap-trial/all";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import NextImg from "@/component/common/next-img";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Demo5 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      //   const smooth = ScrollSmoother.create({
      //     wrapper: "#smooth-wrapper",
      //     content: "#smooth-content",
      //     smooth: 2,
      //     effects: true,
      //   });

      //   smooth.effects(".box", {
      //     speed: 0.5,
      //     lag: (i) => i * 1,
      //   });

      const smoother = ScrollSmoother.create({
        content: "#smooth-content",
        smooth: 3,
        effects: true,
      });

      smoother.effects(".img", { speed: "auto" });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} id="smooth-wrapper">
      {/* <div id="smooth-content">
        <div className="w-full h-[2000px]"></div>

        <div className="flex justify-around items-center my-20">
          <div className="box size-[100px] bg-red-500 rounded-2xl"></div>
          <div className="box size-[100px] bg-blue-500 rounded-2xl"></div>
          <div className="box size-[100px] bg-green-500 rounded-2xl"></div>
        </div>

        <div className="w-full h-[1000px] bg-black"></div>
      </div> */}

      <div id="smooth-content" className="w-full relative">
        <div className="h-[100vh] w-full relative overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[160%] img">
            <div className="relative w-full h-full">
              <NextImg
                src="/assets/images/bg-9.jpg"
                objectFit="cover"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>

        <div className="h-[100vh] w-full relative overflow-hidden bg-black flex items-center">
          <div className="w-[650px] relative pt-[25%] ml-[200px] overflow-hidden">
            <div className="absolute w-full h-[160%] top-1/2 -translate-y-1/2 left-0 img">
              <div className="relative w-full h-full">
                <NextImg
                  src="/assets/images/bg-5.jpg"
                  objectFit="cover"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[100vh] w-full relative overflow-hidden bg-black flex items-center justify-end">
          <div className="w-[650px] relative pt-[25%] mr-[200px] overflow-hidden">
            <div className="absolute w-full h-[160%] top-1/2 -translate-y-1/2 left-0 img">
              <div className="relative w-full h-full">
                <NextImg
                  src="/assets/images/bg-6.jpg"
                  objectFit="cover"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[100vh] w-full relative overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[160%] img">
            <div className="relative w-full h-full">
              <NextImg
                src="/assets/images/bg-7.jpg"
                objectFit="cover"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>

        <div className="h-[1000px]"></div>
      </div>
    </div>
  );
};

export default Demo5;
