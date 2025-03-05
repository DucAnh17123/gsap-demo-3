"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
  const containerRef = useRef(null);
  const tl = useRef();
  const stl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ delay: 0.5 })
        .from(".title", {
          yPercent: 90,
          ease: "power4",
          duration: 3,
        })
        .from(
          ".sub_title",
          {
            x: -100,
            opacity: 0,
            ease: "power4",
            duration: 3,
          },
          0.7
        )
        .from(
          ".image_1",
          {
            y: 50,
            opacity: 0,
            ease: "power2",
            duration: 10,
          },
          1
        )
        .from(
          ".image_2",
          {
            y: -50,
            opacity: 0,
            ease: "power2",
            duration: 10,
          },
          1
        );

      stl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: 3,
            start: "top bottom",
            end: "bottom top",
          },
        })
        .to(".title", {
          xPercent: 150,
          ease: "power4.in",
          duration: 4,
        })
        .to(
          ".sub_title",
          {
            yPercent: 150,
            ease: "power4.in",
            duration: 4,
          },
          0
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full h-[100vh] bg-[#c0d7d8] px-[220px]"
    >
      <div className="relative w-full h-full">
        <div className="image_1 absolute size-[300px] bg-red-800 top-[250px] left-0"></div>
        <div className="image_2 absolute size-[300px] bg-blue-800 top-[150px] left-[200px]"></div>

        <div className="absolute top-[200px] right-0 overflow-hidden">
          <div className="title text-black uppercase text-[400px] font-light overflow-hidden leading-[1]">
            DUNA
          </div>
        </div>

        <div className="sub_title absolute text-black font-medium text-lg bottom-[100px] right-0 w-[60%]">
          Duda is going from strength to strength. Whether it’s in the
          prestigious gallery in the new World Trade Centre in New York or at an
          international art fair in Chicago or Hong Kong, people recognize the
          original response to life in Duda’s work, and go away feeling animated
          and energized by his vibrant creations.
        </div>
      </div>
    </section>
  );
}
