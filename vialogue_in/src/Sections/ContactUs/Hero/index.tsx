'use client';

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import hero_img from "../../../../public/contact_hero.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import AnimatedDivider from "@/Components/AnimatedDivider";

gsap.registerPlugin(ScrollTrigger);

const ContactHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const titleSplit = new SplitType(titleRef.current, { types: "words" });
    const subtitleSplit = new SplitType(subtitleRef.current, {
      types: "words",
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(titleSplit.words, {
      opacity: 0,
      y: 32,
      duration: 0.8,
      stagger: 0.06,
    })
      .from(
        subtitleSplit.words,
        {
          opacity: 0,
          duration: 0.02,
          stagger: 0.015,
        },
        "-=0.3"
      )
      .from(
        buttonRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.2"
      )

    if (badgesRef.current) {
      const badges = badgesRef.current.children;

      gsap.from(badges, {
        opacity: 0,
        x: (i) =>
          badges[i].classList.contains("badge-right") ? 40 : -40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          start: "top 70%",
        },
      });

      gsap.to(badges, {
        y: "-=8",
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random",
        },
      });
    }

    return () => {
      titleSplit.revert();
      subtitleSplit.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-fit w-full pt-0 pb-0 lg:pt-0 px-4 sm:px-40"
    >
      <div className="flex flex-col mt-0 lg:flex-row gap-2 sm:gap-12 lg:gap-20 items-center">
        
        <div className="flex-1 grid gap-6 lg:gap-8">
          <h1
            ref={titleRef}
            className="text-3xl text-center sm:text-left sm:text-4xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.15]"
          >
            Get In Touch
          </h1>

          <AnimatedDivider />

          <p
            ref={subtitleRef}
            className="text-sm text-center sm:text-left sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl"
          >
            Connect with our experts to design the right solution for your business - from pricing and compliance to AI Agent setup tailored to your use case.
          </p>
        </div>

        <div className="flex-1 flex items-center content-center justify-center m-0 sm:m-10 my-16 mb-0 sm:my-0 sm:mb-0 relative">
          <Image
            src={hero_img}
            alt="hero"
            priority
            className="w-[100%] select-none"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;