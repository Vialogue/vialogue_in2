'use client';

import React from "react";
import { motion, Variants } from "framer-motion";

const useCases = [
  {
    title: "Transactional Messaging",
    points: [
      "OTPs & authentication",
      "Order & payment confirmations",
      "System alerts",
    ],
    image: "/usecase-1.svg",
  },
  {
    title: "Customer Notifications",
    points: [
      "Appointment reminders",
      "Service updates",
      "Delivery notifications",
    ],
    image: "/usecase-2.svg",
  },
  {
    title: "Two-Way Conversations",
    points: [
      "Enable replies",
      "Customer support via SMS",
      "Feedback collection",
    ],
    image: "/usecase-3.svg",
  },
  {
    title: "Automated Workflows",
    points: [
      "Trigger SMS via APIs",
      "Event-based messaging",
      "CRM & backend integrations",
    ],
    image: "/usecase-4.svg",
  },
  {
    title: "Smarter Product Discovery",
    description:
      "Let users search naturally with phrases like “red shoes under 350” or “vegan skincare”. Quick, intuitive, and Conversation-driven.",
    image: "/usecase-5.svg",
  },
];

/* ================= ANIMATIONS ================= */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const card: Variants = {
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

export default function KeyUseCases() {
  return (
    <section className="w-full mt-16 py-16 px-4 sm:px-10 bg-[radial-gradient(circle_at_center,#A855F766_0%,#F6E9FF_50%,#FFFFFF_60%)]">

      {/* ================= HEADING ================= */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">
          Key Use Cases
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          Built for real business scenarios
        </p>
      </motion.div>

      {/* ================= TOP 3 CARDS ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {useCases.slice(0, 3).map((item, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ y: -4 }}
            className="
              bg-white rounded-2xl border shadow-sm
              p-5 sm:p-6
              flex flex-col
              transition-shadow hover:shadow-lg
            "
          >
            <h3 className="text-base font-medium text-gray-900 mb-3">
              {item.title}
            </h3>

            <ul className="space-y-2 mb-4">
              {item.points?.map((point, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-600 flex items-start gap-2"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400" />
                  {point}
                </li>
              ))}
            </ul>

            {/* IMAGE */}
            <div className="mt-auto flex items-center justify-center h-[140px]">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[120px] w-auto object-contain select-none"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= BOTTOM 2 CARDS ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-6"
      >
        {useCases.slice(3).map((item, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ y: -4 }}
            className="
              bg-white rounded-2xl border shadow-sm
              p-5 sm:p-6
              flex flex-col
              transition-shadow hover:shadow-lg
            "
          >
            <h3 className="text-base font-medium text-gray-900 mb-3">
              {item.title}
            </h3>

            {item.points ? (
              <ul className="space-y-2 mb-4">
                {item.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 flex items-start gap-2"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>
            )}

            {/* IMAGE */}
            <div className="mt-auto flex items-center justify-center h-[160px]">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[140px] w-auto object-contain select-none"
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
        className="mt-12 flex justify-center"
      >
        <button className="
          bg-black text-white
         px-4 py-2.5
          rounded-lg
          text-sm font-medium
          hover:opacity-90
          transition
        ">
          Start The Process Now
        </button>
      </motion.div>
    </section>
  );
}
