"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import React from "react";
import NextImg from "@/component/common/next-img";

gsap.registerPlugin(ScrollTrigger);

export default function Section9() {
  const containerRef = useRef(null);

  const [clipPathValue, setClipPathValue] = useState(""); // State cho clipPath

  useEffect(() => {
    const precision = 64; // Số lượng điểm để tạo đường tròn
    const radius = 4; // Bán kính của đường tròn

    // Tính toán các tọa độ của đường tròn
    const coordinates = [...Array(precision)].map((_, i) => {
      const angle = (-i / (precision - 1)) * Math.PI * 2; // Góc tính bằng radian
      const x = Math.cos(angle) * radius + 50; // Tọa độ x
      const y = Math.sin(angle) * radius + 50; // Tọa độ y
      return `${x}% ${y}%`;
    });

    // Tạo giá trị `clip-path` và cập nhật state
    const newClipPathValue = `polygon(
        100% 50%, 
        100% 100%, 
        0 100%, 
        0 0, 
        100% 0, 
        100% 50%, 
        ${coordinates.join(",")}
      )`;

    setClipPathValue(newClipPathValue);
  }, []);

  useGSAP(
    () => {
      gsap.set(".hole", { width: "150vw", height: "150vw" });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=50%",
            pin: true,
            scrub: true,
          },
        })
        .to(".hole", {
          scale: 10,
          z: 350,
          transformOrigin: "center center",
          ease: "power1.inOut",
        })
        .to(
          ".image",
          {
            scale: 1.1,
            transformOrigin: "center center",
            ease: "power1.inOut",
          },
          0
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] overflow-hidden"
    >
      <div
        className="image w-full h-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1589848315097-ba7b903cc1cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      ></div>
      {/* <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[50px] rounded-full"
      style={{
        boxShadow: "0px 0px 0px 3000px #000",
      }}
    >
      
    </div> */}
      <div
        className="hole absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full"
        style={{
          clipPath: `${clipPathValue}`,
        }}
      ></div>
    </section>
  );
}
