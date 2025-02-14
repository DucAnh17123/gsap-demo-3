"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/component/common/Header";
import Section9 from "@/component/about-us/section9";
import Section10 from "@/component/about-us/section10";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsPage() {
  const container = useRef(null);
  const scrollDiv = useRef(null);

  useGSAP(
    () => {
      // const bosex = gsap.utils.toArray(".section");
      // bosex.forEach((section: any, index: any) => {
      //   gsap.set(section, {
      //     left: "50%",
      //     top: "50%",
      //     margin: -50,
      //     width: 100,
      //     height: 100,
      //     borderRadius: "20%",
      //     clearProps: "transform",
      //     backfaceVisibility: "hidden",
      //   });
      //   section.tl = gsap
      //     .timeline({
      //       paused: true,
      //       defaults: { immediateRender: true },
      //     })
      //     .fromTo(
      //       section,
      //       {
      //         rotationX: (index / bosex.length) * 360,
      //         transformOrigin: String("50% 50% -500%"),
      //       },
      //       {
      //         rotationX: "+=360",
      //         ease: "none",
      //       }
      //     )
      //     .timeScale(0.05);
      // });
      // ScrollTrigger.create({
      //   trigger: "#scrollDist",
      //   start: "top top",
      //   end: "bottom bottom",
      //   scrub: 1,
      //   onRefresh: (seft) => {
      //     bosex.forEach((section: any, index: any) => {
      //       gsap.set(section.tl, { progress: seft.progress });
      //     });
      //   },
      //   onUpdate: (seft) => {
      //     bosex.forEach((section: any, index: any) => {
      //       gsap.to(section.tl, { progress: seft.progress });
      //     });
      //   },
      // });
      // gsap.to("")

      gsap.to(".box", {
        rotation: 360,
        y: 300,
        scrollTrigger: {
          trigger: scrollDiv.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        },
      });
    },
    { scope: container }
  );

  return (
    <>
      <div className="py-[200px]"></div>
      <div ref={container} className="w-full grid grid-cols-2 h-[100vh]">
        {/* <Section10 /> */}
        <div className="bg-red-500/60 h-full text-black flex justify-center items-center">
          test
        </div>

        <div className="w-full h-full bg-black/50 flex items-center">
          <div className="relative h-full w-full bg-blue-500 overflow-y-scroll">
            <div
              ref={scrollDiv}
              className="absolute top-0 left-0 w-full h-[2000px]"
            >
              <div className="relative w-full h-full">
                <div className="sticky top-0 left-0 w-full h-[100vh] bg-red-500/50 flex justify-center items-center">
                  <div className="box size-[100px] bg-green-500 rounded-lg"></div>
                </div>
              </div>

              {/* <div
              className="w-full h-full overflow-hidden bg-black z-[1] perspective-[200px]"
            >
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/duda-2.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/duda-1.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-1.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-2.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-3.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-4.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/duda-2.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/duda-1.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-1.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-2.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-3.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-4.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/duda-2.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/duda-1.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-1.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-2.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-3.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-4.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/duda-2.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/duda-1.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-1.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-2.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-3.jpg')" }}
              ></div>
              <div
                className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/bg-4.jpg')" }}
              ></div>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="py-[200px]"></div>
    </>
  );
}
