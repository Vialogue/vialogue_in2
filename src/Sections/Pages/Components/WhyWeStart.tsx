"use client";
 
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    path: "M 480,260 L 380,260 L 380,80 L 300,80",
    glowColor: "from-purple-500 to-indigo-500",
  },
  {
    title: "Reduce Support Load",
    description: "Automate repetitive customer conversations.",
    icon: <Headset size={18} />,
    path: "M 480,260 L 580,260 L 580,80 L 660,80",
    glowColor: "from-indigo-500 to-blue-500",
  },
  {
    title: "Save Team Time",
    description: "Handle common queries without manual effort.",
    icon: <Clock size={18} />,
    path: "M 480,260 L 380,260 L 380,280 L 300,280",
    glowColor: "from-pink-500 to-rose-500",
  },
  {
    title: "Centralized Inbox",
    description: "Manage all channels in one workspace.",
    icon: <Network size={18} />,
    path: "M 480,260 L 580,260 L 580,280 L 660,280",
    glowColor: "from-blue-500 to-emerald-500",
  },
  {
    title: "Better Experience",
    description: "Deliver consistent, reliable responses.",
    icon: <MessageSquare size={18} />,
    path: "M 480,316 L 480,420",
    glowColor: "from-[#8B5CF6] to-purple-500",
  },
];
 
export default function ConnectedFeatures() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
 
  return (
    <section
      ref={containerRef}
      className="relative bg-white overflow-hidden py-16 sm:py-24"
      onMouseMove={(e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => {
        setActive(false);
        setHoveredIndex(null);
      }}
    >
      {/* CSS Keyframes for moving laser connection lines */}
      <style>{`
        @keyframes laserMove {
          from {
            stroke-dashoffset: 60;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .laser-line {
          animation: laserMove 5s linear infinite;
        }
        .laser-line-fast {
          animation: laserMove 1.8s linear infinite;
        }
      `}</style>
 
      {/* ================= GRID BACKGROUND ================= */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full opacity-60"
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
 
      {/* ================= HOVER GRID HIGHLIGHT ================= */}
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
            350px at ${pos.x}px ${pos.y}px,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.85) 40%,
            transparent 100%
          )`,
          WebkitMaskImage: `radial-gradient(
            350px at ${pos.x}px ${pos.y}px,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.85) 40%,
            transparent 100%
          )`,
        }}
      />
 
      <div className="relative z-10 px-4 md:px-16 max-w-7xl mx-auto">
        
        {/* ================= HEADING ================= */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900"
          >
            What we do
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-slate-500 text-sm sm:text-base font-semibold max-w-lg mx-auto"
          >
            Reach high-intent users through smart placement, precision messaging,
            and perfect timing.
          </motion.p>
        </div>
 
        {/* ================= DESKTOP CONNECTIVITY GRID ================= */}
        <div className="hidden md:block w-full overflow-visible py-10 select-none">
          <div className="mx-auto w-[960px] h-[580px] relative scale-[0.8] lg:scale-[0.9] xl:scale-100 origin-center my-[-30px]">
            
            {/* SVG Connecting lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ filter: "drop-shadow(0px 4px 12px rgba(124,58,237,0.08))" }}
            >
              {features.map((f, i) => {
                const isHovered = hoveredIndex === i;
                const isAnyHovered = hoveredIndex !== null;
 
                return (
                  <g key={i}>
                    {/* Background line shadow */}
                    <path
                      d={f.path}
                      fill="none"
                      stroke={isHovered ? "#E8DFFA" : "#EEF2F6"}
                      strokeWidth={isHovered ? "3" : "1.5"}
                      className="transition-all duration-300"
                    />
 
                    {/* Base connecting line */}
                    <path
                      d={f.path}
                      fill="none"
                      stroke={isHovered ? "#8B5CF6" : "#C7D2FE"}
                      strokeWidth={isHovered ? "2.5" : "1.5"}
                      strokeDasharray={isHovered ? "8 6" : "4 8"}
                      className={`transition-all duration-300 laser-line ${isHovered ? "laser-line-fast" : ""}`}
                      style={{
                        opacity: !isAnyHovered || isHovered ? 1 : 0.35,
                      }}
                    />
 
                    {/* Animated glowing pulse dot */}
                    <circle r="4.5" fill="#8B5CF6" className="shadow-lg">
                      <animateMotion
                        dur={isHovered ? "2.2s" : "4.5s"}
                        repeatCount="indefinite"
                        path={f.path}
                        begin={`${i * 0.4}s`}
                      />
                    </circle>
                  </g>
                );
              })}
            </svg>
 
            {/* CARDS PLACEMENTS */}
            
            {/* Top Left Card: Increase Conversation */}
            <div 
              className="absolute left-[0px] top-[20px]"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <FeatureCard {...features[0]} isDimmed={hoveredIndex !== null && hoveredIndex !== 0} />
            </div>
 
            {/* Bottom Left Card: Save Team Time */}
            <div 
              className="absolute left-[0px] top-[220px]"
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <FeatureCard {...features[2]} isDimmed={hoveredIndex !== null && hoveredIndex !== 2} />
            </div>
 
            {/* Center Logo Node */}
            <div className="absolute left-[424px] top-[204px]">
              <CenterLogo hoveredIndex={hoveredIndex} />
            </div>
 
            {/* Top Right Card: Reduce Support Load */}
            <div 
              className="absolute right-[0px] top-[20px]"
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <FeatureCard {...features[1]} isDimmed={hoveredIndex !== null && hoveredIndex !== 1} />
            </div>
 
            {/* Bottom Right Card: Centralized Inbox */}
            <div 
              className="absolute right-[0px] top-[220px]"
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <FeatureCard {...features[3]} isDimmed={hoveredIndex !== null && hoveredIndex !== 3} />
            </div>
 
            {/* Bottom Center Card: Better Experience */}
            <div 
              className="absolute left-[330px] top-[420px]"
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <FeatureCard {...features[4]} isDimmed={hoveredIndex !== null && hoveredIndex !== 4} />
            </div>
 
          </div>
        </div>
 
        {/* ================= MOBILE VIEW (STACKED) ================= */}
        <div className="flex flex-col gap-6 md:hidden px-4">
          <div className="py-6 flex justify-center">
            <CenterLogo hoveredIndex={null} />
          </div>
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} isDimmed={false} />
          ))}
        </div>
 
      </div>
    </section>
  );
}
 
/* ================= FEATURE CARD ================= */
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isDimmed: boolean;
}
 
function FeatureCard({ title, description, icon, isDimmed }: FeatureCardProps) {
  return (
    <div 
      className={`
        w-full md:w-[300px] h-[120px]
        rounded-2xl border border-slate-100 bg-white/90 backdrop-blur-md
        p-5 shadow-[0_8px_30px_rgba(15,23,42,0.03)]
        transition-all duration-300 select-none
        hover:shadow-[0_16px_40px_rgba(124,58,237,0.12)] hover:border-purple-200 hover:-translate-y-1 cursor-pointer group
        ${isDimmed ? "opacity-45 scale-[0.98]" : "opacity-100 scale-100"}
      `}
    >
      <div className="mb-2.5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 border border-purple-100 text-[#7C3AED] shadow-sm group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h4 className="text-md font-bold text-slate-800 group-hover:text-[#7C3AED] transition-colors duration-300">
          {title}
        </h4>
      </div>
      <p className="text-[12px] text-slate-500 leading-normal font-semibold">
        {description}
      </p>
    </div>
  );
}
 
/* ================= CENTER LOGO ================= */
interface CenterLogoProps {
  hoveredIndex: number | null;
}
 
function CenterLogo({ hoveredIndex }: CenterLogoProps) {
  const activeColor = hoveredIndex !== null ? features[hoveredIndex].glowColor : "from-purple-500 to-indigo-500";
 
  return (
    <div className="relative flex items-center justify-center h-28 w-28 select-none">
      
      {/* Double pulsing rings */}
      <div className="absolute inset-0 -m-3 rounded-full bg-purple-100/30 border border-purple-200/20 animate-ping pointer-events-none" />
      <div className="absolute inset-0 -m-6 rounded-full bg-indigo-50/20 border border-indigo-100/10 animate-pulse pointer-events-none" />
      
      {/* Inner glowing radial ambient background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={hoveredIndex ?? "default"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-0 bg-gradient-to-tr ${activeColor} rounded-full opacity-15 blur-md`}
        />
      </AnimatePresence>
      
      {/* Main Logo Container */}
      <div className="
        relative z-10 flex h-full w-full items-center justify-center
        rounded-full border border-purple-100/70 bg-white
        shadow-xl shadow-purple-100/40 hover:scale-105 transition-transform duration-300
      ">
        <Image src="/imgs/logo2.svg" height={70} width={70} alt="logo" priority />
      </div>
    </div>
  );
}
