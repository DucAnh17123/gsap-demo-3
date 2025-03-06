"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Observer } from "gsap/all";
import NextImg from "../common/next-img";

gsap.registerPlugin(Observer);

export default function RotateCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".rotate-wrap", {
        perspective: 5000,
      });
      gsap.set(".rotate-card", {
        perspective: 500,
      });

      Observer.create({
        target: ".rotate-wrap",
        type: "pointer,touch",
        onMove: (self: any) => {
          const card = self.target as HTMLElement;
          const bounds = card.getBoundingClientRect();

          // Tính phần trăm vị trí chuột trong card
          const percentX = (self.x - bounds.left) / bounds.width;
          const percentY = (self.y - bounds.top) / bounds.height;

          // Nội suy giá trị trong khoảng -20 đến 20
          const rotateX = (percentY - 0.5) * 40; // Trục Y đảo ngược
          const rotateY = (percentX - 0.5) * -40;

          gsap.to(".rotate-card", {
            rotateX,
            rotateY,
            duration: 0.2,
            // translateZ: -10,
            ease: "none",
          });
        },
        onHoverEnd: () => {
          gsap.to(".rotate-card", {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="">
      <div
        className="rotate-wrap relative w-[300px] h-[400px] rounded-2xl overflow-"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="rotate-card absolute inset-0 size-full rounded-2xl overflow-hidden">
          <NextImg src="/assets/images/bg-6.jpg" objectFit="cover" alt="" />
          <div className="absolute z-[5] inset-0 size-full flex justify-center items-center text-white text-2xl">
            Rotate perspective
          </div>
        </div>
      </div>
    </div>
  );
}
