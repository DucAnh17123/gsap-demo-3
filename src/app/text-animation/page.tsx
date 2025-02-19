"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap, random } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrambleTextPlugin } from "gsap-trial/all";

gsap.registerPlugin(useGSAP, SplitText, ScrambleTextPlugin);

export default function Section1() {
  const letters = [..."Hello World!"];
  // Tạo mảng refs để tham chiếu đến từng <span>
  const [words, setWords] = useState<string[]>([
    "Smooth",
    "Animation",
    "Tailwind",
    "GreenSock",
    "Awesome!",
  ]);

  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  // Hàm tạo màu HSL ngẫu nhiên
  const randomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 80%, 50%)`;
  };
  const containerRef = useRef<any>(null);
  const letterERef = useRef<HTMLSpanElement | null>(null);
  // Ref cho phần chữ còn lại
  const restLettersRef = useRef<HTMLSpanElement | null>(null);

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
      const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });
      tl.to(".first-text", { x: "-20px", ease: "expo.inOut" })
        .to(".first-text-2", { x: "20px", ease: "expo.inOut" }, "<")
        .to(".windmill", {
          opacity: 1,
          x: -30,
          y: -80,
          rotate: 30,
          ease: "power2.out",
        })
        .to(
          ".circle",
          { opacity: 1, x: 40, y: -90, rotate: -45, ease: "power2.out" },
          "-=1.2"
        )
        .to(
          ".spin",
          { opacity: 1, x: -20, y: -100, rotate: 360, ease: "power2.out" },
          "-=1.0"
        );

      // Animation 4: Text scramble
      gsap.to(".animation4", {
        duration: 4,
        repeat: -1,
        scrambleText: "THIS IS NEW TEXT",
      });
      const tltext = gsap.timeline();
      tltext
        .fromTo(
          letterERef.current,
          { y: -200, opacity: 0, rotate: 0 },
          {
            y: 0,
            opacity: 1,
            rotate: 360,
            duration: 1.2,
            ease: "bounce.out",
          }
        )
        .fromTo(
          restLettersRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "+=0.3"
        );

      refs.current.forEach((el, index) => {
        if (el) {
          // Tạo một màu ngẫu nhiên cho mỗi ký tự
          const color = randomColor();

          gsap.fromTo(
            el,
            {
              y: -50,
              opacity: 0,
              rotate: -180,
              scale: 2, // Cho chữ phóng to lúc đầu
              color: "#000", // Màu bắt đầu (đen)
            },
            {
              y: 0,
              opacity: 1,
              rotate: 0,
              scale: 1,
              color: color, // Màu kết thúc (ngẫu nhiên)
              duration: 1,
              delay: index * 0.1,
              ease: "elastic.out(1, 0.3)",
            }
          );
        }
      });

      const tleff = gsap.timeline({ repeat: -1 });

      words.forEach((word, index) => {
        tleff
          .to(`#word-${index}`, {
            visibility: "visible",
            opacity: 1,
            duration: word.length * 0.2,
          })
          .to(`#word-${index}`, {
            opacity: 0,
            duration: 0.2,
            delay: 1,
          });
      });
      //End: text 10

      // Begin: text 11

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
        <div className="bg-[#ff7f99] h-[200px] flex justify-center items-center font-extrabold">
          <div
            id="demo"
            className="relative w-[800px] h-[200px] bg-black overflow-hidden flex items-center justify-center"
          >
            {words.map((word, index) => (
              <h3
                key={index}
                id={`word-${index}`}
                className="absolute text-[2rem] text-[#ffffff] font-bold text-center font-[Asap] invisible opacity-0"
              >
                {word}
              </h3>
            ))}
          </div>
        </div>
        <div className="bg-[#ff7f99] h-[200px] flex justify-center items-center font-extrabold">
          <button className="relative w-[300px] flex justify-center gap-[3px] items-center px-8 py-4 border-[2px] border-transparent text-black bg-[#DFDDFF] rounded-full text-[16px] font-bold">
            <span className="first-text">Thu</span>{" "}
            <span className="first-text-2">Nghiem</span>
            <div className="absolute left-[115px]">
              <div className="windmill  opacity-0 w-[20px] h-[20px] object-cover top-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="none"
                  width={6.2}
                  height={6.3}
                  viewBox="0 0 62 63"
                  aria-hidden="true"
                >
                  <path
                    fill="url(#paint0_radial_2771_42684)"
                    d="m34.246 27.525 10.197-13.201a.26.26 0 0 1 .362-.047L61.76 27.372a.26.26 0 0 1 .046.366c-7.386 9.336-20.882 11.074-30.391 3.919l16.975 13.112c.112.087.133.25.046.362L35.34 62.085a.26.26 0 0 1-.365.046c-9.41-7.444-11.1-21.093-3.746-30.616l-13.255 17.16a.259.259 0 0 1-.362.046L.658 35.626a.26.26 0 0 1-.046-.365c7.386-9.337 20.881-11.074 30.391-3.92l-16.935-13.08a.259.259 0 0 1-.047-.363L27.117.944a.26.26 0 0 1 .365-.046c8.08 6.393 10.469 17.361 6.326 26.362-.129.278.25.508.439.264l-.001.001Z"
                  />
                  <path
                    fill="url(#pattern-home-hero-btn-windmill-0)"
                    fillOpacity=".6"
                    d="m34.246 27.525 10.197-13.201a.26.26 0 0 1 .362-.047L61.76 27.372a.26.26 0 0 1 .046.366c-7.386 9.336-20.882 11.074-30.391 3.919l16.975 13.112c.112.087.133.25.046.362L35.34 62.085a.26.26 0 0 1-.365.046c-9.41-7.444-11.1-21.093-3.746-30.616l-13.255 17.16a.259.259 0 0 1-.362.046L.658 35.626a.26.26 0 0 1-.046-.365c7.386-9.337 20.881-11.074 30.391-3.92l-16.935-13.08a.259.259 0 0 1-.047-.363L27.117.944a.26.26 0 0 1 .365-.046c8.08 6.393 10.469 17.361 6.326 26.362-.129.278.25.508.439.264l-.001.001Z"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_2771_42684"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientTransform="rotate(-142.317 24.316 16.274) scale(34.5669)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F0FCFF" />
                      <stop offset=".672" stopColor="#9BEDFF" />
                      <stop offset=".76" stopColor="#98ECFF" />
                      <stop offset=".849" stopColor="#5BE1FF" />
                      <stop offset=".948" stopColor="#00BAE2" />
                    </radialGradient>
                    <pattern
                      id="pattern-home-hero-btn-windmill-0"
                      width="2.279"
                      height="2.279"
                      patternContentUnits="objectBoundingBox"
                    >
                      <use xlinkHref="#svg-noise" transform="scale(.00456)" />
                    </pattern>
                  </defs>
                </svg>
              </div>
              <div className="circle  opacity-0 w-[5px] h-[5px] object-cover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="none"
                  width={23}
                  height={23}
                  viewBox="0 0 23 23"
                  aria-hidden="true"
                >
                  <path
                    fill="url(#paint0_radial_2146_58993)"
                    fillRule="evenodd"
                    d="M7.959 10.053a4.368 4.368 0 0 1-.889-.17c-2.327-.7-3.64-3.174-2.933-5.527C4.845 2.002 7.305.662 9.632 1.36c2.327.7 3.64 3.174 2.933 5.528-.06.197-.131.387-.214.57l.46.138c.032-.198.078-.396.137-.593.707-2.353 3.167-3.694 5.494-2.995 2.328.7 3.64 3.175 2.933 5.528-.707 2.353-3.167 3.694-5.494 2.995a4.377 4.377 0 0 1-.745-.3l-.1.333c.261.029.525.082.786.16 2.328.7 3.64 3.175 2.933 5.528-.707 2.353-3.167 3.694-5.494 2.995-2.327-.7-3.64-3.175-2.933-5.528a4.51 4.51 0 0 1 .35-.845l-.54-.163c-.03.265-.085.531-.164.796-.708 2.353-3.168 3.694-5.495 2.994-2.327-.7-3.64-3.174-2.933-5.527.708-2.354 3.168-3.694 5.495-2.995.295.089.574.206.835.349l.083-.276Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="url(#pattern-home-hero-btn-circles-0)"
                    fillOpacity=".6"
                    fillRule="evenodd"
                    d="M7.959 10.053a4.368 4.368 0 0 1-.889-.17c-2.327-.7-3.64-3.174-2.933-5.527C4.845 2.002 7.305.662 9.632 1.36c2.327.7 3.64 3.174 2.933 5.528-.06.197-.131.387-.214.57l.46.138c.032-.198.078-.396.137-.593.707-2.353 3.167-3.694 5.494-2.995 2.328.7 3.64 3.175 2.933 5.528-.707 2.353-3.167 3.694-5.494 2.995a4.377 4.377 0 0 1-.745-.3l-.1.333c.261.029.525.082.786.16 2.328.7 3.64 3.175 2.933 5.528-.707 2.353-3.167 3.694-5.494 2.995-2.327-.7-3.64-3.175-2.933-5.528a4.51 4.51 0 0 1 .35-.845l-.54-.163c-.03.265-.085.531-.164.796-.708 2.353-3.168 3.694-5.495 2.994-2.327-.7-3.64-3.174-2.933-5.527.708-2.354 3.168-3.694 5.495-2.995.295.089.574.206.835.349l.083-.276Z"
                    clipRule="evenodd"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_2146_58993"
                      cx={0}
                      cy={0}
                      r={1}
                      gradientTransform="rotate(-31.559 22.628 3.049) scale(17.064 11.3981)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFD9B0" />
                      <stop offset=".807" stopColor="#FD9F3B" />
                      <stop offset={1} stopColor="#FF8709" />
                    </radialGradient>
                    <pattern
                      id="pattern-home-hero-btn-circles-0"
                      width="5.556"
                      height="5.556"
                      patternContentUnits="objectBoundingBox"
                    >
                      <use xlinkHref="#svg-noise" transform="scale(.01111)" />
                    </pattern>
                  </defs>
                </svg>
              </div>
              <div className="spin opacity-0  w-[5px] h-[5px] object-cover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="none"
                  width={19}
                  height={19}
                  viewBox="0 0 19 19"
                  aria-hidden="true"
                >
                  <path
                    fill="url(#paint0_linear_2771_24471)"
                    d="M.27 7.683a1 1 0 0 1 .372-1.364L10.995.409a1 1 0 0 1 1.364.373l5.91 10.352a1 1 0 0 1-.373 1.365l-10.353 5.91a1 1 0 0 1-1.364-.373L.27 7.683Z"
                  />
                  <path
                    fill="url(#pattern-home-hero-btn-square-0)"
                    fillOpacity=".6"
                    d="M.27 7.683a1 1 0 0 1 .372-1.364L10.995.409a1 1 0 0 1 1.364.373l5.91 10.352a1 1 0 0 1-.373 1.365l-10.353 5.91a1 1 0 0 1-1.364-.373L.27 7.683Z"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2771_24471"
                      x1="24.297"
                      x2="3.329"
                      y1="7.113"
                      y2="17.933"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".144" stopColor="#FFE9FE" />
                      <stop offset={1} stopColor="#FF96F9" />
                    </linearGradient>
                    <pattern
                      id="pattern-home-hero-btn-square-0"
                      width="5.08"
                      height="5.08"
                      patternContentUnits="objectBoundingBox"
                    >
                      <use xlinkHref="#svg-noise" transform="scale(.01016)" />
                    </pattern>
                  </defs>
                </svg>
              </div>
            </div>
          </button>
        </div>
        <div className="bg-[#ff7f99] h-[200px] flex justify-center items-center font-extrabold">
          <p className="animation4 text-black font-semibold text-[30px]">
            hello world
          </p>
        </div>
        <div className="bg-[#ff7f99] h-[200px] flex justify-center items-center font-extrabold">
          <div className="flex justify-center items-center text-[2rem] font-sans">
            {letters.map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  refs.current[index] = el;
                }}
                style={{
                  marginRight: char === " " ? "1rem" : "0.1rem",
                  display: "inline-block",
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-[#ff7f99] h-[200px] flex justify-center items-center font-extrabold">
          <div style={{ textAlign: "center", fontSize: "2rem" }}>
            <span
              ref={(el) => {
                letterERef.current = el;
              }}
              style={{
                display: "inline-block",
                color: "tomato",
                fontWeight: "bold",
              }}
            >
              E
            </span>
            <span
              ref={(el) => {
                restLettersRef.current = el;
              }}
              style={{
                display: "inline-block",
                opacity: 0,
                color: "#ffffff",
              }}
            >
              ffect is here!
            </span>
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

        <div className="bg-gray-500 h-[300px] flex justify-center items-center font-extrabold">
          <div className=" text-white text-6xl font-semibold">rotate text</div>
        </div>
      </div>
    </div>
  );
}
