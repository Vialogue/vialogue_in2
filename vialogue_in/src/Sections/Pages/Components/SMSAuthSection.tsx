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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const SMSAuthSection = () => {
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
              font-medium text-gray-900 leading-tight
              text-[clamp(1.7rem,3.2vw,2.8rem)]
            "
          >
            The SMS platform for <br />
            reliable authentication <br />
            & verification
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-sm sm:text-base text-gray-600 max-w-md"
          >
            Secure your business with instant OTPs and 2FA, preventing SMS
            pumping fraud while reducing authentication messaging costs.
          </motion.p>

          <motion.ul
            variants={container}
            className="mt-6 space-y-2 text-sm text-gray-700"
          >
            {[
              "High-Performance SMS",
              "Owns the Messaging Infrastructure",
              "Smart Routing",
              "Global Scale & Local Compliance",
              "Enterprise-Grade Reliability",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                className="flex items-start gap-2"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-500" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end"
        >
          {/* IMAGE CONTAINER */}
          <div className="flex items-center justify-center">
            <img
              src="/big-auth-image.svg"
              alt="SMS authentication preview"
              className="w-auto object-contain select-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SMSAuthSection;
