"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, Observer } from "gsap/all";
import NextImg from "@/components/common/next-img";

gsap.registerPlugin(useGSAP, Observer);

export default function LensCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".lens", {
        scale: 0,
      });
      Observer.create({
        target: ".lens-card",
        type: "pointer,touch",
        onMove: (seft: any) => {
          const lensCard = document.querySelector(".lens-card");
          if (!lensCard) return;
          const rect = lensCard?.getBoundingClientRect();
          gsap.to(".lens", {
            top: () => seft.y - rect.top,
            left: () => seft.x - rect.left,
            xPercent: -50,
            yPercent: -50,
          });

          gsap.to(".zoom-img", {
            left: () => -(seft.x - rect.left) * 2,
            top: () => -(seft.y - rect.top) * 2,
            x: 70, // = 140 : 2; 140 la size cua lens
            y: 70,
          });
        },
        onHover: () => {
          gsap.to(".lens", {
            scale: 1,
          });
        },
        onHoverEnd: () => {
          gsap.to(".lens", {
            scale: 0,
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="">
      <div className="h-[400px] w-[300px] rounded-2xl relative bg-gray-600 p-4">
        <div className="group lens-card relative w-full aspect-[16/12] rounded-2xl overflow-hidden">
          <NextImg src="/assets/images/bg-10.jpg" objectFit="cover" alt="" />

          <div className="lens absolute top-0 left-0 scale-0 size-[140px] rounded-full overflow-hidden pointer-events-none">
            {/* 268 và 201 là kích thước của ảnh trên */}
            <div className="zoom-img absolute w-[268px] h-[201px] scale-[2] rounded-2xl origin-top-left">
              <NextImg
                src="/assets/images/bg-10.jpg"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="w-full mt-14 text-white text-2xl flex items-center justify-center">
          Lens card
        </div>
      </div>
    </div>
  );
}
