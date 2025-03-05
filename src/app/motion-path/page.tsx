"use client";

import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer, MotionPathPlugin, ScrollTrigger } from "gsap/all";
import { ScrollSmoother, DrawSVGPlugin } from "gsap-trial/all";
import Link from "next/link";
import NextImg from "@/components/common/next-img";

gsap.registerPlugin(
  Observer,
  MotionPathPlugin,
  ScrollTrigger,
  ScrollSmoother,
  DrawSVGPlugin,
  useGSAP
);

const Demo5 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listBox = useRef<HTMLDivElement>(null);

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

  const { context, contextSafe } = useGSAP(
    () => {
      gsap.set(".hole", { width: "150vw", height: "150vw" });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-1",
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

      const tl3 = gsap.timeline({ repeat: -1, repeatRefresh: true });
      tl3.to(".circle-line", {
        rotate: "+=360",
        duration: 4,
        ease: "none",
      });

      gsap.set(".circle", { autoAlpha: 0, scale: 0 });
      Observer.create({
        target: window, // Chỉ theo dõi sự kiện trong container
        type: "pointer,touch",
        onMove: (self) => {
          gsap.to(".circle", {
            left: self.x,
            top: self.y,
            xPercent: -50,
            yPercent: -50,
            autoAlpha: 1,
            scale: 1,
            duration: 0.2,
          });
        },
      });

      Observer.create({
        target: window, // Chỉ theo dõi sự kiện trong container
        type: "pointer,touch",
        onMove: (self) => {
          gsap.to(".circle-2", {
            left: self.x,
            top: self.y,
            xPercent: -50,
            yPercent: -50,
            autoAlpha: 1,
            scale: 1,
            duration: 0.5,
          });
        },
      });

      gsap.set(".line", {
        height: 0,
      });
      gsap.to(".line", {
        // motionPath: {
        //   path: [{ y: 2700 }],
        //   curviness: 1,
        // },
        top: "90%",
        height: "700px",
        transformOrigin: "bottom center",
        scrollTrigger: {
          trigger: ".content",
          // end: "end end",
          scrub: 1,
          // pin: true
        },
        ease: "power1.inOut",
      });

      const smoother = ScrollSmoother.create({
        content: "#smooth-content",
        smooth: 1,
        effects: true,
      });

      smoother.effects(".img", { speed: "auto" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".accordions",
          pin: true,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(".accordion .text", {
        height: 0,
        paddingBottom: 0,
        opacity: 0,
        stagger: 0.5,
      });
      tl.to(
        ".accordion",
        {
          marginBottom: -15,
          stagger: 0.5,
        },
        "<"
      );

      // const pulses = gsap.timeline({
      //   defaults: {
      //     duration: 0.05,
      //     autoAlpha: 1,
      //     scale: 2,
      //     transformOrigin: 'center',
      //     ease: "elastic(2.5, 1)"
      //   }})
      // .to(".ball02", {}, 0.2)
      // .to(".ball03", {}, 0.33)
      // .to(".ball04", {}, 0.46)

      const main = gsap
        .timeline({
          defaults: { duration: 1 },
          scrollTrigger: {
            trigger: ".content",
            scrub: true,
            start: "top center",
            end: "bottom botom",
          },
        })
        .to(".box-path", { duration: 0.01, autoAlpha: 1 })
        .from(".theLine", { drawSVG: 0 }, 0)
        .to(
          ".box-path",
          {
            motionPath: {
              path: ".theLine",
              align: ".theLine",
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
            },
          },
          0
        );

      ScrollTrigger.create({
        trigger: ".section-2",
        start: "top top",
        end: "bottom bottom",
        pin: ".pin",
      });

      gsap.to(".bg-1", {
        yPercent: -100,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".section-3",
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      });

      // .add(pulses, 0);
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} id="smooth-wrapper">
      <div className="circle fixed top-0 left-0 size-[70px] bg-red-500/50 rounded-full z-[9999] pointer-events-none"></div>
      <div className="circle-2 fixed top-0 left-0 size-[30px] bg-red-500/70 rounded-full z-[9999] pointer-events-none"></div>

      <div id="smooth-content" className="w-full">
        <div className="section-1 relative w-full h-[100vh] overflow-hidden">
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
            className="hole absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full flex justify-center items-center"
            style={{
              clipPath: `${clipPathValue}`,
            }}
          >
            <div className=" h-[340px] w-[340px] relative flex justify-center text-white items-center overflow-hidden rounded-full bg-black">
              <div
                className="circle-line w-full h-full absolute inset-0 flex justify-center items-center"
                style={{
                  backgroundImage:
                    "conic-gradient(black 15deg, #18CCFC 45deg, #AE48FF 90deg, black 90deg)",
                }}
              >
                <div className="w-[calc(100%-4px)] h-[calc(100%-4px)] bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative content w-full h-[3200px] bg-black overflow-hidden">
          <div className="absolute top-0 left-[30px] line w-[2px] bg-gradient-to-t from-[#18CCFC] via-[#AE48FF] to-[#AE48FF]/10 rounded-full"></div>
          <div className="absolute top-0 left-0 w-[70%] h-[80%]">
            <div className="absolute top-0 left-0 box-path size-fit">
              <div className="relative size-[100px] rotate-45">
                <NextImg src="/assets/images/rocket.svg" alt="UPSC" />
              </div>
            </div>

            <svg
              id="svg-stage"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 1200"
            >
              <path
                className="theLine"
                d="M -5,0
           Q 450 230 300 450 
           T 130 750
           Q 100 850 300 1000
           T 150 1200"
                fill="none"
                stroke="red"
                strokeWidth="10px"
              />
            </svg>
          </div>

          <div className="accordions flex flex-col gap-[40px] items-center justify-start mt-[100px]">
            <div className="accordion bg-blue-500 p-[20px] w-[50vw] rounded-2xl">
              <div className="title">All-screen design.</div>
              <div className="text">
                Lets you immerse yourself in whatever you’re reading, watching,
                or creating. The 10.9-inch Liquid Retina display features
                advanced technologies like True Tone, P3 wide color, and an
                antireflective coating.1
              </div>
            </div>

            <div className="accordion bg-red-500 p-[20px] w-[50vw] rounded-2xl">
              <div className="title">All-screen design.</div>
              <div className="text">
                Lets you immerse yourself in whatever you’re reading, watching,
                or creating. The 10.9-inch Liquid Retina display features
                advanced technologies like True Tone, P3 wide color, and an
                antireflective coating.1
              </div>
            </div>

            <div className="accordion bg-green-500 p-[20px] w-[50vw] rounded-2xl">
              <div className="title">All-screen design.</div>
              <div className="text">
                Lets you immerse yourself in whatever you’re reading, watching,
                or creating. The 10.9-inch Liquid Retina display features
                advanced technologies like True Tone, P3 wide color, and an
                antireflective coating.1
              </div>
            </div>

            <div className="accordion bg-orange-500 p-[20px] w-[50vw] rounded-2xl">
              <div className="title">All-screen design.</div>
              <div className="text">
                Lets you immerse yourself in whatever you’re reading, watching,
                or creating. The 10.9-inch Liquid Retina display features
                advanced technologies like True Tone, P3 wide color, and an
                antireflective coating.1
              </div>
            </div>
          </div>
        </div>

        <div className="section-2 bg-gray-500 w-full grid grid-cols-2">
          <div className="pt-[100px] grid grid-cols-2 gap-[40px]">
            <div className="w-[400px] h-[500px] rounded-2xl bg-red-500/50"></div>
            <div className="w-[400px] h-[500px] rounded-2xl bg-red-500/50"></div>
            <div className="w-[400px] h-[500px] rounded-2xl bg-red-500/50"></div>
            <div className="w-[400px] h-[500px] rounded-2xl bg-red-500/50"></div>
            <div className="w-[400px] h-[500px] rounded-2xl bg-red-500/50"></div>
            <div className="w-[400px] h-[500px] rounded-2xl bg-red-500/50"></div>
            <div className="w-[400px] h-[500px] rounded-2xl bg-red-500/50"></div>
            <div className="w-[400px] h-[500px] rounded-2xl bg-red-500/50"></div>
          </div>

          <div className="pin flex justify-center items-center h-[100vh]">
            <div className="relative w-full h-[60vh]">
              <NextImg
                src="/assets/images/bg-9.jpg"
                objectFit="cover"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>

        <div className="h-screen">
          <section className="flex items-center justify-around h-screen bg-black">
            <div className="relative overflow-hidden w-[450px] h-[80vh]">
              <div className="absolute inset-0 z-10 w-full h-full text-4xl font-bold uppercase text-center bg-black opacity-0 translate-y-full text-blue-500">
                Blue
              </div>
              <div className="absolute inset-0 z-10 w-full h-full text-4xl font-bold uppercase text-center bg-black opacity-0 translate-y-full text-red-500">
                Red
              </div>
              <div className="absolute inset-0 z-10 w-full h-full text-4xl font-bold uppercase text-center bg-black opacity-0 translate-y-full text-orange-500">
                Orange
              </div>
              <div className="absolute inset-0 z-10 w-full h-full text-4xl font-bold uppercase text-center bg-black opacity-0 translate-y-full text-purple-500">
                Purple
              </div>
            </div>

            <div className="relative overflow-hidden w-[450px] h-[80vh]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('../images/5ed12171d9d512cb2feead83_5.jpg')",
                }}
              ></div>
              <div className="absolute inset-0 bg-red-500"></div>
              <div className="absolute inset-0 bg-orange-600"></div>
              <div className="absolute inset-0 bg-purple-800"></div>
            </div>
          </section>

          <section className="h-screen bg-blue-900"></section>
        </div>

        <div className="section-3 relative w-full h-[100vh]">
          <div className="bg-1 absolute inset-0 w-full h-full bg-red-500 z-[3]">
            <div className="relative w-full h-full">
              <NextImg
                src="/assets/images/bg-9.jpg"
                objectFit="cover"
                alt=""
                className=""
              />
            </div>
          </div>
          <div className="bg-1 absolute inset-0 w-full h-full bg-blue-500 z-[2]">
            <div className="relative w-full h-full">
              <NextImg
                src="/assets/images/bg-10.jpg"
                objectFit="cover"
                alt=""
                className=""
              />
            </div>
          </div>
          <div className="bg-1 absolute inset-0 w-full h-full bg-green-500 z-[1]">
            <div className="relative w-full h-full">
              <NextImg
                src="/assets/images/bg-8.jpg"
                objectFit="cover"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>

        <div className="h-[100vh] w-full"></div>
      </div>
    </div>
  );
};

export default Demo5;
