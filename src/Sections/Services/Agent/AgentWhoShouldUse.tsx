"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { HeartHandshake, Headphones, TrendingUp, Wrench, ShieldAlert } from "lucide-react";

const AgentWhoShouldUse: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "Customer Support Teams",
      desc: "Ideal for teams handling high-volume customer inquiries who want to maintain zero SLA delays.",
      icon: HeartHandshake,
      color: "from-purple-500 to-indigo-600 bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      id: 2,
      title: "Contact Centers",
      desc: "Perfect for scaling omni-channel customer operations across web, SMS, WhatsApp, and phone channels.",
      icon: Headphones,
      color: "from-blue-500 to-indigo-600 bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      id: 3,
      title: "Sales Support Teams",
      desc: "Enables agents to follow up on sales enquiries, share booking links, and close deals quickly.",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-600 bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      id: 4,
      title: "Technical Support Teams",
      desc: "Empowers technical reps with guided product debug checklists and documentation search widgets.",
      icon: Wrench,
      color: "from-cyan-500 to-blue-600 bg-cyan-50 text-cyan-600 border-cyan-100",
    },
    {
      id: 5,
      title: "Complaint Resolution Desks",
      desc: "Helps escalations reps handle complex tickets with standardized, approved policy responses.",
      icon: ShieldAlert,
      color: "from-rose-500 to-red-600 bg-rose-50 text-rose-600 border-rose-100",
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
      
      {/* Background soft gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-100/20 blur-3xl pointer-events-none" />

      <div className="mx-auto relative z-10">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-purple-600 font-extrabold text-[12px] uppercase tracking-widest block">Target Audience</span>
          <h2 className="text-center font-extrabold text-slate-900 leading-tight text-3xl md:text-5xl heading-two">
            Who Should Use Agent Assist?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Audience Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white border border-slate-100 hover:border-purple-100/80 rounded-3xl p-5 shadow-[0_4px_20px_rgba(15,23,42,0.015)] hover:shadow-xl hover:shadow-purple-100/20 transition-all duration-300 flex flex-col items-center text-center group cursor-default"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${item.color} mb-5 transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                <item.icon size={24} strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="font-extrabold text-slate-800 text-[15px] leading-snug tracking-tight mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[12px] text-slate-400 leading-relaxed font-light mt-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AgentWhoShouldUse;
