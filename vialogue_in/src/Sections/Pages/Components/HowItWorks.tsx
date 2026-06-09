"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

const steps = [
  {
    title: "Your application triggers an SMS using Vialogue APIs",
    description:
      "Your backend securely calls Vialogue APIs to initiate an SMS event in real time.",
    image: "/how-it-works.svg",
  },
  {
    title: "Message is routed through optimized delivery paths",
    description:
      "Our system intelligently selects the fastest and most reliable delivery routes.",
    image: "/how-it-works.svg",
  },
  {
    title: "SMS reaches the customer instantly",
    description:
      "Messages are delivered within seconds, ensuring maximum visibility and engagement.",
    image: "/how-it-works.svg",
  },
  {
    title: "Delivery status & replies sync back to your system",
    description:
      "Delivery reports and replies are pushed back to your application automatically.",
    image: "/how-it-works.svg",
  },
];

/* ================= ANIMATIONS ================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full py-16 px-4 sm:px-10 bg-gray-100">
      {/* ================= HEADING ================= */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">
          How It Works
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          From your system to your customer in seconds
        </p>
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* ================= LEFT STEPS ================= */}
        <div>
          <ol className="space-y-3">
            {steps.map((step, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setActiveStep(index)}
                className={`
                  flex gap-3 cursor-pointer rounded-lg p-3 transition
                  ${
                    activeStep === index
                      ? "bg-white shadow border"
                      : "hover:bg-white/70"
                  }
                `}
              >
                <span className="font-medium text-gray-900">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <span className="text-sm text-gray-700">
                  {step.title}
                </span>
              </motion.li>
            ))}
          </ol>

          {/* ================= DESCRIPTION ================= */}
          <motion.p
            key={activeStep}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-5 text-sm text-gray-600 max-w-md"
          >
            {steps[activeStep].description}
          </motion.p>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="flex justify-center"
        >
          <div className="rounded-2xl bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-500 p-[2px]">
            <div className="bg-white rounded-2xl p-4 flex items-center justify-center h-[280px] sm:h-[320px]">
              <img
                src={steps[activeStep].image}
                alt="How it works step"
                className="max-h-[240px] w-auto object-contain select-none"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= CTA ================= */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="mt-12 flex justify-center"
      >
        <button className="bg-black text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition">
          Start The Process Now
        </button>
      </motion.div>
    </section>
  );
}
