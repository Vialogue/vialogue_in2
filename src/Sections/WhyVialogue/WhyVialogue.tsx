"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Zap, Clock, ThumbsUp } from "lucide-react";

const stats = [
  {
    value: "99.9%",
    label: "Uptime SLA Guarantee",
    desc: "Carrier-grade infrastructure with automated route failovers to keep you online 24/7.",
    icon: Clock,
    color: "text-brand-purple",
  },
  {
    value: "10B+",
    label: "Messages Delivered",
    desc: "Scale with confidence. We deliver high-throughput bulk campaigns and critical alerts daily.",
    icon: ThumbsUp,
    color: "text-brand-purple",
  },
  {
    value: "256-bit",
    label: "ISO 27001 Security",
    desc: "End-to-end data encryption, strict access logs, and complete GDPR/HIPAA compliance.",
    icon: ShieldAlert,
    color: "text-brand-purple",
  },
  {
    value: "< 10ms",
    label: "Low-Latency API Response",
    desc: "Get fast OTP delivery and real-time webhook callbacks over optimized pipelines.",
    icon: Zap,
    color: "text-brand-purple",
  },
];

export default function WhyVialogue() {
  return (
    <section className="py-24 bg-[#FFFFFF] relative z-10">
      {/* Visual background gradient blobbies */}
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
              Why Partner With Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-950">
            Engineered for <span className="text-gradient">Reliability</span>
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-normal max-w-xl mx-auto">
            Vialogue is built from the ground up to handle high-volume enterprise communications securely.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const StatIcon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl glass-card p-6 flex flex-col justify-between items-center text-center overflow-hidden"
              >
                {/* Backlight on hover */}
                <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="space-y-4 relative z-10">
                  {/* Icon */}
                  <span className={`p-3 rounded-2xl bg-slate-100 border border-slate-200 inline-block ${item.color}`}>
                    <StatIcon size={22} />
                  </span>

                  {/* Stat Value */}
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {item.value}
                  </h3>

                  {/* Stat Label */}
                  <h4 className="text-sm font-bold text-slate-800">
                    {item.label}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
