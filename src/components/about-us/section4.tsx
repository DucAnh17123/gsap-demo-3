"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import React from "react";
import NextImg from "@/components/common/next-img";

gsap.registerPlugin(ScrollTrigger);

const randomPosition = (containerRect: DOMRect, buttonRect: DOMRect) => {
  const minX = -containerRect.width / 2 + buttonRect.width / 2;
  const maxX = containerRect.width / 2 - buttonRect.width / 2;
  const minY = -containerRect.height / 2 + buttonRect.height / 2;
  const maxY = containerRect.height / 2 - buttonRect.height / 2;

  const x = gsap.utils.random(minX, maxX, 1, true);
  const y = gsap.utils.random(minY, maxY, 1, true);

  return { x, y };
};

export default function Section4() {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const [position, setPosition] = useState<any>({
    x: 0,
    y: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useGSAP(
    () => {
      gsap.to(".button", {
        x: position.x,
        // xPercent: -100,
        y: position.y,
        // yPercent: -100,
      });
    },
    {
      dependencies: [position],
      scope: containerRef,
    }
  );

  const handleMouseEnter = () => {
    if (containerRef.current && buttonRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setPosition(randomPosition(containerRect, buttonRect));
      setIsVisible(true);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] bg-[#F8E9E6] overflow-hidden flex items-center justify-center"
    >
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="Nhập email" />
        <input type="password" placeholder="Nhập password" />
        <button
          ref={buttonRef}
          onMouseEnter={handleMouseEnter}
          className="relative button z-[9999] p-[6px_16px] bg-red-500 rounded-lg text-white"
        >
          Đăng ký
          {isVisible && (
            <div className="absolute top-0 right-0 bg-white translate-x-full -translate-y-full text-red-500 p-[4px_8px] rounded-2xl">
              cay chưa!!
            </div>
          )}
        </button>
      </div>
    </section>
  );
}
