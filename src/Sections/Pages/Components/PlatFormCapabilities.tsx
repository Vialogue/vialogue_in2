"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PlatformCapabilities() {
  return (
    <section className="w-full bg-[#F9F7FF] py-16 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADING ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#1F1F2E]">
            Platform Capabilities
          </h2>
          <p className="mt-2 text-sm sm:text-base font-medium text-[#9B6DFF]">
            Built for scale, performance, and automation
          </p>
        </motion.div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* ===== CARD 1 (FULL WIDTH) ===== */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 rounded-2xl bg-[#F3EEFF] p-6 sm:p-7 border-10 border-white"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-base sm:text-2xl font-medium text-[#1F1F2E]">
                  High-throughput SMS delivery
                </h3>
                <p className="mt-1.5 text-sm text-[#6B6B80]">
                  Monitor your inventory data in real time ⚡
                </p>
              </div>

              <div className="w-full md:w-[360px] h-[180px] bg-white rounded-xl overflow-hidden">
                <img
                  src="/capability-1.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* ===== CARD 2 ===== */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl bg-[#F3EEFF] p-6 border-10 border-white"
          >
            <h3 className="text-base sm:text-2xl font-medium text-[#1F1F2E]">
              REST APIs for easy integration
            </h3>
            <p className="mt-1.5 text-sm text-[#6B6B80]">
              Forecast sales with AI and get restocking alerts 📈
            </p>

            <div className="mt-5 h-[160px] bg-white rounded-xl overflow-hidden">
              <img
                src="/capability-2.svg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* ===== CARD 3 ===== */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl bg-[#F3EEFF] p-6 border-10 border-white"
          >
            <h3 className="text-base sm:text-2xl font-medium text-[#1F1F2E]">
              Save time on PSupport for one-way & two-way SMS
            </h3>
            <p className="mt-1.5 text-sm text-[#6B6B80]">
              Create, manage, and track purchase orders with your team 🤝
            </p>

            <div className="mt-5 h-[160px] bg-white rounded-xl overflow-hidden">
              <img
                src="/capability-3.svg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* ===== CARD 4 (FULL WIDTH) ===== */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 rounded-2xl bg-[#F3EEFF] p-6 sm:p-7 border-10 border-white"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-[360px] h-[180px] bg-white rounded-xl overflow-hidden">
                <img
                  src="/capability-4.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 md:text-right">
                <h3 className="text-base sm:text-2xl font-medium text-[#1F1F2E]">
                  Delivery reports & message status tracking
                </h3>
                <p className="mt-1.5 text-sm text-[#6B6B80]">
                  Request PO financing directly within the app 💰
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
