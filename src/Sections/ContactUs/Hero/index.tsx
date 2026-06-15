'use client';

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import AnimatedDivider from "@/Components/AnimatedDivider";

const ContactHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      title,
      { autoAlpha: 0, y: 32 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        clearProps: "opacity,visibility,transform",
      }
    )
      .from(
        subtitle,
        {
          opacity: 0,
          y: 16,
          duration: 0.6,
          clearProps: "opacity,transform",
        },
        "-=0.3"
      );

    return () => {
      tl.kill();
      gsap.set([title, subtitle], {
        clearProps: "opacity,visibility,transform",
      });
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-fit w-full py-16 sm:py-24 px-4 sm:px-20 lg:px-40 flex justify-center overflow-hidden bg-transparent text-slate-800"
    >
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      {/* Visual background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="flex flex-col items-center text-center max-w-3xl relative z-10">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight uppercase"
        >
          <span className="text-gradient">Get In Touch</span>
        </h1>

        <div className="my-6 flex justify-center w-full">
          <AnimatedDivider />
        </div>

        <p
          ref={subtitleRef}
          className="text-base sm:text-lg text-slate-600 leading-relaxed font-light"
        >
          Connect with our experts to design the right solution for your business - from pricing and compliance to AI Agent setup tailored to your use case.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
