"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const brand = [
  "brand_1.png",
  "brand_2.png",
  "brand_3.png",
  "brand_4.png",
  "brand_5.png",
  "brand_7.png",
  "brand_8.png",
];

const brands = [...brand, ...brand, ...brand, ...brand];

const ScrollingBrandsSection: React.FC = () => {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!rowRef.current || isMobile) return;

    const width = rowRef.current.scrollWidth / 2;

    gsap.set(rowRef.current, {
      x: 0,
    });

    gsap.to(rowRef.current, {
      x: -width,
      duration: 28,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % width),
      },
    });
  }, [isMobile]);

  return (
    <section className="py-16 sm:py-20 bg-[#f8fafc] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            Trusted by Leading Brands
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Powering customer engagement and enterprise communication at scale.
          </p>
        </div>

        {/* Desktop Infinite Scroll */}
        {!isMobile && (
          <div className="relative">

            <div
              ref={rowRef}
              className="flex gap-6 w-max"
            >
              {[...brands, ...brands].map((item, i) => (
                <div
                  key={i}
                  className="w-32 h-32 flex items-center justify-center rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0"
                >
                  <Image
                    src={`/imgs/${item}`}
                    width={90}
                    height={90}
                    alt={item}
                    className="object-cover w-full h-full rounded-xl p-4"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Grid */}
        {isMobile && (
          <div className="grid grid-cols-2 gap-4">
            {brand.map((item, i) => (
              <div
                key={i}
                className="w-full h-28 flex items-center justify-center rounded-2xl bg-white border border-gray-100 shadow-sm"
              >
                <Image
                  src={`/imgs/${item}`}
                  width={80}
                  height={80}
                  alt={item}
                  className="object-cover w-full h-full rounded-xl p-4"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ScrollingBrandsSection;