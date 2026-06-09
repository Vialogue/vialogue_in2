'use client';

import React from "react";
import { motion, Variants } from "framer-motion";

const cards = [
  {
    title: "Reduce Operational Costs",
    description:
      "Automate routine customer questions and cut help-desk workload by up to 40%.",
    bg: "bg-[#FFF1C9]",
    image: "/image-1.svg",
  },
  {
    title: "Boost Conversation Rates",
    description:
      "Qualify visitors in real time and guide hot leads straight to checkout or a meeting.",
    bg: "bg-[#C6A8FF]",
    image: "/image-2.svg",
  },
  {
    title: "Save Hours Daily",
    description:
      "Auto-answer FAQs, capture leads, schedule calls—free your team for high-value work.",
    bg: "bg-[#F1D5FF]",
    image: "/image-3.svg",
  },
];

/* ================= ANIMATIONS ================= */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AIAgentsSection() {
  return (
    <section className="w-full py-14 sm:py-16 px-4 sm:px-10 bg-white">

      {/* ================= HEADING ================= */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight">
          24/7 AI agents that automate <br className="hidden md:block" />
          marketing for you
        </h2>
      </motion.div>

      {/* ================= CARDS ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ y: -4 }}
            className={`
              ${card.bg}
              rounded-2xl
              p-5 sm:p-6
              flex flex-col
              text-center
              transition-shadow duration-300
              hover:shadow-lg
            `}
          >
            {/* TEXT */}
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
              {card.title}
            </h3>

            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              {card.description}
            </p>

            {/* IMAGE CONTAINER */}
            <div className="mt-auto flex justify-center items-center h-[160px]">
              <img
                src={card.image}
                alt={card.title}
                className="
                  max-h-[140px]
                  w-auto
                  object-contain
                  mx-auto
                  select-none
                "
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= CTA ================= */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="mt-10 flex justify-center"
      >
        <button
          className="
            bg-black text-white
           px-4 py-2.5
            rounded-lg
            text-sm font-medium
            hover:opacity-90
            transition
          "
        >
          Let’s Try Today!
        </button>
      </motion.div>
    </section>
  );
}
