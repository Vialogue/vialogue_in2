"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Clock, CheckCircle2, Smile, Activity } from "lucide-react";

const AgentBusinessBenefits: React.FC = () => {
  const benefits = [
    {
      id: 1,
      title: "Reduce Average Handling Time",
      shortcut: "AHT Index",
      desc: "Agents resolve queries faster using AI-powered reply suggestions and automated quick actions.",
      stat: "-60%",
      statDesc: "Faster Resolution",
      icon: Clock,
      color: "from-purple-500 to-indigo-600 text-purple-600 bg-purple-50 border-purple-100/50",
    },
    {
      id: 2,
      title: "Improve First Call Resolution",
      shortcut: "FCR Rating",
      desc: "Equip support reps with immediate customer history and CRM profile details on one dashboard.",
      stat: "95%",
      statDesc: "First-Touch Resolution",
      icon: CheckCircle2,
      color: "from-emerald-500 to-teal-600 text-emerald-600 bg-emerald-50 border-emerald-100/50",
    },
    {
      id: 3,
      title: "Enhance Customer Experience",
      shortcut: "CSAT Score",
      desc: "Deliver quick, consistent, and highly personalized answers across WhatsApp, RCS and SMS.",
      stat: "+45%",
      statDesc: "Satisfaction Boost",
      icon: Smile,
      color: "from-cyan-500 to-blue-600 text-cyan-600 bg-cyan-50 border-cyan-100/50",
    },
    {
      id: 4,
      title: "Increase Operational Efficiency",
      shortcut: "SLA Output",
      desc: "Automate manual tasks and ticketing flows to boost agent productivity and lower operational costs.",
      stat: "2.5x",
      statDesc: "Ticket Capacity",
      icon: Activity,
      color: "from-indigo-500 to-blue-600 text-indigo-600 bg-indigo-50 border-indigo-100/50",
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
      
      {/* Background soft glow spots */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-100/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-cyan-100/20 blur-3xl pointer-events-none" />

      <div className="mx-auto relative z-10">
        
        {/* Heading block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-purple-600 font-extrabold text-[12px] uppercase tracking-widest block">Operational Impact</span>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="glass-card flex flex-col p-6 rounded-[28px] border border-gray-100 bg-white/70 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group cursor-default"
            >
              {/* Icon & Shortcut info header */}
              <div className="flex items-center justify-between mb-5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${item.color} shadow-sm group-hover:scale-105 transition-transform`}>
                  <item.icon size={20} strokeWidth={2.2} />
                </div>
                <span className="text-[9px] font-bold text-slate-400 bg-slate-100/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {item.shortcut}
                </span>
              </div>

              {/* Statistics Showcase */}
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

export default AgentBusinessBenefits;
