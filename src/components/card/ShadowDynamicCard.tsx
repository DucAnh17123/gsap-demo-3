"use client"

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";

gsap.registerPlugin(useGSAP);

export default function NeonGradientCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {}, { scope: containerRef });

  return (
    <div ref={containerRef} className="">
      <div>

      </div>
    </div>
  );
}
