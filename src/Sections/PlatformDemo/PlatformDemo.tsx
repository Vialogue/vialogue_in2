"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, GitFork, Terminal, Smartphone } from "lucide-react";

export default function PlatformDemo() {
  const [activeTab, setActiveTab] = useState<"workflow" | "analytics" | "logs">("workflow");
  const [logs, setLogs] = useState<string[]>([]);

  // Simulation for live console logs
  useEffect(() => {
    if (activeTab !== "logs") return;
    setLogs([
      "[11:42:01] INFO: Initializing outbound queue...",
      "[11:42:02] INFO: Connecting to WhatsApp Business API Gateway...",
      "[11:42:03] SUCCESS: Connected. Listening to webhooks.",
    ]);

    const messages = [
      "SMS OTP dispatched to +919876543210 (Carrier: Jio)",
      "WhatsApp session opened for customer #4820",
      "RCS Rich Message delivery SUCCESS for user #1938",
      "Fallback triggered: WhatsApp failed -> SMS sent to +1415987654",
      "API request: POST /v1/otp (Status: 200 OK, Latency: 6ms)",
      "WebHook response received: Message READ by customer",
    ];

    const timer = setInterval(() => {
      const timestamp = new Date().toLocaleTimeString();
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      setLogs((prev) => {
        const updated = [...prev, `[${timestamp}] INFO: ${randomMsg}`];
        if (updated.length > 6) updated.shift();
        return updated;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <section className="py-24 bg-[#FFFFFF] relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
              Interactive Console
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-950">
            Conversations in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-normal max-w-xl mx-auto">
            Explore our platform interface. Toggle between workflow design, campaign metrics, and live log streaming.
          </p>
        </div>

        {/* Demo Board Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Controls (Tabs) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Tab 1: Workflow */}
            <button
              onClick={() => setActiveTab("workflow")}
              className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                activeTab === "workflow"
                  ? "bg-slate-50 border-brand-purple text-slate-900 shadow-sm"
                  : "bg-transparent border-slate-200/60 text-slate-600 font-medium hover:text-slate-950 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <GitFork className={activeTab === "workflow" ? "text-brand-purple" : "text-slate-400"} size={20} />
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Messaging Workflows</h3>
              </div>
              <p className="text-sm text-slate-700 font-normal leading-relaxed">
                Design custom routing paths visually. Automate fallbacks if a customer is offline on WhatsApp.
              </p>
            </button>

            {/* Tab 2: Analytics */}
            <button
              onClick={() => setActiveTab("analytics")}
              className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                activeTab === "analytics"
                  ? "bg-slate-50 border-brand-purple text-slate-900 shadow-sm"
                  : "bg-transparent border-slate-200/60 text-slate-600 font-medium hover:text-slate-950 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className={activeTab === "analytics" ? "text-brand-purple" : "text-slate-400"} size={20} />
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Campaign Builder</h3>
              </div>
              <p className="text-sm text-slate-700 font-normal leading-relaxed">
                Review delivery, open, and response statistics across channels in an integrated analytics panel.
              </p>
            </button>

            {/* Tab 3: Logs */}
            <button
              onClick={() => setActiveTab("logs")}
              className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                activeTab === "logs"
                  ? "bg-slate-50 border-brand-purple text-slate-900 shadow-sm"
                  : "bg-transparent border-slate-200/60 text-slate-600 font-medium hover:text-slate-950 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Terminal className={activeTab === "logs" ? "text-brand-purple" : "text-slate-400"} size={20} />
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">Real-time Logs</h3>
              </div>
              <p className="text-sm text-slate-700 font-normal leading-relaxed">
                Watch inbound webhooks and API call validations update in real-time as notifications stream through.
              </p>
            </button>

          </div>

          {/* RIGHT: Visual Console Display */}
          <div className="lg:col-span-8">
            <div className="glass-panel border border-slate-200/80 rounded-3xl p-6 sm:p-8 min-h-[400px] flex flex-col justify-between relative overflow-hidden shadow-xl h-full">
              
              {/* Top controls mockup */}
              <div className="flex items-center gap-2 pb-4 border-b border-slate-300 mb-6 text-xs text-slate-600 font-mono font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                <span>VIALOGUE CONTROL HUB // {activeTab.toUpperCase()}</span>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "workflow" && (
                  <motion.div
                    key="workflow"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex-1 flex flex-col justify-center gap-4 py-4"
                  >
                    {/* Visual Node Diagram */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      {/* Node 1 */}
                      <div className="bg-white border-2 border-slate-300 px-4 py-3 rounded-xl text-center text-xs w-40 shadow-sm">
                        <span className="text-slate-600 font-medium block mb-0.5">Trigger Event</span>
                        <span className="font-extrabold text-slate-950 uppercase">User Signed Up</span>
                      </div>
                      
                      {/* Arrow */}
                      <span className="text-slate-500 font-bold font-mono text-lg rotate-90 sm:rotate-0">→</span>

                      {/* Node 2 */}
                      <div className="bg-purple-50 border-2 border-[#7C3AED]/60 px-4 py-3 rounded-xl text-center text-xs w-44 shadow-sm">
                        <span className="text-[#7C3AED] block mb-0.5 font-bold">1st Attempt</span>
                        <span className="font-extrabold text-slate-950 uppercase">WhatsApp Message</span>
                      </div>

                      {/* Arrow */}
                      <span className="text-slate-500 font-bold font-mono text-lg rotate-90 sm:rotate-0">→</span>

                      {/* Node 3 */}
                      <div className="bg-slate-50 border-2 border-slate-300 px-4 py-3 rounded-xl text-xs w-48 space-y-1.5 shadow-sm">
                        <div className="flex justify-between items-center text-xs text-slate-600 font-medium">
                          <span>Status Check</span>
                          <span className="text-amber-600 animate-pulse font-bold">Pending</span>
                        </div>
                        <div className="text-xs text-slate-800 font-medium">
                          Offline? → <span className="text-[#7C3AED] font-bold">SMS Fallback</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "analytics" && (
                  <motion.div
                    key="analytics"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex-1 flex flex-col justify-center space-y-6"
                  >
                    {/* Stats Mockup Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-slate-600 block font-medium uppercase">Recipients</span>
                        <span className="text-lg font-extrabold text-slate-950">48,204</span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-slate-600 block font-medium uppercase">Delivered</span>
                        <span className="text-lg font-bold text-emerald-600">99.8%</span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-slate-600 block font-medium uppercase">Read Rate</span>
                        <span className="text-lg font-bold text-brand-purple">84.2%</span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <span className="text-xs text-slate-600 block font-medium uppercase">CTR</span>
                        <span className="text-lg font-bold text-brand-purple">22.5%</span>
                      </div>
                    </div>

                    {/* Progress Bar campaign preview */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-slate-700 font-medium">
                        <span>Campaign: Product Launch Alert</span>
                        <span>Completed (100%)</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#7C3AED] to-pink-300 h-full w-full" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "logs" && (
                  <motion.div
                    key="logs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col font-mono text-[10px] sm:text-xs text-slate-400 space-y-2 p-4 rounded-xl bg-slate-900 border border-slate-800 overflow-y-auto"
                  >
                    {logs.map((log, i) => {
                      const isSuccess = log.includes("SUCCESS") || log.includes("Status: 200");
                      const isInfo = log.includes("INFO:");
                      return (
                        <div key={i} className="leading-relaxed">
                          <span className={isSuccess ? "text-emerald-400 font-bold" : isInfo ? "text-slate-400" : "text-cyan-400 font-bold"}>
                            {log}
                          </span>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
