'use client';

import React from "react";
import { motion, Variants } from "framer-motion";

/* ================= ANIMATIONS ================= */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const WhyVialogue = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUp}
            className="
              font-medium text-[#0F0F1A]
              text-[clamp(1.8rem,3vw,2.6rem)]
            "
          >
            Why Vialogue
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-3 text-sm sm:text-base font-medium text-[#0F0F1A]"
          >
            Messaging infrastructure you can depend on
          </motion.p>

          <motion.ul
            variants={container}
            className="mt-6 space-y-3 text-sm text-[#4B4B63]"
          >
            {[
              "Built for business-critical communication",
              "Optimized for reliability & performance",
              "Easy to integrate with existing systems",
              "Designed to scale as your messaging grows",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                className="flex gap-2"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm text-[#6B6B80]"
          >
            No noise. No gimmicks. Just infrastructure that works.
          </motion.p>
        </motion.div>

        {/* ================= RIGHT VISUAL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end"
        >
          {/* IMAGE CONTAINER */}
          <div className="flex items-center justify-center h-[300px] sm:h-[340px] w-full max-w-[520px]">
            <img
              src="/word-map.svg"
              alt="Global coverage"
              className="max-h-[300px] w-auto object-contain select-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyVialogue;