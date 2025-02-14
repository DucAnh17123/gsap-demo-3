"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { SplitText } from "gsap-trial/all";

gsap.registerPlugin(SplitText);

export default function Demo4() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      var split = new SplitText(".title", { type: "chars" });
      //now animate each character into place from 100px above, fading in:
      gsap.from(split.chars, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef}>
      <div className="title text-4xl font-semibold w-full text-center mt-[100px]">
        Demo 4
      </div>
    </div>
  );
}
