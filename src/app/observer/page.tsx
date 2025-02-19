"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Flip, Observer } from "gsap/all";
import { Physics2DPlugin } from "gsap-trial/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NextImg from "@/component/common/next-img";
import Header from "@/component/common/Header";

gsap.registerPlugin(ScrollTrigger, useGSAP, Flip, Physics2DPlugin, Observer);

export default function Demo2() {
  const containerRef = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.set(".box", { autoAlpha: 0, y: 100 });

  //     ScrollTrigger.batch(".box", {
  //       // start: "top center",
  //       // batchMax: 3,
  //       // interval: 4,
  //       onEnter: (batch) =>
  //         gsap.to(batch, {
  //           autoAlpha: 1,
  //           y: 0,
  //           stagger: { each: 0.15 },
  //         }),

  //       onLeave: (batch) =>
  //         gsap.set(batch, { autoAlpha: 0, y: -100, overwrite: true }),
  //       onEnterBack: (batch) =>
  //         gsap.to(batch, {
  //           autoAlpha: 1,
  //           y: 0,
  //           stagger: 0.15,
  //           overwrite: true,
  //         }),
  //       onLeaveBack: (batch) =>
  //         gsap.to(batch, { autoAlpha: 0, y: 100, overwrite: true }),
  //     });

  //     ScrollTrigger.matchMedia({"(min-width: 800px)": function() { },})
  //   },

  //   { scope: containerRef }
  // );

  const { contextSafe } = useGSAP(
    () => {
      gsap.to(".gradient-card", {
        keyframes: [
          { background: "red" },
          { background: "blue" },
          { background: "green" },
          { background: "purple" },
          { background: "yellow" },
          { background: "pink" },
          { background: "orange" },
        ],
        duration: 14,
        repeat: -1,
        repeatRefresh: true,
      });

      // const tl1 = gsap.timeline({
      //   repeat: -1,
      //   repeatDelay: 1,
      //   repeatRefresh: true,
      // });
      // tl1.set(".rain", {
      //   left: `70%`,
      // });
      // tl1
      //   .fromTo(
      //     ".rain",
      //     { top: 0 },
      //     {
      //       top: "100%",
      //       yPercent: -100,
      //       duration: 2,
      //     }
      //   )
      //   .to(".rain", { height: 5, background: "blue" })
      //   .to(
      //     ".rain",
      //     {
      //       duration: 4,
      //       physics2D: {
      //         velocity: "random(50, 650)",
      //         angle: "random(0, -45)",
      //         gravity: 500,
      //       },
      //       repeat: -1,
      //       repeatDelay: 1,
      //     },
      //     "<"
      //   )
      //   .to(".rain", { height: 5 })
      //   .to(".rain", { top: 0, yPercent: 0, duration: 0, height: 40 });

      // ===============================================================================================
      gsap.set(".lens", {
        scale: 0,
      });
      Observer.create({
        target: ".lens-card",
        type: "pointer,touch",
        onMove: (seft) => {
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
      // ===============================================================================================

      Observer.create({
        target: ".text-content",
        type: "pointer, touch",
        onMove: (seft) => {
          const textWrap = document.querySelector(".text-content");
          if (!textWrap) return;
          const rect = textWrap?.getBoundingClientRect();
          gsap.to(".box-hover", {
            top: seft.y - rect.top,
            left: seft.x - rect.left,
          });

          gsap.to(".text-hover", {
            top: -(seft.y - rect.top),
            left: -(seft.x - rect.left),
          });
        },
      });

      // ===============================================================================================

      Observer.create({
        target: ".card-line",
        type: "pointer,touch",
        onMove: (self) => {
          const card = document.querySelector(".card-line");
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const x = self.x - rect.left;
          const y = self.y - rect.top;

          gsap.to(".line-card", {
            left: () => `${x > rect.width / 2 ? 100 : 0}%`,
            top: () => `${y > rect.height / 2 ? 100 : 0}%`,
            // xPercent: -50,
            // yPercent: -50,
            // left: () => {
            //   if (x > rect.width / 3 && x < 2 * (rect.width / 3))
            //     return self.x - rect.left;
            //   if (x > 2 * (rect.width / 3)) return rect.width;
            //   return 0;
            // },
            // top: () => {
            //   if (y > rect.height / 3 && y < 2 * (rect.height / 3))
            //     return self.y - rect.top;
            //   if (y > 2 * (rect.height / 3)) return rect.height;
            //   return 0;
            // },
            autoAlpha: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.1,
          });
        },
      });

      gsap.to(".line-card-2", {
        keyframes: [{ left: "100%" }, { top: "100%" }, { left: 0 }, { top: 0 }],
        rotate: "+=360",
        duration: 8,
        repeat: -1,
      });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        repeatRefresh: true,
      });
      gsap.set(".ball", {
        backgroundColor: "random([#663399,#84d100,#cc9900,#0066cc,#993333])",
        scale: "0.1",
      });

      tl.set(".chill", {});

      tl.fromTo(
        ".chill",
        { opacity: 1 },
        {
          top: "40%",
          duration: 1,
          opacity: 1,
        }
      ).to(".chill", {
        width: "10px",
        height: "10px",
        background: "#663399",
        scale: "0.02",
        duration: 0.1,
      });
      tl.to(
        ".ball, .chill",
        {
          duration: 4,
          physics2D: {
            velocity: "random(50, 650)",
            angle: "random(-360, 360)",
            gravity: 500,
          },
          scale: "random(0.4, 1)",
          delay: "random(0, 0.2)",
          repeat: -1,
          repeatDelay: 1,
        },
        1
      );

      const tl3 = gsap.timeline({ repeat: -1, repeatRefresh: true });
      tl3.to(".circle", {
        rotate: "+=360",
        duration: 4,
        ease: "none",
      });

      const tl4 = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      tl.set(".eyes", {
        perspective: 400,
        clearProps: "transform",
        rotateZ: 180,
      });
      tl4
        .fromTo(
          ".eyes",
          {
            rotationX: 0,
            transformOrigin: String("50% 50% -0%"),
          },
          {
            rotationX: "+=180",
            duration: 2,
            ease: "none",
          }
        )
        .to(
          ".sharigan",
          {
            rotate: "+=360",
            duration: 1,
          },
          "<+=1"
        );
    },
    { scope: containerRef }
  );

  const handleHover = contextSafe((index: any) => {
    const cardActive = document.querySelector(`card-${index}`);
    const box = document.querySelector(".box-blur");
    if (box && cardActive) {
      cardActive?.appendChild(box);
    }
    gsap.to(".box-blur", {
      autoAlpha: 1,
    });
    Flip.fit(".box-blur", `.card-${index}`, {
      scale: true,
      duration: 0.5,
      ease: "power1.inOut",
    });
  });

  const handleHoverLeave = contextSafe(() => {
    gsap.to(".box-blur", {
      autoAlpha: 0,
    });
  });

  return (
    // <div ref={containerRef} className="m-[100px]">
    //   <div className="w-full grid grid-cols-6 gap-4">
    //     {Array.from({ length: 60 }).map((_, index) => (
    //       <div
    //         key={index}
    //         className="box h-[300px] bg-red-500/50 rounded-2xl"
    //       ></div>
    //     ))}
    //   </div>
    // </div>
    <div ref={containerRef} className="relative overflow-hidden">
      {/* <Header /> */}

      <div className="relative w-full h-[100vh] bg-black flex justify-center items-center">
        <div className="h-[500px] w-[400px] rounded-2xl relative">
          <div className="gradient-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+16px)] h-[calc(100%+16px)] blur-xl z-[1]"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-2xl bg-black z-[2] p-[20px]">
            <div className="text-white text-2xl">heading</div>
            <div className="text-white text-xl">description</div>
          </div>
        </div>

        {/* {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="rain absolute top-0 w-[2px] h-[40px] bg-gradient-to-t from-blue-500 to-black/50 rounded-full"
          ></div>
        ))} */}
      </div>

      <div className="relative w-full h-[100vh] bg-black flex flex-col gap-20 justify-center items-center">
        <div className="h-[500px] w-[400px] rounded-2xl relative bg-gradient-to-b from-[#18CCFC]/80 to-[#AE48FF]/80 p-8">
          <div className="group lens-card relative w-full aspect-[16/12] rounded-2xl overflow-hidden">
            <NextImg src="/assets/images/bg-10.jpg" objectFit="cover" alt="" />

            <div className="lens absolute top-0 left-0 scale-0 size-[140px] rounded-full overflow-hidden pointer-events-none">
              <div className="zoom-img absolute w-[336px] h-[252px] scale-[2] rounded-2xl origin-top-left">
                <div className="relative w-full h-full">
                  <NextImg
                    src="/assets/images/bg-10.jpg"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-content relative text-white group text-[4rem] md:text-[7.5rem] xl:text-[9rem] 2xl:text-[9.5rem] leading-[4.5rem] md:leading-[8.5rem] lg:leading-[10rem] font-bold uppercase select-none">
          Day la Observer
          <div className="box-hover absolute hidden lg:block top-0 left-0 h-[300px] w-[300px] translate-x-[-150px] translate-y-[-150px] overflow-hidden rounded-full pointer-events-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div
              className="text-hover absolute text-black top-0 left-0 translate-x-[150px] translate-y-[150px] inline-block bg-yellow-500 z-10 select-none"
              style={{
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              Day la Observer
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-around items-center">
        <div className="w-full h-[100vh] bg-black flex justify-center items-center">
          <div className="card-line h-[500px] w-[500px] rounded-2xl relative flex justify-center items-center overflow-hidden bg-gray-500/50">
            <div className="h-[calc(100%-4px)] w-[calc(100%-4px)] bg-black rounded-2xl z-[1] p-4">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <NextImg
                  src="/assets/images/bg-9.jpg"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="text-white text-2xl mt-4">heading</div>
              <div className="text-white text-xl">description</div>
            </div>

            <div className="line-card absolute w-[353.57px] h-[353.57px] bg-gradient-to-tl from-[#18CCFC] to-[#AE48FF] top-0 left-0 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            {/* <div className="line-card absolute inset-0 scale-125 bg-gradient-to-tl from-[#18CCFC] to-[#AE48FF] top-0 left-0 -translate-x-1/2 -translate-y-1/2 rotate-45"></div> */}
          </div>
        </div>

        <div className="w-full h-[100vh] bg-black flex justify-center items-center">
          <div className="h-[500px] w-[400px] rounded-2xl relative flex justify-center items-center overflow-hidden bg-gray-500/50">
            <div className="h-[calc(100%-4px)] w-[calc(100%-4px)] bg-black rounded-2xl z-[1] p-4">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <NextImg
                  src="/assets/images/bg-9.jpg"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="text-white text-2xl mt-4">heading</div>
              <div className="text-white text-xl">description</div>
            </div>

            <div className="line-card-2 absolute w-[160px] h-[160px] bg-gradient-to-b from-[#18CCFC] via-[#AE48FF] to-[#AE48FF]/10 top-0 left-0 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          </div>
        </div>

        <div className="w-full h-[100vh] bg-black flex justify-center items-center">
          <div className=" h-[400px] w-[400px] relative flex justify-center text-white items-center overflow-hidden rounded-full">
            <div
              className="circle w-full h-full absolute inset-0"
              style={{
                backgroundImage:
                  "conic-gradient(black 15deg, red 45deg, yellow 90deg, black 90deg)",
              }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 set-0 bg-black w-[calc(100%-2px)] h-[calc(100%-2px)] rounded-full p-8">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <NextImg
                  src="/assets/images/bg-11.jpg"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[500px] flex justify-center items-center bg-black">
        {/* <div className="sharigan relative bg-red-500 size-[200px] rounded-full overflow-hidden">
          <NextImg src="/assets/images/sharigan.png" objectFit="cover" alt="" />
        </div> */}

        <div className="w-[1000px] h-[200px] flex justify-between items-center">
          {/* <div
            className="relative w-[400px] h-[200px] bg-white rounded-r-[400px]"
            style={{ clipPath: "ellipse(55% 50% at 55% 70%)" }}
          >
            <div className="eyes absolute size-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500"></div>
          </div> */}
          <div className="relative w-[500px] h-[300px] overflow- flex justify-center item">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-bl-full rounded-tr-full bg-black -rotate-45"></div>
            <div className="eyes absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[425px] h-[180px] bg-white rounded-[50%] flex justify-center items-center">
              <div className="sharigan relative h-full aspect-square rounded-full">
                <NextImg
                  src="/assets/images/sharigan.png"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="relative w-[500px] h-[300px] overflow- flex justify-center item">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-bl-full rounded-tr-full bg-black -rotate-45"></div>
            <div className="eyes absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[425px] h-[180px] bg-white rounded-[50%] flex justify-center items-center">
              <div className="sharigan relative h-full aspect-square rounded-full">
                <NextImg
                  src="/assets/images/sharigan.png"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>

      <div className="w-full h-[100vh] bg-black flex justify-center items-center">
        <div className="grid grid-cols-3 w-auto">
          {Array.from({ length: 6 }).map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleHoverLeave}
              className={`card-${index} relative size-[300px] bg-black rounded-2xl p-[12px]`}
            >
              <div className="relative size-full border-[1px] border-gray-700 bg-black rounded-2xl z-[2] flex justify-center items-center text-white text-3xl">
                box {index + 1}
              </div>
              {index === 0 && (
                <div className="box-blur opacity-0 absolute inset-0 size-full bg-slate-800/80 rounded-2xl z-[1]"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center items-center bg-black">
        <div className="relative w-[100vw] h-[100vh] overflow-hidden">
          <div className="chill absolute top-[90%] left-1/2 -translate-x-1/2 w-[5px] h-[30px] opacity-1 bg-gradient-to-b from-[#18CCFC] via-[#AE48FF] to-[#AE48FF]/10 rounded-full"></div>
          {Array.from({ length: 500 }).map((_, index) => (
            <div
              key={index}
              className="ball absolute w-[10px] h-[10px] rounded-full will-change-transform top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
