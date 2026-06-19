"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, ArrowRight, Bot, Cpu, Sparkles, MessageSquare } from "lucide-react";

const ConversationOverview: React.FC = () => {
  const points = [
    "Visual drag-and-drop conversation builder",
    "Automate responses across multiple channels",
    "Capture and qualify leads instantly",
    "Personalize customer interaction flows",
    "Reduce support workload with smart automation",
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
      
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #6366F1 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Column - Content */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={leftVariants}
          className="flex-1 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-indigo-700">Builder Overview</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight heading-two">
            Build Powerful Customer <span className="text-gradient">Conversations Without Coding</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed paragraph text-justify">
            Vialogue Conversation Builder helps you design automated customer flows that feel natural, interactive and personalized. Create chatbots and conversation journeys to deliver instant answers, qualify leads, and reduce support workload.
          </p>

          {/* Points list */}
          <ul className="space-y-3 pt-4">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[14px] md:text-[16px] text-slate-700 font-medium">
                <ShieldCheck className="text-indigo-500 flex-shrink-0" size={18} />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column - Chatbot Simulator Visual */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={rightVariants}
          className="flex-1 w-full max-w-[500px]"
        >
          <div className="bg-slate-50/50 rounded-[32px] p-6 border border-slate-100 relative overflow-hidden shadow-sm">
            <div className="absolute top-[-50px] right-[-50px] w-40 h-40 rounded-full bg-indigo-200/20 blur-2xl" />
            <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 rounded-full bg-violet-200/20 blur-2xl" />

            <div className="space-y-4 relative z-10 text-left">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">End User Interaction Chat</span>

              {/* Chat Bubble 1 */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white flex-shrink-0 text-xs font-bold">
                  B
                </div>
                <div className="bg-white border border-slate-150 rounded-2xl rounded-tl-none p-3.5 shadow-sm max-w-[85%]">
                  <p className="text-[12px] text-slate-700 leading-relaxed font-medium">
                    Hello! Welcome to Support. Please choose an option from the menu below:
                  </p>
                </div>
              </div>

              {/* Interactive buttons */}
              <div className="pl-10 space-y-2 max-w-[80%]">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-indigo-200 text-indigo-700 font-bold p-2.5 rounded-xl text-[11px] text-center shadow-sm cursor-default"
                >
                  📦 Check Order Status
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-slate-200 text-slate-600 font-bold p-2.5 rounded-xl text-[11px] text-center shadow-sm cursor-default"
                >
                  💳 Payment Issues
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-slate-200 text-slate-600 font-bold p-2.5 rounded-xl text-[11px] text-center shadow-sm cursor-default"
                >
                  👤 Talk to Human Agent
                </motion.div>
              </div>

              {/* Bottom dispatcher confirmation */}
              <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2 text-indigo-600 font-bold">
                  <Bot size={14} />
                  <span>Bot Simulator Active</span>
                </div>
                <span className="text-slate-400 font-medium">Response time: &lt;1s</span>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConversationOverview;
