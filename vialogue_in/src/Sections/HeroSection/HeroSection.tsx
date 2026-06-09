"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, CheckCircle2, MessageSquare, Sparkles, Code } from "lucide-react";
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
    { sender: "user", text: "Hi, I need to check my package delivery status." },
    { sender: "system", text: "Hi! Let me retrieve your details. SMS OTP sent to verify your number." },
    { sender: "user", text: "Got it! OTP is 584930." },
    { sender: "system", text: "Verified! Your order #8493 is out for delivery. Real-time ETA: 2:15 PM.", delivery: true },
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
            <div className="glass-panel rounded-3xl p-1 relative shadow-xl border border-slate-200/80 overflow-hidden w-full max-w-lg mx-auto">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-100/50">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/80" />
                  <span className="text-xs text-slate-500 ml-2 font-mono">vialogue-console-v3</span>
                </div>
                
                {/* Mode Selector */}
                <div className="flex gap-1 bg-slate-200/50 p-0.5 rounded-lg border border-slate-200/40">
                  <button
                    onClick={() => setActiveTab("chat")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      activeTab === "chat"
                        ? "bg-brand-purple text-white shadow-md"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <MessageSquare size={13} />
                    Live Simulator
                  </button>
                  <button
                    onClick={() => setActiveTab("api")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      activeTab === "api"
                        ? "bg-brand-purple text-white shadow-md"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <Code size={13} />
                    API
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-6 bg-white min-h-[300px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {activeTab === "chat" ? (
                    <motion.div
                      key="chat"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4 flex-1"
                    >
                      {/* Simulation Stream */}
                      <div className="space-y-3.5">
                        {chatMessages.slice(0, chatStep + 1).map((msg, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                                msg.sender === "user"
                                  ? "bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-tr-none"
                                  : msg.delivery
                                  ? "bg-emerald-50 border border-emerald-250 text-emerald-800 rounded-tl-none"
                                  : "bg-slate-100 border border-slate-200/60 text-slate-800 rounded-tl-none"
                              }`}
                            >
                              {msg.text}
                              {msg.delivery && (
                                <div className="mt-2 pt-2 border-t border-emerald-200 flex items-center gap-2 text-xs font-medium text-emerald-600">
                                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                  Delivered via WhatsApp API
                                </div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Reset button inside chat sim */}
                      {chatStep === 3 && (
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          onClick={() => setChatStep(0)}
                          className="text-xs text-brand-purple hover:underline flex items-center gap-1 mx-auto mt-4"
                        >
                          Restart Simulation
                        </motion.button>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="api"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1"
                    >
                      <pre className="text-xs text-slate-200 font-mono overflow-x-auto whitespace-pre p-3 rounded-lg bg-slate-900 border border-slate-800 leading-relaxed">
                        <code>{apiSnippet}</code>
                      </pre>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer Metrics */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex justify-between text-xs text-slate-500 font-mono">
                  <span>Ping: <span className="text-emerald-600 font-bold">7ms</span></span>
                  <span>Channel: <span className="text-brand-purple font-bold">Multi</span></span>
                  <span>SSL: <span className="text-emerald-600 font-bold">Active</span></span>
                </div>
              </div>
            </div>

            {/* FLOATING BADGES DECORATION */}
            <div className="absolute -top-6 -right-6 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2 text-xs font-semibold text-slate-800 border-slate-200/80 animate-float pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>WhatsApp Active</span>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2 text-xs font-semibold text-slate-800 border-slate-200/80 animate-float pointer-events-none" style={{ animationDelay: "1.5s" }}>
              <span className="text-brand-purple">RCS Card Verified</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
