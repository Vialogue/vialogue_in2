"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Lock, CreditCard, UserCheck, FileText, Truck } from "lucide-react";

const IntegrationsUseCases: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "OTP Automation",
      desc: "Instantly trigger secure account verification codes right as the user hits onboarding steps in your application.",
      icon: Lock,
      color: "from-purple-500 to-indigo-600 bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      id: 2,
      title: "Payment Confirmation Loop",
      desc: "Deliver transaction notifications and digital invoice receipts across messaging channels upon invoice completion.",
      icon: CreditCard,
      color: "from-blue-500 to-indigo-600 bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      id: 3,
      title: "Lead Capture & CRM Sync",
      desc: "Automatically push chatbot prospects, name profiles, and contact credentials directly into your CRM pipeline.",
      icon: UserCheck,
      color: "from-emerald-500 to-teal-600 bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      id: 4,
      title: "Ticket Creation & Status Sync",
      desc: "Integrate helpdesks to sync ticket tracking numbers, log support replies, and auto-notify users of updates.",
      icon: FileText,
      color: "from-cyan-500 to-blue-600 bg-cyan-50 text-cyan-600 border-cyan-100",
    },
    {
      id: 5,
      title: "Delivery Status Alerts",
      desc: "Connect courier networks to trigger dispatch notices, shipping coordinates, and drop-off updates dynamically.",
      icon: Truck,
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
      
      {/* Background soft glow spots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-100/20 blur-3xl pointer-events-none" />

      <div className="mx-auto relative z-10">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-cyan-600 font-extrabold text-[12px] uppercase tracking-widest block">Integration Workflows</span>
          <h2 className="text-center font-extrabold text-slate-900 leading-tight text-3xl md:text-5xl heading-two">
            Integration Use Cases
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Use Cases Grid */}
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
              className="bg-white border border-slate-100 hover:border-cyan-100/80 rounded-3xl p-5 shadow-[0_4px_20px_rgba(15,23,42,0.015)] hover:shadow-xl hover:shadow-cyan-100/20 transition-all duration-300 flex flex-col items-center text-center group cursor-default"
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

export default IntegrationsUseCases;
