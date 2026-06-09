"use client";

import React, { useEffect, useRef } from "react";
import { OverviewData } from "./data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  data: OverviewData;
  white?: boolean;
}

const GlobalOverviewRev: React.FC<Props> = ({ data, white }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const pointsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      /* CONTENT */
      tl.from(contentRef.current, {
        opacity: 0,
        x: -60,
        duration: 0.7,
        ease: "power3.out",
      });

      /* IMAGE */
      tl.from(
        imageRef.current,
        {
          opacity: 0,
          x: 60,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.5"
      );

      /* POINTS STAGGER */
      tl.from(
        pointsRef.current,
        {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );

    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full">
      <div className={`md:px-40 py-16 px-4 ${white ? "bg-white" : "bg-gray-100 sm:bg-gray-50"}`}>

        {/* BADGE */}
        {/* {data.badge && (
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="w-14 h-[1px] bg-purple-300" />
            <span className="text-purple-600 text-sm font-medium tracking-wide">
              {data.badge}
            </span>
            <div className="w-14 h-[1px] bg-purple-300" />
          </div>
        )} */}

        <h2 className="text-3xl text-center md:text-5xl font-medium leading-tight heading-two text-black mb-10">
              {data.title}
            </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div
            ref={contentRef}
            className="col-span-8 sm:col-span-4"
          >

            <p className="text-gray-700 text-xl leading-relaxed mb-5 paragraph">
              {data.description}
            </p>

            {data.bold !== "null" && (
              <p className="font-medium text-xl mb-5">{data.bold}</p>
            )}

            <ul className="space-y-4 mt-10">
              {data.points.map((point, index) => (
                <li
                  key={index}
                  ref={(el) => {pointsRef.current[index] = el}}
                  className="text-lg flex gap-2 items-center sm:text-xl text-left font-medium leading-snug px-0 capitalize"
                >
                  {/* <ArrowRight className="min-w-5 min-h-5 text-purple-600" /> */}
                  <ShieldCheck className="inline-block min-w-5 h-5 text-[#6a00ff]" /> {point}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div
            ref={imageRef}
            className="flex justify-center col-span-8 sm:col-span-5"
          >
            <img
              src={data.image}
              alt={data.title}
              className="object-cover w-full h-50 sm:h-100 rounded-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalOverviewRev;