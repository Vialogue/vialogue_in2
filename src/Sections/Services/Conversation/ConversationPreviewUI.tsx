"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Play, MessageSquare, GitFork, UserCheck, ArrowRight, Plus } from "lucide-react";

const ConversationPreviewUI: React.FC = () => {
  const [step, setStep] = useState(0); 

  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    let t3: NodeJS.Timeout;

    // Cycle:
    // Step 0: Cursor moves to "+" add node (after 1s)
    // Step 1: Cursor clicks, "Send Options" node appears (after 2s)
    // Step 2: Connection line pulses and path glows (after 4s)
    // Step 3: Resets (after 7s)
    
    t1 = setTimeout(() => setStep(1), 1200);
    t2 = setTimeout(() => setStep(2), 2600);
    t3 = setTimeout(() => {
      setStep(0);
    }, 7000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [step === 0]);

  const cursorVariants: Variants = {
    step0: { opacity: 1, x: 280, y: 350 },
    step1: { opacity: 1, x: 190, y: 190, transition: { duration: 1, ease: "easeInOut" } },
    step2: { opacity: 0, transition: { duration: 0.3 } },
    step3: { opacity: 0 },
  };

  return (
    <div className="relative w-full h-[440px] flex items-center justify-center font-sans mt-0 lg:-mt-6 select-none overflow-visible">
      {/* Background radial glow */}
      <div className="absolute w-[320px] h-[320px] rounded-full bg-violet-200/25 blur-3xl pointer-events-none" />

      {/* Dotted Grid Background Box */}
      <div className="relative w-full h-full max-w-[420px] scale-[0.8] xxs:scale-[0.88] xs:scale-[0.95] sm:scale-100 flex items-center justify-center origin-center">
        
        {/* Main Editor Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[330px] xs:w-[350px] sm:w-[370px] h-[380px] bg-slate-950 rounded-3xl border border-slate-800 shadow-[0_24px_50px_rgba(124,58,237,0.15)] flex flex-col overflow-hidden relative"
        >
          {/* Editor Grid Lines */}
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none" 
            style={{
              backgroundImage: `radial-gradient(#ffffff 1px, transparent 0)`,
              backgroundSize: "16px 16px"
            }}
          />

          {/* Top Bar */}
          <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between bg-slate-900/60 backdrop-blur-md relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <h4 className="font-extrabold text-slate-300 text-[11px] uppercase tracking-wider ml-2">Visual Flow Builder</h4>
            </div>
            <span className="text-[9px] bg-violet-500/10 text-violet-400 px-2 py-0.5 rounded-full font-bold border border-violet-500/20">
              Draft
            </span>
          </div>

          {/* Canvas area */}
          <div className="flex-1 p-4 flex flex-col items-center gap-4 relative justify-center overflow-hidden">
            
            {/* Node 1: Start Trigger */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 border border-slate-800 w-[200px] rounded-xl p-2.5 flex items-center gap-2.5 shadow-sm relative z-10"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Play size={12} className="fill-emerald-400/20" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Trigger</span>
                <span className="text-[11px] font-bold text-slate-200">User Opt-In</span>
              </div>
            </motion.div>

            {/* Glowing Connector Line 1 */}
            <div className="w-0.5 h-8 bg-slate-800 relative">
              <motion.div 
                className="absolute top-0 left-[-1px] w-[3px] h-full bg-violet-500 rounded-full"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>

            {/* Node 2: Send Message */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-slate-900 border border-slate-800 w-[200px] rounded-xl p-2.5 flex items-center gap-2.5 shadow-sm relative z-10"
            >
              <div className="w-6 h-6 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <MessageSquare size={12} className="fill-violet-400/20" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Action</span>
                <span className="text-[11px] font-bold text-slate-200">Send Welcome Menu</span>
              </div>
            </motion.div>

            {/* Dynamic Add Node button or Connection */}
            {step === 0 && (
              <div className="w-full flex flex-col items-center">
                <div className="w-0.5 h-6 bg-slate-800" />
                <button className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors relative z-10">
                  <Plus size={12} />
                </button>
              </div>
            )}

            {step >= 1 && (
              <div className="w-full flex flex-col items-center">
                <div className="w-0.5 h-6 bg-slate-800 relative">
                  <motion.div 
                    className="absolute top-0 left-[-1px] w-[3px] h-full bg-violet-500 rounded-full"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                
                {/* Node 3: Flow Condition Branch */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-slate-900 border border-violet-500/40 w-[200px] rounded-xl p-2.5 flex items-center gap-2.5 shadow-lg relative z-10"
                >
                  <div className="w-6 h-6 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400">
                    <GitFork size={12} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Router</span>
                    <span className="text-[11px] font-bold text-slate-200">Check User Intent</span>
                  </div>
                </motion.div>
              </div>
            )}

          </div>

          {/* Dotted Connection State Indicator */}
          <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[9px] text-slate-500 font-mono">
            <span>Status: Operational</span>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Synced</span>
            </div>
          </div>
        </motion.div>

        {/* Animated Hand Cursor */}
        <motion.div
          variants={cursorVariants}
          animate={`step${step}`}
          className="absolute pointer-events-none z-50 text-white"
          style={{ left: 0, top: 0 }}
        >
          <svg
            className="w-4 h-4 fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            viewBox="0 0 24 24"
          >
            <path d="M4 2l16 12.2-6.4 1.8 4 6.8-2.6 1.5-4-6.8-7 4.7z" />
          </svg>
        </motion.div>

      </div>
    </div>
  );
};

export default ConversationPreviewUI;
