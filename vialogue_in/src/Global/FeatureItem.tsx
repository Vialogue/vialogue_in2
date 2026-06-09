"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

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
      cardsRef.current.forEach((card) => {
        if (!card) return;

        const img = card.querySelector(".card-img");
        const title = card.querySelector(".card-title");
        const desc = card.querySelector(".card-desc");

        if (!title || !desc) return;

        const split = new SplitType(desc as HTMLElement, { types: "words" });

        gsap.set(img, { opacity: 0, y: 40 });
        gsap.set(title, { opacity: 0, y: 20 });
        gsap.set(split.words, { opacity: 0, y: 10 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
          onComplete: () => split.revert(),
        });

        tl.to(img, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        })
          .to(
            title,
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.25"
          )
          .to(
            split.words,
            {
              opacity: 1,
              y: 0,
              stagger: 0.015,
              duration: 0.25,
              ease: "power2.out",
            },
            "-=0.2"
          );
      });
    });

    return () => ctx.revert();
  }, []);

  const gridCols =
    columns === 4
      ? "md:grid-cols-4"
      : columns === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-3";

  return (
    <section className="px-4 md:px-40 py-16">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-xl md:text-4xl font-medium heading-two">{title}</h1>

        {description && (
          <p className="mt-4 text-lg md:text-xl text-gray-600 subheading" dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>

      {/* GRID */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-8`}
      >
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className="bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 will-change-transform"
          >
            <Image
              src={item.img}
              alt={item.title}
              className="card-img w-full h-fit rounded-xl"
              width={400}
              height={300}
            />

            <div className="p-6">
              <h2 className="card-title text-xl md:text-xl font-semibold leading-tight mb-2">
                {item.title}
              </h2>

              <p className="card-desc text-gray-600 leading-tight text-sm" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedFeatureGrid;