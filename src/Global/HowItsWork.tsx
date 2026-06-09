"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { VoiceApiHighlight } from "./data";

interface HowItWorksProps {
  title: string;
  steps: VoiceApiHighlight[];
}

const HowItWorks: React.FC<HowItWorksProps> = ({ title, steps }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`px-6 bg-gray-100 md:px-40 py-16 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-2xl md:text-4xl font-medium text-center mb-16">
        {title}
      </h1>

      {/* ===== DESKTOP ===== */}
      {/* ========== DESKTOP DESIGN ========== */}
      <div className="hidden md:flex items-start justify-between relative gap-10">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center w-1/4 px-0">
            
            {/* 🔥 Animated Icon Box (FLOAT + PULSE) */}
            <motion.div
              animate={{
                y: [0, -6, 0],     // floating motion
                scale: [1, 1.05, 1] // subtle pulse
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
              className={`${step.color} w-16 h-16 rounded-xl mb-6 flex items-center justify-center`}
            >
              {<step.icon color="white" />}
            </motion.div>

            {/* Dotted line */}
            {i !== steps.length - 1 && (
              <div className="absolute top-8 left-0 right-0 h-[1px] border-t border-dashed border-gray-300 -z-10"></div>
            )}

            <h2 className="text-lg font-bold mb-2">{step.title}</h2>
            <p className="text-sm text-gray-600 leading-4">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ========== MOBILE DESIGN ========== */}
      <div className="md:hidden flex flex-col gap-10">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            
            {/* Slide-in animation for mobile */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${step.color} w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center`}
            >
              {<step.icon color="white" />}
            </motion.div>

            <div>
              <h2 className="text-lg font-medium">{step.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;