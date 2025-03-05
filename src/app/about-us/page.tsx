"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/common/Header";
import Section1 from "@/components/about-us/section1";
import Section2 from "@/components/about-us/section2";
import Section3 from "@/components/about-us/section3";
import Section4 from "@/components/about-us/section4";
import Section5 from "@/components/about-us/section5";
import NextImg from "@/components/common/next-img";
import Section6 from "@/components/about-us/section6";
import Section7 from "@/components/about-us/section7";
import Section8 from "@/components/about-us/section8";
import Section9 from "@/components/about-us/section9";
import Section10 from "@/components/about-us/section10";

export default function AboutUsPage() {
  const containerRef = useRef(null);

  return (
    <div className="w-full">
      <Header />

      <Section9 />

      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />

      <Section5 />

      <Section6 />

      <Section7 />

      <Section8 />

      <div className="py-[200px]"></div>
    </div>
  );
}
