'use client';

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import hero_img from "../../../public/imgs/about_img.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import AnimatedDivider from "@/Components/AnimatedDivider";

gsap.registerPlugin(ScrollTrigger);

const OtherHero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const titleSplit = new SplitType(titleRef.current, { types: "words" });
    const subtitleSplit = new SplitType(subtitleRef.current, { types: "words" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(titleSplit.words, {
      opacity: 0,
      y: 24,
      duration: 0.7,
      stagger: 0.05,
    })
      .from(
        subtitleSplit.words,
        {
          opacity: 0,
          duration: 0.02,
          stagger: 0.012,
        },
        "-=0.3"
      )
      .from(
        buttonRef.current,
        {
          opacity: 0,
          y: 16,
          duration: 0.5,
        },
        "-=0.2"
      );

    return () => {
      titleSplit.revert();
      subtitleSplit.revert();
    };
  }, []);

  return (
    <section className="relative w-full pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-10 lg:px-40 pb-16 overflow-hidden bg-[#FDF7FF] text-slate-800">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Visual background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center relative z-10">

        {/* ================= LEFT ================= */}
        <div className="flex-1 space-y-6">
          <h1
            ref={titleRef}
            className="text-2xl sm:text-4xl uppercase text-slate-900 sm:leading-[1.5] font-semibold text-center sm:text-left"
          >
            POWERING CONVERSATIONS <span className="text-gradient">THAT DRIVE BUSINESS GROWTH</span>
          </h1>

          <AnimatedDivider />

          <p
            ref={subtitleRef}
            className="
              text-slate-600
              text-sm sm:text-base lg:text-lg
              leading-relaxed
              max-w-xl text-center sm:text-left
            "
          >
            Vialogue is a leading cloud communications platform that enables
            businesses to build deeper customer relationships through intelligent,
            automated conversations across multiple services.
          </p>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex-1 flex justify-center">
          <Image
            src={hero_img}
            alt="hero"
            priority
            placeholder="blur"
            className="
              w-full
              max-w-[460px]
              lg:max-w-[520px]
              select-none
            "
          />
        </div>
      </div>
    </section>
  );
};

export default OtherHero;
