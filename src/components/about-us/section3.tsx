"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import React from "react";
import NextImg from "@/components/common/next-img";

gsap.registerPlugin(ScrollTrigger);

export default function Section3() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const getRatio = (el: any) =>
    window.innerHeight / (window.innerHeight + el.offsetHeight);

  useGSAP(
    () => {
      gsap.fromTo(
        imageRef.current,
        {
          backgroundPosition: () =>
            `50% ${-window.innerHeight * getRatio(containerRef.current)}px`,
        },
        {
          backgroundPosition: () =>
            `50% ${
              window.innerHeight * (1 - getRatio(containerRef.current))
            }px`,
          ease: "none",

          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.to(".box", {
        rotation: 360,
        xPercent: 500,
        duration: 3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause resume reset",
        },
      });

      gsap.to(".circle", {
        duration: 1,
        scale: 0.1,
        rotation: "+=360",
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.2,
          from: "center",
          grid: [7, 7],
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] bg-[#F3D3B0] overflow-hidden"
    >
      <div className="w-full h-full grid grid-cols-2">
        <div className="relative w-full h-full">
          <div className="box size-[100px] rounded-xl bg-red-500 mt-20 pl-20"></div>
          <div className="flex items-center gap-6 mt-20 pl-20">
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
          </div>

          <div className="flex items-center gap-6 mt-5 pl-20">
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
          </div>

          <div className="flex items-center gap-6 mt-5 pl-20">
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
          </div>

          <div className="flex items-center gap-6 mt-5 pl-20">
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
          </div>

          <div className="flex items-center gap-6 mt-5 pl-20">
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
          </div>

          <div className="flex items-center gap-6 mt-5 pl-20">
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
          </div>

          <div className="flex items-center gap-6 mt-5 pl-20">
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
            <div className="circle size-[50px] rounded-[20px] bg-blue-500"></div>
          </div>
        </div>
      </div>

      <div
        ref={imageRef}
        className="image absolute top-0 bottom-0 right-0 w-1/2 h-full bg-cover bg-no-repeat bg-center z-[2]"
        style={{
          backgroundImage: "url('/assets/images/duda-2.jpg')",
        }}
      >
        {/* <NextImg
            src="/assets/images/duda-1.jpg"
            alt="UPSC"
            objectFit="cover"
          /> */}
      </div>
    </section>
  );
}
