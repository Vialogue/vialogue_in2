"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MessageCircle, MessageSquare, Smartphone, Globe, Heart } from "lucide-react";

const AgentOverviewSection: React.FC = () => {
  const channels = [
    { name: "WhatsApp Support", icon: MessageCircle, color: "text-emerald-500 bg-emerald-50 border-emerald-100" },
    { name: "RCS Inquiries", icon: Smartphone, color: "text-purple-500 bg-purple-50 border-purple-100" },
    { name: "SMS Replies", icon: MessageSquare, color: "text-blue-500 bg-blue-50 border-blue-100" },
    { name: "Web Chat", icon: Globe, color: "text-cyan-500 bg-cyan-50 border-cyan-100" },
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
      
      {/* Decorative Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #7C3AED 1px, transparent 0)`,
          backgroundSize: "20px 20px"
        }}
      />

      <div className="mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Column - Content */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={leftVariants}
          className="flex-1 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-ping" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-purple-700">Intelligent Workflows</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight heading-two">
            AI Agent Assist That Helps Your Team Resolve Queries <span className="text-gradient">Faster</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed paragraph text-justify">
            Modern customer support teams need speed, accuracy, and consistency. <strong>Vialogue Agent Assist</strong> empowers your agents with real-time customer context, suggested replies, and intelligent guidance so every interaction becomes a quick, high-quality resolution.
            <br /><br />
            Whether you’re handling <strong>WhatsApp support, RCS inquiries, SMS replies, or web chat,</strong> Vialogue ensures your agents always have the right information at the right time.
          </p>

          {/* Channels Grid */}
          <div className="pt-4">
            <h4 className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mb-4">Supported Channels</h4>
            <div className="grid grid-cols-2 gap-3">
              {channels.map((chan, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl border ${chan.color} transition-all cursor-default shadow-sm`}
                >
                  <chan.icon size={18} strokeWidth={2.5} />
                  <span className="text-[13px] font-bold tracking-tight text-slate-800">{chan.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Visual Mockup */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={rightVariants}
          className="flex-1 w-full max-w-[500px]"
        >
          <div className="bg-slate-50/50 rounded-[32px] p-6 border border-slate-100 shadow-[inset_0_1px_2px_rgba(255,255,255,1)] relative overflow-hidden">
            
            {/* Soft decorative background circles */}
            <div className="absolute top-[-50px] right-[-50px] w-40 h-40 rounded-full bg-purple-200/20 blur-2xl" />
            <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 rounded-full bg-cyan-200/20 blur-2xl" />

            {/* Dashboard Mockup Content */}
            <div className="space-y-5 relative z-10">
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">Metrics Console</span>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md font-extrabold border border-emerald-100 flex items-center gap-1">
                  ● Live Data
                </span>
              </div>

              {/* Grid of widgets */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Gauge widget 1 */}
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col items-center">
                  <span className="text-[11px] text-slate-400 font-semibold uppercase">Resolution Rate</span>
                  <div className="relative w-24 h-24 mt-3 flex items-center justify-center">
                    {/* SVG circular progress */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="48" cy="48" r="36" className="stroke-slate-100 fill-none" strokeWidth="8" />
                      <motion.circle 
                        cx="48" 
                        cy="48" 
                        r="36" 
                        className="stroke-purple-600 fill-none" 
                        strokeWidth="8"
                        strokeDasharray="226"
                        initial={{ strokeDashoffset: 226 }}
                        whileInView={{ strokeDashoffset: 226 - (226 * 96) / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <span className="absolute text-lg font-black text-slate-800">96%</span>
                  </div>
                  <span className="text-[10px] text-emerald-500 font-bold mt-2">+4.2% this week</span>
                </div>

                {/* Gauge widget 2 */}
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col items-center">
                  <span className="text-[11px] text-slate-400 font-semibold uppercase">Response Index</span>
                  <div className="relative w-24 h-24 mt-3 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="48" cy="48" r="36" className="stroke-slate-100 fill-none" strokeWidth="8" />
                      <motion.circle 
                        cx="48" 
                        cy="48" 
                        r="36" 
                        className="stroke-cyan-500 fill-none" 
                        strokeWidth="8"
                        strokeDasharray="226"
                        initial={{ strokeDashoffset: 226 }}
                        whileInView={{ strokeDashoffset: 226 - (226 * 88) / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <span className="absolute text-lg font-black text-slate-800">88%</span>
                  </div>
                  <span className="text-[10px] text-emerald-500 font-bold mt-2">-15s Avg wait</span>
                </div>

              </div>

              {/* Context Queue status widget */}
              <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-3">
                <span className="text-[11px] text-slate-400 font-semibold uppercase block mb-1">Queue Health</span>
                
                {/* Row 1 */}
                <div className="flex items-center justify-between text-[12px] pb-2 border-b border-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="font-bold text-slate-800">WhatsApp Inbox</span>
                  </div>
                  <span className="font-extrabold text-slate-700">0 Pending</span>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between text-[12px] pb-2 border-b border-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                    <span className="font-bold text-slate-800">RCS Campaigns</span>
                  </div>
                  <span className="font-extrabold text-slate-700">2 Active</span>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between text-[12px]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                    <span className="font-bold text-slate-800">Web Widget</span>
                  </div>
                  <span className="font-extrabold text-slate-700">1 Routing</span>
                </div>

              </div>

              {/* Customer sentiment indicator */}
              <div className="flex items-center gap-3 px-4 py-3 bg-purple-50/50 rounded-2xl border border-purple-100/50 text-[12px]">
                <Heart size={16} className="text-purple-600 fill-purple-100 animate-pulse" />
                <span className="font-semibold text-purple-900 leading-snug">
                  Customer Satisfaction Index is at **98.4%** (Extremely High)
                </span>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentOverviewSection;
