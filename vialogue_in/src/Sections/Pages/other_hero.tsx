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
    <section className="w-full pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-10 lg:px-40">
      <div className="mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

        {/* ================= LEFT ================= */}
        <div className="flex-1 space-y-6">
          <h1
            ref={titleRef}
            className="
              text-white font-medium leading-tight text-center sm:text-left
              text-[clamp(1.8rem,3.5vw,3rem)]
            "
          >
            Powering Conversations That Drive Business Growth
          </h1>

          <AnimatedDivider />

          <p
            ref={subtitleRef}
            className="
              text-white/80
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
