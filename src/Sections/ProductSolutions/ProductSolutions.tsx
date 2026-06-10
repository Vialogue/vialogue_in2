"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, MessageCircle, Send, Key, Megaphone, Bot, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "SMS Platform",
    description: "High deliverability, low-latency carrier integrations for bulk notifications, alerts, and customer outreach.",
    icon: MessageSquare,
    link: "/sms",
    color: "from-blue-500 to-indigo-500",
    glowColor: "rgba(37, 99, 235, 0.05)",
  },
  {
    title: "WhatsApp Business API",
    description: "Connect verified accounts to automate customer service, send orders, and trigger conversational flows.",
    icon: MessageCircle,
    link: "/whatsapp",
    color: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.05)",
  },
  {
    title: "RCS Messaging",
    description: "Next-gen rich texting with branded sender profiles, interactive buttons, carousels, and verified checkmarks.",
    icon: Send,
    link: "/rcs",
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.05)",
  },
  {
    title: "OTP Services",
    description: "Ultra-fast authentication delivery with automated SMS fallback routing and multi-channel failover protection.",
    icon: Key,
    link: "/contact",
    color: "from-amber-500 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.05)",
  },
  {
    title: "Campaign Automation",
    description: "Plan, schedule, and orchestrate messaging campaigns across multiple channels using smart audience segments.",
    icon: Megaphone,
    link: "/bots",
    color: "from-rose-500 to-red-500",
    glowColor: "rgba(244, 63, 94, 0.05)",
  },
  {
    title: "AI Chatbots",
    description: "Empower support teams with automated agent assist widgets, NLP response bots, and direct live-chat escalations.",
    icon: Bot,
    link: "/agent",
    color: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.05)",
  },
];

export default function ProductSolutions() {
  return (
    <section className="py-24 bg-[#FFFFFF] relative z-10">
      {/* Background glowing blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
              Unified Solutions
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900"
          >
            Powering Every Conversational Channel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-light"
          >
            Deploy scalable messaging APIs and smart campaign tools designed to drive higher conversions, build client trust, and scale with ease.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl glass-card p-6 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Background glow hover effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${item.glowColor}, transparent 70%)`
                  }}
                />

                {/* Card Icon & Title */}
                <div>
                  <div className="relative w-14 h-14 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-center justify-center mb-5 transition-all duration-500 group-hover:border-purple-250 group-hover:bg-purple-50/20 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.06)]">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-md`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="relative mb-2 h-7 overflow-hidden select-none">
                    <h3 className="absolute inset-0 text-base font-bold text-slate-800 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
                      {item.title}
                    </h3>
                    <h3 className="absolute inset-0 text-base font-bold text-gradient opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-light mb-4 min-h-[48px]">
                    {item.description}
                  </p>
                </div>

                {/* Interactive Micro Mockups */}
                <div className="my-4">
                  {idx === 0 && (
                    <div className="relative h-24 rounded-xl bg-slate-50/70 border border-slate-100 flex items-center justify-center overflow-hidden font-sans text-xs select-none shadow-inner">
                      <div className="absolute top-1.5 left-2 text-[8px] text-slate-450 font-mono tracking-wider">SMS GATEWAY</div>
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-2 rounded-lg max-w-[85%] text-slate-700 flex flex-col gap-1"
                      >
                        <div className="flex items-center justify-between font-bold text-[9px] text-slate-800 border-b pb-0.5 border-slate-100 gap-6">
                          <span>Alert OTP</span>
                          <span className="text-blue-600 font-mono text-[8px]">DELIVERED</span>
                        </div>
                        <p className="text-[9px] leading-tight text-slate-500">Your Vialogue verification code is <strong className="text-slate-900 font-semibold">489201</strong>.</p>
                      </motion.div>
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="relative h-24 rounded-xl bg-slate-50/70 border border-slate-100 flex items-center justify-center overflow-hidden font-sans text-xs select-none shadow-inner">
                      <div className="absolute top-1.5 left-2 text-[8px] text-slate-450 font-mono tracking-wider">WHATSAPP API</div>
                      <div className="bg-white px-3 py-2 rounded-lg border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] w-[85%] flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">V</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 leading-none mb-0.5">
                            <span className="font-bold text-[10px] text-slate-800 truncate">Vialogue Bot</span>
                            <span className="text-emerald-500 text-[10px] font-bold">✓</span>
                          </div>
                          <p className="text-[8px] text-slate-400 leading-none">Official Account</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="relative h-24 rounded-xl bg-slate-50/70 border border-slate-100 flex items-center justify-center overflow-hidden font-sans text-xs select-none shadow-inner">
                      <div className="absolute top-1.5 left-2 text-[8px] text-slate-450 font-mono tracking-wider">RCS BUSINESS</div>
                      <div className="bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] rounded-lg w-[85%] p-1.5 flex gap-2">
                        <div className="w-10 h-14 bg-slate-100 rounded flex items-center justify-center text-[8px] text-slate-400 font-mono">Image</div>
                        <div className="flex-1 flex flex-col justify-between py-0.5">
                          <div>
                            <div className="font-bold text-[9px] text-slate-800 leading-none mb-0.5">Special Promo</div>
                            <div className="text-[8px] text-slate-500 leading-tight line-clamp-2">Get 20% off with code VIALOGUE20.</div>
                          </div>
                          <div className="bg-blue-50 text-blue-600 font-bold text-[8px] text-center py-0.5 rounded border border-blue-100">Claim Code</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {idx === 3 && (
                    <div className="relative h-24 rounded-xl bg-slate-50/70 border border-slate-100 flex items-center justify-center overflow-hidden font-sans text-xs select-none shadow-inner">
                      <div className="absolute top-1.5 left-2 text-[8px] text-slate-450 font-mono tracking-wider">VERIFICATION</div>
                      <div className="flex items-center gap-1 font-mono">
                        {[5, 8, 4, 9, 3, 0].map((num, i) => (
                          <motion.span 
                            key={i}
                            animate={{ scale: [1, 1.12, 1] }}
                            transition={{ repeat: Infinity, duration: 1.8, delay: i * 0.15 }}
                            className="w-5 h-7 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-slate-850 shadow-sm text-xs"
                          >
                            {num}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {idx === 4 && (
                    <div className="relative h-24 rounded-xl bg-slate-50/70 border border-slate-100 flex items-center justify-center overflow-hidden font-sans text-xs select-none shadow-inner">
                      <div className="absolute top-1.5 left-2 text-[8px] text-slate-450 font-mono tracking-wider">CAMPAIGNS</div>
                      <div className="flex items-center gap-2 text-[9px]">
                        <div className="bg-white px-2 py-1 rounded border border-slate-200 shadow-sm text-slate-600">Trigger</div>
                        <span className="text-slate-300 font-mono">→</span>
                        <div className="bg-blue-600 text-white px-2 py-1 rounded shadow-sm font-semibold">WhatsApp</div>
                        <span className="text-slate-300 font-mono">→</span>
                        <div className="bg-emerald-500 text-white px-2 py-1 rounded shadow-sm font-semibold">Sent</div>
                      </div>
                    </div>
                  )}

                  {idx === 5 && (
                    <div className="relative h-24 rounded-xl bg-slate-50/70 border border-slate-100 flex items-center justify-center overflow-hidden font-sans text-xs select-none shadow-inner">
                      <div className="absolute top-1.5 left-2 text-[8px] text-slate-450 font-mono tracking-wider">AI AGENT</div>
                      <div className="flex flex-col gap-1.5 w-[85%]">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-brand-purple text-white flex items-center justify-center text-[8px] font-bold font-mono shadow-sm">AI</div>
                          <div className="bg-white border border-slate-200 px-2 py-1 rounded-lg shadow-sm text-[9px] text-slate-655 font-medium flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                            <span className="w-1 h-1 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                            <span className="w-1 h-1 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Link Trigger */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link href={item.link} className="text-xs font-semibold text-slate-600 group-hover:text-brand-purple transition-colors flex items-center gap-1.5">
                    Explore Channel <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
