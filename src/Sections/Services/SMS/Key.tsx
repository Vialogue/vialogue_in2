"use client";

import React from "react";
import { motion, easeIn } from "framer-motion";

const features = [
  {
    title: "Secure OTP & Authentication",
    description:
      "Fast and reliable OTP delivery with built-in abuse protection and rate limiting.",
    image: "/services/sms/features/img1.png",
    bg: "bg-purple-100",
    span: "row-span-2 col-span-1",
    size: "w-[50%] sm:w-[70%] m-auto",
    mst: "flex flex-col gap-10",
  },
  {
    title: "High-Scale Messaging Infrastructure",
    description:
      "Designed to handle peak traffic and large volumes with consistent performance.",
    image: "/services/sms/features/img2.png",
    bg: "bg-gray-100",
    span: "col-span-1",
    size: "h-16 w-16",
    mst: "flex gap-10 items-center flex-row-reverse",
  },
  {
    title: "Reliable Message Continuity",
    description:
      "Automatic retries and failover ensure messages reach users even during network issues.",
    image: "/services/sms/features/img3.png",
    bg: "bg-indigo-100",
    span: "col-span-1",
    size: "h-16 w-16",
    mst: "flex gap-10 items-center flex-row-reverse",
  },
  {
    title: "Unified SMS Visibility",
    description:
      "Single dashboard to monitor delivery status, engagement, and usage across all SMS traffic.",
    image: "/services/sms/features/img4.png",
    bg: "bg-rose-100",
    span: "col-span-1",
    size: "h-16 w-16",
    mst: "flex gap-10 items-center flex-row-reverse",
  },
  {
    title: "Developer-First Integration",
    description:
      "Simple REST APIs and SMPP connectivity for quick, secure application integration.",
    image: "/services/sms/features/img5.png",
    bg: "bg-yellow-100",
    span: "col-span-1",
    size: "h-16 w-16",
    mst: "flex gap-10 items-center flex-row-reverse",
  },
  {
    title: "Automatic Failover Logic",
    description:
      "Retries failed SMS across alternate routes for maximum delivery assurance.",
    image: "/services/sms/features/img6.png",
    bg: "bg-pink-100",
    span: "col-span-1",
    size: "h-16 w-16",
    mst: "flex gap-10 items-center flex-row-reverse",
  },
  {
    title: "Click & Conversation Tracking",
    description:
      "Track clicks, response time, and engagement directly from SMS campaigns.",
    image: "/services/sms/features/img7.png",
    bg: "bg-violet-100",
    span: "col-span-1",
    size: "h-16 w-16",
    mst: "flex gap-10 items-center flex-row-reverse",
  },
  {
    title: "Real-Time Cost Analytics",
    description: "Monitor cost per SMS, route-wise spend, and campaign ROI.",
    image: "/services/sms/features/img8.png",
    bg: "bg-blue-100",
    span: "col-span-1",
    size: "h-16 w-16",
    mst: "flex gap-10 items-center flex-row-reverse",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeIn,
    },
  },
};

const KeyFeatures = () => {
  return (
    <section className="py-16 px-2 md:px-40 bg-white text-left">
      <div className="mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-xl heading-two md:text-4xl font-medium text-center sm:mb-16 mb-10"
        >
          Key SMS Platform Features
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-2"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={card}
              className={`${feature.bg} ${feature.span} rounded-2xl py-10 px-10 sm:py-4 sm:px-8 hover:brightness-90 transition duration-300`}
            >
              <div className="mb-10 sm:mb-4">
                <div className={feature.mst}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`${feature.size} object-contain`}
                  />

                  <h3 className="text-xl md:text-xl font-medium mb-3">
                    {feature.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 col-span-2 text-sm leading-5">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default KeyFeatures;