"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Database, ArrowRight, CheckCircle2, Server, Terminal, Sparkles } from "lucide-react";

interface LogLine {
  id: string;
  type: "info" | "success" | "warn";
  text: string;
  time: string;
}

const IntegrationsPreviewUI: React.FC = () => {
  const [logs, setLogs] = useState<LogLine[]>([
    { id: "1", type: "info", text: "Initializing Vialogue Webhook listener...", time: "10:14:02" },
    { id: "2", type: "success", text: "Webhook receiver active on port 443", time: "10:14:03" },
  ]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    let t3: NodeJS.Timeout;
    let t4: NodeJS.Timeout;

    // Step 0 -> 1: Trigger payload receive (after 1.8s)
    t1 = setTimeout(() => {
      setStep(1);
      setLogs((prev) => [
        ...prev,
        { id: "3", type: "info", text: "POST /webhook/hubspot - 200 OK", time: "10:14:15" },
        { id: "4", type: "success", text: "Payload parsed: { event: 'contact.created' }", time: "10:14:15" },
      ]);
    }, 1800);

    // Step 1 -> 2: Sync to Salesforce (after 3.5s)
    t2 = setTimeout(() => {
      setStep(2);
      setLogs((prev) => [
        ...prev,
        { id: "5", type: "info", text: "Syncing fields: [FirstName, Phone] to SFDC", time: "10:14:17" },
        { id: "6", type: "success", text: "Salesforce CRM state updated successfully", time: "10:14:18" },
      ]);
    }, 3500);

    // Step 2 -> 3: Show success badge (after 4.8s)
    t3 = setTimeout(() => {
      setStep(3);
    }, 4800);

    // Step 3 -> 0: Reset logs (after 10s)
    t4 = setTimeout(() => {
      setStep(0);
      setLogs([
        { id: "1", type: "info", text: "Initializing Vialogue Webhook listener...", time: "10:14:02" },
        { id: "2", type: "success", text: "Webhook receiver active on port 443", time: "10:14:03" },
      ]);
    }, 10000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [logs.length === 2 && step === 0]);

  // Framer Motion variant transitions
  const crmVariants: Variants = {
    inactive: { scale: 1, filter: "grayscale(100%) opacity(40%)" },
    active: { scale: 1.08, filter: "grayscale(0%) opacity(100%)", transition: { duration: 0.4 } },
  };

  return (
    <div className="relative w-full h-[440px] flex items-center justify-center font-sans mt-0 lg:-mt-6 select-none overflow-visible">

      {/* Background Glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-cyan-200/25 blur-3xl pointer-events-none" />

      {/* Scaling Container to prevent mobile overflow */}
      <div className="relative w-full h-full max-w-[420px] scale-[0.8] xxs:scale-[0.88] xs:scale-[0.95] sm:scale-100 flex items-center justify-center origin-center">

        {/* Main Terminal Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[330px] xs:w-[350px] sm:w-[370px] bg-slate-950 rounded-3xl shadow-[0_24px_50px_rgba(6,182,212,0.15)] border border-slate-800 flex flex-col overflow-hidden z-10"
        >
          {/* Header */}
          <div className="px-4 py-3.5 border-b border-slate-900 flex items-center justify-between bg-slate-900/50">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-cyan-400" />
              <h4 className="font-mono font-bold text-slate-300 text-[12px] leading-tight">API Webhook Receiver</h4>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
              <span className="text-[9px] font-mono text-cyan-400">STATUS: 200</span>
            </div>
          </div>

          {/* Log Window */}
          <div className="p-4 flex-1 flex flex-col gap-2 h-[220px] overflow-y-auto font-mono text-[10px] bg-slate-950 text-slate-400">
            {logs.map((log) => (
              <div key={log.id} className="flex gap-2 items-start leading-relaxed">
                <span className="text-slate-600 flex-shrink-0">{log.time}</span>
                <span className={log.type === "success" ? "text-cyan-400" : log.type === "warn" ? "text-amber-400" : "text-slate-300"}>
                  {log.text}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom stats banner */}
          <div className="p-2.5 bg-slate-900/80 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span>Uptime: 99.99%</span>
            <span>Sync delay: &lt;2ms</span>
          </div>
        </motion.div>

        {/* Floating HubSpot Icon Card */}
        <motion.div
          variants={crmVariants}
          animate={step >= 1 ? "active" : "inactive"}
          className="absolute right-[-10px] sm:right-[-25px] top-[40px] bg-white rounded-2xl border border-slate-100 p-3 shadow-lg flex items-center justify-center z-20 w-12 h-12"
        >
          <img src="/imgs/brand_1.png" alt="HubSpot" className="w-7 h-7 object-contain" onError={(e) => { e.currentTarget.style.display = 'none' }} />
          <Database size={24} className="text-orange-500 absolute m-auto" style={{ zIndex: -1 }} />
        </motion.div>

        {/* Floating Salesforce Icon Card */}
        <motion.div
          variants={crmVariants}
          animate={step >= 2 ? "active" : "inactive"}
          className="absolute right-[-10px] sm:right-[-25px] top-[140px] bg-white rounded-2xl border border-slate-100 p-3 shadow-lg flex items-center justify-center z-20 w-12 h-12"
        >
          <img src="/imgs/brand_3.png" alt="Salesforce" className="w-7 h-7 object-contain" onError={(e) => { e.currentTarget.style.display = 'none' }} />
          <Server size={24} className="text-blue-500 absolute m-auto" style={{ zIndex: -1 }} />
        </motion.div>

        {/* Floating Sync Success badge (Bottom-Left) */}
        <AnimatePresence>
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={{ opacity: 1, x: -30, y: 110 }}
              exit={{ opacity: 0, x: -30, y: 30 }}
              className="absolute left-[-10px] sm:left-[-25px] bottom-[110px] bg-slate-900 text-white rounded-2xl p-3 shadow-xl flex items-center gap-2.5 border border-slate-800 z-20"
            >
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-cyan-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase">Contact Sync</span>
                <span className="text-[13px] font-extrabold tracking-tight text-white mt-0.5">
                  100% Synced <span className="text-cyan-400 font-normal text-[10px] ml-1">Live</span>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
};

export default IntegrationsPreviewUI;
