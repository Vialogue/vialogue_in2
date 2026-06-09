"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, MessageCircle, Send, Key, Megaphone, Bot, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "SMS Platform",
    description: "High deliverability, low-latency carrier integrations for bulk notifications, alerts, and customer outreach.",
    icon: MessageSquare,
    link: "/sms",
    color: "from-blue-500 to-indigo-500",
    glowColor: "rgba(37, 99, 235, 0.05)",
  },
  {
    title: "WhatsApp Business API",
    description: "Connect verified accounts to automate customer service, send orders, and trigger conversational flows.",
    icon: MessageCircle,
    link: "/whatsapp",
    color: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.05)",
  },
  {
    title: "RCS Messaging",
    description: "Next-gen rich texting with branded sender profiles, interactive buttons, carousels, and verified checkmarks.",
    icon: Send,
    link: "/rcs",
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.05)",
  },
  {
    title: "OTP Services",
    description: "Ultra-fast authentication delivery with automated SMS fallback routing and multi-channel failover protection.",
    icon: Key,
    link: "/contact",
    color: "from-amber-500 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.05)",
  },
  {
    title: "Campaign Automation",
    description: "Plan, schedule, and orchestrate messaging campaigns across multiple channels using smart audience segments.",
    icon: Megaphone,
    link: "/bots",
    color: "from-rose-500 to-red-500",
    glowColor: "rgba(244, 63, 94, 0.05)",
  },
  {
    title: "AI Chatbots",
    description: "Empower support teams with automated agent assist widgets, NLP response bots, and direct live-chat escalations.",
    icon: Bot,
    link: "/agent",
    color: "from-cyan-500 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.05)",
  },
];

export default function ProductSolutions() {
  return (
    <section className="py-24 bg-[#FFFFFF] relative z-10">
      {/* Background glowing blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
              Unified Solutions
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900"
          >
            Powering Every Conversational Channel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-light"
          >
            Deploy scalable messaging APIs and smart campaign tools designed to drive higher conversions, build client trust, and scale with ease.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl glass-card p-6 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Background glow hover effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${item.glowColor}, transparent 70%)`
                  }}
                />

                {/* Card Icon & Title */}
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-purple transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Link Trigger */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link href={item.link} className="text-xs font-semibold text-slate-600 group-hover:text-brand-purple transition-colors flex items-center gap-1.5">
                    Explore Channel <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
