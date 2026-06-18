"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface FeatureItem {
  title: string;
  desc: string;
  img: string;
}

interface Props {
  title: string;
  description?: string;
  items: FeatureItem[];
  columns?: number;
}

const AnimatedFeatureGrid: React.FC<Props> = ({
  title,
  description,
  items,
  columns = 3,
}) => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(card, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            delay: (index % columns) * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, [columns]);

  const gridCols =
    columns === 4
      ? "md:grid-cols-4"
      : columns === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-3";

  return (
    <section className="px-4 bg-[#FDF7FF] md:px-40 py-24 relative z-10">
      <div className="container mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">Platform Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 heading-two">{title}</h1>
          {description && (
            <p className="text-lg text-slate-600 subheading" dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>

        {/* GRID */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-6`}>
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="glass-card p-6 rounded-2xl border border-slate-200/60 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300 group bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.1)]"
            >
              <div className="text-white p-3 rounded-xl bg-gradient-to-br from-[#7C3AED] to-purple-400 shadow-md mb-5 group-hover:scale-110 transition-transform">
                <Layers size={20} />
              </div>
              <h3 className="card-title text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="card-desc text-sm text-slate-600 leading-relaxed flex-1 font-medium" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedFeatureGrid;