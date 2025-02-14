"use client";

import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function Header() {
  useGSAP(() => {
    gsap.set(".header", { width: 1440 });
    gsap.fromTo(
      ".header",
      { width: "1440px" },
      {
        width: "60%",
        ease: "none",
        scrollTrigger: {
          trigger: ".header",
          start: "top top",
          end: "bottom 20%",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      }
    );
  });

  return (
    <div className="header fixed top-[20px] left-1/2 w-[1440px] -translate-x-1/2 flex items-center gap-5 h-[80px] bg-black px-10 rounded-full justify-between z-[999]">
      <div className="flex gap-6 items-center">
        <div className="text-white text-3xl font-semibold uppercase">DUNA</div>
        <div className="flex items-center gap-10">
          <div className="text-white font-semibold">Blog</div>
          <div className="text-white font-semibold">Among us</div>
          <div className="text-white font-semibold">News</div>
        </div>
      </div>

      <div className="flex gap-8 items-center">
        <button className="p-[6px_12px] rounded-full text-black bg-yellow-500">
          Sign in
        </button>
        <button className="flex flex-col gap-1">
          <div className="h-[2px] w-[32px] bg-white"></div>
          <div className="h-[2px] w-[32px] bg-white"></div>
          <div className="h-[2px] w-[32px] bg-white"></div>
        </button>
      </div>
    </div>
  );
}
