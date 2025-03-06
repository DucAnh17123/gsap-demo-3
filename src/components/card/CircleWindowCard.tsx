"use client"

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";

gsap.registerPlugin(useGSAP);

export default function CircleWindowCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {}, { scope: containerRef });

  return (
    <div ref={containerRef} className="">
      <div className="relative w-[300px] h-[300px] rounded-full bg-red-500 overflow-hidden">

      </div>
    </div>
  );
}
