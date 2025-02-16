"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText, DrawSVGPlugin } from "gsap-trial/all";
// import NextImg from "@/component/common/next-img";

gsap.registerPlugin(SplitText, DrawSVGPlugin, useGSAP, ScrollTrigger);

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

      const eyesTl = gsap
      .timeline({
        repeat: -1,
        repeatDelay: 1
      })
      eyesTl.to(".eyes", {
        opacity: 0,
        duration: 0.1
      })
      .to(".eyes", {
        opacity: 1,
        duration: 0.1
      });

      const robotTl = gsap
      .timeline({
        repeat: -1
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
          x: -60
        },
        "right"
      )
      .to(
        "#left-hand",
        {
          x: 80
        },
        "right"
      )
      .to(
        "#charge",
        {
          scaleX: 0.8
        },
        "right"
      )
      .to("#right-hand", {
        rotation: 20,
        repeat: 2,
        yoyo: true,
        ease: "power2.inOut",
        duration: 0.4
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
          x: 60
        },
        "left"
      )
      .to(
        "#charge",
        {
          scaleX: 0.8
        },
        "left"
      )
      .to(
        "#left-hand",
        {
          x: 30
        },
        "left"
      )
      .to(
        "#right-hand",
        {
          x: -80
        },
        "left"
      )
      .to("#left-hand", {
        rotation: -20,
        repeat: 3,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.4
      })
      .to(
        "#robot",
        {
          x: 0
        },
        "center"
      )
      .to(
        "#faces",
        {
          x: 0
        },
        "center"
      )
      .to(
        "#charge",
        {
          scaleX: 1
        },
        "center"
      )
      .to("#left-hand", {
        y: -50,
        x: -10,
        rotation: 30
      })
      .to("#left-hand", {
        rotation: 50,
        repeat: 1,
        yoyo: true,
        ease: "sine.inOut"
      })
      .to("#left-hand", {
        y: 0,
        x: 30,
        rotation: 0
      });
    robotTl.timeScale(0.8);
      // End: section 4
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
          className="absolute w-[802px] h-[602px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
            <path
              fill="#34496a"
              d="M0 0v600h800V0zm405.6 458.4C217 458.4 64.1 360.6 64.1 240S217 21.5 405.6 21.5 747.3 119.3 747.3 240s-153 218.4-341.6 218.4z"
            />
          </svg>
        </div>
        <div className="absolute w-[800px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
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
                      <g id="charge">
                        <circle cx="406.8" cy="340.9" r="16.2" fill="#34496a" />
                        <rect
                          width="4.1"
                          height="13.9"
                          x="398.7"
                          y="334"
                          fill="#fff"
                        />
                        <rect
                          width="4.1"
                          height="13.9"
                          x="410.8"
                          y="334"
                          fill="#fff"
                        />
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
    </div>
  );
}
