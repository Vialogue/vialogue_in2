"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* ================= DATA ================= */

export const visionData = [
  {
    id: 1,
    title: "Our Vision",
    description:
      "To build a platform that enables enterprises, startups, and fast-growing brands to communicate effortlessly at scale with enterprise-grade reliability.",
    image: "/imgs/bb1.png",
    gradient: "from-purple-200 to-pink-200",
    isLarge: true,
  },
  {
    id: 2,
    title: "Innovation-Driven",
    description:
      "Continuously evolving our platform to leverage emerging technologies and customer preferences.",
    image: "/imgs/bb2.svg",
    gradient: "from-gray-100 to-gray-200",
  },
  {
    id: 3,
    title: "Reliability-First",
    description:
      "Building infrastructure you can trust for your most important customer communications.",
    image: "/imgs/bb3.svg",
    gradient: "from-purple-200 to-indigo-200",
  },
  {
    id: 4,
    title: "Customer-Obsessed",
    description:
      "Your success metrics are our success metrics — we’re partners in your growth journey.",
    image: "/imgs/bb4.svg",
    gradient: "from-rose-200 to-orange-200",
  },
  {
    id: 5,
    title: "Simplicity by Design",
    description:
      "Making powerful technology intuitive and easy to implement.",
    image: "/imgs/bb5.svg",
    gradient: "from-yellow-200 to-amber-200",
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
  hidden: { opacity: 0, y: 32, scale: 0.96 },
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

export default function GuidedByVision() {
  return (
    <section className="bg-gray-100 py-16 sm:py-18 px-4 sm:px-10 lg:px-40">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* ================= HEADING ================= */}
        <motion.h2
          variants={card}
          className="
            text-center
            text-2xl sm:text-3xl lg:text-4xl
            font-medium text-gray-900
            mb-12
          "
        >
          Guided by vision. Grounded in values.
        </motion.h2>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {visionData.map((item) => (
            <motion.div
              key={item.id}
              variants={card}
              whileHover={{ y: -4 }}
              className={`
                rounded-2xl
                p-6 sm:p-7
                bg-gradient-to-br ${item.gradient}
                transition-shadow duration-300
                hover:shadow-lg
                ${item.isLarge ? "lg:row-span-2" : ""}
              `}
            >
              <div className="flex flex-col justify-between h-full gap-4">
                {/* IMAGE */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.isLarge ? 400 : 44}
                  height={item.isLarge ? 72 : 44}
                />

                {/* TEXT */}
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
