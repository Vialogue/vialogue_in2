"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  "Customer Notifications",
  "RESTful WhatsApp Messaging APIs",
  "High-Throughput Messaging",
  "Media Message APIs",
  "Interactive Messages (buttons, quick replies, CTA)",
  "Template Status Webhooks",
  "Journey & Flow Automation",
];

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useLayoutEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, items.length);

    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            scale: 0.9,
            opacity: 0.4,
            filter: "blur(4px)",
          },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-16 md:px-40">
      <h1 className="text-4xl text-center font-medium mb-10 heading-two">
            Key Capabilities
          </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <ul className="space-y-0 sm:space-y-0 text-2xl font-medium">
            {items.map((text, i) => (
              <li
                key={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className={`${i%2===1 ? "bg-white" : "bg-white"} flex px-10 py-4 sm:py-3 sm:px-4 sm:bg-non items-center justify-center sm:justify-start gap-4 transition-all`}
              >
                {/* <ArrowRight className="w-5 h-5 rounded-full text-purple-500 shadow-lg hidden sm:block" /> */}
                <ShieldCheck className="inline-block min-w-5 h-5 text-[#6a00ff]" />
                <span className="paragraph px-2">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="w-full">
          <Image
            src="/services/wapp/features.png"
            alt="Features"
            width={700}
            height={500}
            className="rounded-xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;