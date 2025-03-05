"use client";
import React, { useRef, useState } from "react";

export default function BorderDynamicHoverCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState<number>();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    setAngle(angle + 40);
  };

  return (
    <div>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group h-[400px] w-[300px] rounded-2xl relative flex justify-center items-center overflow-hidden bg-gray-500/50"
      >
        <div className="h-[calc(100%-4px)] w-[calc(100%-4px)] bg- rounded-2xl z-[1] p-4 bg-black">
          <div className="size-full text-2xl text-white flex justify-center items-center">
            Border dynamic hover
          </div>
        </div>

        <div
          className="group-hover:opacity-100 opacity-0 transition-all duration-300 absolute size-[1000px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
          style={{
            background: `linear-gradient(#0000, #0000), conic-gradient(from ${angle}deg, #ffffff1f 0deg, #AE48FF, #ffffff00 100deg)`,
          }}
        ></div>
      </div>
    </div>
  );
}
