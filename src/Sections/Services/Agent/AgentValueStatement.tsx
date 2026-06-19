"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Clock, Target, MessageSquareCode, Smile } from "lucide-react";

const AgentValueStatement: React.FC = () => {
  const values = [
    {
      id: 1,
      title: "Reduce Handling Time",
      description: "Agents resolve chats up to 60% faster with real-time suggested replies and ready-to-use answer templates.",
      icon: Clock,
      color: "from-indigo-500 to-blue-600 shadow-indigo-100 bg-indigo-50/50 text-indigo-600 border-indigo-100/50",
    },
    {
      id: 2,
      title: "Improve Resolution Accuracy",
      description: "Smart agent guides provide steps based on ticket keywords, ensuring answers are compliant and correct.",
      icon: Target,
      color: "from-emerald-500 to-teal-600 shadow-emerald-100 bg-emerald-50/50 text-emerald-600 border-emerald-100/50",
    },
    {
      id: 3,
      title: "Deliver Consistent Communication",
      description: "Standardize agent tone across teams using approved brand scripts, ensuring unified support quality.",
      icon: MessageSquareCode,
      color: "from-purple-500 to-violet-600 shadow-purple-100 bg-purple-50/50 text-purple-600 border-purple-100/50",
    },
    {
      id: 4,
      title: "Increase Customer Satisfaction",
      description: "Provide quick, accurate support across WhatsApp, RCS and web chat, creating delightful support experiences.",
      icon: Smile,
      color: "from-amber-500 to-orange-600 shadow-amber-100 bg-amber-50/50 text-amber-600 border-amber-100/50",
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
    <section className="w-full py-20 px-4 md:px-10 lg:px-40 bg-[#FDF7FF] relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-100/30 blur-3xl pointer-events-none" />

      <div className="mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-purple-600 font-extrabold text-[12px] uppercase tracking-widest block">Core Business Value</span>
          <h2 className="text-center font-extrabold text-slate-900 leading-tight text-3xl md:text-5xl heading-two">
            Primary Value Statement
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="glass-card flex flex-col p-6 rounded-[24px] border border-gray-100 bg-white/70 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              {/* Icon Container with glowing spot */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${item.color} mb-6 transition-transform duration-300 group-hover:scale-110 shadow-sm relative overflow-hidden`}>
                {/* Micro spot element inside */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon size={26} strokeWidth={2.2} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-800 tracking-tight leading-snug mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed font-light mt-auto">
                {item.description}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AgentValueStatement;
