"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin, Draggable, Observer } from "gsap/all";
import NextImg from "@/component/common/next-img";
import { InertiaPlugin, SplitText } from "gsap-trial/all";

gsap.registerPlugin(
  Flip,
  ScrollToPlugin,
  TextPlugin,
  MotionPathPlugin,
  Draggable,
  InertiaPlugin,
  SplitText,
  Observer
);

const FlipSquares = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listBox = useRef<HTMLDivElement>(null);

  const { context, contextSafe } = useGSAP(
    () => {
      gsap.to(".text-replace", {
        text: {
          value: "đây là tiêu đề",
          newClass: "text-red-500",
          // padSpace: true,
          preserveSpaces: true,
          type: "diff",
          // delimiter: " ",
        },
        duration: 2,
        ease: "power1.in",
      });

      gsap.to(".box-path", {
        motionPath: {
          path: [
            { x: 400, y: 400 },
            { x: 1000, y: 50 },
            { x: 1440, y: 700 },
          ],
          curviness: 1,
          autoRotate: true,
        },
        duration: 3,
        ease: "power1.inOut",
      });

      Draggable.create(".drag-box", {
        bounds: ".content",
        inertia: true,
      });

      Draggable.create(".drag-box-2", {
        type: "rotation",
        bounds: ".content",
        inertia: true,
      });

      const mySplitText = new SplitText(".spit-text", { type: "words,chars" });
      const chars = mySplitText.chars;
      gsap.set(".spit-text", { perspective: 400 });
      const tl = gsap.timeline();
      tl.from(chars, {
        scale: 4.1,
        autoAlpha: 0,
        translateZ: 0,
        delay: 1,
        stagger: 0.05,
      });

      const mySplitText2 = new SplitText(".spit-text-2", {
        type: "words,chars",
      });
      const chars2 = mySplitText2.chars;
      gsap.set(".spit-text-2", { perspective: 400 });
      const tl2 = gsap.timeline();
      tl2.from(chars2, {
        xPercent: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });

      Observer.create({
        target: window,
        type: "wheel,touch",
        onDown: () => gsap.to(".circle", { scale: 4, duration: 2 }),
        onUp: () => gsap.to(".circle", { scale: 2, duration: 2 }),
      });

    },
    { scope: containerRef }
  );

  const doFlip = contextSafe(() => {
    // const squares = Array.from(containerRef.current.children) as HTMLElement[];
    const squares = gsap.utils.toArray(".square") as HTMLElement[];
    const state = Flip.getState(squares);
    swap(squares);
    Flip.from(state, { duration: 1, ease: "power1.inOut" });
  });

  // Hoán đổi vị trí của 2 phần tử trong container
  const swap = ([a, b]: HTMLElement[]) => {
    if (a.parentNode?.children[0] === a) {
      a.parentNode.appendChild(a);
    } else {
      a.parentNode?.appendChild(b);
    }
  };

  const handleClick = contextSafe(() => {
    const state = Flip.getState(".group, .box");
    listBox.current?.classList.toggle("!flex-row");

    requestAnimationFrame(() =>
      Flip.from(state, {
        targets: ".group, .box",
        nested: true,
        // absolute: true,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.inOut",
      })
    );
  });

  const handleFit = contextSafe(() => {
    Flip.fit(".red-box", ".blue-box", {
      scale: true,
      duration: 2,
      ease: "power1.inOut",
    });
  });

  const handleLayout = contextSafe(() => {
    const state = Flip.getState(".layout, .layout-1");

    const layout = document.querySelector(".layout");
    layout?.classList.toggle("!flex-col");

    requestAnimationFrame(() =>
      Flip.from(state, {
        targets: ".layout, .layout-1",
        absolute: true,
        duration: 1,
        nested: true,
        ease: "power1.inOut",
      })
    );
  });

  const handleScroll = contextSafe(() => {
    gsap.to(window, {
      scrollTo: {
        y: "#black-div",
        offsetY: 100,
      },
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <div ref={containerRef}>
      <button
        className="block button mt-4 px-4 py-2 bg-gray-800 text-white"
        onClick={handleScroll}
      >
        scroll down
      </button>

      <div className="flex justify-center w-full mt-[500px] mb-20">
        <div className="circle size-[100px] bg-red-500/70 rounded-full"></div>
      </div>

      <div className="text-replace text-3xl font-semibold w-full text-center">
        chào mừng toàn thể
      </div>

      <div className="w-full py-[100px] bg-pink-300 flex justify-center items-center flex-col gap-20">
        <div className="spit-text safari-split-text mt-10 text-5xl font-extrabold w-full text-center">
          good morning!
        </div>

        <div className="spit-text-2 safari-split-text mt-10 text-5xl font-extrabold w-[450px] text-center leading-[1.3]">
          good evening! hello everything, everyone
        </div>
      </div>

      <div className="content relative w-full h-[100vh] bg-black/50 ">
        {/* <div className="box-path size-[100px] bg-red-500 rounded-2xl"></div> */}
        <div className="box-path size-fit">
          <div className="relative size-[100px] rotate-45">
            <NextImg src="/assets/images/rocket.svg" alt="UPSC" />
          </div>
        </div>

        <div className="drag-box absolute bottom-0 left-0 size-[100px] rounded-2xl bg-blue-400 flex justify-center items-center text-white">
          drag me
        </div>

        <div className="drag-box-2 absolute bottom-0 left-[200px] size-[100px] rounded-2xl bg-blue-400 flex justify-center items-center text-white">
          spin me
        </div>

        {/* <div className="drag-box-3 absolute bottom-0 left-[400px] size-[100px] rounded-2xl bg-blue-400 flex justify-center items-center text-white">
          drag me
        </div> */}
      </div>

      <button
        className="button mt-4 px-4 py-2 bg-gray-800 text-white"
        onClick={doFlip}
      >
        Flip
      </button>

      <div className="w-full flex justify-around">
        <div className="square w-20 h-20 bg-blue-500"></div>
        <div className="square w-20 h-20 bg-red-500"></div>
      </div>

      <button
        className="button px-4 py-2 bg-gray-800 text-white mt-10"
        onClick={handleClick}
      >
        Flip
      </button>

      <div
        ref={listBox}
        className="group border-[1px] border-black w-full flex gap-4 flex-col overflow-hidden h-auto relative p-[100px_20px]"
      >
        <div className="box p-2 bg-red-500 rounded-xl">
          Common "FLIP" techniques employed by other tools won't work with flex
          elements because of the way browsers handle width/height.
        </div>
        <div className="box p-2 bg-blue-500 rounded-xl">
          Simply set absolute: true to have GSAP's Flip plugin make the elements
          position: absolute during the flip to work around challenges with flex
          and grid layouts.
        </div>
        <div className="box p-2 bg-pink-500 rounded-xl">
          When the flip animation is done, elements get reverted back to their
          normal positioning and everything appears seamless.
        </div>
        <div className="box p-2 bg-yellow-500 rounded-xl">Happy flipping!</div>
      </div>

      <div className="w-full h-[1000px] bg-black"></div>

      <button
        className="button px-4 py-2 bg-gray-800 text-white mt-10"
        onClick={handleFit}
      >
        Flip
      </button>

      <div className="flex justify-around py-[100px]">
        <div className="blue-box h-[60px] w-[100px] bg-blue-500 rotate-180">
          target
        </div>

        <div className="red-box flex flex-col w-[60px] gap-8">
          <div className="box-1 w-full h-[50px] bg-red-500"></div>
          <div className="box-2 w-full h-[50px] bg-red-500"></div>
        </div>
      </div>

      <button
        className="button px-4 py-2 bg-gray-800 text-white mt-10"
        onClick={handleLayout}
      >
        Flip
      </button>

      <div className="layout flex w-full gap-4 py-[100px]">
        <div className="layout-1 flex flex-col gap-4 justify-center border-[1px] border-red-500 p-8 bg-black">
          <div className="div p-4 bg-blue-500">
            Common "FLIP" techniques employed by other tools won't work with
            flex elements because of the way browsers handle width/height.
          </div>
          <div className="div p-4 bg-green-500">
            Simply set absolute: true to have GSAP's Flip plugin make the
            elements position: absolute during the flip to work around
            challenges with flex and grid layouts.
          </div>
        </div>

        <div className="layout-1 flex flex-col gap-4 justify-center border-[1px] border-red-500 p-8 bg-black">
          <div className="div p-4 bg-pink-500">
            When the flip animation is done, elements get reverted back to their
            normal positioning and everything appears seamless.
          </div>
          <div className="div p-4 bg-orange-500">Happy flipping!</div>
        </div>
      </div>

      <div id="black-div" className="w-full h-[1000px] bg-red-500"></div>

      <div className="w-full h-[100px] bg-black"></div>
    </div>
  );
};

export default FlipSquares;
