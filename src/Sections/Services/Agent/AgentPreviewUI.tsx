"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Sparkles, Send, Bot, User, ShieldCheck, CheckCircle2 } from "lucide-react";

interface Message {
  id: string;
  sender: "customer" | "agent";
  text: string;
  timestamp: string;
}

const AgentPreviewUI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "customer",
      text: "Hi, I purchased the subscription package but haven't received my onboarding email yet.",
      timestamp: "10:24 AM",
    },
  ]);
  const [step, setStep] = useState(0);
  // Steps:
  // 0: Initial customer message loaded. AI scanning...
  // 1: AI panel slides in with suggested response.
  // 2: Mouse cursor moves to "Insert Suggestion" button.
  // 3: Click event: button shrinks, cursor clicks.
  // 4: Suggested reply instantly sent, cursor disappears.
  // 5: Resolution tag shown.

  const suggestionText = "Hi there! I apologize for the delay. Let me resend your onboarding email and login credentials immediately. One moment please.";

  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    let t3: NodeJS.Timeout;
    let t4: NodeJS.Timeout;
    let t5: NodeJS.Timeout;
    let t6: NodeJS.Timeout;

    // Step 0 -> 1: Show suggestion panel (after 1.2s)
    t1 = setTimeout(() => {
      setStep(1);
    }, 1200);

    // Step 1 -> 2: Start mouse cursor movement (after 2.5s)
    t2 = setTimeout(() => {
      setStep(2);
    }, 2500);

    // Step 2 -> 3: Perform click (after 3.8s)
    t3 = setTimeout(() => {
      setStep(3);
    }, 3800);

    // Step 3 -> 4: Insert suggestion and send (after 4.2s)
    t4 = setTimeout(() => {
      setStep(4);
      setMessages((prev) => [
        ...prev,
        {
          id: "2",
          sender: "agent",
          text: suggestionText,
          timestamp: "10:25 AM",
        },
      ]);
    }, 4200);

    // Step 4 -> 5: Ticket marked as resolved (after 5.5s)
    t5 = setTimeout(() => {
      setStep(5);
    }, 5500);

    // Step 5 -> 0: Reset cycle (after 10s)
    t6 = setTimeout(() => {
      setStep(0);
      setMessages([
        {
          id: "1",
          sender: "customer",
          text: "Hi, I purchased the subscription package but haven't received my onboarding email yet.",
          timestamp: "10:24 AM",
        },
      ]);
    }, 10000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [messages.length === 1 && step === 0]);

  // Framer Motion cursor coordinates
  // Initial: x: 120, y: 380 (near agent keyboard inputs)
  // Target (AI Button): x: 260, y: 280
  const cursorVariants: Variants = {
    step0: { opacity: 0, x: 120, y: 380, scale: 1 },
    step1: { opacity: 0, x: 120, y: 380, scale: 1 },
    step2: { opacity: 1, x: 270, y: 285, scale: 1, transition: { duration: 1.1, ease: "easeInOut" } },
    step3: { opacity: 1, x: 270, y: 285, scale: 0.85, transition: { duration: 0.15 } },
    step4: { opacity: 0, x: 270, y: 285, scale: 1, transition: { duration: 0.3 } },
    step5: { opacity: 0, x: 120, y: 380, scale: 1 },
  };

  return (
    <div className="relative w-full h-[440px] flex items-center justify-center font-sans mt-0 lg:-mt-6 select-none overflow-visible">

      {/* Background Glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-200/25 blur-3xl pointer-events-none" />

      {/* Scaling Container to prevent mobile overflow */}
      <div className="relative w-full h-full max-w-[420px] scale-[0.8] xxs:scale-[0.88] xs:scale-[0.95] sm:scale-100 flex items-center justify-center origin-center">

        {/* Main Chat Window Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[330px] xs:w-[350px] sm:w-[370px] bg-white rounded-3xl shadow-[0_24px_50px_rgba(124,58,237,0.1)] border border-purple-100 flex flex-col overflow-hidden z-10"
        >
          {/* Header */}
          <div className="px-4 py-3.5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-purple-50/50 to-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold relative">
                <span className="text-xs">VD</span>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-[13px] leading-tight">Vialogue Agent Hub</h4>
                <p className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Agent Desk
                </p>
              </div>
            </div>
            {step === 5 ? (
              <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-full font-bold text-[9px] tracking-wider uppercase">
                Resolved
              </span>
            ) : (
              <div className="px-2 py-0.5 bg-purple-50 border border-purple-100 rounded-full flex items-center gap-1.5">
                <ShieldCheck size={11} className="text-purple-600" />
                <span className="text-[9px] font-bold text-purple-700 tracking-wider uppercase">Secure</span>
              </div>
            )}
          </div>

          {/* Chat Logs Area */}
          <div className="p-4 flex-1 flex flex-col gap-4 h-[240px] overflow-y-auto bg-slate-50/50">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className={`flex gap-2.5 max-w-[85%] ${msg.sender === "agent" ? "self-end flex-row-reverse" : "self-start"
                    }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] ${msg.sender === "agent" ? "bg-purple-600 text-white" : "bg-slate-200 text-slate-600"
                      }`}
                  >
                    {msg.sender === "agent" ? <Bot size={12} /> : <User size={12} />}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div
                      className={`px-3 py-2 rounded-2xl text-[12px] leading-relaxed ${msg.sender === "agent"
                          ? "bg-purple-600 text-white rounded-tr-none shadow-md shadow-purple-600/10"
                          : "bg-white text-slate-700 border border-slate-100 rounded-tl-none"
                        }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[8px] text-gray-400 self-end mt-0.5">{msg.timestamp}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Input Bar */}
          <div className="p-2.5 bg-white border-t border-gray-100 flex items-center gap-2">
            <div className="flex-1 bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 text-[11px] text-slate-400 italic flex items-center">
              {step === 4 ? "Processing..." : "Type a response or use Agent Assist..."}
            </div>
            <button className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white shadow-md shadow-purple-600/20">
              <Send size={13} />
            </button>
          </div>
        </motion.div>

        {/* Overlapping Suggestions Overlay Panel */}
        <AnimatePresence>
          {step >= 1 && step <= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50, y: -20 }}
              animate={{ opacity: 1, scale: 1, x: 20, y: 30 }}
              exit={{ opacity: 0, scale: 0.9, x: 50, y: -20 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="absolute right-[-10px] sm:right-[-20px] top-[130px] w-[230px] sm:w-[250px] bg-white rounded-2xl border border-purple-200 shadow-[0_12px_40px_rgba(124,58,237,0.15)] p-3.5 z-20"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-5.5 h-5.5 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Sparkles size={11} className="text-purple-600 fill-purple-200" />
                </div>
                <h5 className="font-extrabold text-[11px] text-slate-800 tracking-tight">AI Agent Assist</h5>
                <span className="ml-auto text-[8px] px-1.5 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full font-bold">
                  98% Conf.
                </span>
              </div>

              <div className="bg-purple-50/50 rounded-xl p-2 border border-purple-100/50 mb-2.5">
                <span className="text-[9px] font-bold text-purple-800 block mb-0.5">Recommended Response:</span>
                <p className="text-[10px] text-slate-600 leading-normal line-clamp-2">
                  {suggestionText}
                </p>
              </div>

              {/* Clickable suggestion button */}
              <motion.button
                animate={{
                  scale: step === 3 ? 0.95 : 1,
                  backgroundColor: step === 3 ? "#4c1d95" : "#7c3aed",
                }}
                className="w-full py-1.5 bg-purple-600 hover:bg-purple-700 rounded-xl text-white text-[10px] font-bold flex items-center justify-center gap-1.5 shadow-md shadow-purple-600/20"
              >
                <CheckCircle2 size={11} />
                Insert Suggestion
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Performance Indicator (Bottom-Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 30 }}
          animate={{ opacity: 1, x: -30, y: 110 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute left-[-10px] sm:left-[-25px] bottom-[110px] bg-slate-900 text-white rounded-2xl p-3 shadow-xl flex items-center gap-2.5 border border-slate-800 z-20"
        >
          <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
            <Sparkles size={14} className="text-purple-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase">Avg. Resolution</span>
            <span className="text-[13px] font-extrabold tracking-tight text-white mt-0.5">
              45s <span className="text-emerald-400 font-normal text-[10px] ml-1">(-60%)</span>
            </span>
          </div>
        </motion.div>

        {/* Animated Mouse Cursor */}
        <motion.div
          variants={cursorVariants}
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

export default AgentPreviewUI;
