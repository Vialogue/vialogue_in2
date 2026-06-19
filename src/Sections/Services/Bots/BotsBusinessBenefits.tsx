"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Target, Sparkles, Clock, BarChart3, HeartHandshake } from "lucide-react";

const BotsBusinessBenefits: React.FC = () => {
  const benefits = [
    {
      id: 1,
      title: "More Conversations",
      desc: "Drive targeted actions and user signups from highly segmented campaign lists.",
      stat: "3.2x",
      statDesc: "Conversion Boost",
      icon: Target,
      color: "from-purple-500 to-indigo-600 text-purple-600 bg-purple-50 border-purple-100/50",
    },
    {
      id: 2,
      title: "Higher Engagement",
      desc: "Reach clients on channels they check daily with media and rich messages.",
      stat: "+140%",
      statDesc: "CTR Increase",
      icon: Sparkles,
      color: "from-emerald-500 to-teal-600 text-emerald-600 bg-emerald-50 border-emerald-100/50",
    },
    {
      id: 3,
      title: "Real-Time Automation",
      desc: "Deliver critical updates, transaction verifications, and reminders instantly.",
      stat: "24/7",
      statDesc: "Instant Triggers",
      icon: Clock,
      color: "from-cyan-500 to-blue-600 text-cyan-600 bg-cyan-50 border-cyan-100/50",
    },
    {
      id: 4,
      title: "Improved ROI",
      desc: "Optimize campaign spend using details from A/B variants and delivery statistics.",
      stat: "45%",
      statDesc: "Cost Efficiency",
      icon: BarChart3,
      color: "from-indigo-500 to-blue-600 text-indigo-600 bg-indigo-50 border-indigo-100/50",
    },
    {
      id: 5,
      title: "Better Customer Retention",
      desc: "Re-engage cold leads and run scheduled customer lifecycle campaigns easily.",
      stat: "+38%",
      statDesc: "Lead Reactivation",
      icon: HeartHandshake,
      color: "from-rose-500 to-red-600 text-rose-600 bg-rose-50 border-rose-100/50",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
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
      
      {/* Background radial spots */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-100/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-indigo-100/20 blur-3xl pointer-events-none" />

      <div className="mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-purple-600 font-extrabold text-[12px] uppercase tracking-widest block">Bots Return</span>
          <h2 className="text-center font-extrabold text-slate-900 leading-tight text-3xl md:text-5xl heading-two">
            Business Benefits
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {benefits.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="glass-card flex flex-col p-6 rounded-[28px] border border-gray-100 bg-white/70 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group cursor-default"
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${item.color} shadow-sm group-hover:scale-105 transition-transform`}>
                  <item.icon size={20} strokeWidth={2.2} />
                </div>
              </div>

              {/* Statistics */}
              <div className="mb-4">
                <span className="text-4xl font-black text-slate-800 tracking-tight block">
                  {item.stat}
                </span>
                <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider mt-1 block">
                  {item.statDesc}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-bold text-slate-800 tracking-tight leading-snug mb-2">
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

export default BotsBusinessBenefits;
