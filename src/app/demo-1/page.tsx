"use client";

import React, { useRef } from "react";
import { gsap, random } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap-trial/all";

gsap.registerPlugin(useGSAP, SplitText);

export default function Section1() {
  const containerRef = useRef<any>(null);

  useGSAP(
    () => {
      // Begin: text 1
      const splitText1 = new SplitText(".split-text-1", {
        type: "words,chars",
      });
      const chars1 = splitText1.chars;
      gsap.set(".split-text-1", { autoAlpha: 1, perspective: 400 });
      const tl1 = gsap.timeline();
      tl1.from(chars1, {
        x: 30,
        autoAlpha: 0,
        stagger: 0.1,
        repeat: -1,
        repeatDelay: 2,
      });
      // End: text 1

      // Begin: text 2
      const splitText2 = new SplitText(".split-text-2", {
        type: "words,chars",
      });
      const chars2 = splitText2.chars;
      gsap.set(".split-text-2", { autoAlpha: 1, perspective: 400 });
      const tl2 = gsap.timeline({ repeat: -1, repeatRefresh: true });

      tl2.set(chars2, {
        color: "random([red, orange, pink, green, yellow])",
      });
      tl2
        .fromTo(
          chars2,
          {
            autoAlpha: 0,
          },
          { autoAlpha: 1, stagger: 0.1 }
        )
        .to(chars2, {
          autoAlpha: 0,
          stagger: 0.1,
        });
      // End: text 2

      // Begin: text 3
      const splitText3 = new SplitText(".split-text-3", {
        type: "words, chars",
      });
      const chars3 = splitText3.chars;
      const tl3 = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl3
        .to(chars3, {
          scaleY: 0.6,
          ease: "power3.inOut",
          duration: 0.5,
          stagger: 0.04,
          transformOrigin: "center bottom",
        })
        .to(
          chars3,
          {
            yPercent: -20,
            ease: "elastic",
            stagger: 0.03,
            duration: 0.8,
          },
          0.5
        )
        .to(
          chars3,
          {
            scaleY: 1,
            ease: "elastic.out(2.5, 0.2)",
            stagger: 0.03,
            duration: 1.5,
          },
          0.5
        )
        .to(
          chars3,
          {
            color: "black",
            ease: "power2.out",
            stagger: 0.03,
            duration: 0.3,
          },
          0.5
        )
        .to(
          chars3,
          {
            yPercent: 0,
            ease: "back",
            stagger: 0.03,
            duration: 0.8,
          },
          0.7
        )
        .to(chars3, {
          color: "white",
          duration: 1.4,
          stagger: 0.05,
        });

      // End: text 3

      // Begin: text 4
      const splitText4 = new SplitText(".split-text-4", {
        type: "words, chars",
      });
      const chars4 = splitText4.chars;
      gsap.set(".split-text-4", { autoAlpha: 1, perspective: 400 });
      gsap.from(chars4, {
        autoAlpha: 0,
        y: -100,
        scaleY: 2,
        ease: "elastic(0.2, 0.1)",
        duration: 1.5,
        stagger: {
          each: 0.05,
          from: "random",
        },
        repeat: -1,
        repeatDelay: 1,
      });
      // End: text 4

      //   Begin: text 5

      const splitText5 = new SplitText(".split-text-5", {
        type: "words,chars",
      });
      const chars5 = splitText5.chars;
      gsap.set(".split-text-5", { perspective: 400 });
      gsap.from(chars5, {
        scale: 4.1,
        autoAlpha: 0,
        translateZ: 0,
        delay: 1,
        stagger: 0.1,
        repeat: -1,
        repeatDelay: 1,
      });
      //   End: text 5

      // Begin: text 6
      const splitText6 = new SplitText(".split-text-6", {
        type: "words,chars",
      });
      const chars6 = splitText6.chars;
      gsap.set(".split-text-6", { autoAlpha: 1, perspective: 400 });
      gsap.from(chars6, {
        transformOrigin: "center center",
        rotateZ: 120,
        duration: 0.5,
        stagger: 0.1,
        repeat: -1,
        repeatDelay: 1,
      });
      // End: text 6

      //   Begin: text 7

      const splitText7 = new SplitText(".split-text-7", {
        type: "words,chars",
      });
      const chars7 = splitText7.chars;
      gsap.set(".split-text-7", { autoAlpha: 1, perspective: 400 });
      const midChars = Math.floor(chars7.length / 2);
      const tl7 = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl7
        .from(chars7[midChars], {
          autoAlpha: 1,
          scale: 8,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          chars7.slice(0, midChars),
          {
            autoAlpha: 1,
            x: (index) => -300 * (midChars - index),
            duration: 1,
            ease: "elastic.out(0.1, 0.2)",
            stagger: 0.05,
            from: "start",
          },
          0.8
        )
        .from(
          chars7.slice(midChars + 1),
          {
            autoAlpha: 1,
            x: (index) => 300 * (index + 1),
            duration: 1,
            ease: "elastic.out(0.1, 0.2)",
            stagger: 0.05,
            from: "start",
          },
          0.8
        );
      // .to(chars7, {
      //   scale: 1.3,
      //   color: "red",
      //   ease: "elastic.out(0.1, 0.2)",
      //   duration: 0.2,
      //   stagger: 0.1,
      // })
      // .to(
      //   chars7,
      //   {
      //     scale: 1,
      //     color: "white",
      //     ease: "elastic.out(0.1, 0.2)",
      //     duration: 0.2,
      //     stagger: 0.1,
      //   },
      //   "<+=0.2"
      // );
      //   End: text 7

      //   Begin: text 8
      const tl8 = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      tl8
        .to(".side-left", {
          height: 100,
          duration: 1,
        })
        .to(".side-left", {
          xPercent: -100,
          left: "100%",
          duration: 1,
        })
        .to(
          ".box-3",
          {
            left: "100%",
            duration: 1,
          },
          "<"
        )
        .to(".side-left", {
          xPercent: 0,
          left: 0,
          duration: 1,
        })
        .to(
          ".box-2",
          {
            width: 0,
            duration: 1,
          },
          "<"
        );
      //   End: text 8

      //   Begin: text 9
      const tl9 = gsap.timeline({ repeat: -1, repeatDelay: 3, delay: 1 });
      gsap.to(".divide", {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.2,
      });
      tl9
        .to(".box-4", {
          xPercent: -50,
          duration: 2,
        })
        .to(
          ".box-5",
          {
            xPercent: 50,
            duration: 2,
          },
          "<"
        )
        .to(
          ".divide",
          {
            xPercent: 50,
            duration: 2,
          },
          "<"
        );
      //   End: text 9

      //Begin: text 10
      const splitText10 = new SplitText(".split-text-10", {
        type: "words, chars",
      });
      const chars10 = splitText10.chars;
      const words10 = splitText10.words;

      const tl10 = gsap.timeline();
      tl10.fromTo(
        words10,
        {
          display: "none",
        },
        {}
      );

      //End: text 10

      // Begin: text 11
      const splitText11 = new SplitText(".split-text-11", {
        type: "words,chars",
      });
      const chars11 = splitText11.chars;
      const words11 = splitText11.words;
      gsap.set(words11, {
        display: "none",
        autoAlpha: 1,
        perspective: 400,
      });
      const tl11 = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl11
        .to(words11, {
          display: "block",
          stagger: {
            each: 0.5,
          },
        })
        .to(
          words11,
          {
            display: "none",
            stagger: {
              each: 0.5,
            },
          },
          "0.5"
        );
      // End: text 11

    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className="w-full grid grid-cols-4 bg-black">
        <div className="bg-red-500/50 h-[200px] flex justify-center items-center">
          <div className="split-text-1 text-white text-6xl opacity-0 font-semibold">
            transition text
          </div>
        </div>

        <div className="bg-black h-[200px] flex justify-center items-center">
          <div className="split-text-2 text-white text-6xl opacity-0 font-semibold">
            random color
          </div>
        </div>

        <div className="bg-green-500/50 h-[200px] flex justify-center items-center">
          <div className="split-text-3 text-white text-6xl font-semibold">
            That's all folks
          </div>
        </div>

        <div className="bg-[#ff7f99] h-[200px] flex justify-center items-center font-extrabold">
          <div className="split-text-4 text-white text-6xl opacity-0 font-semibold">
            Jello animated
          </div>
        </div>

        <div className="bg-gray-500 h-[200px] flex justify-center items-center font-extrabold">
          <div className="split-text-5 text-black text-6xl font-semibold">
            scale text
          </div>
        </div>

        <div className="bg-yellow-500/90 h-[200px] flex justify-center items-center font-extrabold">
          <div className="split-text-6 text-white text-6xl font-semibold">
            rotate text
          </div>
        </div>

        <div className="bg-slate-500 h-[200px] flex justify-center items-center uppercase font-extrabold overflow-hidden">
          <div className="split-text-7 text-white text-6xl font-semibold">
            bananas
          </div>
        </div>

        <div className="split-text-8 relative bg-black h-[200px] uppercase font-extrabold overflow-hidden">
          <div className="box-1 absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black text-white text-6xl font-semibold z-[1]">
            Records
          </div>

          <div className="box-2 absolute top-0 left-0 w-full h-full flex justify-center overflow-hidden items-center bg-black text-white text-6xl font-semibold z-[2]">
            stories
          </div>

          <div className="box-3 absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black text-white text-6xl font-semibold z-[3]"></div>
          <div className="side-left absolute top-1/2 -translate-y-1/2 w-[4px] h-0 bg-white z-[4]"></div>
        </div>

        <div className="relative bg-black col-span-3 h-[200px] font-extrabold overflow-hidden">
          <div className="box-4 absolute z-[1] bg-black top-0 left-1/2 w-fit overflow-hidden text-nowrap h-full flex justify-center items-center text-white text-6xl font-semibold">
            Build awesome apps with
            <span className="text-blue-500"> Aceternity.</span>
          </div>

          <div className="box-5 absolute z-[2] bg-black top-0 left-1/2 w-fit overflow-hidden text-nowrap h-full flex justify-center items-center text-transparent select-none text-6xl font-semibold">
            <div className="relative w-full h-full">
              Build awesome apps with Aceternity.
              <div className="divide absolute top-1/2 -translate-y-1/2 left-0 w-[4px] h-[60px] rounded-2xl bg-blue-500"></div>
            </div>
          </div>
        </div>

        <div className="bg-gray-500 h-[200px] flex justify-center items-center font-extrabold">
          <div className=" text-white text-6xl font-semibold">rotate text</div>
        </div>

        <div className="bg-gray-500 h-[200px] flex justify-center items-center font-extrabold col-span-2">
          <div className="text-white text-6xl font-semibold">
            Buildmodern{" "}
            <span className="split-text-11">cute better modern websites</span>{" "}
            with Aceternity UI
          </div>
        </div>
      </div>
    </div>
  );
}
