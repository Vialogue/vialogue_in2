"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, CheckCircle2, MessageSquare, Sparkles, Code, Phone, Video, Smile, Paperclip, Mic, MoreVertical, CheckCheck } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"chat" | "api">("chat");
  const [chatStep, setChatStep] = useState(0);

  // Auto-step the chat preview
  useEffect(() => {
    if (activeTab !== "chat") return;
    const timer = setInterval(() => {
      setChatStep((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(timer);
  }, [activeTab]);

  const chatMessages = [
    { sender: "user", text: "Hi, I need to check my package delivery status.", time: "10:14 AM" },
    { sender: "system", text: "Hi! Let me retrieve your details. SMS OTP sent to verify your number.", time: "10:14 AM" },
    { sender: "user", text: "Got it! OTP is 584930.", time: "10:15 AM" },
    { sender: "system", text: "Verified! Your order #8493 is out for delivery. Real-time ETA: 2:15 PM.", time: "10:15 AM", delivery: true },
  ];

  const apiSnippet = `// Send Multi-Channel Message
const vialogue = require('vialogue-node')('api_key_live_...');

await vialogue.messages.create({
  to: "+1234567890",
  channels: ["whatsapp", "rcs", "sms"],
  content: {
    body: "Your package is arriving today!",
    media: "https://vialogue.in/delivery-map.png",
    buttons: [
      { text: "Track Live", url: "https://vialogue.in/track" }
    ]
  }
});`;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-[#FFFFFF]">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Visual background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200"
            >
              <Sparkles className="w-4 h-4 text-brand-purple" />
              <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                Next-Gen AI Messaging Infrastructure
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight uppercase"
            >
              Powering Enterprise Messaging Across{" "}
              <span className="text-gradient">SMS, WhatsApp & RCS</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Automate customer conversations, authenticate securely with low-latency OTP routing, and orchestrate campaigns globally via one unified enterprise API built for high deliverability.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <Link href="/contact" className="group relative overflow-hidden flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan text-white font-medium shadow-[0_4px_20px_rgba(124,58,237,0.15)] hover:shadow-[0_4px_30px_rgba(0,229,255,0.25)] transition-all duration-300 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Book Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <Link href="/contact" className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-350 hover:bg-slate-100 text-slate-700 font-medium transition-all active:scale-95">
                Start Free Trial
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-8 border-t border-slate-200 flex flex-wrap gap-y-4 gap-x-8 justify-center lg:justify-start text-slate-500 text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-purple" />
                <span>ISO 27001 Certified Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-brand-purple" />
                <span>Real-time Fallback Routing</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE VISUAL (DASHBOARD MOCKUP) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Dashboard Container */}
            <div className="rounded-3xl relative shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-200/80 overflow-hidden w-full max-w-lg mx-auto bg-white/80 backdrop-blur-xl">

              {/* Header Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200/60 bg-slate-50/60 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/85" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/85" />
                  <div className="w-3 h-3 rounded-full bg-green-500/85" />
                  <span className="text-[10px] text-slate-400 ml-2 font-mono">vialogue-core-router</span>
                </div>

                {/* Mode Selector */}
                <div className="flex gap-1 bg-slate-200/70 p-0.5 rounded-lg border border-slate-250/50">
                  <button
                    onClick={() => setActiveTab("chat")}
                    className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${
                      activeTab === "chat"
                        ? "bg-brand-purple text-white shadow-sm"
                        : "text-slate-500 hover:text-slate-850"
                    }`}
                  >
                    Live Logs
                  </button>
                  <button
                    onClick={() => setActiveTab("api")}
                    className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${
                      activeTab === "api"
                        ? "bg-[#0f172a] text-white shadow-sm"
                        : "text-slate-500 hover:text-slate-850"
                    }`}
                  >
                    Performance
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="min-h-[320px] p-5 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {activeTab === "chat" ? (
                    <motion.div
                      key="logs"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4 flex-1 flex flex-col justify-between"
                    >
                      {/* Developer live logs stream */}
                      <div className="space-y-2.5 font-mono text-[10.5px]">
                        {chatMessages.slice(0, chatStep + 1).map((msg, i) => {
                          const prefixes = [
                            { tag: "API_REQ", color: "text-cyan-600 bg-cyan-50 border-cyan-150" },
                            { tag: "ROUTING", color: "text-brand-purple bg-purple-50 border-purple-150" },
                            { tag: "FALLBACK", color: "text-amber-600 bg-amber-50 border-amber-150" },
                            { tag: "DELIVER", color: "text-emerald-600 bg-emerald-50 border-emerald-150" },
                          ];
                          const meta = prefixes[i] || { tag: "SYSTEM", color: "text-slate-500 bg-slate-50" };

                          return (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex flex-col gap-1 border-b border-slate-100 pb-2 last:border-0"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-[9px] text-slate-400">{msg.time}</span>
                                <span className={`text-[8.5px] font-bold px-1.5 py-0.5 rounded border ${meta.color}`}>
                                  {meta.tag}
                                </span>
                              </div>
                              <p className="text-slate-700 leading-normal pl-0.5">{msg.text}</p>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Interactive visual node flowchart */}
                      <div className="border-t border-slate-100 pt-3 mt-2">
                        <svg className="w-full h-14 text-slate-355" viewBox="0 0 300 50">
                          {/* Connection path */}
                          <path d="M 30,22 L 150,22 L 270,22" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5,5" />
                          {/* Pulsing glow under path */}
                          <motion.path
                            d="M 30,22 L 270,22"
                            fill="none"
                            stroke="url(#consoleGlow)"
                            strokeWidth="2.5"
                            strokeDasharray="40, 80"
                            animate={{ strokeDashoffset: [0, -120] }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                          />
                          <defs>
                            <linearGradient id="consoleGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#7C3AED" />
                              <stop offset="50%" stopColor="#2563EB" />
                              <stop offset="100%" stopColor="#06B6D4" />
                            </linearGradient>
                          </defs>
                          {/* Nodes */}
                          <circle cx="30" cy="22" r="5" className="fill-brand-purple" />
                          <circle cx="150" cy="22" r="6" className="fill-brand-blue" />
                          <circle cx="270" cy="22" r="5" className="fill-brand-cyan" />
                          {/* Labels */}
                          <text x="30" y="42" textAnchor="middle" className="text-[8px] fill-slate-450 font-mono font-semibold">API</text>
                          <text x="150" y="42" textAnchor="middle" className="text-[8px] fill-slate-800 font-mono font-bold">Smart Router</text>
                          <text x="270" y="42" textAnchor="middle" className="text-[8px] fill-slate-450 font-mono font-semibold">Carrier</text>
                        </svg>
                      </div>

                      {/* Reset trigger */}
                      {chatStep === 3 && (
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          onClick={() => setChatStep(0)}
                          className="text-[10px] text-brand-purple hover:underline flex items-center gap-1 mx-auto mt-2 font-mono font-bold"
                        >
                          Restart Live Streams
                        </motion.button>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="analytics"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4 flex-1 flex flex-col justify-between"
                    >
                      {/* Deliverability Area Chart */}
                      <div className="relative">
                        <div className="absolute top-0 left-0 text-[9px] font-bold text-slate-450 font-mono uppercase tracking-wider">Deliverability Rate</div>
                        <div className="absolute top-0 right-0 text-[10px] font-bold text-emerald-600 font-mono">99.98% Peak</div>

                        <div className="pt-6">
                          <svg className="w-full h-28 text-slate-200 overflow-visible" viewBox="0 0 300 80">
                            <defs>
                              <linearGradient id="chartGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                              </linearGradient>
                              <linearGradient id="lineColors" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#7C3AED" />
                                <stop offset="50%" stopColor="#2563EB" />
                                <stop offset="100%" stopColor="#06B6D4" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="15" x2="300" y2="15" stroke="#f1f5f9" strokeWidth="1" />
                            <line x1="0" y1="40" x2="300" y2="40" stroke="#f1f5f9" strokeWidth="1" />
                            <line x1="0" y1="65" x2="300" y2="65" stroke="#f1f5f9" strokeWidth="1" />

                            <path
                              d="M 0,65 Q 50,55 100,45 T 200,25 T 300,5 L 300,80 L 0,80 Z"
                              fill="url(#chartGlow)"
                            />
                            <motion.path
                              d="M 0,65 Q 50,55 100,45 T 200,25 T 300,5"
                              fill="none"
                              stroke="url(#lineColors)"
                              strokeWidth="2.5"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                            />
                            <motion.circle
                              cx="300"
                              cy="5"
                              r="4"
                              className="fill-brand-cyan"
                              animate={{ r: [3, 6, 3] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Stat Metrics Grid */}
                      <div className="grid grid-cols-3 gap-3 border-t border-slate-100 pt-3">
                        <div className="bg-slate-50 border border-slate-150/50 rounded-xl p-2.5 text-center shadow-inner">
                          <span className="text-[8px] font-bold text-slate-450 font-mono block mb-1">LATENCY</span>
                          <span className="text-xs font-bold text-brand-purple font-mono">42ms</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-150/50 rounded-xl p-2.5 text-center shadow-inner">
                          <span className="text-[8px] font-bold text-slate-450 font-mono block mb-1">FAILOVER</span>
                          <span className="text-xs font-bold text-brand-blue font-mono">98.6%</span>
                        </div>
                        <div className="bg-slate-50 border border-slate-150/50 rounded-xl p-2.5 text-center shadow-inner">
                          <span className="text-[8px] font-bold text-slate-450 font-mono block mb-1">ACTIVE SSL</span>
                          <span className="text-xs font-bold text-emerald-600 font-mono flex items-center justify-center gap-1">✓ Verified</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* FLOATING BADGES DECORATION */}
            <div className="absolute -top-6 -right-6 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2 text-xs font-semibold text-slate-800 border-slate-200/80 animate-float pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Router Active</span>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2 text-xs font-semibold text-slate-800 border-slate-200/80 animate-float pointer-events-none" style={{ animationDelay: "1.5s" }}>
              <span className="text-brand-purple">Uptime 99.9%</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
