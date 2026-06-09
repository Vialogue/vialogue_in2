"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import hero_img from "../../../../public/services/wapp/whatsapp_hero.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import AnimatedDivider from "@/Components/AnimatedDivider";
import ButtonGlobal from "@/Components/InnerComponents/ButtonGlobal";
import SectionSwitcher from "@/Global/sectionSwitch";

gsap.registerPlugin(ScrollTrigger);

const HeroWhatsapp: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const titleSplit = new SplitType(titleRef.current, { types: "words" });
    const subtitleSplit = new SplitType(subtitleRef.current, {
      types: "chars",
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
      subtitleSplit.chars,
      {
        opacity: 0,
        duration: 0.02,
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
      className="w-full pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* ================= LEFT ================= */}
        <div className="flex-1 space-y-6">
          <h1
            ref={titleRef}
            className="
              text-white font-medium leading-tight
              text-[clamp(1.7rem,3.2vw,2.8rem)] heading
            "
          >
            Boost Customer Engagement with WhatsApp Business
          </h1>

          <AnimatedDivider />

          <p
            ref={subtitleRef}
            className="
              text-white/80
              text-sm sm:text-base lg:text-lg
              leading-relaxed
              max-w-xl subheading
            "
          >
            Send secure OTPs, transactional alerts, customer support messages,
            and promotional updates on the world’s most trusted messaging
            platform.
          </p>
          <br />
          <div className="flex gap-4 flex-wrap">
            <ButtonGlobal text="Get a Free Demo" property={true} />
            <ButtonGlobal text="Talk to an Expert" property={false} />
          </div>
          <br />
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
              max-w-[420px]
              lg:max-w-[1000px]
              select-none
            "
            width={1000}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroWhatsapp;
