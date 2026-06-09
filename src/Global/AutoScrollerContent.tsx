"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

interface AutoScrollerContentProps {
  title: string;
  list: {
    title: string;
    description: string;
    img: string;
  }[];
}

const ASC: React.FC<AutoScrollerContentProps> = ({ title, list }) => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Auto switch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    startAutoSwitch();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startAutoSwitch = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % list.length);
    }, 3000);
  };

  const stopAutoSwitch = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleClick = (index: number) => {
    setActive(index);
    startAutoSwitch();
  };

  return (
    <section
      ref={ref}
      className={`px-4 sm:px-6 md:px-20 py-12 md:py-16 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* TITLE */}
      <h1 className="text-2xl heading-two sm:text-3xl md:text-4xl font-medium mb-8 md:mb-10 text-center">
        {title}
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start bg-[#FFF3F3] p-4 sm:p-6 md:p-10 rounded-2xl"
        onMouseEnter={stopAutoSwitch}
        onMouseLeave={startAutoSwitch}
      >
        {/* ========= LEFT LIST ========= */}

        {/* MOBILE → horizontal scroll */}
        <div className="md:hidden flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {list.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition ${
                active === index
                  ? "bg-[#D9BEFF]"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* DESKTOP LIST */}
        <div className="hidden md:block bg-gray-100 rounded-xl shadow p-4 space-y-4 h-full">
          {list.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`p-4 cursor-pointer transition-all rounded-lg ${
                active === index
                  ? "bg-[#D9BEFF]"
                  : "hover:bg-gray-200"
              }`}
            >
              <h2 className="text-xl font-medium">{item.title}</h2>
            </div>
          ))}
        </div>

        {/* ========= RIGHT CONTENT ========= */}
        <div className="rounded-xl">
          <h2 className="text-xl sm:text-2xl font-medium">
            {list[active].title}
          </h2>

          <p className="mt-3 sm:mt-4 text-sm md:text-xl sm:text-base text-gray-600 leading-relaxed">
            {list[active].description}
          </p>

          <Image
            src={list[active].img}
            alt={list[active].title}
            width={500}
            height={400}
            className="
              mt-5
              w-full
              object-contain
              rounded-lg
            "
          />
        </div>
      </div>
    </section>
  );
};

export default ASC;