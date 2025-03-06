"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(useGSAP, Observer);

export default function BlobCardHover() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    Observer.create({
      target: containerRef.current,
      type: "pointer",
      onMove: (self: any) => {
        if (!blobRef.current) return;

        const { width, height, left, top } =
          blobRef.current.getBoundingClientRect();
        const x = (self.x - left) / width; // Normalized X (0 to 1)
        const y = (self.y - top) / height; // Normalized Y (0 to 1)

        // Tạo giá trị border-radius động theo vị trí con trỏ
        const radius = `${30 + x * 40}% ${70 - x * 40}% ${50 + y * 30}% ${
          50 - y * 30
        }% / ${50 - y * 30}% ${50 + x * 30}% ${70 - x * 40}% ${30 + y * 40}%`;

        // Áp dụng hiệu ứng border-radius vào blob-card
        gsap.set(blobRef.current, { borderRadius: radius, ease: "bounce.in" });
      },
    });
  });

  return (
    <div ref={containerRef} className="flex items-center">
      <div
        ref={blobRef}
        className="blob-card relative size-[300px] bg-gradient-to-t from-[#8A2BE2] to-[#FF6EB4] flex justify-center items-center text-2xl text-white transition-all duration-200"
      >
        Blob card
      </div>
    </div>
  );
}
