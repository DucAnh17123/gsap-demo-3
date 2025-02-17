"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer, MotionPathPlugin, ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap-trial/all";
import Link from "next/link";

gsap.registerPlugin(Observer, MotionPathPlugin, ScrollTrigger, ScrollSmoother);

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
            duration: 0.2,
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
            duration: 0.5,
          });
        },
      });

      gsap.set(".line", {
        height: 0,
      });
      gsap.to(".line", {
        // motionPath: {
        //   path: [{ y: 2700 }],
        //   curviness: 1,
        // },
        top: "90%",
        height: "700px",
        transformOrigin: "bottom center",
        scrollTrigger: {
          trigger: ".content",
          // end: "end end",
          scrub: 1,
          // pin: true
        },
        ease: "power1.inOut",
      });

      const smoother = ScrollSmoother.create({
        content: "#smooth-content",
        smooth: 1,
        effects: true,
      });

      smoother.effects(".img", { speed: "auto" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".accordions",
          pin: true,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(".accordion .text", {
        height: 0,
        paddingBottom: 0,
        opacity: 0,
        stagger: 0.5,
      });
      tl.to(
        ".accordion",
        {
          marginBottom: -15,
          stagger: 0.5,
        },
        "<"
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} id="smooth-wrapper">
      <div className="circle fixed top-0 left-0 size-[70px] bg-red-500/50 rounded-full z-[9999] pointer-events-none"></div>
      <div className="circle-2 fixed top-0 left-0 size-[30px] bg-red-500/70 rounded-full z-[9999] pointer-events-none"></div>

      <div id="smooth-content" className="w-full">
        <div className="h-[100vh] w-full"></div>
        <div className="relative content w-full h-[3200px] bg-black overflow-hidden">
          <div className="absolute top-0 left-[30px] line w-[2px] bg-gradient-to-t from-[#18CCFC] via-[#AE48FF] to-[#AE48FF]/10 rounded-full"></div>

          <div className="accordions flex flex-col gap-[40px] items-center justify-start mt-[100px]">
            <div className="accordion bg-blue-500 p-[20px] w-[50vw] rounded-2xl">
              <div className="title">All-screen design.</div>
              <div className="text">
                Lets you immerse yourself in whatever you’re reading, watching,
                or creating. The 10.9-inch Liquid Retina display features
                advanced technologies like True Tone, P3 wide color, and an
                antireflective coating.1
              </div>
            </div>

            <div className="accordion bg-red-500 p-[20px] w-[50vw] rounded-2xl">
              <div className="title">All-screen design.</div>
              <div className="text">
                Lets you immerse yourself in whatever you’re reading, watching,
                or creating. The 10.9-inch Liquid Retina display features
                advanced technologies like True Tone, P3 wide color, and an
                antireflective coating.1
              </div>
            </div>

            <div className="accordion bg-green-500 p-[20px] w-[50vw] rounded-2xl">
              <div className="title">All-screen design.</div>
              <div className="text">
                Lets you immerse yourself in whatever you’re reading, watching,
                or creating. The 10.9-inch Liquid Retina display features
                advanced technologies like True Tone, P3 wide color, and an
                antireflective coating.1
              </div>
            </div>

            <div className="accordion bg-orange-500 p-[20px] w-[50vw] rounded-2xl">
              <div className="title">All-screen design.</div>
              <div className="text">
                Lets you immerse yourself in whatever you’re reading, watching,
                or creating. The 10.9-inch Liquid Retina display features
                advanced technologies like True Tone, P3 wide color, and an
                antireflective coating.1
              </div>
            </div>
          </div>
        </div>

        <div className="h-[100vh] w-full"></div>
      </div>
    </div>
  );
};

export default Demo5;
