"use client";

import { useRef, useState } from "react";
import { motion, Variants} from "framer-motion";
import {
  BarChart3,
  Headset,
  Clock,
  Network,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Increase Conversation",
    description: "Engage high-intent users at the right moment.",
    icon: <BarChart3 size={18} />,
    path: "M300 300 L180 300 L180 160 L40 160",
  },
  {
    title: "Reduce Support Load",
    description: "Automate repetitive customer conversations.",
    icon: <Headset size={18} />,
    path: "M300 300 L420 300 L420 130 L520 130",
  },
  {
    title: "Save Team Time",
    description: "Handle common queries without manual effort.",
    icon: <Clock size={18} />,
    path: "M300 300 L300 450 L350 450",
  },
  {
    title: "Centralized Inbox",
    description: "Manage all channels in one workspace.",
    icon: <Network size={18} />,
    path: "M300 300 L430 300 L430 320 L560 320",
  },
  {
    title: "Better Experience",
    description: "Deliver consistent, reliable responses.",
    icon: <MessageSquare size={18} />,
    path: "M300 300 L160 300 L160 340 L60 340",
  },
];

/* ================= ANIMATION VARIANTS ================= */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ConnectedFeatures() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  return (
    <section
      ref={containerRef}
      className="relative bg-white overflow-hidden"
      onMouseMove={(e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="relative py-12 px-4 md:px-16 max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-4xl sm:text-center font-medium sm:leading-10 tracking-tight text-gray-900 max-w-full sm:max-w-1/2 text-center m-auto">
            What we do
          </h2>
          <p className="mt-3 text-gray-600 text-base subheading">
            Reach high-intent users through smart placement, precision messaging,
            and perfect timing
          </p>
        </motion.div>

        {/* ================= GRID BACKGROUND ================= */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  rgba(139,92,246,0.04) 0px,
                  rgba(139,92,246,0.04) 1px,
                  transparent 1px,
                  transparent 14px
                ),
                repeating-linear-gradient(
                  90deg,
                  rgba(139,92,246,0.04) 0px,
                  rgba(139,92,246,0.04) 1px,
                  transparent 1px,
                  transparent 14px
                )
              `,
            }}
          />
        </div>

        {/* ================= IRIS HOVER ================= */}
        <div
          className="pointer-events-none absolute inset-0 hidden md:block transition-opacity duration-300"
          style={{
            opacity: active ? 1 : 0,
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(139,92,246,0.08) 0px,
                rgba(139,92,246,0.08) 1px,
                transparent 1px,
                transparent 14px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(139,92,246,0.08) 0px,
                rgba(139,92,246,0.08) 1px,
                transparent 1px,
                transparent 14px
              )
            `,
            maskImage: `radial-gradient(
              500px at ${pos.x}px ${pos.y}px,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.9) 35%,
              transparent 70%
            )`,
            WebkitMaskImage: `radial-gradient(
              500px at ${pos.x}px ${pos.y}px,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.9) 35%,
              transparent 70%
            )`,
          }}
        />

        {/* ================= SVG LINES ================= */}
        <svg
          viewBox="0 -60 600 600"
          className="absolute inset-0 hidden md:block w-full h-full pointer-events-none"
        >
          {features.map((f, i) => (
            <g key={i}>
              <path d={f.path} fill="none" stroke="#DDD6FE" strokeWidth="1.5" />
              <circle r="3" fill="#8B5CF6">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path={f.path}
                  begin={`${i * 0.6}s`}
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* ================= MOBILE STACK ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative flex flex-col gap-5 md:hidden"
        >
          {features.map((f, i) => (
            <motion.div variants={item} key={i}>
              <FeatureCard {...f} />
            </motion.div>
          ))}
        </motion.div>

        {/* ================= DESKTOP GRID ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative hidden md:grid grid-cols-3 gap-y-16 gap-x-10 place-items-center"
        >
          <motion.div variants={item}><FeatureCard {...features[0]} /></motion.div>
          <div />
          <motion.div variants={item}><FeatureCard {...features[1]} /></motion.div>

          <motion.div variants={item}><FeatureCard {...features[2]} /></motion.div>
          <motion.div
            variants={item}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CenterLogo />
          </motion.div>
          <motion.div variants={item}><FeatureCard {...features[3]} /></motion.div>

          <div />
          <motion.div variants={item}><FeatureCard {...features[4]} /></motion.div>
          <div />
        </motion.div>
      </div>
    </section>
  );
}

/* ================= FEATURE CARD ================= */
function FeatureCard({ title, description, icon }: any) {
  return (
    <div className="
      w-full md:w-[300px]
      rounded-2xl border border-gray-200 bg-white
      p-5 shadow-sm
      transition-all duration-300
      hover:shadow-lg group hover:bg-purple-700 cursor-pointer hover:text-white hover:-translate-y-1
    ">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600">
          {icon}
        </div>
        <h4 className="text-xl font-semibold group-hover:text-white text-gray-900">
          {title}
        </h4>
      </div>
      <p className="text-md text-gray-600 group-hover:text-gray-200 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* ================= CENTER LOGO ================= */
function CenterLogo() {
  return (
    <div className="
      flex h-28 w-28 items-center justify-center
      rounded-full border bg-white
      shadow-md
    ">
      <Image src="/imgs/logo2.svg" height={70} width={70} alt="logo" />
    </div>
  );
}
