"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MessageSquare, Cpu, Sparkles, Send, BarChart3 } from "lucide-react";

const AgentHowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      num: "01",
      title: "Customer Sends Query",
      desc: "Sends a request via WhatsApp, RCS, SMS, or web widget.",
      icon: MessageSquare,
      color: "text-purple-600 bg-purple-50 border-purple-100",
    },
    {
      id: 2,
      num: "02",
      title: "Agent Assist Analyzes",
      desc: "Instant NLP processing scans keywords, user context, and history.",
      icon: Cpu,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      id: 3,
      num: "03",
      title: "Suggests Replies",
      desc: "Generates smart canned responses and next-step checklist guides.",
      icon: Sparkles,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      id: 4,
      num: "04",
      title: "Agent Sends Reply",
      desc: "Agent approves or modifies the suggestion and hits send with confidence.",
      icon: Send,
      color: "text-cyan-600 bg-cyan-50 border-cyan-100",
    },
    {
      id: 5,
      num: "05",
      title: "Analytics Track",
      desc: "Dashboard captures resolution times, SLA health, and productivity score.",
      icon: BarChart3,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-40 bg-[#FDF7FF] relative overflow-hidden">
      
      {/* Background soft gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-200/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-200/10 blur-3xl pointer-events-none" />

      <div className="mx-auto relative z-10">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-purple-600 font-extrabold text-[12px] uppercase tracking-widest block">Workflow Pipeline</span>
          <h2 className="text-center font-extrabold text-slate-900 leading-tight text-3xl md:text-5xl heading-two">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Steps Flow (Desktop view: Horizontal Pipeline / Mobile view: Vertical Timeline) */}
        <div className="relative">
          
          {/* Connecting Line - Desktop only */}
          <div className="hidden lg:block absolute top-[60px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-purple-100 via-indigo-100 to-cyan-100 z-0">
            {/* Animated glowing pulse running along the line */}
            <div className="w-20 h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-flow-pulse absolute left-0" />
          </div>

          {/* Grid Layout */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="flex flex-col items-center lg:items-start group relative"
              >
                {/* Step Connector Line - Mobile only */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden absolute top-[70px] left-1/2 -translate-x-1/2 w-[2px] h-[90px] bg-gradient-to-b from-purple-100 to-indigo-100 z-0" />
                )}

                {/* Step Icon Badge */}
                <div className="relative flex items-center justify-center mb-6">
                  {/* Outer glowing border ring */}
                  <div className="w-16 h-16 rounded-[22px] bg-white border border-slate-100 flex items-center justify-center shadow-lg group-hover:border-purple-300 group-hover:shadow-purple-100/50 transition-all duration-300 z-10 relative">
                    <step.icon size={22} className="text-slate-700 group-hover:text-purple-600 transition-colors" />
                    
                    {/* Tiny Number Badge */}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center tracking-tight border-2 border-white shadow-md">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Step Card Content */}
                <div className="bg-white/80 backdrop-blur-sm border border-slate-100 hover:border-purple-100 rounded-3xl p-5 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-xl hover:shadow-purple-100/25 transition-all duration-300 w-full text-center lg:text-left z-10">
                  <h4 className="font-extrabold text-slate-800 text-[15px] leading-snug tracking-tight mb-2">
                    {step.title}
                  </h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>

      {/* Embedded Animation CSS Style */}
      <style jsx global>{`
        @keyframes flow-pulse {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .animate-flow-pulse {
          animation: flow-pulse 4s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default AgentHowItWorks;
