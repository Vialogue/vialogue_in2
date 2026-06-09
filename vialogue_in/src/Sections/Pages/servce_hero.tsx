"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import hero_img from "../../../public/imgs/service.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import AnimatedDivider from "@/Components/AnimatedDivider";
import ButtonGlobal from "@/Components/InnerComponents/ButtonGlobal";
import ButtonOne from "@/Components/InnerComponents/ButtonOne";
import SectionSwitcher from "@/Global/sectionSwitch";

gsap.registerPlugin(ScrollTrigger);

const ServiceHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const titleSplit = new SplitType(titleRef.current, { types: "words" });
    const subtitleSplit = new SplitType(subtitleRef.current, {
      types: "words",
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 75%",
      },
    });

    tl.from(titleSplit.words, {
      opacity: 0,
      y: 22,
      duration: 0.6,
      stagger: 0.045,
    }).from(
      subtitleSplit.words,
      {
        opacity: 0,
        duration: 0.2,
        stagger: 0.012,
      },
      "-=0.25",
    );

    return () => {
      titleSplit.revert();
      subtitleSplit.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="w-full pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-10 lg:px-40"
    >
      <div className="mx-auto flex flex-col lg:flex-row gap-10 mt-1 lg:gap-0 items-start">
        {/* ================= LEFT ================= */}
        <div className="flex-1 space-y-4">
          <h1
            ref={titleRef}
            className="
              text-white heading font-medium leading-tight
              text-[clamp(1.7rem,3.2vw,2.8rem)]
            "
          >
            Compliant, Reliable SMS API for Verification & Customer Engagement
          </h1>

          <AnimatedDivider />

          <p
            ref={subtitleRef}
            className="
              text-white/80
              text-sm sm:text-base lg:text-lg
              leading-relaxed
              subheading
            "
          >
            <b>Engage Your Customers at Every Step of Their Journey</b>
            <br />An all-in-one
            messaging platform by Vialogue for OTPs, alerts & potifications,
            promotional and loyalty messaging-built for scale, security, and
            performance.
          </p>
          <div className="flex mt-8 gap-2 flex-wrap">
            <ButtonGlobal text="Start Free Trial" property={true} />
            <ButtonGlobal text="Talk to an Expert" property={false} />
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex-1 flex flex-col justify-center">
          <SectionSwitcher />
          <Image
            src={hero_img}
            alt="service hero"
            priority
            className="
              w-full
            "
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
