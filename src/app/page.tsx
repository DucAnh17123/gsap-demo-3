"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  // const container = useRef(null);
  // const boxRef = useRef(null);
  // const ballRef = useRef(null);

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline({ repeat: -1, yoyo: true });
  //     tl.to(boxRef.current, { duration: 2, x: "20vw", rotation: 360 });
  //     tl.to(ballRef.current, {
  //       duration: 2,
  //       y: -200,
  //       rotation: 360,
  //       ease: "bounce.in",
  //     });
  //   },
  //   { scope: container }
  // );

  useEffect(() => {
    const getRatio = (el: any) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);
    const lastIndex = gsap.utils.toArray("section").length - 1;

    gsap.utils.toArray("section").forEach((section: any, i) => {
      section.bg = section.querySelector(".bg");
      section.h1 = section.querySelector("h1");

      section.bg.style.backgroundImage = `url(/assets/images/bg-${i + 1}.jpg)`;

      gsap.fromTo(
        section.bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
      gsap.fromTo(
        section.h1,
        {
          y: () => (i == 0 ? 0 : (window.innerHeight / 2) * 1.5),
        },
        {
          y: () => (i == lastIndex ? 0 : (-window.innerHeight / 2) * 1.5),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }, []);



  return (
    // <div ref={container} className="w-full mt-10">
    //   <div ref={boxRef} className="size-20 bg-red-500 rounded-3xl"></div>

    //   <div className="w-full flex justify-center">
    //     <div className="size-[500px] border-b-[1px] border-blue-500 flex items-end justify-center">
    //       <div ref={ballRef} className="size-[50px] bg-red-500 rounded-full">

    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <section className="relative h-[100vh] flex justify-center items-center">
        <div className="bg absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-no-repeat bg-center"></div>
        <h1 className="text-black z-[1] text-3xl font-medium">section 1</h1>
      </section>

      <section className="relative h-[100vh] flex justify-center items-center">
        <div className="bg absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-no-repeat bg-center"></div>
        <h1 className="text-black z-[1] text-3xl font-medium">section 2</h1>
      </section>

      <section className="relative h-[100vh] flex justify-center items-center">
        <div className="bg absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-no-repeat bg-center"></div>
        <h1 className="text-black z-[1] text-3xl font-medium">section 3</h1>
      </section>

      <section className="relative h-[100vh] flex justify-center items-center">
        <div className="bg absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-no-repeat bg-center"></div>
        <h1 className="text-black z-[1] text-3xl font-medium">section 4</h1>
      </section>
    </div>


  );
}
