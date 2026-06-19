"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { HelpCircle, UserPlus, Calendar, Package, ClipboardList, Rocket, ArrowRight } from "lucide-react";

const ConversationIndustries: React.FC = () => {
  const useCases = [
    {
      id: 1,
      title: "FAQ Bot Support",
      desc: "Instantly answer standard customer questions, resolve common issues, and share links or documentation 24/7.",
      icon: HelpCircle,
      color: "text-amber-600 bg-amber-50 border-amber-100/50",
    },
    {
      id: 2,
      title: "Lead Generation Bot",
      desc: "Interact with incoming visitors, qualify leads through preset questions, and sync contacts to CRM pipelines.",
      icon: UserPlus,
      color: "text-rose-600 bg-rose-50 border-rose-100/50",
    },
    {
      id: 3,
      title: "Appointment Booking",
      desc: "Guide users to select timeslots, confirm schedule bookings, and issue automated reminders inside the chat window.",
      icon: Calendar,
      color: "text-purple-600 bg-purple-50 border-purple-100/50",
    },
    {
      id: 4,
      title: "Order Tracking Info",
      desc: "Allow customers to retrieve real-time shipment updates, invoice receipts, and delivery statuses dynamically.",
      icon: Package,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100/50",
    },
    {
      id: 5,
      title: "Complaint Registration",
      desc: "Collect customer ticket inputs, register product complaints, and route severe issues directly to live agents.",
      icon: ClipboardList,
      color: "text-blue-600 bg-blue-50 border-blue-100/50",
    },
    {
      id: 6,
      title: "Onboarding Flows",
      desc: "Walk new users through product setup steps, account activations, and feature overviews with guided interactive paths.",
      icon: Rocket,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100/50",
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
      
      {/* Background grid dots */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #6366F1 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Heading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">Use Cases</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight heading-two">
            Industries &amp; Use Cases
          </h2>
          <p className="text-slate-500 text-[15px] md:text-[17px] font-medium max-w-2xl leading-relaxed">
            Discover the most common conversational customer journeys built and automated inside Vialogue visual flow builder.
          </p>
        </div>

        {/* Use Cases Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCases.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[32px] border border-slate-150 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between cursor-default group"
            >
              <div>
                {/* Icon Box */}
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

              {/* Action Link */}
              <div className="flex items-center gap-2 mt-8 text-[11px] font-bold text-indigo-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                <span>View template</span>
                <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ConversationIndustries;
