"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText, DrawSVGPlugin, MorphSVGPlugin } from "gsap-trial/all";
import NextImg from "@/components/common/next-img";
// import NextImg from "@/component/common/next-img";

gsap.registerPlugin(
  SplitText,
  DrawSVGPlugin,
  useGSAP,
  ScrollTrigger,
  MorphSVGPlugin
);

export default function Demo4() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(".letter", { drawSVG: 0 }, { drawSVG: true, duration: 4 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".container-1",
          start: "top top",
          scrub: 1,
          pin: true,
        },
      });
      tl.fromTo(
        "#path",
        {
          drawSVG: 0,
        },
        {
          yoyo: true,
          drawSVG: "100%",
        }
      );

      // Begin: section 3
      gsap.set("#left-hand", {
        x: 30,
        transformOrigin: "right center",
      });
      gsap.set("#right-hand", {
        x: -30,
        transformOrigin: "left center",
      });

      const eyesTl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
      });
      eyesTl
        .to(".eyes", {
          opacity: 0,
          duration: 0.1,
        })
        .to(".eyes", {
          opacity: 1,
          duration: 0.1,
        });

      const robotTl = gsap
        .timeline({
          repeat: -1,
        })
        .to(
          "#robot",
          {
            x: 100,
            // onStart: () => {
            //   isLeft = false;
            // }
          },
          "right"
        )
        .to(
          "#faces",
          {
            x: -60,
          },
          "right"
        )
        .to(
          "#left-hand",
          {
            x: 80,
          },
          "right"
        )
        .to(
          "#charge",
          {
            scaleX: 0.8,
          },
          "right"
        )
        .to("#right-hand", {
          rotation: 20,
          repeat: 2,
          yoyo: true,
          ease: "power2.inOut",
          duration: 0.4,
        })
        .to(
          "#robot",
          {
            x: -100,
            // onStart: () => {
            //   isLeft = true;
            // }
          },
          "left"
        )
        .to(
          "#faces",
          {
            x: 60,
          },
          "left"
        )
        .to(
          "#charge",
          {
            scaleX: 0.8,
          },
          "left"
        )
        .to(
          "#left-hand",
          {
            x: 30,
          },
          "left"
        )
        .to(
          "#right-hand",
          {
            x: -80,
          },
          "left"
        )
        .to("#left-hand", {
          rotation: -20,
          repeat: 3,
          yoyo: true,
          ease: "power1.inOut",
          duration: 0.4,
        })
        .to(
          "#robot",
          {
            x: 0,
          },
          "center"
        )
        .to(
          "#faces",
          {
            x: 0,
          },
          "center"
        )
        .to(
          "#charge",
          {
            scaleX: 1,
          },
          "center"
        )
        .to("#left-hand", {
          y: -50,
          x: -10,
          rotation: 30,
        })
        .to("#left-hand", {
          rotation: 50,
          repeat: 1,
          yoyo: true,
          ease: "sine.inOut",
        })
        .to("#left-hand", {
          y: 0,
          x: 30,
          rotation: 0,
        });
      robotTl.timeScale(0.4);

      //left-top-circle
      gsap.set("#left-top-circle", {
        transformOrigin: "center",
        scale: 0,
      });

      gsap.to("#left-top-circle", {
        transformOrigin: "center",
        scale: 1,
        fill: "#34496a",
        repeat: -1,
        duration: 2,
      });

      //graph-left-btm
      gsap.to(".graph-circle-lb", {
        rotation: 360,
        transformOrigin: "center",
        duration: 2,
        stagger: {
          amount: 1,
          ease: "sine.inOut",
          repeat: -1,
        },
      });

      const planetTl = gsap
        .timeline({
          repeat: -1,
          yoyo: true,
        })
        .set("#planet-circle", {
          rotation: 10,
          transformOrigin: "center",
        })
        .to("#planet-circle", {
          rotation: -10,
          transformOrigin: "center",
          ease: "power1.inOut",
        });

      //circle-btm-graph
      gsap.to("#graph-cir-1", {
        rotation: 360,
        ease: "none",
        transformOrigin: "-9px center",
        duration: 3,
        repeat: -1,
      });

      gsap.to("#graph-cir-2", {
        rotation: 360,
        ease: "none",
        transformOrigin: "center 18px",
        duration: 4,
        repeat: -1,
      });

      gsap.to("#graph-cir-3", {
        rotation: 360,
        ease: "none",
        transformOrigin: "-19px center",
        duration: 5,
        repeat: -1,
      });

      gsap.to("#graph-cir-mid-2", {
        scale: 1.5,
        ease: "sine.inOut",
        transformOrigin: "center",
        repeat: -1,
        yoyo: true,
      });
      //bottom-right-graph
      gsap.to("#graph-left", {
        morphSVG: "#graph-morph1",
        repeat: -1,
        yoyo: true,
        ease: "elastic.out(1, 0.8)",
        duration: 2,
      });

      gsap.to("#graph-right", {
        morphSVG: "#graph-morph2",
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
        duration: 1,
      });
      //top right circle

      gsap.to(".circles-top", {
        rotation: 360,

        duration: 10,
        transformOrigin: "center",
        stagger: {
          each: 0.5,
          ease: "none",
          repeat: -1,
        },
      });

      gsap.to("#circle-l", {
        drawSVG: "20",
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
        duration: 1,
      });

      gsap.to("#circle-m", {
        drawSVG: "80 30",
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
        duration: 1.5,
      });

      gsap.to("#circle-r", {
        drawSVG: "0",
        repeat: -1,
        yoyo: true,
        ease: "power3.inOut",
        duration: 3,
      });

      gsap.to("#left-display-display", {
        y: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        duration: 2,
      });

      gsap.to("#left-display-shadow", {
        scale: 1.1,
        transformOrigin: "center",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        duration: 2,
      });

      gsap.to(".notes", {
        y: gsap.utils.random(-50, -100, 10, true),
        x: gsap.utils.random(-50, 50, 25, true),
        opacity: 1,
        duration: gsap.utils.random(1.5, 3, 1.5, true),
        stagger: {
          each: 0.5,
          ease: "sine.in",
          repeat: -1,
        },
      });

      //song
      const songTl = gsap
        .timeline({
          repeat: -1,
        })
        .to("#left-display-display line", {
          stroke: "#34496a",
          stagger: {
            each: 0.5,
          },
        })
        .to("#left-display-display line", {
          stroke: "#0ff",
          stagger: {
            each: 0.5,
          },
        });

      gsap.to("#right-display-display", {
        y: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        duration: 2,
        delay: 1.5,
      });
      gsap.to("#right-display-shadow", {
        scale: 1.1,
        transformOrigin: "center",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        duration: 2,
        delay: 1.5,
      });

      //graph-lines
      gsap.to("#graph-line", {
        x: -105,
        ease: "none",
        repeat: -1,
        duration: 2,
      });

      gsap.to("#bar-1-top", {
        morphSVG: "#bar-1-btm",
        repeat: -1,
        yoyo: true,
      });
      gsap.to("#bar-2-top", {
        morphSVG: "#bar-2-btm",
        repeat: -1,
        yoyo: true,
        duration: 1.5,
      });
      gsap.to("#bar-3-top", {
        morphSVG: "#bar-3-btm",
        repeat: -1,
        yoyo: true,
        duration: 2,
      });

      //btns
      gsap.to("#btns ellipse", {
        fill: "#34496a",
        stagger: {
          amount: 1,
          grid: [4, 4],
          repeat: -1,
          yoyo: true,
          from: "random",
        },
      });
      // End: section 4

      // gsap.set("#hippo", { visibility: "hidden" });
      // Begin: section 5
      const morphTl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
      morphTl
        .to("#circle", {
          duration: 2,
          morphSVG: {
            shape: "#hippo",
            type: "rotational",
            origin: "50% 50%",
            map: "complexity",
            precompile: "log",
          },
        })
        .to("#circle", {
          duration: 2,
          morphSVG: {
            shape: "#elephant",
            type: "rotational",
            origin: "50% 50%",
            map: "complexity",
          },
        })
        .to("#circle", {
          duration: 2,
          morphSVG: {
            shape: "#star",
            type: "rotational",
            origin: "50% 50%",
          },
        });

      const morphTl2 = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });
      morphTl2
        .to("#shape", {
          duration: 1,
          fill: "#FFFF66",
          morphSVG: {
            shape: "#star_2",
            type: "rotational",
            origin: "50% 50%",
          },
        })
        .to("#shape", {
          duration: 1,
          fill: "#3399CC",
          morphSVG: {
            shape: "#thumb",
            type: "rotational",
            origin: "50% 50%",
          },
        })
        .to("#shape", {
          duration: 1,
          fill: "#FFA500",
          morphSVG: {
            shape: "#apple",
            type: "rotational",
            origin: "50% 50%",
          },
        })
        .to("#shape", {
          duration: 1,
          fill: "#CC0000",
          morphSVG: {
            shape: "#light",
            type: "rotational",
            origin: "50% 50%",
          },
        })
        .to("#shape", {
          duration: 1,
          fill: "#9966CC",
          morphSVG: {
            shape: "#heart",
            type: "rotational",
            origin: "50% 50%",
          },
        })
        .to("#shape", {
          duration: 1,
          fill: "#FF33FF",
          morphSVG: {
            shape: "#rocket",
            type: "rotational",
            origin: "50% 50%",
          },
        });

      // End: section 5

      // Begin: section 6
      gsap.to("#brain", {
        duration: 2,
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
        morphSVG: {
          shape: "#cognitive",
          map: "position",
          type: "rotational",
        },
      });
      // End: section 6
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef}>
      <div className="w-full h-[100vh] flex justify-center items-center flex-col overflow-hidden bg-black">
        <svg
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 352.54"
        >
          <defs></defs>
          <path
            fill="none"
            stroke="#F29F05"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="19px"
            className="cls-1 letter"
            d="M59.71,315.54S108.62,288,128,262c.47-.62,9.7-12.9,10.19-13.5,6.39-7.92,24.13-34,28.18-59.49,1.57-9.88-1.74-22.08-8.87-24.51-10-3.39-18.23-.89-25.52,17.14-9.54,23.61-10.67,51.48-13.6,72.25-3.09,22-7.51,66.85-7.4,67.38s8.06-82.53,46.11-77.88,1.73,57.64,18.09,71c8.67,7.07,33.05,13,59.3-5.26,21.7-15,46.74-45.52,28.77-63.49-12.62-12.62-31.72-4.45-37.76,18.74-6.26,24-.12,60.23,36.85,57.72,2.71-.19,47.18-2.93,80.32-59.71,13.78-23.61,28.32-63.48,24.15-82.57-3.85-17.61-25.69-24.39-35.14,4.09-9.15,27.59-16.18,58.26-15.31,85.87.76,23.87,9.14,53.73,31.7,52.82,1.81-.07,3.71-.22,5.64-.43,6.37-.71,11.92-3.95,17.77-6.57,26-11.65,45.8-43.84,58.32-70.5,14-29.74,30.58-74.58,5.63-82.18-23.37-7.1-40.94,77.1-40.94,95.42s7.28,64.58,31.87,63.41c11.89-.56,22.37-7,30.11-13.55A59.17,59.17,0,0,0,473.76,283c2.62-7.3,6.37-16.8,10-22.88,6.62-11,20.27-26.52,44.09-15.46s17.8,43.11,8.86,61.16c-7.87,15.87-22.89,19.35-34.13,17.1-2.74-.54-8.89-2.56-11.18-4.16-10.13-7-12.68-13.13-14.06-27.2-2.91-29.6,14.09-45.36,30-49.8,14.91-4.16,21.72,5.55,38.71,9.35,14.29,3.19,27.85.93,36.4-18.15"
          />
        </svg>
      </div>
      <div className="container-1 w-full h-[100vh] flex justify-center items-center flex-col overflow-hidden bg-black">
        <svg
          className="svg__shape"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3000 900"
        >
          <defs>
            <clipPath id="a">
              <path d="M0 0h3000v1000H0z" />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <g className="svg__path">
              <path
                id="path"
                fill="none"
                stroke="#FFB7C5"
                strokeLinecap="round"
                strokeWidth="6"
                d="M158.496 812.128c284.97-.77 465.862-14.424 627.504-162.762 126.872-116.37 173.856-109.332 238-126.048 60.474-15.748 72.752-39.248 115.777-38.492 43.613.314 80.008 47.381 120.223 41.126 38.553-5.222 70.107-58.016 116-56.797 44.36.472 76.5 60.08 124 60.013 47.5-.067 81.39-66.59 128-59.396 44.693 6.221 71.61 54.445 112 57.282 44.36 3.658 80.611-51.313 134.446-43.464 42.378 5.287 61.086 24.123 99.554 33.3 13.156 2.958 29.24 3.918 48.49 6.482"
              />
            </g>
            <g className="svg__path">
              <path
                id="path"
                fill="none"
                stroke="#FFDDB7"
                strokeLinecap="round"
                strokeWidth="6"
                d="M189.072 655.57C484.45 653.602 638.28 641.694 786 569.632c95.812-46.742 185.691-48.603 238-68.171 41.594-14.97 77.983-14.608 115.765 1.938 52.922 23.503 76.7 28.37 120.235-6.291 41.443-32.967 73.747-40.467 116-4.363 55.337 47.361 79.732 49.142 124 12.334 44.39-36.911 78.456-54.783 128-8.688 46.914 43.594 78.11 37.196 112 15.653 40.393-25.437 65.757-52.011 134.25-15.056 48.896 25.088 73.096 19.861 100.461 14.642 51.107-9.734 112.601-1.488 192.429 29.128"
              />
            </g>
            <g className="svg__path">
              <path
                id="path"
                fill="none"
                stroke="#B1C5FF"
                strokeLinecap="round"
                strokeWidth="6"
                d="M226.39 500.018c284.832.004 413.672.038 559.61.278 95.921.155 181.398-9.257 238 6.82 51.62 14.644 75.31-7.436 115.75-21.812 52.881-18.721 84.36 16.868 120.25 35.971 41.22 21.576 71.688-.606 116-36.246s81.75 2.665 123.119 31.642c46.617 32.635 81.881 1.775 128.881-35.944 34.429-28.24 73.702.185 112 28.525 49.944 36.7 88.816.23 134.25-18.77 35.327-14.699 64.43 1.216 99.75 8.348 48.486 9.952 175.246 1.398 282 1.307 30.584-.025 60.192-.041 90.878-.051"
              />
            </g>
            <g className="svg__path">
              <path
                id="path"
                fill="none"
                stroke="#4FABFF"
                strokeLinecap="round"
                strokeWidth="6"
                d="M274.03 345.436c232.164 4.102 376.218 20 511.97 81.63 98.208 44.592 179.392 54.564 238 63.409 47.022 7.393 68.163 32.394 115.849 15.126 48.268-17.895 77.73-44.998 120.151-17.023 36.723 24.387 70.5 59.744 116 32.761 44.03-27.385 76.983-67.839 124-40.918 47.017 26.921 77.594 73.716 128 37.854 45.591-32.79 68.366-59.15 112-40.403 43.634 18.749 72.68 57.533 134.25 33.64 48.367-17.516 49.575-27.135 100.394-23.025 64.433 6.607 143.464-2.312 272.82-63.753 87.442-41.162 175.438-61.634 314.074-71.666"
              />
            </g>
            <g className="svg__path">
              <path
                id="path"
                fill="none"
                stroke="#076EFF"
                strokeLinecap="round"
                strokeWidth="6"
                d="M335.782 192.032C518.884 202.32 660.616 236.868 786 350.218c120.758 109.391 159.944 112.533 238 125.508 64.63 11.755 74.14 31.043 115.693 39.354 42.58 8.406 64.312-15.861 109.575-36.288 53.104-25.45 86.494 38.88 126.732 50.44 44.846 13.393 77.856-33.914 124-54.318 46.144-20.404 88.436 42.905 128 54.543 38.06 11.015 64.706-28.137 112-50.187 48.923-22.389 87.52 34 134.613 34.905 42.114 1.245 55.555-14.017 99.444-29.365 48.574-16.618 141.993-.06 281.943-139.147 131.998-130.541 267.308-153.437 598.336-157.041"
              />
            </g>
          </g>
        </svg>
      </div>

      <div className="container-2 relative w-full h-[100vh] bg-black">
        <div
          id="bg-box"
          className="absolute w-[1002px] h-[902px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
            <path
              fill="#34496a"
              d="M0 0v600h800V0zm405.6 458.4C217 458.4 64.1 360.6 64.1 240S217 21.5 405.6 21.5 747.3 119.3 747.3 240s-153 218.4-341.6 218.4z"
            />
          </svg>
        </div>
        <div className="absolute w-[1200px] h-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
            <defs />
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="graph-line-mask"
                  width="105.2"
                  height="66.7"
                  x="439.5"
                  y="186.6"
                  fill="none"
                />
              </clipPath>
              <clipPath id="clip-path-2">
                <path
                  id="body-mask"
                  fill="none"
                  d="M490.4 368.3c0 63.7-38 140-84.7 140s-84.8-76.3-84.8-140 38-90.6 84.8-90.6 84.7 26.9 84.7 90.6z"
                />
              </clipPath>
            </defs>
            <g id="Ship">
              <g id="mid-display">
                <rect
                  width="320.3"
                  height="207"
                  x="248.8"
                  y="116.3"
                  fill="#282e39"
                  stroke="#0ff"
                  strokeMiterlimit="10"
                  strokeWidth="5"
                  opacity=".8"
                  rx="18.4"
                />
                <g id="graph-btm">
                  <path
                    id="graph-left"
                    fill="#0ff"
                    d="M439.7 292.1s4.5-19.4 8.7-19c3.6.3 4.6 9.2 7.3 9 3.4-.2 4-14 7.3-14.3 3-.2 4.7 10 8.3 10 4 0 5.1-12.6 8.8-12.8 4.1-.2 7.2 27.1 7.2 27.1z"
                  />
                  <path
                    id="graph-morph1"
                    fill="none"
                    d="M439.7 292.1s2.2-10.8 6.5-10.4c3.5.3 8.3-18.9 11-19 3.4-.3 5.6 9 9 8.7 3-.3 3.5-3.2 7-3.2 4 0 5.9 10.6 9.5 10.4 4.2-.2 4.7 13.5 4.7 13.5z"
                  />
                  <path
                    id="graph-right"
                    fill="#34496a"
                    d="M502.6 292.1s4.5-19.4 8.8-19c3.5.3 4.6 9.2 7.3 9 3.4-.2 3.9-14 7.3-14.3 3-.2 4.7 10 8.3 10 4 0 5-12.6 8.7-12.8 4.2-.2 7.3 27.1 7.3 27.1z"
                  />
                  <path
                    id="graph-morph2"
                    fill="none"
                    d="M502.6 292.1s4.5-9.8 8.8-9.4c3.5.3 4.6-6.8 7.3-7 3.4-.2 3.9 6.6 7.3 6.4 3-.3 4.7-17.9 8.3-17.9 4 0 5 16.5 8.7 16.3 4.2-.2 7.3 11.6 7.3 11.6z"
                  />
                </g>
                <g id="planet">
                  <circle
                    id="planet-base"
                    cx="332.2"
                    cy="207.8"
                    r="37.3"
                    fill="#34496a"
                  />
                  <ellipse
                    id="planet-circle"
                    cx="331.5"
                    cy="207.8"
                    fill="none"
                    stroke="#0ff"
                    strokeMiterlimit="10"
                    strokeWidth="5"
                    rx="61.8"
                    ry="12.7"
                  />
                  <path
                    id="planet-top"
                    fill="#34496a"
                    d="M294.9 207.8a37.3 37.3 0 0174.6 0z"
                  />
                </g>
                <g className="graph-circle-lb" id="graph-cir-left">
                  <circle cx="290.4" cy="287.5" r="20.8" fill="#34496a" />
                  <path
                    fill="#0ff"
                    d="M290.4 287.5l5.3-20.1a20.8 20.8 0 0115.5 20z"
                  />
                </g>
                <g className="graph-circle-lb" id="graph-cir-mid">
                  <circle cx="345.4" cy="287.5" r="20.8" fill="#34496a" />
                  <path
                    fill="#0ff"
                    d="M345.4 287.5l5.2-20.1a20.8 20.8 0 0115.5 20z"
                  />
                </g>
                <g id="graph-cir">
                  <circle
                    cx="396.4"
                    cy="292.1"
                    r="16.4"
                    fill="none"
                    stroke="#34496a"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <circle
                    cx="396.4"
                    cy="292.1"
                    r="20.8"
                    fill="none"
                    stroke="#34496a"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <circle
                    cx="396.4"
                    cy="292.1"
                    r="11.6"
                    fill="none"
                    stroke="#34496a"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <circle
                    id="graph-cir-1"
                    cx="408"
                    cy="292.1"
                    r="2.3"
                    fill="#0ff"
                  />
                  <circle
                    id="graph-cir-2"
                    cx="396.4"
                    cy="275.7"
                    r="2.3"
                    fill="#0ff"
                  />
                  <circle
                    id="graph-cir-3"
                    cx="417.2"
                    cy="292.1"
                    r="2.3"
                    fill="#0ff"
                  />
                  <circle
                    id="graph-cir-mid-2"
                    cx="396.4"
                    cy="292.1"
                    r="2.3"
                    fill="#0ff"
                    data-name="graph-cir-mid"
                  />
                </g>
                <g id="graph-big" clipPath="url(#clip-path)">
                  <path
                    id="graph-line"
                    fill="none"
                    stroke="#0ff"
                    strokeMiterlimit="10"
                    strokeWidth="5"
                    d="M439.7 206.4c26.3 0 26.3 34.2 52.6 34.2s26.3-34.2 52.6-34.2 26.3 34.2 52.6 34.2 26.3-34.2 52.6-34.2"
                  />
                </g>
                <circle cx="275.7" cy="139.7" r="11.8" fill="#34496a" />
                <circle
                  id="left-top-circle"
                  cx="275.7"
                  cy="139.7"
                  r="11.8"
                  fill="#0ff"
                />
                <line
                  x1="300.8"
                  x2="387.1"
                  y1="134.3"
                  y2="134.9"
                  fill="none"
                  stroke="#34496a"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="5"
                />
                <line
                  x1="300.8"
                  x2="338.5"
                  y1="143.7"
                  y2="143.9"
                  fill="none"
                  stroke="#34496a"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="5"
                />
                <circle
                  cx="448.1"
                  cy="161.4"
                  r="13.3"
                  fill="none"
                  stroke="#34496a"
                  strokeMiterlimit="10"
                  strokeWidth="5"
                />
                <path
                  className="circles-top"
                  id="circle-l"
                  fill="none"
                  stroke="#0ff"
                  strokeMiterlimit="10"
                  strokeWidth="5"
                  d="M448 148.2a13.3 13.3 0 11-13.2 13.3 13.3 13.3 0 0113.3-13.3"
                />
                <circle
                  cx="491.2"
                  cy="161.4"
                  r="13.3"
                  fill="none"
                  stroke="#34496a"
                  strokeMiterlimit="10"
                  strokeWidth="5"
                />
                <path
                  className="circles-top"
                  id="circle-m"
                  fill="none"
                  stroke="#0ff"
                  strokeMiterlimit="10"
                  strokeWidth="5"
                  d="M491.2 148.2a13.3 13.3 0 11-13.3 13.3 13.3 13.3 0 0113.3-13.3"
                />
                <circle
                  cx="534.4"
                  cy="161.4"
                  r="13.3"
                  fill="none"
                  stroke="#34496a"
                  strokeMiterlimit="10"
                  strokeWidth="5"
                />
                <path
                  className="circles-top"
                  id="circle-r"
                  fill="none"
                  stroke="#0ff"
                  strokeMiterlimit="10"
                  strokeWidth="5"
                  d="M534.4 148.2a13.3 13.3 0 11-13.3 13.3 13.3 13.3 0 0113.3-13.3"
                />
              </g>
              <g id="btm-display">
                <g id="right-display">
                  <g id="right-display-display">
                    <path
                      fill="#282e39"
                      stroke="#0ff"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                      d="M654.7 461H508.6c-10.5 0-15.8-8.5-12-19l26.2-72a29.9 29.9 0 0125.8-18.9h146c10.5 0 15.8 8.5 12 19l-26.2 72a29.9 29.9 0 01-25.7 18.8z"
                      opacity=".8"
                    />
                    <g id="bars">
                      <polygon
                        id="bar-3-btm"
                        fill="#34496a"
                        points="656.9 441.2 642.4 441.2 667.6 371.7 682.2 371.7 656.9 441.2"
                      />
                      <polygon
                        id="bar-3-top"
                        fill="#0ff"
                        points="656.9 441.2 642.4 441.2 653 412 667.5 412 656.9 441.2"
                      />
                      <polygon
                        id="bar-2-btm"
                        fill="#34496a"
                        points="633.7 441.2 619.2 441.2 644.5 371.7 659 371.7 633.7 441.2"
                      />
                      <polygon
                        id="bar-2-top"
                        fill="#0ff"
                        points="633.7 441.2 619.2 441.2 636 395.1 650.5 395.1 633.7 441.2"
                      />
                      <polygon
                        id="bar-1-btm"
                        fill="#34496a"
                        points="610.6 441.2 596.1 441.2 621.4 371.7 635.9 371.7 610.6 441.2"
                      />
                      <polygon
                        id="bar-1-top"
                        fill="#0ff"
                        points="610.6 441.2 596.1 441.2 604 419.5 618.5 419.5 610.6 441.2"
                      />
                    </g>
                    <g id="btns" fill="#0ff">
                      <ellipse
                        cx="546.8"
                        cy="379.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 546.8 379.3)"
                      />
                      <ellipse
                        cx="562.7"
                        cy="379.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 562.7 379.3)"
                      />
                      <ellipse
                        cx="578.6"
                        cy="379.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 578.6 379.3)"
                      />
                      <ellipse
                        cx="594.5"
                        cy="379.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 594.5 379.3)"
                      />
                      <ellipse
                        cx="540.6"
                        cy="396.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 540.6 396.3)"
                      />
                      <ellipse
                        cx="556.5"
                        cy="396.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 556.5 396.3)"
                      />
                      <ellipse
                        cx="572.4"
                        cy="396.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 572.4 396.3)"
                      />
                      <ellipse
                        cx="588.3"
                        cy="396.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 588.4 396.3)"
                      />
                      <ellipse
                        cx="534.4"
                        cy="413.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 534.4 413.3)"
                      />
                      <ellipse
                        cx="550.3"
                        cy="413.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 550.3 413.3)"
                      />
                      <ellipse
                        cx="566.2"
                        cy="413.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 566.2 413.3)"
                      />
                      <ellipse
                        cx="582.1"
                        cy="413.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 582.2 413.3)"
                      />
                      <ellipse
                        cx="528.2"
                        cy="430.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 528.2 430.3)"
                      />
                      <ellipse
                        cx="544.1"
                        cy="430.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 544.1 430.3)"
                      />
                      <ellipse
                        cx="560"
                        cy="430.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.6 562.3 429.7)"
                      />
                      <ellipse
                        cx="575.9"
                        cy="430.3"
                        rx="6.5"
                        ry="4.6"
                        transform="rotate(-39.8 576 430.3)"
                      />
                    </g>
                  </g>
                  <ellipse
                    id="right-display-shadow"
                    cx="593.3"
                    cy="508.4"
                    fill="#1e3855"
                    rx="74"
                    ry="10.9"
                  />
                </g>
                <g id="left-display">
                  <g id="left-display-display">
                    <path
                      fill="#282e39"
                      stroke="#0ff"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                      d="M299 461H153c-10.4 0-22-8.5-25.8-19L101 370c-3.8-10.4 1.6-18.9 12-18.9h146c10.5 0 22 8.5 25.9 18.9l26.2 72c3.8 10.4-1.6 19-12 19z"
                      opacity=".8"
                    />
                    <polygon
                      fill="#0ff"
                      points="153.1 433.3 155.7 440.3 158.2 447.3 153.6 443.8 148.9 440.3 151 436.8 153.1 433.3"
                    />
                    <polygon
                      fill="#0ff"
                      points="143 433.3 146.4 433.3 151.9 448.4 148.5 448.4 143 433.3"
                    />
                    <polygon
                      fill="#0ff"
                      points="193.8 448.4 191.3 441.4 188.7 434.4 193.4 437.9 198 441.4 195.9 444.9 193.8 448.4"
                    />
                    <polygon
                      fill="#0ff"
                      points="203.9 448.4 200.6 448.4 195.1 433.3 198.4 433.3 203.9 448.4"
                    />
                    <polygon
                      fill="#0ff"
                      points="164.4 433.3 167.8 433.3 173.3 448.4 169.9 448.4 164.4 433.3"
                    />
                    <polygon
                      fill="#0ff"
                      points="174 433.3 177.4 433.3 182.9 448.4 179.5 448.4 174 433.3"
                    />
                    <ellipse
                      cx="199"
                      cy="377.7"
                      fill="#34496a"
                      rx="5.4"
                      ry="7.7"
                      transform="rotate(-50.2 199 377.7)"
                    />
                    <polygon
                      fill="#0ff"
                      points="198.2 380.9 197 377.7 195.9 374.6 199.2 376.1 202.6 377.7 200.4 379.3 198.2 380.9"
                    />
                    <line
                      x1="217.3"
                      x2="267.5"
                      y1="377.7"
                      y2="377.7"
                      fill="#282e39"
                      stroke="#0ff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                      opacity=".8"
                    />
                    <ellipse
                      cx="206.2"
                      cy="397.6"
                      fill="#34496a"
                      rx="5.4"
                      ry="7.7"
                      transform="rotate(-50.2 206.2 397.6)"
                    />
                    <polygon
                      fill="#0ff"
                      points="205.4 400.7 204.2 397.6 203.1 394.4 206.4 396 209.8 397.6 207.6 399.2 205.4 400.7"
                    />
                    <line
                      x1="224.5"
                      x2="274.8"
                      y1="397.6"
                      y2="397.6"
                      fill="#282e39"
                      stroke="#0ff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                      opacity=".8"
                    />
                    <ellipse
                      cx="213.5"
                      cy="417.5"
                      fill="#34496a"
                      rx="5.4"
                      ry="7.7"
                      transform="rotate(-50.2 213.4 417.4)"
                    />
                    <polygon
                      fill="#0ff"
                      points="212.6 420.6 211.5 417.5 210.3 414.3 213.7 415.9 217 417.5 214.8 419 212.6 420.6"
                    />
                    <line
                      x1="231.8"
                      x2="282"
                      y1="417.5"
                      y2="417.5"
                      fill="#282e39"
                      stroke="#0ff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                      opacity=".8"
                    />
                    <ellipse
                      cx="220.7"
                      cy="437.3"
                      fill="#34496a"
                      rx="5.4"
                      ry="7.7"
                      transform="rotate(-50.2 220.7 437.3)"
                    />
                    <polygon
                      fill="#0ff"
                      points="219.8 440.5 218.7 437.3 217.6 434.2 220.9 435.8 224.3 437.3 222.1 438.9 219.8 440.5"
                    />
                    <line
                      x1="239"
                      x2="289.2"
                      y1="437.3"
                      y2="437.3"
                      fill="#282e39"
                      stroke="#0ff"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="5"
                      opacity=".8"
                    />
                    <path
                      fill="#34496a"
                      d="M190.5 424.4h-46a7.4 7.4 0 01-6.5-4.7l-15.8-43.5c-1-2.6.4-4.7 3-4.7h46a7.4 7.4 0 016.5 4.7l15.8 43.5c1 2.6-.4 4.7-3 4.7z"
                    />
                    <ellipse
                      cx="157.8"
                      cy="398"
                      fill="#282e39"
                      rx="17.5"
                      ry="25.1"
                      transform="rotate(-50.2 157.8 398)"
                    />
                    <ellipse
                      cx="157.8"
                      cy="398"
                      fill="#282e39"
                      rx="5.1"
                      ry="7.3"
                      transform="rotate(-50.2 157.8 398)"
                    />
                    <path
                      fill="#0ff"
                      d="M159.8 405a10 10 0 01-8.8-6.4 5.8 5.8 0 01.5-5.4 5.3 5.3 0 014.4-2.2 10 10 0 018.8 6.4 5.8 5.8 0 01-.5 5.4 5.3 5.3 0 01-4.4 2.1zm-3.9-10.6a2 2 0 00-1.6.7 2.5 2.5 0 000 2.3 6.6 6.6 0 005.4 4 2 2 0 001.7-.6 2.5 2.5 0 000-2.3 6.6 6.6 0 00-5.5-4zM173.6 405h14.5l-5.1-14h-14.4a1.8 1.8 0 00-1.7 2.6l3.2 8.7a4.1 4.1 0 003.5 2.6z"
                    />
                  </g>
                  <ellipse
                    id="left-display-shadow"
                    cx="224.5"
                    cy="511.5"
                    fill="#1e3855"
                    rx="74"
                    ry="10.9"
                  />
                </g>
              </g>
              <g id="robot">
                <path
                  id="body-base"
                  fill="#fff"
                  d="M490.4 368.3c0 63.7-38 140-84.7 140s-84.8-76.3-84.8-140 38-90.6 84.8-90.6 84.7 26.9 84.7 90.6z"
                />
                <g id="robot-body">
                  <ellipse
                    id="robot-shadow"
                    cx="405.6"
                    cy="543.9"
                    fill="#1e3855"
                    rx="44.5"
                    ry="7.1"
                  />
                  <g clipPath="url(#clip-path-2)">
                    <g id="faces">
                      <g id="face">
                        <ellipse
                          id="face-back"
                          cx="560"
                          cy="340.9"
                          fill="#34496a"
                          rx="61.5"
                          ry="32.2"
                        />
                        <g className="eyes" id="eyes" fill="#0ff">
                          <ellipse cx="539.8" cy="340.9" rx="7.3" ry="13.7" />
                          <ellipse cx="579.1" cy="340.9" rx="7.3" ry="13.7" />
                        </g>
                      </g>
                      <g id="face-2" data-name="face">
                        <ellipse
                          id="face-back-2"
                          cx="256.9"
                          cy="340.9"
                          fill="#34496a"
                          data-name="face-back"
                          rx="61.5"
                          ry="32.2"
                        />
                        <g
                          className="eyes"
                          id="eyes-2"
                          fill="#0ff"
                          data-name="eyes"
                        >
                          <ellipse cx="236.7" cy="340.9" rx="7.3" ry="13.7" />
                          <ellipse cx="275.9" cy="340.9" rx="7.3" ry="13.7" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <path
                  id="right-hand"
                  fill="#fff"
                  d="M549.7 400.7c0 15.6-31.2 28.2-56.2 28.2s-34.2-12.6-34.2-28.2 9.2-28 34.2-28 56.2 12.5 56.2 28z"
                />
                <path
                  id="left-hand"
                  fill="#fff"
                  d="M255.6 400.7c0-15.5 31.2-28 56.2-28s34.2 12.5 34.2 28-9.3 28.2-34.2 28.2-56.2-12.6-56.2-28.2z"
                />
              </g>
              <path
                id="note-1"
                fill="none"
                d="M180 317l-3.5-3.8a1 1 0 00-1.7.7v8.1a6 6 0 00-2-.3c-2.5 0-4.6 1.6-4.6 3.5s2 3.5 4.7 3.5 4.6-1.5 4.6-3.5a3 3 0 00-.7-1.9v-6.8l1.7 1.8a1 1 0 101.5-1.4z"
              />
              <path
                id="note-2"
                fill="none"
                d="M203.4 323.4v-9.5a1 1 0 00-1-1h-9.3a1 1 0 00-1 1v8.1a6 6 0 00-2-.3c-2.5 0-4.6 1.6-4.6 3.5s2 3.5 4.7 3.5 4.6-1.5 4.6-3.5a2.9 2.9 0 00-.7-1.9V315h7.3v7.1a5.8 5.8 0 00-1.9-.3c-2.6 0-4.7 1.6-4.7 3.5s2.1 3.5 4.7 3.5 4.7-1.5 4.7-3.5a2.9 2.9 0 00-.8-1.8z"
              />
            </g>
          </svg>
        </div>
      </div>

      <div className="container-3 w-full h-[100vh] flex justify-between items-center overflow-hidden bg-black">
        <svg
          xmlSpace="preserve"
          id="svg2"
          x="0"
          y="0"
          version="1.1"
          viewBox="9 80 800 400"
          className="block relative"
        >
          <path
            id="hippo"
            d="M149 245c2.7-36.7 16.11-69.08 40.1-97.06 27.04-31.6 60.92-47.39 101.63-47.39 15.48 0 38.48 2.45 69.02 7.29 30.54 4.89 53.53 7.28 69.03 7.28 23.69 0 57.87 8.85 102.53 26.48 7.91 3.01 17.47 11.24 28.7 24.59 6.38 7.89 16.26 19.77 29.62 35.57 3.04 2.14 7 5.32 11.86 9.6 4.86 4.22 8.19 6.06 10 5.46.62-1.84 2.15-4.4 4.58-7.74 1.21-1.23 1.96-1.83 2.26-1.83.93.61 1.83 1.21 2.75 1.83.91.62 1.21 2.42.91 5.46-.62 5.47-.91 7.14-.91 5-.33 3.06-.76 5.01-1.37 5.95-3.95 6.67-5.48 11.85-4.55 15.47.92 3.32 3.77 8.67 8.64 15.96 4.87 7.29 7.59 12.76 8.19 16.4-.3 2.73-.43 7.12-.43 13.21l-4.57 11.38c0 8.51 9.86 23.11 29.62 43.78 9.44 4.22 14.12 18.83 14.12 43.71 0 19.47-16.09 29.17-48.27 29.17-4.26 0-8.81-.13-13.68-.47-3.34-1.2-8.2-2.56-14.58-4.07-7.59-.93-12.76-3.49-15.48-7.77-4.88-6.95-12.78-13.51-23.71-19.58-1.82-.88-4.48-4.22-7.98-10.02-3.5-5.77-6.61-9.42-9.33-10.95-2.72-1.49-6.68-1.81-11.86-.88-8.81 1.49-13.68 2.26-14.57 2.26-2.14 0-5.25-.6-9.34-1.83-4.11-1.21-7.05-1.83-8.89-1.83-2.11 9.73-2.59 19.15-1.36 28.25.3 2.45 1.83 4.43 4.56 5.92 4.27 3.05 6.53 4.71 6.85 5.05 2.72 2.11 5.61 5.61 8.64 10.45.62 1.85-.52 4.95-3.42 9.34-2.89 4.41-5.22 7.01-7.06 7.74-1.81.79-5.77 1.18-11.85 1.18-8.82 0-29.45-2.45-30.98-2.73-7.59-1.53-14.13-3.94-19.58-7.3-2.76-1.81-5.91-10.33-9.56-25.52-3.68-16.41-6.72-26.27-9.14-29.64-.6-.9-1.36-1.33-2.26-1.33-1.53 0-4.05 1.49-7.53 4.56-3.49 2.99-5.86 4.65-7.05 5.01-4.24 17.9-6.4 26.4-6.4 25.47 0 7.01 1.97 12.89 5.92 17.77 3.94 4.86 8.06 9.57 12.32 14.11 5.16 5.77 7.74 10.78 7.74 15.04 0 2.41-.75 4.52-2.28 6.37-6.38 7.89-17.02 11.85-31.9 11.85-16.71 0-27.64-2.28-32.79-6.84-6.7-5.77-10.95-11.86-12.76-18.2-.3-1.53-1.05-6.09-2.28-13.68-.61-4.58-1.98-7.29-4.08-8.18-6.1-.92-13.69-2.58-22.78-5.01-1.84-1.21-3.81-4.26-5.94-9.12-3.93-9.4-6.83-15.79-8.66-19.13-9.13-4.56-23.7-9.7-43.76-15.45-.92 1.83-1.35 4.37-1.35 7.72 3.34 4.26 8.34 10.8 15.03 19.58 5.47 7.29 8.2 14.3 8.2 20.96 0 12.78-8.2 19.13-24.61 19.13-12.45 0-20.96-.88-25.52-2.71-6.67-2.73-12.29-9.14-16.85-19.13-7.6-16.74-11.85-26.16-12.76-28.27-4.87-11.23-8.2-21.13-10.01-29.65-1.23-6.05-3.06-15.35-5.49-27.8-2.12-10.3-5.46-18.36-10.01-24.13C155.33 279.36 147.5 260.6 149 245z"
            className="invisible"
          />

          <path
            id="circle"
            d="M490.1 280.649c0 44.459-36.041 80.5-80.5 80.5s-80.5-36.041-80.5-80.5 36.041-80.5 80.5-80.5 80.5 36.041 80.5 80.5z"
            fill="#0ae448"
          />

          <path
            id="elephant"
            className="invisible"
            d="M446.47,99.669c12.095,0,23.828,7.003,35.234,20.993c11.378,13.989,17.971,20.993,19.755,20.993
  h17.116c36.996,0,65.654,18.517,85.956,55.547c5.35,10.365,13.524,25.586,24.584,45.697c11.01,20.144,23.856,35.008,38.464,44.628
  c16.366,10.694,32.917,16.59,49.644,17.631c7.819,0.361,16.394-1.073,25.657-4.298c8.186-3.58,16.36-7.172,24.54-10.754
  l5.344,11.859c-26.337,20.215-51.436,30.64-75.297,31.363c-25.619,0.712-53.231-5.514-82.764-18.643
  c25.263,29.205,47,47.005,65.161,53.385l-4.271,4.304c-32.041-5.7-61.607-22.099-88.655-49.147l-21.365,12.769
  c0,1.434-1.33,2.94-4.002,4.534c-2.672,1.599-3.85,2.908-3.493,3.981c1.434,4.627,8.743,15.998,21.906,34.062
  c13.174,18.129,19.755,27.711,19.755,28.751c0,3.197-4.101,6.384-12.286,9.586c-8.18,3.193-12.621,6.746-13.333,10.655
  c-0.722,3.198,0.329,7.107,3.198,11.707c2.83,4.627,4.264,7.43,4.264,8.53c0,7.08-6.23,11.509-18.67,13.305
  c-2.163,0.329-8.936,0.526-20.313,0.526c-21.348,0-36.668-4.796-45.927-14.345c-7.468-8.146-13.365-23.046-17.636-44.656
  c-1.434-7.43-3.909-20.729-7.468-39.898c-36.307,9.253-73.698,13.886-112.166,13.886c-23.505,0-48.96-1.764-76.38-5.344
  c4.637,11.76,11.223,31.357,19.798,58.766c-17.806-2.502-39.186-6.055-64.093-10.688c-11.055,16.721-20.506,24.742-28.329,24.026
  c-13.886-1.046-33.837-7.989-59.818-20.795c-6.416-3.198-9.614-8.021-9.614-14.438c0-6.395,4.993-18.161,14.959-35.245
  c9.949-17.077,15.293-29.008,16.009-35.786c0.718-6.072-1.035-14.405-5.311-25.103c-5.344-13.891-8.378-22.941-9.09-27.245h2.146
  l-4.276-12.818c-16.393,17.8-31.351,30.804-44.88,38.989c-15.682,9.61-34.199,15.868-55.548,18.671
  c-4.27-4.238-7.106-6.379-8.541-6.379c26.341-11.41,52.355-29.375,77.973-53.959c1.079-1.073,7.825-5.858,20.314-14.438
  c7.101-4.621,11.371-10.101,12.811-16.518c8.887-35.595,27.048-60.732,54.463-75.335c22.427-11.739,53.953-17.603,94.53-17.603
  c18.518,0,36.154,1.238,52.876,3.717c7.829,2.146,20.307,4.66,37.391,7.491c1.434-14.17,6.422-26.752,14.963-37.741
  C421.377,106.059,432.947,99.669,446.47,99.669z"
          />

          <path
            id="star"
            className="invisible"
            d="M409.6,198.066l26.833,54.369l60,8.719l-43.417,42.321l10.249,59.758L409.6,335.019l-53.666,28.214l10.249-59.758l-43.417-42.321l60-8.719L409.6,198.066z"
          />
        </svg>

        <svg viewBox="120 118 152 152">
          <defs>
            <path
              id="thumb"
              d="M 263.9 190.1 C 263.9 182.1 257.4 175.6 249.4 175.6 C 249.4 175.6 248.3 175.6 246.6 175.6 C 238.6 175.6 216 175 216.1 168.7 C 216.1 166.8 216.2 164.7 216.4 162.4 C 216.7 159.7 217.2 157 217.4 154.7 C 218.8 138.1 213 129 208 129 C 206.8 129 197.7 129.6 198.3 134.5 C 198.5 136.8 199.5 148.4 196.5 158.3 C 191.7 167.1 177 183.2 168.1 190.5 C 167.9 189.8 167.6 189 167.4 188.3 C 166.8 186.2 166.2 184.1 165.6 182 C 163.4 182.6 161.3 183.2 159.2 183.9 C 150.8 186.3 142.5 188.8 134.1 191.3 C 132 191.9 129.9 192.5 127.8 193.1 C 128.4 195.3 129 197.4 129.6 199.5 C 135.8 220.4 141.9 241.3 148.1 262.3 C 148.7 264.4 149.4 266.5 150 268.6 C 152.1 268 154.2 267.4 156.4 266.8 C 164.7 264.3 173.1 261.8 181.4 259.4 C 183.6 258.7 185.7 258.1 187.8 257.5 C 187.2 255.4 186.6 253.2 185.9 251.1 C 184.5 246.3 183.1 241.5 181.7 236.7 C 184 236.1 187.7 235.6 193.3 235.6 C 196 235.6 199.1 235.7 202.6 236 C 213.2 237 223.2 237.7 228.8 238.4 C 230.1 238.6 231.6 238.7 233.1 238.7 C 238.1 238.7 243.6 237.5 245.1 233.3 C 245.6 232.1 245.8 231 246 229.9 C 250.5 228.2 254 224.1 254.2 219 C 254.3 218 254.2 217.1 254.1 216.2 C 257.5 214.2 259.9 210.6 260.1 206.4 C 260.2 204.4 259.8 202.5 259.1 200.8 C 262 198.1 263.9 194.4 263.9 190.1M 154.5 260.4 C 148.3 239.5 142.2 218.5 136 197.6 C 144.4 195.2 152.7 192.7 161.1 190.2 C 167.2 211.1 173.4 232.1 179.6 253 C 171.2 255.4 162.8 257.9 154.5 260.4z"
            />

            <path
              id="apple"
              d="M 158.5 182 C 140.1 197 148.7 237 171.9 252 C 179 256.6 187 257.3 197.2 252.6 C 211.1 258 217.4 257.5 228.1 247.6 C 246.9 230.3 252.7 195.7 235.8 182 C 221.4 170.2 208.9 173.4 202.3 176.8 C 202.3 172.8 201.6 168.3 199.8 163.5 C 200.8 163 201.8 162.4 202.8 161.8 C 203.4 161.5 203.9 161.1 204.5 160.8 C 205.5 160.2 206.4 159.5 207.3 158.9 C 213.8 154.3 219.5 148.5 224.1 142.1 C 224.1 142.1 220.8 154.8 213.3 161.6 C 248.2 172.9 246.2 133.6 245.8 123.1 C 245.8 122.4 244.7 122.4 244.2 123 C 237.6 130.7 219.8 121.1 208.9 132.9 C 201.1 141.2 203 150.1 205.2 155.3 C 204.3 155.9 203.3 156.5 202.3 157.1 C 200.9 157.9 199.5 158.7 198 159.4 C 196.3 155.8 194 152.2 190.9 148.4 C 190 147.4 188.4 147.3 187.4 148.2 C 186.3 149.2 185.2 150.2 184.1 151.2 C 183.1 152.1 183 153.7 183.9 154.8 C 190.9 163.3 192.8 171.2 192.9 177.3 C 186.5 173.7 173.7 169.7 158.5 182z"
            />

            <path
              id="plug"
              d="M 201.4 163.9 C 198.6 161.1 195.8 158.3 193 155.5 C 202.6 145.9 212.2 136.3 221.8 126.7 C 224.1 124.4 227.9 124.4 230.2 126.7 C 232.5 129 232.5 132.8 230.2 135.1 C 220.6 144.7 211 154.3 201.4 163.9M 270.3 166.8 C 268 164.5 264.2 164.5 261.9 166.8 C 252.3 176.4 242.7 186 233.1 195.6 C 235.9 198.4 238.7 201.3 241.5 204.1 C 251.1 194.5 260.7 184.9 270.3 175.3 C 272.7 172.9 272.7 169.2 270.3 166.8M 179.1 148.1 C 178.9 147.9 178.6 147.9 178.4 148.1 C 175.8 150.7 173.3 153.3 170.7 155.8 C 170.5 156 170.5 156.3 170.7 156.5 C 171.4 157.2 172.2 158 172.9 158.8 C 169.1 162.6 165.2 166.5 161.3 170.4 C 149.3 182.4 148.5 201.3 158.9 214.2 C 158.1 215 157.3 215.8 156.5 216.6 C 152.6 220.4 152 226.3 154.6 230.9 C 150.2 235.2 145.9 239.6 141.6 243.9 C 145.4 247.7 149.3 251.6 153.2 255.4 C 157.5 251.1 161.8 246.8 166.1 242.5 C 170.7 245 176.6 244.4 180.5 240.5 C 181.3 239.7 182 239 182.8 238.2 C 195.7 248.5 214.7 247.7 226.6 235.8 C 230.5 231.9 234.4 228 238.3 224.1 C 239 224.9 239.8 225.6 240.6 226.4 C 240.7 226.5 241 226.5 241.2 226.4 C 243.8 223.8 246.4 221.2 249 218.6 C 249.1 218.4 249.1 218.1 249 217.9 C 225.7 194.7 202.4 171.4 179.1 148.1z"
            />

            <path
              id="light"
              d="M 201.7 150.6 C 210 150.6 217.6 153.1 223.9 157.5 C 234.1 164.5 240.8 176.3 240.8 189.7 C 240.8 201.4 234.2 210.3 228.2 217.8 C 223.1 224.1 218.4 229.4 218.3 234.7 C 218.3 237.3 216 239.6 213.3 239.6 C 205.9 239.6 198.4 239.6 191 239.6 C 188.2 239.6 186 237.3 186 234.7 C 185.5 228.4 178.7 222.4 172.5 214.6 C 167.3 208 162.6 200.1 162.6 189.7 C 162.6 178.2 167.6 167.8 175.5 160.7 C 182.5 154.4 191.7 150.6 201.7 150.6 C 201.7 150.6 201.7 150.6 201.7 150.6M 258 217.7 C 259.8 218.7 260.5 221.1 259.4 223 C 258.3 224.9 255.9 225.5 254.1 224.5 C 249.7 221.9 245.3 219.4 240.9 216.8 C 242.4 214.7 243.7 212.4 244.8 210.1 C 249.2 212.6 253.6 215.1 258 217.7M 162.6 216.8 C 158.2 219.4 153.8 221.9 149.4 224.4 C 147.5 225.5 145.1 224.8 144.1 223 C 143 221.1 143.6 218.7 145.5 217.7 C 149.9 215.1 154.2 212.6 158.6 210.1 C 159.7 212.4 161.1 214.7 162.6 216.8 C 162.6 216.8 162.6 216.8 162.6 216.8M 154.2 193.6 C 149.1 193.6 144.1 193.6 139 193.6 C 136.9 193.6 135.1 191.8 135.1 189.7 C 135.1 187.6 136.9 185.8 139 185.8 C 144.1 185.8 149.1 185.8 154.2 185.8 C 154.1 187.1 154.1 188.4 154.1 189.7 C 154.1 191 154.1 192.3 154.2 193.6 C 154.2 193.6 154.2 193.6 154.2 193.6M 158.6 169.3 C 154.2 166.8 149.9 164.3 145.5 161.8 C 143.6 160.7 143 158.3 144.1 156.4 C 145.1 154.5 147.5 153.9 149.4 155 C 153.8 157.5 158.2 160 162.6 162.6 C 161.1 164.7 159.7 167 158.6 169.3 C 158.6 169.3 158.6 169.3 158.6 169.3M 174.6 150.5 C 172.1 146.1 169.5 141.7 167 137.3 C 165.9 135.5 166.6 133.1 168.4 132 C 170.3 130.9 172.7 131.6 173.8 133.5 C 176.3 137.8 178.8 142.2 181.4 146.6 C 179 147.7 176.7 149 174.6 150.5 C 174.6 150.5 174.6 150.5 174.6 150.5M 197.8 142.2 C 197.8 137.1 197.8 132 197.8 127 C 197.8 124.9 199.6 123.1 201.8 123.1 C 203.9 123.1 205.6 124.9 205.6 127 C 205.6 132 205.6 137.1 205.6 142.2 C 204.4 142.1 203.1 142 201.8 142 C 200.4 142 199.1 142.1 197.8 142.2 C 197.8 142.2 197.8 142.2 197.8 142.2M 222.1 146.6 C 222.8 145.4 223.5 144.3 224.1 143.1 C 224.9 141.8 225.7 140.5 226.4 139.1 C 227.5 137.2 228.6 135.3 229.7 133.4 C 230.8 131.6 233.1 130.9 235 132 C 236.9 133.1 237.5 135.5 236.5 137.3 C 235.3 139.3 234.2 141.3 233 143.3 C 232.3 144.5 231.6 145.7 230.9 146.9 C 230.2 148.1 229.5 149.3 228.9 150.5 C 227.7 149.7 226.4 148.9 225.2 148.2 C 224.2 147.6 223.1 147.1 222.1 146.6 C 222.1 146.6 222.1 146.6 222.1 146.6M 240.9 162.6 C 241.9 162 243 161.4 244 160.8 C 245.2 160.1 246.3 159.5 247.5 158.8 C 249.7 157.5 251.9 156.3 254.1 155 C 255.9 153.9 258.3 154.5 259.4 156.4 C 260.5 158.3 259.8 160.7 258 161.8 C 255.8 163 253.7 164.3 251.5 165.5 C 250.3 166.2 249.1 166.9 247.8 167.6 C 246.8 168.2 245.8 168.8 244.8 169.4 C 244.3 168.2 241.7 163.7 240.9 162.6 C 240.9 162.6 240.9 162.6 240.9 162.6M 249.2 185.8 C 254.3 185.8 259.4 185.8 264.4 185.8 C 266.6 185.8 268.3 187.5 268.3 189.7 C 268.3 191.8 266.6 193.6 264.4 193.6 C 259.4 193.6 254.3 193.6 249.2 193.6 C 249.3 192.3 249.4 191 249.4 189.7 C 249.4 188.4 249.3 187.1 249.2 185.8 C 249.2 185.8 249.2 185.8 249.2 185.8M 202.1 275.5 C 206.6 275.5 210.5 272.3 213.3 267.2 C 205.9 267.2 198.4 267.2 191 267.2 C 193.7 272.3 197.7 275.5 202.1 275.5 C 202.1 275.5 202.1 275.5 202.1 275.5M 191 254.7 C 198.4 254.7 205.9 254.7 213.3 254.7 C 216.1 254.7 218.3 256.9 218.3 259.6 C 218.3 259.6 218.3 259.6 218.3 259.6 C 218.3 262.4 216.1 264.5 213.3 264.5 C 205.9 264.5 198.4 264.5 191 264.5 C 188.2 264.5 186 262.4 186 259.6 C 186 259.6 186 259.6 186 259.6 C 186 256.9 188.2 254.7 191 254.7 C 191 254.7 191 254.7 191 254.7M 191 242.2 C 198.4 242.2 205.9 242.2 213.3 242.2 C 216.1 242.2 218.3 244.4 218.3 247.1 C 218.3 247.1 218.3 247.1 218.3 247.1 C 218.3 249.8 216.1 252 213.3 252 C 205.9 252 198.4 252 191 252 C 188.2 252 186 249.8 186 247.1 C 186 247.1 186 247.1 186 247.1 C 186 244.4 188.2 242.2 191 242.2 C 191 242.2 191 242.2 191 242.2z"
            />

            <path
              id="heart"
              d="M 226.3 157 C 205 157 201.4 171.1 201.4 171.1 C 201 172.7 200.3 172.7 199.9 171.1 C 199.9 171.1 196.4 157 175.1 157 C 153.8 157 146.4 179.7 146.4 189.3 C 146.4 219.9 198.2 251.3 198.2 251.3 C 199.5 252.2 201.8 252.2 203.2 251.3 C 203.2 251.3 255 219.9 255 189.3 C 255 179.7 247.5 157 226.3 157z"
            />

            <path
              id="star_2"
              d="M 262.6 182.4 C 261.7 179.7 259.3 177.7 256.4 177.2 C 245.3 175.7 234.3 174.1 223.3 172.5 C 218.4 162.7 213.4 152.8 208.5 143 C 207.2 140.4 204.5 138.7 201.5 138.7 C 198.6 138.7 195.9 140.4 194.6 143 C 189.7 152.8 184.7 162.7 179.8 172.5 C 168.8 174.1 157.8 175.7 146.7 177.2 C 143.8 177.6 141.4 179.7 140.5 182.4 C 139.6 185.2 140.3 188.2 142.4 190.3 C 150.4 197.9 158.4 205.6 166.4 213.3 C 164.5 224.1 162.6 234.9 160.7 245.7 C 160.2 248.6 161.4 251.5 163.8 253.2 C 165.1 254.1 166.7 254.6 168.4 254.6 C 169.6 254.6 170.8 254.3 172 253.8 C 181.8 248.6 191.7 243.5 201.5 238.4 C 211.4 243.5 221.3 248.6 231.1 253.8 C 232.3 254.3 233.5 254.6 234.7 254.6 C 236.3 254.6 237.9 254.1 239.3 253.2 C 241.7 251.5 242.9 248.6 242.4 245.7 C 240.5 234.9 238.6 224.1 236.7 213.3 C 244.7 205.6 252.7 197.9 260.7 190.3 C 262.8 188.3 263.5 185.2 262.6 182.4z"
            />

            <path
              id="rocket"
              d="M 201.2 222.1 C 210 216.5 218.6 210.1 225.7 203 C 249.9 178.8 252.6 157.5 250.1 149.9 C 253.7 146.3 257.3 142.7 260.9 139.1 C 261.9 138.1 261.9 136.5 260.9 135.5 C 259.9 134.5 258.3 134.5 257.3 135.5 C 253.7 139.1 250.1 142.7 246.5 146.3 C 238.9 143.8 217.6 146.5 193.4 170.7 C 186.3 177.8 179.9 186.4 174.3 195.2 C 166.2 193.2 152.1 193.2 142.3 204.1 C 131.1 216.4 137.7 228.1 140.2 225.7 C 142.2 223.6 145.6 211.3 160.4 220.8 C 158 225.8 158.1 228.9 159.7 230.4 C 161.8 232.5 163.9 234.6 166 236.7 C 167.6 238.3 170.6 238.5 175.7 236 C 185.1 250.8 172.8 254.2 170.8 256.3 C 168.3 258.7 180 265.3 192.3 254.1 C 203.2 244.3 203.2 230.2 201.2 222.1M 216.5 179.9 C 212.9 176.3 212.9 170.3 216.5 166.7 C 220.2 163 226.1 163 229.7 166.7 C 233.4 170.4 233.4 176.2 229.7 179.9 C 226.1 183.5 220.2 183.5 216.5 179.9M 156.4 233.5 C 156.4 233.5 146.4 235.3 142.7 253.7 C 161.1 250.1 162.9 240 162.9 240 C 160.8 237.8 158.6 235.7 156.4 233.5z"
            />
          </defs>

          <path
            id="shape"
            d="M 226.3 157 C 205 157 201.4 171.1 201.4 171.1 C 201 172.7 200.3 172.7 199.9 171.1 C 199.9 171.1 196.4 157 175.1 157 C 153.8 157 146.4 179.7 146.4 189.3 C 146.4 219.9 198.2 251.3 198.2 251.3 C 199.5 252.2 201.8 252.2 203.2 251.3 C 203.2 251.3 255 219.9 255 189.3 C 255 179.7 247.5 157 226.3 157z"
            fill="#FF33FF"
          />
        </svg>
      </div>

      <div className="w-full h-[100vh] relative flex justify-center items-center">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="947.1px"
          height="667.3px"
          viewBox="0 0 947.1 667.3"
          xmlSpace="preserve"
        >
          <path
            id="brain"
            className="st0"
            fill="none"
            stroke="#F670A1"
            strokeWidth="2"
            d="M401.3,10.9c-31-2-65.9,4-95.9,21c-15,1-31,9-43.9,15c-29,2-53.9,12-75.9,29
			c-19,6-38.9,13-55.9,28c-32,19-52.9,40.9-62.9,67.9c-21,7-32,23-32,44.9c-15,13-25,30-27,51.9c-8,17-7,34-2,50.9c-1,6-5,13,0,19
			c-5,11-3,22,2,33c3,0,4,13,8,15c2,29,9,47.9,18,61.9c10,16,20,30,36,34c16,32,81.9,30,161.8,19c7,11,14,19,21,27
			c11,23,29,36.9,50.9,45.9c18,16,39.9,27,80.9,11c38.9-2,69.9-11,79.9-40.9c10-1,23-6,43.9-16c15-3,27-11,37.9-20c11,8,34,4,56.9,0
			c36-2,60.9-7,72.9-17c17-5,34-10,46.9-20c30,10,57.9,14,80.9,0c66.9,7,119.8-7,133.8-78.9c11-12,8-30,3-47.9c11-18-4-33-19-48.9
			c-2-21-12-36-27-48.9c2-14-3-26-23-36c-8-24-22-38.9-38.9-49.9c0-25-21-40.9-51.9-52.9c-24-29-53.9-49.9-88.9-64.9
			c-14-11-28-12-41.9-10c-16-20-43.9-25-81.9-18c-10-7-21-7-31-7c-23-2-42.9-3-59.9-3C448.3-1.1,424.3,2.9,401.3,10.9z
     M114.7,122.7c-11,10-11,17-4,21
     M143.7,109.7c48.9-34,84.9-36.9,109.8-20
     M219.6,138.7c19-14,27-40.9,41.9-59.9c20-30,57.9-5,81.9-7
     M94.8,169.7c-12,14,3,26,3,38.9
     M56.8,210.6c17-9,13-29,29-42.9c11-14,46.9-15,59.9-34c14-21,32-28,52.9-24
     M182.6,128.7c11-11,19-22,26-33
     M250.5,130.7c11-8,16-18,15-29
     M239.6,62.8c8,3,19,1,36-11
     M262.5,47.8c-4,5-7,10-7,14
     M306.5,31.8c2,4,5,7,8,7
     M334.4,19.9c-4,5-7,9-9,13
     M422.3,18.9c-8,1-16-1-24-8
     M436.3,78.8c-10-2-18-6-14-29c1-20-15-26-42.9-24c-26,2-49.9,4-60.9,10c-9,9-19,18-31,28
     M322.4,43.8c-7,7-9,15-7,23
     M396.3,36.8c-10,17-24,32-34,40.9c-21,22-35,45.9-13,71.9
     M337.4,123.7c-11,1-19-6-26-16c-5-10-19-10-25-29
     M419.3,83.8c-48.9,2-47.9,33-71.9,43.9
     M451.3,132.7c4-16-7-22-32-21c-12,1-24,1-33-4
     M426.3,136.7c-26,9-50.9,12-76.9,14c-12-1-29,37.9-31,50.9
     M13.9,278.5c7-11,14-17,23-20
     M36.8,265.5c-4-17,27-22,36-32c6-5,11-24,41.9-31c17-6,31-24,50.9-41.9c8-9,23-13,39.9-14
     M176.6,121.7c-9,12-16,27-6,34
     M134.7,190.6c-2,12-2,24-1,35
     M164.7,211.6c-7,11-19,24-14,38.9
     M140.7,246.6c18,5,28,23,40.9,28
     M149.7,236.6c-6-10-15-15-27-6c-17,10-33,21-49.9,31c-16,14-21,28-14,41.9
     M14.9,306.5c13-15,27-22,40.9-21
     M36.8,289.5c-3-3-8-4-14-5
     M68.8,273.5c24-13,36-10,39.9,3c10,53.9,26,63.9,40.9,77.9
     M121.7,253.5c-4,4-10,10-16,17
     M171.7,222.6c18-16,42.9-33-4-48.9
     M194.6,196.6c29-1,44.9,5,45.9,21c1,11-6,22-5,34
     M315.5,340.4c25-24,39.9-45.9,23-83.9c-6-19-13-36.9-20-54.9c-31,0-57.9,5-77.9,15
     M288.5,230.6c-15,14-46.9,23-44.9,47.9c1,46.9,18,56.9,29,67.9c4,3,8,15,18,27
     M221.6,103.7c-5,19-26,38.9-7,60.9c7-5,26-5,35-7c16-10,58.9,7,75.9-5
     M401.3,223.6c8-30-7-47.9-36-56.9
     M418.3,300.5c-14-2-43.9-23-39.9-43.9c-3-25-18-34-19-43.9c-2-5,5-17-1-24
     M273.5,347.4c8-13,8-25-12-38.9
     M208.6,229.6c1,14,2,27,8,40.9
     M243.6,278.5c-16-5-29-12-34-2c-5,4-19,10-15,28c-1,8-30,12-40.9,17
     M174.6,323.4c-9,7-6,21-10,31c2,21,26,25,50.9,28
     M61.8,320.5c6,6,17,11,40.9,14c10,2,9,9,32,16c9,1,20,2,30,4
     M76.8,290.5c-6,6-19,11-20,19c-2,8-8,16-13,24c-8,15-13,27-12,36.9c1,21,24,32,36,44.9
     M12.9,325.4c-3-2-5-4-7-6
     M35.8,316.5c-7,7-14,14-19,23c-4,11-3,20-5,38.9
     M16.9,341.4c0-3-2-5-4-7
     M16.9,386.4c2-6,11-12,6-19
     M35.8,449.3c2-4,1-9,3-11
     M69.8,482.2c6-10,7-16,3-17
     M79.8,469.2l-5-3
     M52.8,403.3c-10,20,1,34,28,42.9
     M49.8,348.4c22,12,44.9,36.9,64.9,43.9c22,8,53.9,36,72.9,23
     M215.6,400.3c-15,3-33,15-33,23c1,14,44.9,24,62.9,20
     M69.8,425.3c7,6,17,8,36-1c20-6,27,1,40.9,5
     M184.6,427.3c-24-2-36-1-43.9,7c-14,9-28,7-33,8c-6,2-23,19-46.9,7
     M119.7,501.2c33,2,67.9,1,103.9-4
     M157.7,461.3c-8-2-12-6-12-13c-1,14-9,17-15,23c-7,5-6,13-12,20
     M193.6,442.3c-20,0-38.9-1-52.9-8
     M182.6,442.3c3,17,26,19,37.9,25
     M174.6,457.3c2-4,8-4,12-7
     M202.6,454.3c5-4,11-6,15-11
     M231.6,455.3c-9-15,19-20,26-36
     M229.6,360.4c16,13,38.9,20,52.9,24
     M214.6,422.3c29,0,54.9-19,59.9-40.9c1-2,8-3,12-4
     M463.3,17.9c5-5,12-10,23-13
     M481.2,27.9c-26,0-47.9,4-58.9,23
     M454.3,45.8c6,4,10,8,10,13
     M740.9,318.5c4-45.9-84.9-58.9-128.8,17c-6,16-59.9,10-87.9,18c-25,10-49.9,24-74.9,38.9
			c-10,16-44.9-10-64.9-8c-64.9,7-65.9,103.9-2,119.8
     M501.2,281.5c1,20-21,58.9,12,76.9
     M440.3,323.4c11-4,14-21,21-30
     M418.3,348.4c-5,11,1,15,12,16
     M460.3,535.2c38.9-35,33-97.9-28-93.9c-21,2-36-3-45.9-13
     M490.2,427.3c14,25,28,19,44.9,19c30-1,46.9-31,26-62.9
     M511.2,446.3c-13,4-23,10-30,18
     M458.3,468.3c-12,4-24,17-37.9,26c-12,18-29,25-37.9,35c-10,15-15,45.9-71.9,29
     M459.3,545.1c-28,16-72.9,2-78.9,9
     M532.2,406.3c-10-3-16-17-21-24
     M357.4,365.4c22,12,40.9,9,59.9-6
     M383.4,372.4c-8,12-17,17-28,16c-12-2-29,11-48.9,27c-16,13-22,27-26,41.9c-3,18-6,26-10,33
     M292.5,396.3c-2,12,2,20,10,23
     M279.5,541.2c-10-3-22-13-30-16
     M321.4,496.2c-37.9,18-45.9,45.9-17,78.9
     M298.5,457.3c-2,13,7,22,16,30c8,4,8,15,10,18c12,17,14,28,15,37.9
     M576.1,312.5c14-16,38.9-3,57.9-5
     M527.2,327.4c12-10,17-23,13-40.9
     M551.1,319.5c-4-3-8-6-11-10
     M546.1,508.2c-4-10-1-20,9-29
     M527.2,502.2c3-5,13-6,19-9
     M604.1,463.3c-3,19,10,28,37.9,29
     M595.1,494.2c5-20-8-38.9-34-57.9
     M596.1,482.2c3-2,6-4,9-6
     M648,421.3c-15-3-27-9-27-25c-3-14-21-28-13-55.9
     M577.1,434.3c12,12,36-3,57.9-3c53.9-2,67.9,27,41.9,58.9
     M688.9,466.3c26-1,43.9-11,54.9-32
     M722.9,472.2l-9-10
     M762.8,460.3c16,0,30,3,40.9,12
     M794.8,454.3c-5,3-10,5-15,7
     M820.8,461.3c-3-17,8-25,9-35
     M640,357.4c8,7,18,13,16,21c3,17,24,19,36,21c24,10,45.9,21,33,40.9
     M514.2,264.5c-13-4-25-12-36.9-26
     M553.1,106.7c-9,6-19,18-33,27c-14,8-29,15-36,39.9c-2,22,0,36.9-5,50.9c-4,13-6,25,0,34
     M489.2,94.8c33,8,43.9,18,40.9,31
     M691.9,388.4c6-10,6-19,6-29c10-16,63.9,6,70.9-38.9
     M692.9,318.5c5,11,6,25,5,40.9
     M477.2,137.7c6,9,9,18,11,26
     M755.9,432.3c16-24,16-56.9,44.9-66.9
     M717.9,411.3c2-6,5-11,8-15
     M767.8,283.5c-7-4-10-11-7-23
     M737.9,300.5c8-5,15-15,22-28
     M779.8,223.6c1,25,22,27,18,54.9
     M726.9,276.5c1-27,15-42.9,32-56.9c10-11,22-17,15-51.9c4-21,29-43.9,7-58.9
			c-26-12-47.9-36-87.9-36.9
     M511.2,242.6c12-21,46.9-33,49.9-40.9c8-21,2-41.9,3-61.9c6-17,22-24,39.9-29
			c28-32,57.9-36,88.9-12
     M565.1,174.7c-4-5-9-8-14-11
     M560.1,204.6c9-5,17-7,26-6
     M470.2,70.8c50.9,5,114.8,13,118.8,44.9
     M594.1,77.8c-7-10-24-15-32-22
     M562.1,31.8c7,12,11,23,18,35
     M568.1,14.9c12,17,35,18,36,39.9
     M599.1,39.8c2-3,4-5,6-8
     M639,85.8c-12-29-37.9-28-50.9-35
     M624,54.8c16,6,24,16,24,29
     M600.1,21.9c20,5,36.9,13,50.9,27
     M636,60.8c5-13,28-16,56.9-17
     M683.9,109.7c9-23,59.9-13,88.9,9
     M590.1,134.7c16-8,35-10,53.9,1
     M660,94.8c-15,15-29,30-10,46.9c35,34,55.9,52.9,26,82.9
     M746.9,116.7c9,13,9,28,3,41.9
     M691.9,155.7c14,9,22,23,24,41.9c10,46.9-3,57.9-17,67.9
     M606.1,247.6c30,7,51.9,8,56.9-8
     M639,252.5c7,1,14,4,19,8
     M696.9,281.5c11-15,0-23-45.9-31
     M704.9,167.7c17-13,20-34,30-50.9
     M773.8,168.7c21-2,36.9,6,49.9,23
     M805.8,153.7c6,2,16,5,28,8
     M876.7,244.6c-14,5-23,16-28,31c-13,10-20,25-24,40.9
     M926.6,376.4c7,3,11,8,11,16
     M905.6,282.5c-4,5-9,7-16,8c-9,8-15,17-15,28c7,17,8,30,4,40.9
     M877.7,304.5c0-6-2-13-7-19
     M901.7,357.4c6-9,10-19,10-34c1-12,4-22,9-28
     M911.6,332.4c10,1,13,7,12,15c7,6,10,15,13,23
     M642,151.7c-9,18-25,35-27,53.9c-16,35-70.9,32-83.9,58.9
     M848.7,274.5c-2-30-48.9-76.9-76.9-67.9C794.8,190.6,854.7,229.6,848.7,274.5z
     M229.6,501.2c-4-28,9-52.9,30-73.9c23-18,18-43.9,28-51.9c14-27,50.9-43.9,102.9-52.9
			c16-19,36.9-29,65.9-28c20-17,37.9-33,74.9-33c2,9,5,18,9,26c-4-5-10-11-14-18c-33-3-55.9,16-68.9,32c-23-5-42.9,2-61.9,24
			c-52.9,10-90.9,26-103.9,52.9c-7,24-15,43.9-30,51.9c-17,18-32,43.9-22,81.9C236.6,509.2,233.6,504.2,229.6,501.2z
     M495.2,114.7c-9-3-17-2-24,4
     M532.2,8.9c-9,6-5,21-11,32c-47.9,3-74.9,21-65.9,53.9c11,13,13,22,6,28
			c-14,8-19,29-24,51.9c-10,13-16,34-16,55.9c-1,19-29,30-25,45.9c2,0,3,0,4,0c0-7,4-14,11-20c9-5,13-17,16-33c-1-14,3-28,14-42.9
			c5-19,7-46.9,27-55.9c12-5,5-18-6-34c-13-32,22-39.9,58.9-44.9c15-4,11-28,21-36C539.1,8.9,535.2,8.9,532.2,8.9z
     M867.7,205.6c-7,8-15,17-23,25c7,0,16-5,28-20L867.7,205.6z
     M845.7,231.6c-17,14-34,29-45.9,43.9c-9,12-10,29-7,47.9c2,14,4,28,7,40.9c4,0,7,0,11,1
			c16,16,55.9,13,67.9,19c7,10,13,17,17,15c7,7,12,15,15,23c-3-10,3-10-18-34c-9-9-30-14-62.9-19c-23-8-28-22-30-39.9
			c-4-17-6-33,0-49.9C812.8,263.5,828.8,247.6,845.7,231.6z
     M802.8,361.4c3,23,11,43.9,28,59.9c34,1,54.9,20,84.9,21l-7,7c-14,1-27-11-39.9-13
			c-11-4-33-5-42.9-10C810.8,405.3,801.8,383.4,802.8,361.4z
     
     M483.2,533.2c7,28,20,46.9,40.9,54.9c30,14,52.9,47.9,76.9,77.9c13-7,27-13,37.9-23
			L525.2,507.2L483.2,533.2z
    M516.2,525.2c0,6,1,12,7,18c2,34,15,44.9,33,44.9c79.9,50.9,140.8,53.9,186.7,24
			c19-11,48.9-22,50.9-33c22-11,35-22,46.9-33c19-16,19-43.9,11-78.9C662,461.3,566.1,486.2,516.2,525.2z
     M735.9,476.2c-37.9,14-79.9,30-112.8,60.9
     M628,525.2c12-9,24-18,36-27
     M752.9,480.2c-34,11-69.9,25-103.9,42.9
     M775.8,481.2c-51.9,17-108.9,40.9-159.8,64.9
     M853.7,477.2c-43.9,14-222.7,76.9-241.7,76.9 M611,550.1c74.9-31,154.8-54.9,230.7-76.9
     M855.7,498.2c-45.9,17-197.7,55.9-233.7,59.9c78.9-26,155.8-46.9,232.7-70.9
     M634,506.2c-12,51.9-39.9,55.9-71.9,46.9c-13-10-26-10-38.9-10
     M609.1,552.1c9-15,13-29,15-43.9
     M600.1,555.1c9-12,14-28,16-46.9
     M588.1,557.1c14-12,19-28,18-48.9
     M581.1,556.1c10-13,17-28,18-45.9
     M572.1,556.1c10-13,18-28,22-44.9
     M565.1,554.1l23-41.9
     M559.1,552.1c6-13,10-28,18-37.9
     M555.1,548.1c5-11,7-24,11-34
     M550.1,547.1c1-12,4-23,7-34
     M544.1,545.1l4-35
     M540.1,544.1c-2-9-3-18-3-27
     M532.2,543.1c-4-7-4-14-3-21
     M526.2,543.1l-4-18
     M553.1,547.1c-2,11,3,20,12,28
     M543.1,545.1c-2,14,2,28,14,36.9
     M529.2,544.1c3,19,12,34,26,42.9
     M555.1,587.1c9-10,17-22,26-30
     M833.7,505.2c-28,29-64.9,52.9-110.8,71.9c-38.9-3-77.9-16-116.8-24
     M642,555.1c32,5,62.9,10,94.9,16
     M750.9,564.1c-29-5-56.9-10-84.9-14
     M691.9,544.1c25,4,45.9,7,69.9,14
     M710.9,539.2c22,0,42.9,5,61.9,13
     M738.9,532.2c15,2,31,6,45.9,13
     M796.8,537.2c-9-1-20,0-30,0
     M807.8,528.2c-20,4-37.9,4-52.9,0
     M768.8,524.2c9,2,28,0,46.9-3c14-4,27-9,39.9-15
     M559.1,584.1c34,24,84.9,40.9,143.8,45.9
     M562.1,578.1c40.9,31,96.9,41.9,158.8,45.9
     M566.1,575.1c65.9,38.9,121.8,46.9,173.8,37.9
     M569.1,570.1c64.9,36,124.8,44.9,181.8,36.9
     M573.1,565.1c69.9,34,132.8,42.9,192.7,36
     M578.1,561.1c62.9,31,128.8,40.9,197.7,34
     M589.1,557.1c66.9,32,131.8,33,196.7,31
     M722.9,577.1c7,9,32,9,70.9,3
     M734.9,572.1c6,9,34,6,68.9,1
     M752.9,564.1c13,4,45.9-4,82.9-14
     M741.9,569.1c9,6,42.9,1,79.9-7
     M849.7,533.2c-40.9,18-71.9,28-87.9,26
     M772.8,552.1c22-1,50.9-13,79.9-25
     M786.8,544.1c22-5,44.9-14,67.9-24
     M855.7,512.2c-18,9-36,16-54.9,22
     M599.1,555.1c44.9,16,92.9,26,139.8,29"
          />
          <path
            id="cognitive"
            className="invisible"
            d="M92,285.1c-16.8,0-31.3-5.9-43.1-17.6C37,255.8,31,241.4,31,224.6c0-16.8,6-31.3,17.8-43.1
		s26.3-17.8,43.1-17.8c16.9,0,31,5.4,41.7,16.1c1.6,1.6,2.4,3.1,2.4,4.6c0,0.8,0,2.1-7.8,16.1c-7.7,13.9-8.9,14.9-9.5,15.3
		c-1.1,0.9-2.2,1.3-3.4,1.3c-0.8,0-1.4-0.3-4.7-3.1c-2.4-2-4.7-3.5-6.9-4.5c-3.3-1.6-6.9-2.4-10.7-2.4c-4.6,0-8.4,1.6-11.6,5
		c-3.2,3.4-4.8,7.3-4.8,11.9c0,4.7,1.6,8.7,4.8,12.1c3.2,3.4,7,5,11.6,5c8.1,0,14.1-2.3,18.4-7.1c0.8-0.9,1.8-1.9,3-1.9
		c1.2,0,1.9,0,11.2,13.7c9.2,13.7,9.2,15.5,9.2,16.5c0,1.4-0.7,3.1-2.2,5c-4.4,5.7-10.6,10.1-18.6,13.3
		C107.1,283.6,99.6,285.1,92,285.1z M92,167.3c-15.8,0-29.5,5.6-40.6,16.7s-16.7,24.7-16.7,40.6c0,15.8,5.6,29.4,16.7,40.3
		c11.1,11,24.7,16.6,40.6,16.6c7.2,0,14.2-1.4,20.9-4.1c7.4-2.9,13.1-7,17.1-12.2c1.3-1.8,1.5-2.6,1.5-2.8
		c-0.1-0.4-0.8-2.9-8.5-14.4c-5.1-7.5-7.3-10.5-8.4-11.6c-0.1,0.1-0.1,0.1-0.2,0.2c-5,5.5-12.1,8.3-21.1,8.3
		c-5.6,0-10.4-2.1-14.3-6.2c-3.8-4.1-5.8-9-5.8-14.6c0-5.6,2-10.4,5.8-14.4c3.9-4,8.7-6.1,14.3-6.1c4.3,0,8.4,0.9,12.2,2.7
		c2.5,1.2,5,2.9,7.6,5c1.5,1.3,2.3,1.9,2.7,2.1c0.2-0.1,0.4-0.2,0.8-0.5c0.4-0.4,2.1-2.5,8.6-14.2c6.5-11.8,7.2-14.1,7.3-14.5
		c0,0,0,0,0,0c0,0-0.1-0.6-1.4-1.9C121.1,172.3,107.9,167.3,92,167.3z
        M198.3,285.4c-16.8,0-31.4-6-43.1-17.9c-11.8-11.8-17.8-26.4-17.8-43.1c0-16.8,6-31.4,17.8-43.3
		c11.8-11.9,26.3-17.9,43.2-17.9c16.8,0,31.3,6,43.1,17.9c11.8,11.9,17.8,26.5,17.8,43.3c0,16.8-6,31.3-17.8,43.1
		C229.6,279.4,215.1,285.4,198.3,285.4z M198.3,166.8c-15.8,0-29.5,5.7-40.6,16.9c-11.1,11.2-16.7,24.9-16.7,40.7
		c0,15.8,5.6,29.4,16.7,40.6c11.1,11.1,24.7,16.8,40.6,16.8c15.8,0,29.4-5.7,40.5-16.8c11.1-11.1,16.7-24.8,16.7-40.6
		c0-15.8-5.6-29.5-16.7-40.7C227.7,172.5,214.1,166.8,198.3,166.8z M198.3,244.8c-5.5,0-10.3-2-14.2-6c-3.9-4-5.9-8.8-5.9-14.3
		c0-5.7,1.9-10.6,5.8-14.6c3.8-4,8.7-6.1,14.4-6.1c5.6,0,10.4,2.1,14.3,6.1c3.8,4,5.8,8.9,5.8,14.5c0,5.6-2,10.4-5.8,14.4
		C208.7,242.8,203.9,244.8,198.3,244.8z M198.3,207.4c-4.7,0-8.6,1.6-11.8,4.9c-3.2,3.3-4.8,7.3-4.8,12.1c0,4.6,1.6,8.5,4.9,11.8
		c3.3,3.3,7.1,5,11.6,5c4.6,0,8.4-1.6,11.6-4.9c3.2-3.3,4.8-7.2,4.8-11.8c0-4.7-1.6-8.6-4.8-12C206.7,209.1,202.9,207.4,198.3,207.4
		z
         M324.9,285.1c-16.6,0-31.1-6-43-17.8C270,255.5,264,241.1,264,224.6c0-16.9,6-31.5,17.7-43.2
		c11.7-11.7,26.3-17.7,43.2-17.7c8.1,0,16.5,1.8,25.1,5.4c9.4,3.9,16.4,9,20.8,15.3c1.2,1.8,1.8,3.3,1.8,4.7c0,1.6-1.1,4.3-9.3,13.4
		c-5.7,6.3-9.5,10-11.7,11.4c-1.3,0.9-2.7,1.3-4.2,1.3c-0.9,0-2.4-0.3-8.3-4.1c-3.7-2.3-7.8-3.5-12.3-3.5c-4.6,0-8.4,1.6-11.6,5
		c-3.2,3.4-4.8,7.3-4.8,12c0,4.7,1.7,8.8,5.1,12.4c3.4,3.6,7.3,5.3,12,5.3c2.7,0,5.2-0.4,7.4-1.3c-0.2-1.9-0.6-5.2-1.1-9.9
		c-0.5-4.7-0.8-8.5-0.8-11.4c0-0.8,0.2-1.6,0.5-2.3l0.1-0.3l0.2-0.2c0.7-0.7,1.6-1,3-1c0.2,0,0.7,0,4.5,0.5
		c3.6,0.4,8.8,0.6,15.5,0.6c2.3,0,5.8-0.1,10.4-0.3c4.8-0.2,8.2-0.3,10.6-0.3c3,0,4.1,1.9,4.1,3.7c0,2.9-0.3,7.3-0.8,13.1
		c-0.5,5.6-0.7,9.9-0.7,12.7c0,3.3,0.3,8.3,0.9,15c0.6,6.8,0.9,11.8,0.9,14.9c0,2-1.2,4.2-4.6,4.2c-2.8,0-6.7-0.5-12-1.4
		c-4.9-0.9-8.6-1.4-11-1.5C344.1,282.4,334.1,285.1,324.9,285.1z M324.9,167.3c-15.9,0-29.6,5.6-40.7,16.6
		c-11,11-16.6,24.7-16.6,40.7c0,15.6,5.7,29.1,16.9,40.2c11.2,11.1,24.8,16.7,40.4,16.7c8.7,0,18.3-2.6,28.3-7.8l0.4-0.2l0.5,0
		c2.6,0.1,6.5,0.6,12,1.5c5,0.9,8.8,1.3,11.4,1.3c0.7,0,0.9-0.2,0.9-0.2c0,0,0.1-0.1,0.1-0.4c0-3-0.3-7.9-0.9-14.5
		c-0.6-6.8-0.9-11.9-0.9-15.3c0-2.9,0.3-7.3,0.8-13.1c0.5-5.7,0.7-9.9,0.7-12.7c0,0,0,0,0-0.1c-0.1,0-0.2,0-0.5,0
		c-2.3,0-5.8,0.1-10.4,0.3c-4.7,0.2-8.2,0.3-10.6,0.3c-6.8,0-12.1-0.2-15.9-0.6c-3.3-0.4-4-0.5-4.1-0.5c-0.1,0-0.1,0-0.2,0
		c0,0.1,0,0.2,0,0.3c0,2.7,0.3,6.4,0.8,10.9c0.7,6.1,1.2,9.9,1.3,11.3l0.1,1.3l-1.1,0.5c-3,1.4-6.4,2.1-10.1,2.1
		c-5.6,0-10.5-2.2-14.6-6.5c-4.1-4.3-6.1-9.3-6.1-14.9c0-5.6,2-10.5,5.8-14.5c3.9-4,8.7-6.1,14.3-6.1c5.2,0,9.9,1.4,14.2,4.1
		c5.1,3.2,6.3,3.5,6.5,3.5c0.6,0,1.4-0.2,2.1-0.7c1.3-0.8,4.2-3.3,11-10.8c7.7-8.6,8.3-10.7,8.4-11c0-0.3-0.2-1.1-1.2-2.6
		c-4-5.7-10.4-10.4-19.2-14C340.5,169,332.5,167.3,324.9,167.3z
         M499.1,282c-1.8,0-4.5-0.1-8-0.3l0,0c-3.4-0.2-6-0.3-7.7-0.3c-1.7,0-4.5,0.1-8.1,0.3c-3.7,0.2-6.5,0.3-8.4,0.3
		c-1.6,0-3.1-1.1-4.7-3.4c-19.1-26.5-26.4-35.4-29.1-38.3c0,4.1,0.2,10.2,0.5,18.1c0.3,8.3,0.5,14.6,0.5,18.8c0,3-1.6,4.8-4.3,4.8
		c-1.9,0-4.9-0.1-8.7-0.3c-3.8-0.2-6.7-0.3-8.5-0.3c-2,0-5.1,0.1-9.3,0.3c-4.2,0.2-7.4,0.3-9.5,0.3c-2.7,0-4.4-1.6-4.4-4.1
		c0-5.8,0.3-14.6,0.8-26.2c0.5-11.5,0.8-20.3,0.8-26c0-6-0.3-15.1-0.8-27.1c-0.5-12-0.8-21.2-0.8-27.2c0-1.1,0.5-3.6,5.1-3.6
		c2.3,0,7.5-0.5,15.3-1.3c1-0.1,3.9-0.6,8.4-1.3c3.6-0.7,6.5-1,8.8-1c1.5,0,2.9,1.2,4.8,4.3c0.9,1.4,5.2,7.5,12.8,18.2
		c3.7,5.4,9.3,13.1,16.9,22.9c0-0.3,0-0.6,0-0.9c0-4-0.3-10.2-1-18.4c-0.7-8.3-1-14.6-1-18.7c0-4.4,2.4-4.9,3.4-4.9
		c2.1,0,5.4,0.1,9.6,0.2c4.2,0.2,7.4,0.2,9.5,0.2c2.3,0,5.7-0.1,10.2-0.2c4.6-0.2,8-0.2,10.3-0.2c1.6,0,3.2,1,3.2,4
		c0,6.1-0.3,15.3-0.9,27.5c-0.6,12.1-0.9,21.3-0.9,27.4l-0.2,53C503.7,279.2,503.4,282,499.1,282z M432.4,235.8
		c1.6,0,3.3,0,32.8,40.7c1.2,1.7,1.9,1.9,1.9,1.9c1.8,0,4.5-0.1,8.1-0.3c3.8-0.2,6.5-0.3,8.3-0.3c1.8,0,4.4,0.1,8,0.3l0,0
		c3.4,0.2,6,0.3,7.7,0.3c0.5,0,0.8-0.1,1-0.1l0.2-52.9c0-6.1,0.3-15.4,0.9-27.5c0.6-12.1,0.9-21.3,0.9-27.3c0-0.1,0-0.2,0-0.3
		c-2.3,0-5.6,0.1-9.8,0.2c-4.6,0.2-8,0.2-10.3,0.2c-2.1,0-5.4-0.1-9.6-0.2c-4-0.1-7.1-0.2-9.1-0.2c-0.1,0.2-0.1,0.6-0.1,1.3
		c0,4,0.3,10.2,1,18.4c0.7,8.3,1,14.6,1,18.7c0,4.1-0.4,5.9-1.6,6.7l-1.4,1l-1.1-1.4c-8.8-11.4-15.3-20.2-19.4-26.2
		c-7.7-10.8-11.9-16.8-12.9-18.3c-1.1-1.8-1.8-2.4-2-2.6c-2,0-4.6,0.3-7.9,0.9c-4.7,0.8-7.6,1.3-8.7,1.4c-8.1,0.9-13.2,1.4-15.7,1.4
		c-0.8,0-1.2,0.1-1.5,0.2c0,6,0.3,15,0.8,26.8c0.5,12.1,0.8,21.2,0.8,27.3c0,5.8-0.3,14.6-0.8,26.2c-0.5,11.5-0.8,20.3-0.8,26
		c0,0.3,0,0.4,0.1,0.4h0c0,0,0.2,0.1,0.8,0.1c2,0,5.1-0.1,9.3-0.3c4.3-0.2,7.3-0.3,9.5-0.3c1.9,0,4.8,0.1,8.7,0.3
		c3.8,0.2,6.7,0.3,8.5,0.3c0.4,0,0.7,0,0.7-1.1c0-4.1-0.2-10.4-0.5-18.6c-0.3-8.3-0.5-14.6-0.5-18.8
		C429.4,236.2,431.5,235.8,432.4,235.8z
         M559.8,282.1c-2.3,0-5.8-0.1-10.4-0.4c-4.5-0.2-8-0.4-10.3-0.4c-2.1,0-5.4,0.1-9.8,0.3
		c-4.4,0.2-7.7,0.3-9.9,0.3c-2.7,0-4.4-1.6-4.4-4.1c0-6.5,0.3-16.4,0.8-29.4c0.5-13,0.8-22.9,0.8-29.3c0-5.4-0.3-13.6-0.8-24.5
		c-0.5-10.9-0.8-19.1-0.8-24.5c0-2.2,1.5-3.6,3.7-3.6c2.4,0,5.8,0.1,10.6,0.3c4.7,0.2,8.2,0.3,10.6,0.3c2.2,0,5.5-0.1,10-0.3
		c4.6-0.2,7.8-0.3,10-0.3c2.4,0,3.9,1.4,3.9,3.7c0,5.4-0.3,13.6-0.8,24.5c-0.5,10.8-0.8,18.9-0.8,24.3c0,6.5,0.3,16.3,0.8,29.3
		c0.5,13,0.8,22.9,0.8,29.4C563.9,280.5,562.3,282.1,559.8,282.1z M539,277.7c2.4,0,5.9,0.1,10.5,0.4c4.5,0.2,8,0.4,10.2,0.4
		c0.3,0,0.4,0,0.5-0.1c0,0,0-0.2,0-0.5c0-6.4-0.3-16.3-0.8-29.2c-0.5-13-0.8-22.9-0.8-29.5c0-5.4,0.3-13.7,0.8-24.5
		c0.5-10.8,0.8-19,0.8-24.3c0,0,0-0.1,0-0.1c-0.1,0-0.1,0-0.3,0c-2.1,0-5.4,0.1-9.9,0.3c-4.5,0.2-7.9,0.3-10.1,0.3
		c-2.4,0-6-0.1-10.7-0.3c-4.7-0.2-8.2-0.3-10.5-0.3c0,0-0.1,0-0.1,0c0,5.5,0.2,13.6,0.7,24.3c0.5,10.9,0.8,19.2,0.8,24.7
		c0,6.5-0.3,16.4-0.8,29.5c-0.5,13-0.8,22.8-0.8,29.2c0,0.3,0,0.4,0.1,0.4l0,0c0,0,0.2,0.1,0.8,0.1c2.1,0,5.4-0.1,9.8-0.3
		C533.6,277.8,536.8,277.7,539,277.7z
         M633.1,282.1c-2.3,0-5.7-0.1-10.3-0.4c-4.5-0.2-7.9-0.4-10.2-0.4c-2.1,0-5.4,0.1-9.7,0.3
		c-4.4,0.2-7.7,0.3-9.9,0.3c-2.7,0-4.4-1.6-4.4-4.1c0-6.4,0.3-16.3,0.8-29.4c0.6-13,0.8-22.8,0.8-29.3c0-2.4-0.1-7.5-0.3-15.7
		c-4.6,0.3-11,0.9-19.1,1.6l-0.5,0L570,205c-1.2-0.5-2.4-1-2.4-2.4c0-0.3,0-1,1.4-8.5c1.2-6.4,1.6-8.5,1.7-9.1
		c0.2-4.8,0.7-10.8,1.6-17.6l0.1-0.4c0.2-0.5,0.9-1.8,2.9-1.8c0.2,0,0.6,0,1.6,0.2c10.4,1.1,23.5,1.7,38.9,1.7
		c4.7,0,13.6-0.6,26.4-1.8c9.8-1,10.3-1,10.6-1c3.8,0,4.2,2.1,4.2,3c0,1.9-0.1,4.9-0.4,8.8c-0.3,3.8-0.4,6.7-0.4,8.5
		c0,1.7,0.2,4.3,0.7,7.8c0.5,3.7,0.7,6.4,0.7,8.3c0,2-1.3,3.3-3.4,3.4l-0.2,0l-0.2,0c-0.4-0.1-4-0.3-18-1.1
		c-0.2,8.2-0.3,13.7-0.3,16.2c0,6.5,0.3,16.4,0.8,29.3c0.6,13.1,0.8,22.9,0.8,29.4C637.3,280.5,635.7,282.1,633.1,282.1z
		 M612.7,277.7c2.3,0,5.8,0.1,10.4,0.4c4.5,0.2,7.9,0.4,10.1,0.4c0.4,0,0.5-0.1,0.5-0.1c0,0,0.1-0.1,0.1-0.5
		c0-6.4-0.3-16.2-0.8-29.2c-0.6-13-0.8-22.9-0.8-29.5c0-2.7,0.1-8.8,0.3-18.1l0-1.9l1.9,0.1c14.7,0.8,18.6,1.1,19.8,1.1
		c0-1.8-0.3-4.3-0.7-7.5c-0.5-3.7-0.7-6.4-0.7-8.3c0-1.9,0.1-4.9,0.4-8.8c0.2-3.4,0.4-6,0.4-7.9c-0.1,0-0.3,0-0.6,0
		c-0.3,0-2,0.1-10.3,0.9c-13,1.2-22,1.8-26.8,1.8c-15.5,0-28.8-0.6-39.4-1.8c-0.2,0-0.4-0.1-0.6-0.1c-0.8,6.3-1.3,11.9-1.4,16.4
		c-0.1,1.1-0.7,4.2-1.7,9.5c-0.7,3.6-1,5.6-1.2,6.6c9.1-0.8,15.7-1.4,20.2-1.7l1.9-0.1l0,1.9c0.2,9.3,0.3,15.1,0.3,17.6
		c0,6.6-0.3,16.5-0.8,29.5c-0.6,13-0.8,22.8-0.8,29.2c0,0.3,0,0.4,0.1,0.4l0,0c0,0,0.2,0.1,0.8,0.1c2.1,0,5.4-0.1,9.7-0.3
		C607.2,277.8,610.4,277.7,612.7,277.7z
         M654.1,204.1 654.1,203.1 653.9,204 654.1,203 654.1,202.3 652.4,202.1 654.1,202.3 653.8,200.5 
		654.3,200.4 656.2,200.8 655.9,204.1
         M706.7,282.1c-2.3,0-5.8-0.1-10.4-0.4c-4.5-0.2-8-0.4-10.3-0.4c-2.1,0-5.4,0.1-9.8,0.3
		c-4.4,0.2-7.7,0.3-9.9,0.3c-2.7,0-4.4-1.6-4.4-4.1c0-6.5,0.3-16.4,0.8-29.4c0.5-13,0.8-22.8,0.8-29.3c0-5.4-0.3-13.7-0.8-24.5
		c-0.5-10.9-0.8-19.1-0.8-24.5c0-2.2,1.5-3.6,3.7-3.6c2.4,0,5.8,0.1,10.6,0.3c4.7,0.2,8.2,0.3,10.6,0.3c2.2,0,5.5-0.1,10-0.3
		c4.6-0.2,7.8-0.3,10-0.3c2.4,0,3.9,1.4,3.9,3.7c0,5.4-0.3,13.7-0.8,24.5c-0.5,10.8-0.8,19-0.8,24.3c0,6.5,0.3,16.3,0.8,29.3
		c0.5,13.1,0.8,23,0.8,29.4C710.9,280.5,709.3,282.1,706.7,282.1z M686,277.7c2.4,0,5.9,0.1,10.5,0.4c4.5,0.2,8,0.4,10.2,0.4
		c0.3,0,0.4,0,0.5-0.1c0,0,0-0.2,0-0.5c0-6.4-0.3-16.2-0.8-29.2c-0.5-13-0.8-22.9-0.8-29.5c0-5.4,0.3-13.7,0.8-24.5
		c0.5-10.8,0.8-18.9,0.8-24.3c0,0,0-0.1,0-0.1c-0.1,0-0.1,0-0.3,0c-2.1,0-5.4,0.1-9.9,0.3c-4.5,0.2-7.9,0.3-10.1,0.3
		c-2.4,0-6-0.1-10.7-0.3c-4.7-0.2-8.2-0.3-10.5-0.3c0,0-0.1,0-0.1,0c0,5.5,0.2,13.6,0.7,24.3c0.5,10.9,0.8,19.2,0.8,24.7
		c0,6.5-0.3,16.4-0.8,29.5c-0.5,13-0.8,22.8-0.8,29.2c0,0.3,0,0.4,0.1,0.4l0,0c0,0,0.2,0.1,0.8,0.1c2.1,0,5.4-0.1,9.7-0.3
		C680.6,277.8,683.8,277.7,686,277.7z
         M788.4,282.1c-2.3,0-5.8-0.1-10.6-0.2c-4.7-0.1-8.2-0.2-10.5-0.2c-1.5,0-3.9,0.1-7,0.2
		c-3.2,0.1-5.6,0.2-7.1,0.2c-1.2,0-2.9-0.6-4.3-3.3c-3.9-7.7-9.6-19.6-17-35.2c-12-27-13.6-32.5-13.6-34.2c0-4.2,0.1-10.6,0.4-19
		c0.3-8.4,0.4-14.7,0.4-18.9c0-4.4,2.8-4.8,3.6-4.8c2.3,0,5.6,0.1,10.2,0.3c4.4,0.2,7.8,0.3,10,0.3c2.2,0,5.7-0.1,10.2-0.4
		c4.6-0.2,8-0.4,10.3-0.4c1.4,0,3.1,0.9,3.1,3.5c0,4.5-0.3,11.4-0.9,20.5c-0.6,9-0.9,15.8-0.9,20.2c0,2.2,0.9,5.4,2.8,9.5
		c1.1,2.2,2.2,4.4,3.3,6.6c1-2.1,2.1-4.7,3.2-7.6c1.8-4.9,2.8-8.7,3.1-11.1l0.2-12.3c0.3-14.6,0.6-24.5,0.6-25c0-3.9,2.1-4.4,3-4.4
		c2.3,0,5.8,0.1,10.3,0.4c4.5,0.2,7.9,0.4,10.1,0.4c2.2,0,5.5-0.1,10-0.3c4.6-0.2,7.9-0.3,10.1-0.3c2.3,0,3.8,1.5,3.8,3.7
		c0,4-0.1,10.1-0.4,18.1c-0.3,8-0.4,14-0.4,18c0,0.8,0,2-7.2,19c-3.8,9.2-6.5,15.5-8.2,19.3c-3.2,6.9-6.9,14.6-11.1,22.8
		c-1.4,2.5-3.3,6.3-5.7,11.2C791.3,281.5,789.6,282.1,788.4,282.1z M767.4,278.1c2.3,0,5.8,0.1,10.6,0.2c4.7,0.1,8.1,0.2,10.5,0.2
		c0,0,0.3-0.2,0.7-1.3c2.5-5.1,4.4-8.9,5.8-11.4c4.2-8.1,7.9-15.7,11-22.6c1.7-3.7,4.4-9.9,8.2-19.1c6-14.3,6.8-17.1,6.9-17.7
		c0-3.9,0.1-10,0.4-18c0.3-8,0.4-14,0.4-18c0,0,0-0.1,0-0.1c0,0-0.1,0-0.2,0c-2.2,0-5.5,0.1-10,0.3c-4.5,0.2-7.9,0.3-10.1,0.3
		c-2.3,0-5.8-0.1-10.3-0.4c-4.1-0.2-7.3-0.3-9.5-0.4c0,0.2,0,0.4,0,0.7c0,0.5-0.1,7-0.6,25.1l-0.3,12.5c-0.3,2.8-1.4,6.7-3.4,12
		c-1.8,4.8-3.5,8.6-5.1,11.3l-1.7,3.1l-1.5-3.2c-1.6-3.3-3.2-6.6-4.8-9.9c-2.1-4.8-3.1-8.4-3.1-11.1c0-4.5,0.3-11.4,0.9-20.5
		c0.6-8.9,0.9-15.6,0.9-20.1c-2.2,0-5.4,0.1-9.6,0.4c-4.6,0.2-8.1,0.4-10.4,0.4c-2.2,0-5.7-0.1-10.2-0.3c-4.4-0.2-7.7-0.3-9.9-0.3
		c-0.1,0.2-0.1,0.5-0.1,1.1c0,4.2-0.1,10.4-0.4,19c-0.3,8.3-0.4,14.7-0.4,18.9c0,0.9,1.3,6,13.2,32.7c7.4,15.6,13.1,27.4,16.9,35.1
		l0,0c0.5,1.1,0.9,1.3,1,1.3c1.5,0,3.9-0.1,7-0.2C763.4,278.1,765.8,278.1,767.4,278.1z
         M914.1,283.5c-0.6,0-1.5-0.1-2.5-0.3c-9.2-1.2-21.6-1.9-36.9-1.9c-4.2,0-10.6,0.1-19,0.3
		c-8.4,0.2-14.8,0.3-19,0.3c-2.7,0-4.4-1.6-4.4-4.1c0-6,0.3-15,1-26.9c0.6-11.8,1-20.8,1-26.7c0-6-0.3-17.4-0.9-33.8
		c-0.2-4.2-0.5-10.6-0.9-19l-0.1-1.1c-0.1-1.3,0.4-2.2,0.8-2.7c0.7-0.7,1.7-1.1,3-1.1c4.2,0,10.3,0.1,18.7,0.3
		c8.3,0.2,14.6,0.3,18.7,0.3c4.2,0,10.6-0.1,19-0.3c8.6-0.2,14.9-0.3,19.2-0.3c3.8,0,6.3,2,7.1,5.5c0.2,0.7,0.5,3,1.6,14.2
		c0.8,8.4,1.2,13.1,1.2,14.3c0,2.1-1.4,3.4-3.5,3.4c-2.9,0-7.4-0.3-13.2-0.9c-5.7-0.6-10-0.9-12.9-0.9c-6.1,0-7.6,0-8,0.1
		c-3.3,0.3-4.5,1.1-4.5,1.5c0,1.8,3.2,2.6,5.8,3c1.3,0.1,4.6,0.2,10,0.2c4.4,0,8.6-0.2,12.6-0.6c4.5-0.4,5.9-0.6,6.4-0.7l0.2-0.1
		l0.5,0c2.2,0.1,3.6,1.7,3.6,4.1c0,1.6-0.2,3.9-0.7,7.1c-0.8,4.6-1,6.3-1,6.9c-0.7,7.1-1,12.2-1,15.1c0,1.3-0.7,2.8-2.5,3.3l0,0.2
		l-1.7,0c0,0,0,0-0.1,0v-1.6l-0.4,1.5c-0.2,0-1.2-0.2-6.8-0.9c-5.6-0.7-12.1-1-19.5-1c-3.6,0-5.4,0.7-5.4,2.2c0,0.7,0.1,1.2,0.4,1.5
		c0.4,0.3,3.6,1.4,22.8,1.4c1.9,0,4.8-0.2,8.6-0.5c4-0.4,6.9-0.5,9-0.5c2.3,0,3.8,1.5,3.8,3.7c0,2.1-0.4,4.7-1.1,8.1
		c-0.9,4.5-1.5,7.1-1.6,7.7c-0.4,3.6-1.3,9.1-2.6,16.2C918.6,281.2,917.7,283.5,914.1,283.5z M874.7,277.7c15.5,0,28.1,0.6,37.4,1.9
		c1.1,0.2,1.7,0.2,2,0.2c1.1,0,1.2-0.3,1.2-0.4c1.3-7,2.2-12.4,2.6-16c0.1-0.7,0.7-3.3,1.6-7.9c0.7-3.1,1-5.6,1-7.4c0,0,0-0.1,0-0.1
		c0,0-0.1,0-0.2,0c-1.9,0-4.8,0.2-8.6,0.5c-3.9,0.3-6.9,0.5-9,0.5c-19.6,0-23.7-1.1-25.1-2.3c-1.1-1-1.6-2.4-1.6-4.2
		c0-2.6,1.6-5.8,9.1-5.8c7.5,0,14.2,0.4,19.9,1c3.4,0.4,5.5,0.7,6.7,0.9v0c0.3,0,0.5,0,0.7-0.1c0-3.2,0.4-8.2,1-15.3
		c0.1-1,0.4-3.3,1.1-7.2c0.5-2.9,0.7-5.2,0.7-6.5c0-0.2,0-0.4,0-0.4c-0.8,0.1-2.5,0.3-6.7,0.7c-4.1,0.4-8.5,0.6-13,0.6
		c-5.5,0-8.9-0.1-10.4-0.3c-6-0.8-9-3-9-6.6c0-3,2.6-4.7,7.9-5.2c0.3,0,1.1-0.1,8.3-0.1c3,0,7.4,0.3,13.2,0.9
		c5.6,0.6,9.8,0.9,12.7,0.9c0-1.2-0.3-4.6-1.2-13.7c-1-10.7-1.4-13.2-1.5-13.7c-0.4-1.9-1.4-2.7-3.6-2.7c-4.2,0-10.6,0.1-19.1,0.3
		c-8.5,0.2-14.9,0.3-19.1,0.3c-4.2,0-10.5-0.1-18.8-0.3c-8.3-0.2-14.6-0.3-18.6-0.3c-0.1,0-0.1,0-0.2,0l0.1,1
		c0.4,8.5,0.7,14.9,0.9,19.1c0.6,16.5,0.9,27.9,0.9,33.9c0,6-0.3,15-1,26.9c-0.6,11.8-1,20.8-1,26.7c0,0.3,0,0.4,0.1,0.4l0,0
		c0,0,0.2,0.1,0.8,0.1c4.2,0,10.5-0.1,18.9-0.3C864.2,277.8,870.4,277.7,874.7,277.7z
         M915.4,209.3l-0.9-0.1c0.1,0,0.2,0,0.3,0v-1.7l-1.6,0.4l1.6-0.4v-0.4l0,0l0,0v-1.5l0.3,0
		c1.3,0.1,1.6,1.1,1.7,1.4l0.4,1.4L915.4,209.3z
         M86.9,430.5c-16.8,0-31.4-6-43.1-17.9c-11.8-11.8-17.8-26.4-17.8-43.1c0-16.8,6-31.4,17.8-43.3
		c11.8-11.9,26.3-17.9,43.2-17.9c16.8,0,31.3,6,43.1,17.9c11.8,11.9,17.8,26.5,17.8,43.3c0,16.8-6,31.3-17.8,43.1
		C118.1,424.4,103.6,430.5,86.9,430.5z M86.9,311.8c-15.8,0-29.5,5.7-40.6,16.9c-11.1,11.2-16.7,24.9-16.7,40.7
		c0,15.8,5.6,29.4,16.7,40.6c11.1,11.1,24.7,16.8,40.6,16.8c15.8,0,29.4-5.6,40.5-16.8c11.1-11.1,16.7-24.8,16.7-40.6
		c0-15.8-5.6-29.5-16.7-40.7C116.3,317.5,102.6,311.8,86.9,311.8z M86.9,389.8c-5.5,0-10.3-2-14.2-6c-3.9-4-5.9-8.8-5.9-14.3
		c0-5.7,1.9-10.6,5.8-14.6c3.8-4,8.7-6.1,14.4-6.1c5.6,0,10.4,2.1,14.3,6.1c3.8,4,5.8,8.9,5.8,14.5c0,5.6-2,10.4-5.8,14.4
		C97.2,387.8,92.4,389.8,86.9,389.8z M86.9,352.5c-4.7,0-8.6,1.6-11.8,4.9c-3.2,3.3-4.8,7.3-4.8,12.1c0,4.6,1.6,8.5,4.9,11.8
		c3.3,3.3,7.1,5,11.6,5c4.6,0,8.4-1.6,11.6-4.9l1.3,1.3l-1.3-1.3c3.2-3.3,4.8-7.2,4.8-11.8c0-4.7-1.6-8.6-4.8-12
		C95.3,354.1,91.5,352.5,86.9,352.5z
         M223.1,427.1c-2.3,0-5.8-0.1-10.6-0.2c-4.7-0.1-8.2-0.2-10.5-0.2c-1.5,0-3.9,0.1-7,0.2
		c-3.1,0.1-5.5,0.2-7.1,0.2c-1.2,0-2.9-0.6-4.3-3.3c-3.9-7.7-9.6-19.6-17-35.2c-12-27-13.6-32.5-13.6-34.2c0-4.2,0.1-10.6,0.4-19
		c0.3-8.4,0.4-14.7,0.4-18.9c0-4.4,2.8-4.8,3.6-4.8c2.3,0,5.6,0.1,10.2,0.3c4.4,0.2,7.8,0.3,10,0.3c2.2,0,5.7-0.1,10.2-0.4
		c4.6-0.2,8-0.4,10.3-0.4c1.4,0,3.1,0.9,3.1,3.5c0,4.5-0.3,11.4-0.9,20.5c-0.6,9-0.9,15.8-0.9,20.2c0,2.2,0.9,5.4,2.8,9.5
		c1.1,2.2,2.2,4.4,3.3,6.6c1-2.1,2.1-4.7,3.2-7.6c1.8-4.9,2.8-8.7,3.1-11.1l0.2-12.3c0.2-10.5,0.6-24.4,0.6-25c0-3.9,2.1-4.4,3-4.4
		c2.3,0,5.8,0.1,10.3,0.4c4.5,0.2,7.9,0.4,10.1,0.4c2.2,0,5.5-0.1,10-0.3c4.6-0.2,7.9-0.3,10.1-0.3c2.3,0,3.8,1.5,3.8,3.7
		c0,4-0.1,10.1-0.4,18.1c-0.3,8-0.4,14-0.4,18c0,0.7,0,2-7.2,19c-3.8,9.2-6.5,15.5-8.2,19.3c-3.2,6.9-6.9,14.6-11.1,22.8
		c-1.4,2.5-3.3,6.3-5.7,11.2C226,426.5,224.3,427.1,223.1,427.1z M202.1,423.1c2.4,0,5.8,0.1,10.6,0.2c4.7,0.1,8.2,0.2,10.5,0.2
		c0,0,0.3-0.2,0.7-1.2c2.5-5.1,4.4-8.9,5.8-11.4c4.1-8.1,7.9-15.7,11-22.6c1.7-3.6,4.4-10.1,8.2-19.1c6-14.3,6.8-17.1,6.9-17.7
		c0-3.9,0.1-10,0.4-18c0.3-8,0.4-14,0.4-18c0,0,0-0.1,0-0.1c0,0-0.1,0-0.2,0c-2.2,0-5.5,0.1-10,0.3c-4.5,0.2-7.9,0.3-10.1,0.3
		c-2.3,0-5.8-0.1-10.3-0.4c-4.1-0.2-7.3-0.3-9.5-0.4c0,0.2,0,0.4,0,0.7c0,0.5-0.2,8-0.6,25.1l-0.3,12.5c-0.3,2.8-1.4,6.7-3.4,12
		c-1.8,4.8-3.5,8.6-5.1,11.3l-1.7,3.1l-1.5-3.2c-1.6-3.3-3.2-6.6-4.8-9.9c-2.1-4.8-3.1-8.4-3.1-11.1c0-4.5,0.3-11.4,0.9-20.5
		c0.6-8.9,0.9-15.6,0.9-20.1c-2.2,0-5.4,0.1-9.6,0.4c-4.6,0.2-8.1,0.4-10.4,0.4c-2.2,0-5.7-0.1-10.2-0.3c-4.4-0.2-7.7-0.3-9.9-0.3
		c-0.1,0.2-0.1,0.5-0.1,1.1c0,4.2-0.1,10.6-0.4,19c-0.3,8.4-0.4,14.7-0.4,18.9c0,0.9,1.3,6,13.2,32.7c7.4,15.6,13.1,27.4,16.9,35.1
		c0.5,1.1,0.9,1.3,1,1.3c1.5,0,3.9-0.1,7-0.2C198.1,423.1,200.5,423.1,202.1,423.1z
         M348.8,428.5c-0.6,0-1.5-0.1-2.5-0.3c-9.2-1.2-21.6-1.9-36.9-1.9c-4.2,0-10.4,0.1-19,0.3
		c-8.4,0.2-14.8,0.3-19,0.3c-2.7,0-4.4-1.6-4.4-4.1c0-6,0.3-15,1-26.9c0.6-11.8,1-20.8,1-26.7c0-6-0.3-17.4-0.9-33.8
		c-0.2-4.2-0.5-10.6-0.9-19l-0.1-1.1c-0.1-1.3,0.4-2.2,0.8-2.7c0.7-0.7,1.7-1.1,3-1.1c4.2,0,10.3,0.1,18.7,0.3
		c8.3,0.2,14.6,0.3,18.7,0.3c4.2,0,10.6-0.1,19-0.3c8.6-0.2,14.9-0.3,19.2-0.3c3.8,0,6.3,2,7.1,5.5c0.2,0.7,0.5,3,1.6,14.2
		c0.8,8.4,1.2,13.1,1.2,14.3c0,2.1-1.4,3.4-3.5,3.4c-2.9,0-7.4-0.3-13.2-0.9c-5.7-0.6-10-0.9-12.9-0.9c-6.1,0-7.6,0-8,0.1
		c-3.3,0.3-4.5,1.1-4.5,1.5c0,1.8,3.2,2.6,5.8,3c1.3,0.1,4.6,0.2,10,0.2c4.4,0,8.6-0.2,12.6-0.6c4.5-0.4,5.9-0.6,6.4-0.7l0.2-0.1
		l0.5,0c2.2,0.1,3.6,1.7,3.6,4.1c0,1.6-0.2,3.9-0.7,7.1c-0.8,4.6-1,6.3-1,6.9c-0.7,7.1-1,12.2-1,15.1c0,1.3-0.7,2.8-2.5,3.3l0,0.2
		l-1.7,0c0,0,0,0-0.1,0v-1.6l-0.4,1.5c-0.2,0-1.2-0.2-6.8-0.9c-5.6-0.7-12.1-1-19.5-1c-3.6,0-5.4,0.7-5.4,2.2c0,0.7,0.1,1.2,0.4,1.5
		c0.4,0.3,3.6,1.4,22.8,1.4c1.9,0,4.8-0.2,8.6-0.5c3.9-0.3,7-0.5,9-0.5c2.3,0,3.8,1.5,3.8,3.7c0,2.1-0.4,4.7-1.1,8.1
		c-0.9,4.5-1.5,7.1-1.6,7.7c-0.4,3.6-1.3,9.1-2.6,16.2C353.3,426.3,352.4,428.5,348.8,428.5z M309.4,422.8c15.5,0,28.1,0.6,37.4,1.9
		c1.1,0.2,1.7,0.2,2,0.2c1.1,0,1.1-0.3,1.2-0.4c1.3-7,2.2-12.4,2.6-16c0.1-0.7,0.7-3.3,1.6-7.9c0.7-3.1,1-5.6,1-7.4c0,0,0-0.1,0-0.1
		c0,0-0.1,0-0.2,0c-1.9,0-4.8,0.2-8.6,0.5c-3.9,0.3-6.9,0.5-9,0.5c-19.6,0-23.7-1.1-25.1-2.3c-1.1-1-1.6-2.4-1.6-4.2
		c0-2.6,1.6-5.8,9.1-5.8c7.5,0,14.2,0.4,19.9,1c3.4,0.4,5.5,0.7,6.7,0.9v0c0.3,0,0.5,0,0.7-0.1c0-3.2,0.4-8.2,1-15.3
		c0-0.6,0.2-2,1.1-7.2c0.5-2.9,0.7-5.2,0.7-6.5c0-0.2,0-0.4,0-0.4c-0.8,0.1-2.5,0.3-6.7,0.7c-4.1,0.4-8.5,0.6-13,0.6
		c-5.5,0-8.9-0.1-10.4-0.3c-6-0.8-9-3-9-6.6c0-3,2.6-4.7,7.9-5.2c0.3,0,1.1-0.1,8.3-0.1c3,0,7.4,0.3,13.2,0.9
		c5.6,0.6,9.8,0.9,12.7,0.9c0-1.2-0.3-4.6-1.2-13.7c-1-10.7-1.4-13.2-1.5-13.7c-0.4-1.9-1.4-2.7-3.6-2.7c-4.2,0-10.6,0.1-19.1,0.3
		c-8.5,0.2-14.9,0.3-19.1,0.3s-10.5-0.1-18.8-0.3c-8.3-0.2-14.6-0.3-18.6-0.3c-0.1,0-0.1,0-0.2,0l0.1,1c0.4,8.5,0.7,14.9,0.9,19.1
		c0.6,16.5,0.9,27.9,0.9,33.9c0,6-0.3,15-1,26.9c-0.6,11.8-1,20.8-1,26.7c0,0.3,0,0.4,0.1,0.4h0c0,0,0.2,0.1,0.8,0.1
		c4.2,0,10.5-0.1,18.9-0.3C298.9,422.9,305.1,422.8,309.4,422.8z
         M350.1,354.3l-0.9-0.1c0.1,0,0.2,0,0.3,0v-1.7l-1.6,0.4l1.6-0.4v-0.4l0,0l0,0v-1.5l0.3,0
		c1.3,0.1,1.6,1.1,1.7,1.4l0.3,1.4L350.1,354.3z
         M408.7,427.6c-0.3,0-0.9,0-2.3-0.3c-4.4-0.6-11.3-0.9-20.4-0.9c-2,0-4.9,0.1-9,0.3c-4.1,0.2-7.2,0.3-9.2,0.3
		c-2.7,0-4.4-1.6-4.4-4.1c0-6,0.3-15,1-26.9c0.6-11.8,1-20.8,1-26.7c0-15.1-0.7-32.8-2.2-52.8l-0.1-1.1c-0.2-2,1-3.5,3.1-3.8
		l0.2,1.7v-1.8h3c5.8,0,14.6-0.1,26.2-0.2c11.6-0.2,20.5-0.2,26.3-0.2c12.7,0,23.4,2.8,31.7,8.2c9.9,6.5,14.9,16.1,14.9,28.5
		c0,7.9-1.2,14.4-3.6,19.3c-2.4,4.9-6.7,9.7-12.9,14.1c-0.8,0.5-1,0.9-1.1,1.1c0.4,1.1,2.3,5.3,9.7,20.3
		c10.1,20.5,10.1,21.1,10.1,21.8c0,0.8-0.4,2.7-4,2.7c-2.4,0-5.9-0.1-10.5-0.3c-4.6-0.2-8-0.3-10.2-0.3c-2.2,0-5.4,0.1-9.8,0.3
		c-4.4,0.2-7.7,0.3-9.9,0.3c-3.4,0-4.7-1.9-5.2-3.1c-1-2.5-2.4-6.1-4.2-10.9c-1.6-3.9-3.8-9.9-6.7-17.6c0.2,3.3,0.5,7.4,1,12.4
		c0.7,7.2,1.1,12.7,1.1,16.1C412.1,426.2,410.8,427.6,408.7,427.6z M386,422.8c9.3,0,16.3,0.3,21,1c0.8,0.1,1.3,0.2,1.5,0.2
		c0,0,0,0,0,0c0-3.3-0.4-8.6-1.1-15.8c-0.7-7.2-1.1-12.8-1.1-16.4c0-1.2,0-4.4,2.5-4.4c2,0,3,2.2,3.8,4.7c3.2,8.7,5.7,15.4,7.4,19.7
		c1.8,4.8,3.2,8.4,4.1,10.8c0.1,0.2,0.4,0.9,1.9,0.9c2.1,0,5.4-0.1,9.8-0.3c4.5-0.2,7.8-0.3,10-0.3c2.3,0,5.7,0.1,10.4,0.3
		c4.5,0.2,7.9,0.3,10.2,0.3c-0.9-2.1-3.3-7.2-9.2-19.2c-10.1-20.5-10.1-21.2-10.1-21.8c0-1.5,0.9-2.8,2.7-4.1
		c5.7-4,9.6-8.3,11.7-12.7c2.1-4.4,3.2-10.4,3.2-17.7c0-11.2-4.3-19.6-13.3-25.5c-7.7-5-17.7-7.6-29.8-7.6c-5.8,0-14.6,0.1-26.3,0.2
		c-11.6,0.2-20.5,0.2-26.2,0.2h-2.7l0.1,1c1.5,20,2.2,37.9,2.2,53c0,6-0.3,15-1,26.9c-0.6,11.8-1,20.8-1,26.7c0,0.3,0,0.4,0.1,0.4h0
		c0,0,0.2,0.1,0.8,0.1c2,0,5-0.1,9-0.3C381,422.9,384,422.8,386,422.8z M410.8,364.7c-3.4,0-5.1-1-5.1-3c0-0.8-0.1-1.9-0.2-3.5
		c-0.1-1.6-0.2-2.9-0.2-3.7c0-3.2,0-11.8,5.1-11.8c12.4,0,15,5.9,15,10.8C425.5,358.7,422.9,364.7,410.8,364.7z M409.3,361
		c0.3,0,0.7,0.1,1.5,0.1c9.9,0,11.1-4.3,11.1-7.5c0-3.1-1.2-7.2-11.4-7.2c0,0-1.5,0.6-1.5,8.1c0,0.8,0.1,1.9,0.2,3.5
		C409.2,359.2,409.3,360.2,409.3,361z
         M555.5,428.6l-0.2,0c-0.3,0-2.5-0.2-11.3-0.8c-12-0.9-21.7-1.4-28.9-1.4c-3.8,0-9.5,0.1-17.4,0.3
		c-7.7,0.2-13.6,0.3-17.5,0.3c-1.1,0-3.9-0.4-4.4-4.3l0-0.3l0-0.3c0-0.1,0.1-1.1,0.1-5.7l-0.1-45.8c0-5.7-0.3-15-0.8-27.7
		c-0.5-12.2-0.7-21.6-0.7-27.8c0-2.2,1.5-3.6,3.7-3.6c2.3,0,5.6,0.1,10.2,0.3c4.4,0.2,7.8,0.3,10,0.3c2.3,0,5.9-0.1,10.6-0.4
		c4.7-0.2,8.4-0.4,10.8-0.4c1.4,0,3.1,0.9,3.1,3.5l-0.1,1c-0.7,9-1.5,22.5-2.3,40.4c-0.1,6.7-0.2,12.2-0.2,16.2
		c0,4.4,0.1,9.7,0.3,15.6c0,0.7,0.1,1.1,0.2,1.4c5.4,0,11.3-0.3,17.6-0.9c7.4-0.7,14-1.8,19.7-3.1c0.6-0.1,1.1-0.2,1.6-0.2
		c1.6,0,3.2,1,3.2,3.9c0,10.9-0.9,22.7-2.8,34.9c-0.6,3.7-2.8,4.3-4.1,4.4L555.5,428.6z M515.1,422.8c7.2,0,17,0.5,29.1,1.4
		c8.5,0.6,10.8,0.8,11.4,0.8c0.3-0.1,0.5-0.9,0.6-1.3c1.8-12,2.8-23.6,2.8-34.4c0-0.1,0-0.2,0-0.2c-0.1,0-0.2,0-0.4,0.1
		c-5.8,1.3-12.5,2.4-20.1,3.1c-6.7,0.6-12.9,1-18.6,1c-1.9,0-3-1.6-3.2-4.8c-0.2-6-0.3-11.2-0.3-15.7c0-4.1,0.1-9.6,0.2-16.4
		c0.8-17.9,1.6-31.6,2.3-40.6l0.1-0.6c-2.3,0-5.7,0.1-10,0.4c-4.7,0.2-8.4,0.4-10.8,0.4c-2.2,0-5.7-0.1-10.2-0.3
		c-4.5-0.2-7.8-0.3-10-0.3c0,0-0.1,0-0.1,0c0,6.3,0.2,15.5,0.7,27.6c0.5,12.7,0.8,22.1,0.8,27.9l0.1,45.8c0,4.1,0,5.4-0.1,5.9
		c0.2,0.9,0.5,0.9,0.8,0.9c3.8,0,9.7-0.1,17.4-0.3C505.5,422.9,511.2,422.8,515.1,422.8z M559.4,389C559.4,389,559.4,389,559.4,389
		v-1.8V389z
         M555.5,428.6 555.5,427.3 555.3,428.6 555.5,426.8 555.5,426.8 553.8,426.6 555.5,426.8 555,425.1 
		555.8,425 557.6,425.3 557.3,428.6
         M479.1,424.4l-1.6,0c-0.7,0-1.7-0.4-1.8-2.1l0.1,0l0,0l0,0l1.7-0.1l0-1.3l0,1.3l1.7-0.1l0.1,0.6L479.1,424.4z
         M626.6,430.5c-16.8,0-31.4-6-43.2-17.9c-11.8-11.8-17.8-26.4-17.8-43.1c0-16.8,6-31.4,17.8-43.3
		c11.8-11.9,26.3-17.9,43.2-17.9c16.8,0,31.3,6,43.1,17.9c11.8,11.9,17.8,26.5,17.8,43.3c0,16.8-6,31.3-17.8,43.1
		C657.9,424.4,643.4,430.5,626.6,430.5z M626.6,311.8c-15.8,0-29.5,5.7-40.6,16.9c-11.1,11.2-16.7,24.9-16.7,40.7
		c0,15.8,5.6,29.4,16.7,40.6c11.1,11.1,24.7,16.8,40.6,16.8c15.8,0,29.4-5.6,40.5-16.8c11.1-11.1,16.7-24.8,16.7-40.6
		c0-15.8-5.6-29.6-16.7-40.7C656,317.5,642.4,311.8,626.6,311.8z M626.6,389.8c-5.5,0-10.3-2-14.2-6c-3.9-4-5.9-8.8-5.9-14.3
		c0-5.7,1.9-10.6,5.8-14.6c3.8-4,8.7-6.1,14.4-6.1c5.6,0,10.4,2.1,14.3,6.1c3.8,4,5.8,8.9,5.8,14.5c0,5.6-2,10.4-5.8,14.4
		C637,387.8,632.2,389.8,626.6,389.8z M626.6,352.5c-4.7,0-8.6,1.6-11.8,4.9c-3.2,3.3-4.8,7.3-4.8,12.1c0,4.6,1.6,8.5,4.9,11.8
		c3.3,3.3,7.1,5,11.6,5c4.6,0,8.4-1.6,11.6-4.9h0c3.2-3.3,4.8-7.2,4.8-11.8c0-4.7-1.6-8.6-4.8-12C635,354.1,631.2,352.5,626.6,352.5
		z
         M806,427c-2.3,0-5.8-0.1-10.4-0.3c-4.7-0.2-8-0.3-10.3-0.3s-5.5,0.1-10.1,0.3c-4.5,0.2-8,0.3-10.3,0.3
		c-2.3,0-3.9-1.5-4.2-4l0-0.2v-3.9c0-1.3-0.3-1.4-1.2-1.4c-15.9,0-20.1,0.6-21.2,0.9c-0.9,0.3-2.2,1-2.7,3.6c-0.8,4.1-2.8,5-4.3,5
		c-2.2,0-5.5-0.1-9.9-0.3c-4.4-0.2-7.6-0.3-9.7-0.3c-2.1,0-5.2,0.1-9.6,0.3c-4.3,0.2-7.6,0.3-9.8,0.3c-3,0-4.1-2-4.1-3.8
		c0-0.9,0-2.7,37.8-109.3c0.6-1.7,1.2-2.7,1.9-3.2c1.5-1.2,4.9-1,12.1-0.1c3.5,0.5,6.2,0.7,8,0.7c7.3,0,12.4-0.4,15.3-1.1
		c0.7-0.2,1.3-0.4,1.8-0.4c2.1,0,3.7,2,4.7,3.5c0.4,0.6,1.6,2.9,6.7,14.5c3,6.7,7.4,16.9,12.9,30.4c2.7,7.1,6.3,17.9,10.8,32.3v0
		c4.5,14.2,8,24.9,10.6,31.9c0.3,0.8,0.4,1.2,0.4,1.7C811,426,809.3,427,806,427z M711.7,422.8c2.2,0,5.4,0.1,9.9,0.3
		c4.3,0.2,7.6,0.3,9.7,0.3l0,0c0,0,0.5-0.3,0.8-2c0.8-4.2,3.2-5.8,5.1-6.4c1.5-0.5,5.4-1.1,22.3-1.1c3,0,4.8,1.9,4.8,5v3.8
		c0.1,0.7,0.3,0.7,0.6,0.7c2.2,0,5.6-0.1,10.1-0.3c4.6-0.2,8-0.3,10.3-0.3c2.3,0,5.7,0.1,10.4,0.3c4.6,0.2,8,0.3,10.3,0.3
		c0.5,0,0.8,0,1.1,0c-2.6-6.9-6.1-17.6-10.5-31.7c-4.5-14.3-8.1-25-10.7-32c-5.5-13.4-9.9-23.6-12.9-30.2c-5.1-11.6-6.2-13.7-6.4-14
		c-1-1.5-1.6-1.8-1.7-1.9c0,0-0.3,0.1-0.7,0.2c-3.3,0.8-8.6,1.2-16.3,1.2c-2,0-4.7-0.2-8.5-0.7c-3.5-0.5-6.2-0.7-8-0.7
		c-0.8,0-1.2,0.1-1.4,0.1c-0.1,0.2-0.3,0.6-0.7,1.6c-30.5,86.1-37.3,106.4-37.6,108.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.2,0,0.5,0
		c2.1,0,5.3-0.1,9.6-0.3C706.4,422.9,709.5,422.8,711.7,422.8z M749,381.5c-2.3,0-4.4-0.9-6.2-2.6c-1.8-1.7-2.6-3.8-2.6-6.2
		c0-4.2,2.6-8.2,7.8-12l1-0.7l1,0.6c5.2,3.2,7.9,7.2,7.9,12.1c0,2.3-0.9,4.4-2.6,6.2h0C753.6,380.6,751.5,381.5,749,381.5z
		 M749.1,364.4c-3.5,2.8-5.3,5.6-5.3,8.3c0,1.4,0.5,2.6,1.6,3.6c1.1,1.1,2.2,1.6,3.6,1.6c1.4,0,2.6-0.5,3.6-1.6l0,0
		c1-1.1,1.6-2.3,1.6-3.6C754.2,369.5,752.6,366.7,749.1,364.4z
         M870.9,427c-3.1,0-7.9-0.1-14.1-0.3c-6.3-0.2-10.9-0.3-14-0.3c-2.7,0-6.8,0.1-12.4,0.3
		c-5.5,0.2-9.7,0.3-12.4,0.3c-2.7,0-4.4-1.6-4.4-4.1c0-5.8,0.3-14.6,0.8-26.2c0.5-11.6,0.8-20.3,0.8-26c0-6.1-0.3-15.4-0.8-27.7
		c-0.5-12.3-0.8-21.6-0.8-27.8c0-2.2,1.5-3.6,3.8-3.6h20.1c2,0,4.9,0,8.6-0.1c4-0.1,7-0.1,9-0.1c21.7,0,37.9,3.4,48,10.1
		c7.1,4.7,13,11.7,17.3,20.9c4.1,8.7,6.2,17.5,6.2,26.3c0,7.6-1.6,15.4-4.6,23.1c-3.1,7.8-7.3,14.5-12.5,19.9
		C899.9,421.9,886.9,427,870.9,427z M842.9,422.8c3.1,0,7.7,0.1,14.1,0.3c6.2,0.2,10.9,0.3,14,0.3c14.9,0,27.1-4.7,36.1-14.1
		c4.9-5.1,8.9-11.4,11.8-18.8c2.9-7.3,4.4-14.7,4.4-21.8c0-8.2-2-16.6-5.9-24.7l0,0c-4-8.6-9.4-15.1-16-19.4c-9.5-6.3-25-9.5-46-9.5
		c-2,0-5,0-9,0.1c-3.7,0.1-6.6,0.1-8.6,0.1h-20.1c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c0,6.1,0.3,15.4,0.8,27.6
		c0.5,12.3,0.8,21.7,0.8,27.8c0,5.8-0.3,14.6-0.8,26.2c-0.5,11.5-0.8,20.3-0.8,26c0,0.3,0,0.4,0.1,0.4l0,0c0,0,0.2,0.1,0.8,0.1
		c2.7,0,6.8-0.1,12.3-0.3C836,422.9,840.1,422.8,842.9,422.8z M862.2,394.4c-5.7,0-6.3-3.8-6.3-5.4c0-2.2-0.1-5.4-0.2-9.7
		c-0.1-4.3-0.2-7.6-0.2-9.8c0-2.2,0.1-5.6,0.2-10.1c0.1-4.4,0.2-7.8,0.2-10c0-3.2,2.2-5.1,5.8-5.1c6.7,0,12.4,2.4,17,7.2
		c4.6,4.7,6.9,10.6,6.9,17.3c0,6.9-2.1,12.9-6.3,17.8l0,0C874.8,391.7,869.1,394.4,862.2,394.4z M861.7,347.9
		c-2.2,0-2.2,0.8-2.2,1.5c0,2.2-0.1,5.6-0.2,10c-0.1,4.4-0.2,7.8-0.2,10c0,2.2,0.1,5.4,0.2,9.7c0.1,4.3,0.2,7.6,0.2,9.8
		c0,0.8,0,1.8,2.6,1.8c5.9,0,10.6-2.1,14.4-6.5l0,0c3.7-4.3,5.5-9.3,5.5-15.5c0-5.8-1.9-10.7-5.9-14.8
		C872.2,349.9,867.5,347.9,861.7,347.9z"
          />
        </svg>
      </div>
    </div>
  );
}
