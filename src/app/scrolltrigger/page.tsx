"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap-trial/all";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import NextImg from "@/component/common/next-img";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Demo5 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const smoother = ScrollSmoother.create({
        content: "#smooth-content",
        smooth: 3,
        effects: true,
      });

      smoother.effects(".img", { speed: "auto" });

      const tl = gsap.timeline();
      tl.from(".image-1", { xPercent: 100 })
        .from(".image-2", {
          yPercent: -100,
        })
        .from(".image-3", {
          xPercent: -100,
        });

      ScrollTrigger.create({
        animation: tl,
        trigger: ".section-2",
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        snap: 1 / 3,
        anticipatePin: 1,
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-3",
          start: "top top",
          end: "+=400%",
          scrub: 3,
          pin: true,
          pinSpacing: true,
        },
        defaults: {
          ease: "none",
        },
      });
      tl2
        .to(".image-4", {
          width: 100,
          height: 100,
          top: "50%",
        })
        .to(
          ".section-3",
          {
            background: "#d8d0c6",
          },
          "<"
        )
        .to(
          ".layer",
          {
            opacity: 1,
          },
          "<"
        )
        .to(".box", {
          scale: 1,
          opacity: 1,
        })
        .to(
          ".image-5",
          {
            autoAlpha: 1,
            top: "34%",
            left: "32%",
            scale: 2,
          },
          ">"
        )
        .addLabel("twImage-5")
        .to(
          ".image-6",
          {
            autoAlpha: 1,
            top: "46%",
            left: "36%",
            scale: 2,
          },
          ">"
        )
        .addLabel("twImage-6")

        .to(
          ".image-7",
          {
            autoAlpha: 1,
            top: "36%",
            right: "26%",
            scale: 2,
          },
          ">"
        )
        .addLabel("twImage-7")

        .to(
          ".image-8",
          {
            autoAlpha: 1,
            top: "28%",
            left: "34%",
            scale: 2,
          },
          ">"
        )
        .addLabel("twImage-8")

        .to(
          ".image-9",
          {
            autoAlpha: 1,
            top: "30%",
            right: "30%",
            scale: 2,
          },
          ">"
        )
        .addLabel("twImage-9")

        .to(
          ".image-10",
          {
            autoAlpha: 1,
            top: "36%",
            right: "34%",
            scale: 2,
          },
          ">"
        )
        .addLabel("twImage-10")
        .to(
          ".image-11",
          {
            autoAlpha: 1,
            top: "40%",
            left: "36%",
            scale: 2,
          },
          ">"
        )
        .addLabel("twImage-11")

        .to(
          ".image-5",
          {
            top: "-34%",
            left: "-32%",
            scale: 6,
          },
          "twImage-5"
        )
        .to(
          ".image-6",
          {
            top: "60%",
            left: "-30%",
            scale: 6,
          },
          "twImage-6"
        )
        .to(
          ".image-7",
          {
            top: "60%",
            right: "-60%",
            scale: 6,
          },
          "twImage-7"
        )
        .to(
          ".image-8",
          {
            top: "60%",
            left: "-40%",
            scale: 6,
          },
          "twImage-8"
        )
        .to(
          ".image-9",
          {
            top: "60%",
            right: "-40%",
            scale: 6,
          },
          "twImage-9"
        )
        .to(
          ".image-10",
          {
            top: "60%",
            right: "-30%",
            scale: 6,
          },
          "twImage-10"
        )
        .to(
          ".image-11",
          {
            top: "60%",
            left: "-40%",
            scale: 6,
          },
          "twImage-11"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} id="smooth-wrapper">
      <div id="smooth-content" className="w-full relative">
        
        <div className="h-[100vh] w-full relative overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[160%] img">
            <div className="relative w-full h-full">
              <NextImg
                src="/assets/images/bg-9.jpg"
                objectFit="cover"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>

        <div className="h-[100vh] w-full relative overflow-hidden">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[160%] img">
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

        <div className="h-[100vh] w-full relative overflow-hidden bg-black flex items-center">
          <div className="w-[650px] relative pt-[25%] ml-[200px] overflow-hidden">
            <div className="absolute w-full h-[160%] top-1/2 -translate-y-1/2 left-0 img">
              <div className="relative w-full h-full">
                <NextImg
                  src="/assets/images/bg-5.jpg"
                  objectFit="cover"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[100vh] w-full relative overflow-hidden bg-black flex items-center justify-end">
          <div className="w-[650px] relative pt-[25%] mr-[200px] overflow-hidden">
            <div className="absolute w-full h-[160%] top-1/2 -translate-y-1/2 left-0 img">
              <div className="relative w-full h-full">
                <NextImg
                  src="/assets/images/bg-6.jpg"
                  objectFit="cover"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section-2 relative w-full h-[100vh] overflow-hidden">
          <NextImg
            src="/assets/images/bg-7.jpg"
            objectFit="cover"
            alt=""
            className=""
          />

          <div className="image-1 absolute inset-0 w-full h-full ">
            <div className="relative w-full h-full">
              <NextImg
                src="/assets/images/bg-8.jpg"
                objectFit="cover"
                alt=""
                className=""
              />
            </div>
          </div>

          <div className="image-2 absolute inset-0 w-full h-full ">
            <div className="relative w-full h-full">
              <NextImg
                src="/assets/images/bg-9.jpg"
                objectFit="cover"
                alt=""
                className=""
              />
            </div>
          </div>

          <div className="image-3 absolute inset-0 w-full h-full ">
            <div className="relative w-full h-full">
              <NextImg
                src="/assets/images/bg-6.jpg"
                objectFit="cover"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[500vh]">
          <div className="section-3 relative w-full h-[100vh] bg-black overflow-hidden">
            <div className="image-4 absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2 h-[70%] w-[80%] rounded-2xl overflow-hidden z-[8]">
              <div className="relative w-full h-full">
                <NextImg
                  src="/assets/images/bg-10.jpg"
                  objectFit="cover"
                  alt=""
                  className=""
                />
                <div className="layer absolute inset-0 w-full h-full bg-[#3aa8a7] opacity-50 z-[1] flex justify-center items-center">
                  <div className="box size-14 bg-yellow-600 rounded-full scale-0 opacity-0"></div>
                </div>
              </div>
            </div>

            <div className="image-5 absolute top-[38%] left-[36%] w-[140px] h-[200px] rounded-2xl overflow-hidden opacity-0 z-[7]">
              <div className="relative w-full h-full">
                <NextImg
                  src="/assets/images/bg-12.jpg"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div className="image-6 absolute top-[50%] left-[40%] w-[140px] h-[140px] bg-blue-500 rounded-2xl overflow-hidden opacity-0 z-[6]">
              <div className="relative w-full h-full">
                <NextImg
                  src="/assets/images/bg-13.jpg"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div className="image-7 absolute top-[40%] right-[30%] w-[300px] h-[160px] bg-orange-500 rounded-2xl overflow-hidden opacity-0 z-[5]">
              {" "}
              <div className="relative w-full h-full">
                <NextImg
                  src="/assets/images/bg-14.jpg"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div className="image-8 absolute top-[32%] left-[38%] w-[200px] h-[160px] bg-gray-500 rounded-2xl overflow-hidden opacity-0 z-[4]">
              {" "}
              <div className="relative w-full h-full">
                <NextImg
                  src="/assets/images/bg-11.jpg"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div className="image-9 absolute top-[34%] right-[34%] w-[200px] h-[100px] bg-purple-500 rounded-2xl overflow-hidden opacity-0 z-[3]">
              {" "}
              <div className="relative w-full h-full">
                <NextImg
                  src="/assets/images/bg-9.jpg"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div className="image-10 absolute top-[50%] right-[38%] w-[120px] h-[180px] bg-green-500 rounded-2xl overflow-hidden opacity-0 z-[2]">
              {" "}
              <div className="relative w-full h-full">
                <NextImg
                  src="/assets/images/bg-8.jpg"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div className="image-11 absolute top-[44%] left-[40%] w-[180px] h-[100px] bg-yellow-500 rounded-2xl overflow-hidden opacity-0 z-[1]">
              {" "}
              <div className="relative w-full h-full">
                <NextImg
                  src="/assets/images/bg-7.jpg"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Demo5;
