"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShoppingBag, Landmark, Plane, Wifi, Repeat, ArrowRight } from "lucide-react";

const BotsIndustryApplications: React.FC = () => {
  const industries = [
    {
      id: 1,
      title: "Retail & E-commerce",
      desc: "Send flash sale alerts, deliver dynamic discounts, recover abandoned carts, and broadcast order tracking details.",
      icon: ShoppingBag,
      color: "text-amber-600 bg-amber-50 border-amber-100/50",
    },
    {
      id: 2,
      title: "BFSI (Banking & Finance)",
      desc: "Dispatch instant transaction alerts, billing updates, credit card reminders, and security multi-factor OTPs.",
      icon: Landmark,
      color: "text-blue-600 bg-blue-50 border-blue-100/50",
    },
    {
      id: 3,
      title: "Travel & Hospitality",
      desc: "Broadcast flight check-in details, booking confirmations, hotel upgrades, boarding passes, and ticket schedules.",
      icon: Plane,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100/50",
    },
    {
      id: 4,
      title: "Telecom & Utility",
      desc: "Remind users of data plan expirations, bill due reminders, network updates, and personalized upgrade offerings.",
      icon: Wifi,
      color: "text-purple-600 bg-purple-50 border-purple-100/50",
    },
    {
      id: 5,
      title: "Subscription Businesses",
      desc: "Manage automated recurring billing prompts, onboarding messages, active trial warnings, and reactivation deals.",
      icon: Repeat,
      color: "text-rose-600 bg-rose-50 border-rose-100/50",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: {
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
        duration: 0.5, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <section className="w-full py-24 px-4 md:px-10 lg:px-40 bg-white relative overflow-hidden text-left">
      
      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #7C3AED 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">Target Verticals</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight heading-two">
            Industries That Benefit
          </h2>
          <p className="text-slate-500 text-[15px] md:text-[17px] font-medium max-w-2xl leading-relaxed">
            See how different business categories utilize Vialogue Bots engine to drive interactions, retain users, and scale communication channels.
          </p>
        </div>

        {/* Industries Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[32px] border border-slate-150 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between cursor-default group"
            >
              <div>
                {/* Icon Circle */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${item.color} mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  <item.icon size={26} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] md:text-[14px] text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Action Prompt */}
              <div className="flex items-center gap-2 mt-8 text-[11px] font-bold text-purple-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                <span>Explore flows</span>
                <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default BotsIndustryApplications;
