"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, MessageSquare, Mail, Phone, ArrowRight, Smartphone } from "lucide-react";

const BotsOverview: React.FC = () => {
  const points = [
    "Create campaigns across SMS, WhatsApp, RCS, and Email",
    "Segment audiences for targeted messaging",
    "Schedule and automate campaign delivery",
    "Personalize messages with dynamic data",
    "Track performance with real-time analytics",
  ];

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } },
  };

  const channels = [
    { name: "WhatsApp Business", icon: MessageSquare, bg: "bg-emerald-50 border-emerald-100 text-emerald-600", desc: "Interactive media & buttons" },
    { name: "Rich RCS Messaging", icon: Smartphone, bg: "bg-purple-50 border-purple-100 text-purple-600", desc: "Branded carousels & suggestions" },
    { name: "Standard SMS API", icon: Phone, bg: "bg-indigo-50 border-indigo-100 text-indigo-600", desc: "Reliable fallback & verification" },
    { name: "Enterprise Email", icon: Mail, bg: "bg-cyan-50 border-cyan-100 text-cyan-600", desc: "Rich html marketing newsletters" },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-40 bg-white relative overflow-hidden">
      
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #7C3AED 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Column - Content */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={leftVariants}
          className="flex-1 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-purple-700">Platform Overview</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight heading-two">
            Omnichannel Bots for <span className="text-gradient">High-Converting Messaging</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed paragraph text-justify">
            Create campaigns that customers actually engage with. Vialogue Bots helps businesses design, personalize, schedule, and optimize campaigns across channels like WhatsApp, SMS, RCS, Email and more—with complete visibility and analytics.
          </p>

          {/* Points list */}
          <ul className="space-y-3 pt-4">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[14px] md:text-[16px] text-slate-700 font-medium">
                <ShieldCheck className="text-purple-500 flex-shrink-0" size={18} />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column - Visual Mockup */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={rightVariants}
          className="flex-1 w-full max-w-[500px]"
        >
          <div className="bg-slate-50/50 rounded-[32px] p-6 border border-slate-100 relative overflow-hidden shadow-sm">
            <div className="absolute top-[-50px] right-[-50px] w-40 h-40 rounded-full bg-purple-200/20 blur-2xl" />
            <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 rounded-full bg-indigo-200/20 blur-2xl" />

            <div className="space-y-4 relative z-10">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Unified Campaign Delivery</span>

              {/* Grid of channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {channels.map((chan, idx) => {
                  const Icon = chan.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3, scale: 1.02 }}
                      className={`p-4 rounded-2xl border ${chan.bg} shadow-sm flex flex-col justify-between h-[115px] cursor-default transition-all`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-[13px] tracking-tight">{chan.name}</span>
                        <Icon size={14} className="opacity-80" />
                      </div>
                      <span className="text-[11px] text-slate-500 font-light leading-snug">{chan.desc}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Sync Stats */}
              <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2 text-purple-600 font-bold">
                  <Smartphone size={15} />
                  <span>Real-Time Dispatch</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span>Audience List</span>
                  <ArrowRight size={12} />
                  <span>Channels</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BotsOverview;
