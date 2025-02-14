"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import React from "react";
import NextImg from "@/component/common/next-img";

gsap.registerPlugin(ScrollTrigger);

export default function Section10() {
  const container = useRef(null);
  useEffect(() => {
    gsap.to(container.current, { perspective: 200, backgroundColor: "#000" });
    const bosex = gsap.utils.toArray(".section");

    bosex.forEach((section: any, index: any) => {
      gsap.set(section, {
        left: "50%",
        top: "50%",
        margin: -50,
        width: 100,
        height: 100,
        borderRadius: "20%",
        clearProps: "transform",
        backfaceVisibility: "hidden",
      });

      section.tl = gsap
        .timeline({
          paused: true,
          defaults: { immediateRender: true },
        })
        .fromTo(
          section,
          {
            rotationX: (index / bosex.length) * 360,
            transformOrigin: String("50% 50% -500%"),
          },
          {
            rotationX: "+=360",
            ease: "none",
          }
        )
        .timeScale(0.05);
    });

    ScrollTrigger.create({
      trigger: "#scrollDist",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onRefresh: (seft) => {
        bosex.forEach((section: any, index: any) => {
          gsap.set(section.tl, { progress: seft.progress });
        });
      },
      onUpdate: (seft) => {
        bosex.forEach((section: any, index: any) => {
          gsap.to(section.tl, { progress: seft.progress });
        });
      },
    });

    const startAnimation = () => {
      bosex.forEach((section: any) => {
        section.tl.restart();
        section.tl.timeScale(0.3);
      });
    };

    const button = document.getElementById("startAnimation");
    button?.addEventListener("click", startAnimation);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-y-scroll">

      <div
        id="scrollDist"
        className="absolute top-0 select-none w-full h-[400%]"
      ></div>
      <div
        ref={container}
        id="container"
        className="fixed w-full h-full bg-gray-300 overflow-hidden"
      >
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/duda-2.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/duda-1.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-1.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-2.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-3.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-4.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/duda-2.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/duda-1.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-1.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-2.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-3.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-4.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/duda-2.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/duda-1.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-1.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-2.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-3.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-4.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/duda-2.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/duda-1.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-1.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-2.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-3.jpg')" }}
        ></div>
        <div
          className="section select-none flex justify-center items-center absolute bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/bg-4.jpg')" }}
        ></div>
      </div>

      <button
        id="startAnimation"
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Quay
      </button>
    </div>
  );
}
