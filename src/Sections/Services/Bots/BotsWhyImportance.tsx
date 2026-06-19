"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, MessageSquare, AlertTriangle, CheckCircle, Smartphone } from "lucide-react";

const BotsWhyImportance: React.FC = () => {
  const points = [
    "Customers expect personalized communication",
    "Generic bulk messaging reduces engagement",
    "Right timing improves campaign performance",
    "Omnichannel campaigns reach customers everywhere",
    "Data-driven insights help optimize messaging",
  ];

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-40 bg-slate-50 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-100/50 blur-3xl pointer-events-none" />

      <div className="mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">
        {/* Right Column - Content */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={rightVariants}
          className="flex-1 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-purple-700">Market Shift</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight heading-two">
            Why Bots is <span className="text-gradient">Important Today</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed paragraph text-justify">
            <strong className="text-slate-800">Generic bulk messaging doesn’t work anymore.</strong> Customers expect personalized, timely, and contextual communication. Standard notifications get ignored, whereas highly optimized, structured bot campaigns drive customer action.
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

        {/* Left Column - Comparison Visual */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={leftVariants}
          className="flex-1 w-full max-w-[500px]"
        >
          <div className="space-y-6">
            
            {/* Box 1: Bulk Spam */}
            <div className="bg-white rounded-2xl p-5 border border-red-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-red-50/50 blur-xl" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                  <AlertTriangle size={20} />
                </div>
                <div className="space-y-1.5 text-left">
                  <span className="text-[11px] font-bold text-red-500 uppercase tracking-wide">The Old Way: Bulk Spam</span>
                  <h4 className="font-extrabold text-[15px] text-slate-800">Generic Batching</h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed">
                    Sending the exact same blast message to thousands without segmenting or timing leads to high opt-outs, lower engagement, and wasted budget.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2: Intelligent Vialogue Campaign */}
            <div className="bg-white rounded-2xl p-5 border border-purple-200 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-purple-50/50 blur-xl" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <CheckCircle size={20} className="fill-purple-50" />
                </div>
                <div className="space-y-1.5 text-left">
                  <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wide">The Vialogue Way: Smart Bots</span>
                  <h4 className="font-extrabold text-[15px] text-slate-800">Personalized Engagement</h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed">
                    Trigger, route, and optimize messages dynamically based on active status, preferences, and timezone data to secure maximum clicks and trust.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BotsWhyImportance;
