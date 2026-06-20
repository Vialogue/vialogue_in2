"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Sparkles, MessageSquare, Send, CheckCircle2, Award, Heart } from "lucide-react";

const BotsPreviewUI: React.FC = () => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    let t3: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    // Step 0 -> 1: Click "Send Broadcast" (after 1.5s)
    t1 = setTimeout(() => {
      setStep(1);
    }, 1500);

    // Step 1 -> 2: Progress sending (after 2.5s)
    t2 = setTimeout(() => {
      setStep(2);
      let curr = 0;
      progressInterval = setInterval(() => {
        if (curr < 100) {
          curr += 10;
          setProgress(curr);
        } else {
          clearInterval(progressInterval);
          // Step 2 -> 3: Show completed stats (after progress reaches 100)
          setStep(3);
        }
      }, 150);
    }, 2500);

    // Step 3 -> 0: Reset (after 10s of total cycle)
    t3 = setTimeout(() => {
      setStep(0);
      setProgress(0);
    }, 10000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [step === 0]);

  const pointerVariants: Variants = {
    step0: { opacity: 0, x: 120, y: 350 },
    step1: { opacity: 1, x: 260, y: 155, transition: { duration: 0.8, ease: "easeInOut" } },
    step2: { opacity: 0, x: 260, y: 155, transition: { duration: 0.2 } },
    step3: { opacity: 0 },
  };

  return (
    <div className="relative w-full h-[440px] flex items-center justify-center font-sans mt-0 lg:-mt-6 select-none overflow-visible">

      {/* Background Glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-200/25 blur-3xl pointer-events-none" />

      {/* Scaling Container to prevent mobile overflow */}
      <div className="relative w-full h-full max-w-[420px] scale-[0.8] xxs:scale-[0.88] xs:scale-[0.95] sm:scale-100 flex items-center justify-center origin-center">

        {/* Main Console Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[330px] xs:w-[350px] sm:w-[370px] bg-white rounded-3xl shadow-[0_24px_50px_rgba(124,58,237,0.1)] border border-purple-100 flex flex-col overflow-hidden z-10"
        >
          {/* Header */}
          <div className="px-4 py-3.5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-purple-50/50 to-white">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                <Sparkles size={13} className="fill-purple-200" />
              </div>
              <h4 className="font-bold text-slate-800 text-[13px] leading-tight">Omnichannel Campaign Console</h4>
            </div>
            <span className="text-[9px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full font-bold border border-purple-100 uppercase tracking-wider">
              Bots Engine
            </span>
          </div>

          {/* Campaign Settings Pane */}
          <div className="p-4 flex-1 flex flex-col gap-4 bg-slate-50/50">

            {/* Field 1: Campaign details */}
            <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm flex items-center justify-between text-[11px]">
              <div>
                <span className="text-slate-400 block mb-0.5">Campaign Name</span>
                <strong className="text-slate-700">Summer Flash Sale Promo</strong>
              </div>
              <div className="text-right">
                <span className="text-slate-400 block mb-0.5">Audience</span>
                <strong className="text-slate-700">12,400 Users</strong>
              </div>
            </div>

            {/* Field 2: Target Channels selector */}
            <div className="space-y-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Target Channels</span>
              <div className="grid grid-cols-3 gap-2 text-[11px]">
                <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} className="fill-emerald-100 text-emerald-600" />
                  WhatsApp
                </div>
                <div className="p-2 rounded-xl bg-purple-50 border border-purple-100 text-purple-800 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} className="fill-purple-100 text-purple-600" />
                  RCS
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full border border-slate-300" />
                  SMS API
                </div>
              </div>
            </div>

            {/* Field 3: Campaign Trigger Status */}
            <div className="bg-white rounded-xl p-3.5 border border-slate-100 shadow-sm flex flex-col gap-3 min-h-[90px] justify-center relative">
              {step === 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold text-slate-500">Ready to broadcast campaign?</span>
                  <button className="px-3.5 py-1.5 bg-purple-600 text-white font-extrabold text-[11px] rounded-lg shadow-md shadow-purple-600/10">
                    Send Campaign
                  </button>
                </div>
              )}

              {step === 1 && (
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold text-slate-500">Ready to broadcast campaign?</span>
                  <motion.button
                    animate={{ scale: 0.95 }}
                    className="px-3.5 py-1.5 bg-purple-700 text-white font-extrabold text-[11px] rounded-lg shadow-md"
                  >
                    Send Campaign
                  </motion.button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-2 w-full">
                  <div className="flex justify-between text-[11px] font-bold text-slate-600">
                    <span>Broadcasting messages...</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-600"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="flex items-center gap-2.5 text-[11px] text-emerald-800 bg-emerald-50/50 border border-emerald-100 p-2.5 rounded-xl">
                  <CheckCircle2 size={15} className="text-emerald-600 fill-emerald-100 flex-shrink-0" />
                  <span className="font-bold leading-snug">Broadcast complete: 12,400 notifications dispatched!</span>
                </div>
              )}
            </div>

          </div>

          {/* Bottom stats banner */}
          <div className="p-2.5 bg-slate-900 border-t border-slate-950 flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>Uptime: 99.9%</span>
            <span>Delivery: 98.2%</span>
          </div>
        </motion.div>

        {/* Floating CTR Badge (Bottom-Left) */}
        <AnimatePresence>
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={{ opacity: 1, x: -30, y: 110 }}
              exit={{ opacity: 0, x: -30, y: 30 }}
              className="absolute left-[-10px] sm:left-[-25px] bottom-[110px] bg-slate-900 text-white rounded-2xl p-3 shadow-xl flex items-center gap-2.5 border border-slate-800 z-20"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <Heart size={14} className="text-emerald-400 fill-emerald-500/10" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase">Engagement Boost</span>
                <span className="text-[13px] font-extrabold tracking-tight text-white mt-0.5">
                  4.8x Higher <span className="text-emerald-400 font-normal text-[10px] ml-1">CTR</span>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated Mouse Cursor */}
        <motion.div
          variants={pointerVariants}
          animate={`step${step}`}
          className="absolute pointer-events-none z-50 text-slate-800"
          style={{ left: 0, top: 0 }}
        >
          <svg
            className="w-4 h-4 fill-slate-900 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]"
            viewBox="0 0 24 24"
          >
            <path d="M4 2l16 12.2-6.4 1.8 4 6.8-2.6 1.5-4-6.8-7 4.7z" />
          </svg>
        </motion.div>

      </div>

    </div>
  );
};

export default BotsPreviewUI;
