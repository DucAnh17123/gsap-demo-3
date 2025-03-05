"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, SplitText } from "gsap-trial/all";
import { ScrollTrigger, Flip } from "gsap/all";
import Link from "next/link";
import NextImg from "@/components/common/next-img";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText, Flip);

const Demo8 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5, // Độ mượt khi cuộn
      });

      // Kích hoạt Flip Animation khi cuộn
      const items: any = gsap.utils.toArray(".item");
      let state = Flip.getState(items); // Lưu trạng thái ban đầu

      ScrollTrigger.create({
        trigger: "#smooth-content",
        start: "top top",
        end: "bottom bottom",
        onToggle: (self) => {
          if (self.isActive) {
            Flip.from(state, {
              scale: true,
              duration: 1,
              ease: "power1.inOut",
            });
          }
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} id="smooth-wrapper">
      <div id="smooth-content">
        <div className="w-full h-[100vh] bg-gray-500"></div>

        <div className="grid grid-cols-2 gap-6 p-10">
          <div className="item bg-blue-500 text-white p-10 rounded-lg">
            Box 1
          </div>
          <div className="item bg-green-500 text-white p-10 rounded-lg">
            Box 2
          </div>
          <div className="item bg-red-500 text-white p-10 rounded-lg">
            Box 3
          </div>
          <div className="item bg-yellow-500 text-black p-10 rounded-lg">
            Box 4
          </div>
        </div>

        <div className="w-full h-[100vh] bg-gray-500"></div>
      </div>
    </div>
  );
};

export default Demo8;
