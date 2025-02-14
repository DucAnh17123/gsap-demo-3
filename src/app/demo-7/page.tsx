"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, SplitText } from "gsap-trial/all";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import NextImg from "@/component/common/next-img";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

const Demo7 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let skewSetter = gsap.quickTo(".img", "skewY"), // fast
        clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

      // ScrollSmoother.create({
      //   wrapper: "#smooth-wrapper",
      //   content: "#smooth-content",
      //   smooth: 4,
      //   speed: 2,
      //   effects: true,
      //   onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
      //   onStop: () => skewSetter(0),
      // });

      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 0.5,
        effects: true,
      });

      let headings = gsap.utils.toArray(".title").reverse();
      headings.forEach((heading: any, i) => {
        let headingIndex = i + 1;
        let mySplitText = new SplitText(heading, { type: "chars" });
        let chars = mySplitText.chars;

        chars.forEach((char, i) => {
          smoother.effects(char, { lag: (i + headingIndex) * 0.09, speed: 1 });
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-black">
      <div
        id="smooth-wrapper"
        className="fixed overflow-hidden h-full w-full inset-0 bg-black"
      >
        <div id="smooth-content" className="overflow-visible w-full">
          <div className="pt-[60vh] relative w-full grid grid-cols-3 z-[1] gap-[100px] items-center">
            {Array.from({ length: 20 }).map((_, index) => (
              <div
                key={index}
                className="w-[200px] relative pt-[35%] mr-[200px] overflow-hidden z-[1] img"
              >
                <div className="absolute w-full h-[160%] top-1/2 -translate-y-1/2 left-0 ">
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
            ))}
          </div>
          <div className="bg-white w-full h-[100vh] flex justify-center items-center">
            <div className="relative w-full h-[200px] bg-gray-500/50">
              <div className="title absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 leading-[200px] w-full h-full text-center text-black text-8xl font-bold z-[3]">
                ScrollSmoother
              </div>
              <div className="title absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 leading-[200px] w-full h-full text-center text-8xl font-bold text-[#1dffff]/50 z-[2]">
                ScrollSmoother
              </div>
              <div className="title absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 leading-[200px] w-full h-full text-center text-8xl font-bold text-[#fe0604]/50 z-[1]">
                ScrollSmoother
              </div>
            </div>
          </div>

          <div className="w-full h-[1000px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Demo7;
