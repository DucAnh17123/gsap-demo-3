"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Demo1() {
  const containerRef = useRef(null);
  const box = useRef(null);

  const [reduceMotion, setReduceMotion] = useState(
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: `(min-width: 800px)`,
          isMobile: `(max-width: 799px)`,
          isReduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context, contextSafe) => {
          const { isDesktop, isMobile, isReduceMotion } = context.conditions;
          const handleClick = contextSafe((e) => {
            const isReduceMotionChecked =
              document.querySelector("#motionToggle").checked;
            if (gsap.isTweening(".box")) return;

            gsap.to(".box", {
              y: isReduceMotionChecked ? 0 : 500,
              yoyo: true,
              repeat: -1,
              duration: 2,
              background: "#ccc",
            });
          });

          box?.current?.addEventListener("click", handleClick);
          return () => {
            box?.current?.removeEventListener("click", handleClick);
          };
        }
      );

      return () => {
        mm.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="my-[100px]">
      <input
        type="checkbox"
        onChange={() => {
          gsap.matchMediaRefresh();
        }}
        id="motionToggle"
        className="input size-[50px]"
        name="motionToggle"
        value="false"
      ></input>
      <div
        ref={box}
        // onClick={handleClick}
        className="box size-[100px] bg-red-500 "
      ></div>
    </div>
  );
}
