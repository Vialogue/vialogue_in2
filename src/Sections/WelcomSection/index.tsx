"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MorphPattern from "./morphpattern";
import StaticPattern from "./morphPatternMobile";
import { useRouter } from "next/router";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const data = [
  {
    title: "Agent Assist",
    description:
      "AI-powered suggestions that help agents respond faster and handle conversations more efficiently.",
    type: 1 as const,
    img: "./imgs/hm/img1.png",
    link: "/agent",
  },
  {
    title: "Scalable API",
    description:
      "Connect seamlessly with CRMs and automation tools to sync customer data and workflows.",
    type: 2 as const,
    img: "./imgs/hm/img2.png",
    link: "/third",
  },
  {
    title: "Bots",
    description:
      "Create, schedule and automate messaging campaigns across SMS, WhatsApp and other channels.",
    type: 3 as const,
    img: "./imgs/hm/img3.png",
    link: "/campaign",
  },
  {
    title: "Conversation Tools",
    description:
      "Track leads, monitor customer interactions and optimize campaigns to improve Conversations.",
    type: 4 as const,
    img: "./imgs/hm/img4.png",
    link: "/Conversation",
  },
];

export default function WelcomeSection() {
  const [active, setActive] = useState(0);
  const route = useRouter();

  return (
    <section className="bg-white py-16 px-0 md:px-0">
      <div className="mx-auto rounded-[36px] border-[#f0d8c8] sm:px-40">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl max-w-[700px] heading-two m-auto font-semibold text-[#0b1633]">
            Connect, automate and scale customer conversations across every
            channel from a single platform.
          </h2>

          {/* <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Connect, automate and scale customer conversations across every
            channel from a single platform.
          </p> */}
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center px-4 sm:px-0">
          {/* LEFT ACCORDION */}
          <div className="space-y-4">
            {data.map((item, index) => (
              <div
                key={index}
                className={`rounded-[22px] border transition-all duration-300 overflow-hidden cursor-pointer ${
                  active === index
                    ? "bg-white border-[#f0d8c8]"
                    : "bg-[#f7ecd8] border-[#f0d8c8]"
                }`}
                onClick={() => setActive(index)}
              >
                <div className="flex items-center justify-between px-4 py-5">
                  <div className="flex items-center gap-4">
                    <span className="text-md sm:text-xl font-bold sm:font-semibold text-[#0b1633]">
                      #{index + 1}
                    </span>

                    <h3 className="text-md font-semibold md:text-xl text-[#0b1633]">
                      {item.title}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      active === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {active === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="relative sm:hidden block w-full min-h-[150px] rounded-[30px] mb-5 bg-[#eef2ff] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.03 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Image src={item.img} width={100} height={100} alt="" className="w-full h-full" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                      <p className="text-gray-600 leading-relaxed max-w-md">
                        {item.description}
                      </p>

                      <button
                        className="mt-5 cursor-pointer text-orange-500 font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          route.push(item.link);
                        }}
                      >
                        Explore Feature →
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative hidden sm:block min-h-[500px] rounded-[30px] bg-white overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image src={data[active].img} width={100} height={100} className="w-full h-full object-contain" alt="" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
