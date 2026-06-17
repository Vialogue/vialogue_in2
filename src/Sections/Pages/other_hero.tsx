'use client';

import React, { useEffect, useRef } from "react";
import AboutPreviewUI from "./AboutPreviewUI";
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

    const subtitleSplit = new SplitType(subtitleRef.current, { types: "words" });

    // Small delay ensures DOM is fully hydrated before GSAP runs
    const timer = setTimeout(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          subtitleSplit.words,
          { opacity: 0 },
          { opacity: 1, duration: 0.02, stagger: 0.012 },
          "-=0.3"
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.2"
        );
    }, 50);

    return () => {
      clearTimeout(timer);
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
            className="text-3xl sm:text-5xl lg:text-[46px] leading-tight text-slate-900 font-semibold text-center sm:text-left block"
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

        <div className="flex-1 flex justify-center mt-10 lg:mt-0">
          <AboutPreviewUI />
        </div>
      </div>
    </section>
  );
};

export default OtherHero;
