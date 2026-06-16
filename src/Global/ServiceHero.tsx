"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedDivider from "@/Components/AnimatedDivider";
import ButtonGlobal from "@/Components/InnerComponents/ButtonGlobal";
import SectionSwitcher from "@/Global/sectionSwitch";
import SectionSwitcherTwo from "./SectionSwitcher2";

gsap.registerPlugin(ScrollTrigger);

interface ServiceHeroProp {
  title: string | React.ReactNode;
  description: string;
  hero_img: string;
  off_nav: boolean;
  ind?: boolean;
}

const ServiceHero: React.FC<ServiceHeroProp> = ({
  title,
  description,
  hero_img,
  off_nav,
  ind = false,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      });

      /* TITLE */
      tl.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
      });

      /* DIVIDER */
      tl.from(
        ".animated-divider",
        {
          opacity: 0,
          scaleX: 0.7,
          duration: 0.6,
        },
        "-=0.5"
      );

      /* DESCRIPTION */
      tl.from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.9,
        },
        "-=0.4"
      );

      /* BUTTONS */
      tl.from(
        buttonsRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
        },
        "-=0.5"
      );

      /* IMAGE */
      tl.from(
        imageRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.98,
          duration: 1.1,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full pt-16 sm:pt-20 px-4 sm:px-10 lg:px-40 pb-16 overflow-hidden bg-[#FDF7FF] text-slate-800"
    >
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

      <div className="mx-auto flex flex-col lg:flex-row gap-10 mt-1 lg:gap-0 items-center relative z-10">
        {/* LEFT */}
        <div className="flex-1 space-y-4">
          <h1
            ref={titleRef}
            className="text-slate-900 text-center sm:text-left uppercase font-semibold sm:leading-[1.5] text-2xl sm:text-4xl"
          >
            {title}
          </h1>

          <AnimatedDivider />

          <p
            ref={subtitleRef}
            className="text-slate-600 text-sm sm:text-base lg:text-lg sm:leading-[2] subheading font-light"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div
            ref={buttonsRef}
            className="flex w-full justify-center sm:justify-start mt-10 sm:mt-20 gap-2 flex-wrap"
          >
            <ButtonGlobal text="Start Free Trial" property={true} />
            <ButtonGlobal text="Talk to an Expert" property={false} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 mb-0 sm:mb-0 flex flex-col relative justify-center will-change-transform">
          {off_nav ? <SectionSwitcher /> : null}
          {ind ? <SectionSwitcherTwo /> : null}

          <Image
            ref={imageRef}
            src={hero_img}
            alt="service hero"
            priority
            width={1000}
            height={700}
            className={`w-full z-10 max-h-[400px] mt-auto ${
              off_nav ? "max-h-[400px]" : "max-h-full"
            }`}
            style={
              off_nav
                ? { marginBottom: "0px", marginTop: "0px" }
                : { marginBottom: "0px", marginTop: "-0px" }
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;