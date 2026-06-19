"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MessageSquareOff, Hourglass, UserX, AlertTriangle } from "lucide-react";

const AgentProblems: React.FC = () => {
  const challenges = [
    {
      id: 1,
      title: "Inconsistent Communication",
      desc: "Different agents use different tone and messaging, creating an unprofessional and fragmented customer experience.",
      icon: MessageSquareOff,
      metric: "Frustrated Users",
      color: "from-rose-500 to-orange-500 text-rose-500 bg-rose-50 border-rose-100",
    },
    {
      id: 2,
      title: "Slow Responses",
      desc: "Agents waste time switching between tools, searching for customer data, and typing repetitive replies manually.",
      icon: Hourglass,
      metric: "High Wait Times",
      color: "from-amber-500 to-orange-500 text-amber-500 bg-amber-50 border-amber-100",
    },
    {
      id: 3,
      title: "Lack of Customer Context",
      desc: "Without interaction history, it becomes difficult for agents to respond confidently and solve issues quickly.",
      icon: UserX,
      metric: "Repeated Queries",
      color: "from-red-500 to-rose-600 text-red-500 bg-red-50 border-red-100",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-40 bg-[#FFF8F8] relative overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-rose-100/30 blur-3xl pointer-events-none" />

      <div className="mx-auto relative z-10">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-rose-600 font-extrabold text-[12px] uppercase tracking-widest block flex items-center justify-center gap-1.5">
            <AlertTriangle size={13} className="animate-pulse" />
            Support Friction Points
          </span>
          <h2 className="text-center font-extrabold text-slate-900 leading-tight text-3xl md:text-5xl heading-two">
            The Problem: Support Teams Face <span className="text-rose-500">3 Challenges</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-500 to-orange-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Challenges Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {challenges.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-md border border-slate-100 hover:border-rose-200 rounded-[28px] p-6 shadow-[0_4px_25px_rgba(244,63,94,0.02)] hover:shadow-xl hover:shadow-rose-100/40 transition-all duration-300 flex flex-col group cursor-default"
            >
              {/* Header card icon */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.color} shadow-sm group-hover:scale-105 transition-transform`}>
                  <item.icon size={22} strokeWidth={2.2} />
                </div>
                <span className="text-[10px] font-bold text-rose-500 bg-rose-50/50 border border-rose-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {item.metric}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-800 tracking-tight leading-snug mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed font-light mb-4">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AgentProblems;
