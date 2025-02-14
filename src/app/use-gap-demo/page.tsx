"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import React from "react";
import NextImg from "../component/common/next-img";

export default function Demo() {
  const container = useRef(null);
  const tl = useRef();

  const { context, contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .to(".box", {
          x: 100,
          rotation: 360,
          duration: 2,
        })
        .to(".box-2", {
          x: 100,
          rotation: 360,
          duration: 2,
        });
    },
    { scope: container }
  );

  const handleClick = contextSafe(() => {
    gsap.to(".box-3", {
      x: 100,
      rotation: 360,
      yoyo: true,
      duration: 2,
      repeat: -1,
    });
  });

  return (
    <div ref={container}>
      <div className="flex flex-col gap-4 w-full">
        <div className="box size-[100px] bg-red-500 rounded-md flex justify-center items-center">
          demo 1
        </div>
        <div className="box-2 size-[100px] bg-red-500 rounded-md flex justify-center items-center">
          demo 2
        </div>
      </div>

      <div className="box-3 size-[100px] bg-blue-500 rounded-md flex justify-center items-center mt-20"></div>
      <button
        onClick={handleClick}
        className="p-[6px_12px] bg-blue-500 rounded-md mt-10"
      >
        click me
      </button>
    </div>
  );
}
