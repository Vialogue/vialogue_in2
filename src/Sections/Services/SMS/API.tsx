"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const API: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const rightHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* SPLIT TEXT */
      const headingSplit = new SplitType(headingRef.current!, {
        types: "words",
      });
      const descSplit = new SplitType(descRef.current!, { types: "words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse", // repeat animation
        },
      });

      /* TOP HEADING WORD REVEAL */
      tl.from(headingSplit.words, {
        opacity: 0,
        y: 30,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
      });

      /* IMAGE SLIDE FROM LEFT */
      tl.from(
        imgRef.current,
        {
          x: -120,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      );

      /* RIGHT HEADING POP */
      tl.from(
        rightHeadingRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.4",
      );

      /* DESCRIPTION WORD REVEAL */
      tl.from(
        descSplit.words,
        {
          opacity: 0,
          y: 12,
          stagger: 0.02,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.3",
      );

      /* TABS STAGGER REVEAL */
      tl.fromTo(
        tabsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.2",
      );

      return () => {
        headingSplit.revert();
        descSplit.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="px-6 md:px-40 py-16">
      {/* Tag line */}
      {/* <div className="flex gap-2 text-md font-medium text-[#8C41F5] items-center mb-4 justify-center">
        <div className="h-[0.5px] w-10 bg-[#8C41F5]"></div>
        API INFRA
        <div className="h-[0.5px] w-10 bg-[#8C41F5]"></div>
      </div> */}

      {/* Heading */}
      <h1
        ref={headingRef}
        className="text-2xl md:text-4xl font-medium max-w-3xl mb-16 m-auto text-center heading-two"
      >
        Scalable SMS API Infrastructure for Businesses
      </h1>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Image */}
        <div className="flex justify-space">
          <img
            ref={imgRef}
            src="/services/sms/api.png"
            alt="API Infrastructure"
            className="rounded-2xl h-[320px] sm:max-h-[500px] sm:h-[450px] m-auto mb-12 sm:mb-0 object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex sm:py-16 flex-col rounded-xl h-fit gap-10">
          {/* <h1
            ref={rightHeadingRef}
            className="text-2xl md:text-4xl heading-two font-medium mb-3"
          >
            Reliable, Secure & Scalable SMS APIs
          </h1> */}

          <p
            ref={descRef}
            className="text-gray-700 paragraph mb:text-2xl leading-relaxed text-justify"
          >
            Vialogue offers robust SMS API infrastructure designed to help
            businesses send transactional alerts, OTPs, and promotional messages
            at scale. Built for high performance and reliability, our platform
            ensures fast message delivery, compliance-ready workflows, and
            seamless integration across applications.
          </p>

          {/* Tabs */}
          <div className="flex mt-auto justify-center sm:justify-start flex-wrap gap-3">
            {[
              "Overview",
              "Core Features",
              "Architecture",
              "REST APIs",
              "Webhooks",
              "SDKs",
              "Scalability",
              "Security",
              "Performance",
              "Documentation",
            ].map((tab, index) => (
              <button
                key={index}
                ref={(el) => {
                  tabsRef.current[index] = el;
                }}
                className="px-4 py-2 text-sm md:text-base font-medium rounded-full
                bg-gray-100 text-gray-700
                hover:bg-[#6a00ff] hover:text-white
                transition-all duration-300"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default API;
