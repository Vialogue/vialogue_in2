"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Sparkles, History, Zap, BookOpen, Check, AlertCircle } from "lucide-react";

const AgentSolution: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(0);

  const features = [
    {
      id: 0,
      title: "Real-Time Suggestions",
      desc: "AI scans customer query intent and instantly serves drafts, links, and answers directly in the agent's editor.",
      icon: Sparkles,
      color: "border-purple-200 text-purple-600 bg-purple-50",
    },
    {
      id: 1,
      title: "Instant Customer Context",
      desc: "Connect seamlessly to CRMs to surface order details, VIP tiers, and contact histories without agent lookups.",
      icon: History,
      color: "border-blue-200 text-blue-600 bg-blue-50",
    },
    {
      id: 2,
      title: "AI-Powered Actions",
      desc: "Trigger actions like generating coupon codes, triggering tracking APIs, or processing returns in one click.",
      icon: Zap,
      color: "border-cyan-200 text-cyan-600 bg-cyan-50",
    },
    {
      id: 3,
      title: "Guided Resolution Guidelines",
      desc: "Keep interactions compliant using interactive checklists and suggestions based on internal company policies.",
      icon: BookOpen,
      color: "border-indigo-200 text-indigo-600 bg-indigo-50",
    },
  ];

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } },
  };

  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-40 bg-white relative overflow-hidden">
      
      {/* Glow elements */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-100/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-100/20 blur-3xl pointer-events-none" />

      <div className="mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Column - Live Console Simulator */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={leftVariants}
          className="flex-1 w-full max-w-[520px] relative"
        >
          <div className="bg-slate-950 rounded-[32px] p-6 border border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-900 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[10px] font-mono text-slate-500">vialogue-assist-dashboard v1.0.4</span>
            </div>

            {/* Dashboard Workspace */}
            <div className="space-y-4">
              
              {/* Customer Profile Widget (Highlighted on Context active) */}
              <motion.div
                animate={{
                  borderColor: activeFeature === 1 ? "#3b82f6" : "#1e293b",
                  backgroundColor: activeFeature === 1 ? "rgba(59, 130, 246, 0.04)" : "rgba(15, 23, 42, 0.6)",
                }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-4 border flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">
                    SJ
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[13px] leading-tight">Sarah Jenkins</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5">sarah.j@gmail.com</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-extrabold text-[9px] uppercase tracking-wider">
                    VIP Member
                  </span>
                  <p className="text-[10px] text-slate-500 mt-1">Order: #8892 (Delayed)</p>
                </div>
              </motion.div>

              {/* Chat Thread Alert Widget (Highlighted on Suggestions active) */}
              <motion.div
                animate={{
                  borderColor: activeFeature === 0 ? "#8b5cf6" : "#1e293b",
                  backgroundColor: activeFeature === 0 ? "rgba(139, 92, 246, 0.04)" : "rgba(15, 23, 42, 0.6)",
                }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-4 border space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[11px] font-bold">
                    C
                  </div>
                  <div className="flex-1 space-y-1">
                    <span className="text-[11px] font-bold text-slate-400">Sarah J.</span>
                    <p className="text-slate-200 text-[12px] leading-relaxed">
                      "I see my order is stuck at the transit hub. Can you help speed this up or cancel it?"
                    </p>
                  </div>
                </div>

                {/* Assistant Suggestion Box */}
                <AnimatePresence mode="wait">
                  {activeFeature === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="bg-purple-950/40 rounded-xl p-3 border border-purple-500/20 space-y-2"
                    >
                      <div className="flex items-center gap-1.5 text-purple-400">
                        <Sparkles size={13} className="fill-purple-500/20" />
                        <span className="text-[11px] font-bold tracking-tight">AI Recommended Draft</span>
                      </div>
                      <p className="text-[11px] text-purple-200 leading-normal">
                        "I sincerely apologize for the shipping delay. I have checked with the courier, and it should arrive tomorrow. Alternatively, I can issue a 10% credit discount for the inconvenience."
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Quick Action API Box (Highlighted on AI-Powered Actions active) */}
              <motion.div
                animate={{
                  borderColor: activeFeature === 2 ? "#06b6d4" : "#1e293b",
                  backgroundColor: activeFeature === 2 ? "rgba(6, 182, 212, 0.04)" : "rgba(15, 23, 42, 0.6)",
                }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-4 border flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <AlertCircle size={16} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-[12px] leading-tight">Shipment Issue Alert</h5>
                    <p className="text-[10px] text-slate-500 mt-0.5">Carrier delays detected in hub.</p>
                  </div>
                </div>
                
                <button className="px-3 py-1.5 bg-cyan-500 text-slate-950 font-extrabold text-[11px] rounded-lg shadow-md shadow-cyan-500/10 flex items-center gap-1">
                  <Zap size={11} className="fill-slate-950" />
                  Apply Coupon
                </button>
              </motion.div>

              {/* Guided Resolution Policy checklist (Highlighted on Guided Resolution active) */}
              <motion.div
                animate={{
                  borderColor: activeFeature === 3 ? "#6366f1" : "#1e293b",
                  backgroundColor: activeFeature === 3 ? "rgba(99, 102, 241, 0.04)" : "rgba(15, 23, 42, 0.6)",
                }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-4 border space-y-2.5"
              >
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Resolution checklist</span>
                
                <div className="flex items-center gap-2 text-[11px] text-slate-300">
                  <div className="w-4 h-4 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Check size={10} strokeWidth={3} />
                  </div>
                  <span>Verify tracking details in API terminal</span>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-300">
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    activeFeature === 3 ? "bg-indigo-500/20 border-indigo-400 text-indigo-400" : "border-slate-700"
                  }`}>
                    {activeFeature === 3 && <Check size={10} strokeWidth={3} />}
                  </div>
                  <span>Suggest apology draft & coupon discount</span>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Right Column - Title & Description */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={rightVariants}
          className="flex-1 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-100">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-cyan-700">The Solution</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight heading-two">
            Vialogue Agent Assist
          </h2>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed paragraph">
            Vialogue Agent Assist is designed to reduce workload, improve customer experience, and help your team perform better by providing assistive insights during live conversations.
          </p>

          {/* Interactive Feature List */}
          <div className="space-y-3 pt-2">
            {features.map((feat) => {
              const isActive = activeFeature === feat.id;
              
              return (
                <div
                  key={feat.id}
                  onMouseEnter={() => setActiveFeature(feat.id)}
                  onClick={() => setActiveFeature(feat.id)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-slate-50 border-purple-200 shadow-sm"
                      : "bg-white border-slate-100 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${
                      isActive ? "bg-purple-600 border-purple-500 text-white" : feat.color
                    } transition-colors`}>
                      <feat.icon size={16} />
                    </div>
                    <h4 className="font-bold text-slate-800 text-[15px]">{feat.title}</h4>
                  </div>
                  
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-[12px] text-slate-500 mt-2 pl-12 leading-relaxed"
                    >
                      {feat.desc}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default AgentSolution;
