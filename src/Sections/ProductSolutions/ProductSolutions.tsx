"use client";

import React from "react";
import { MessageSquare, MessageCircle, Send, Key, Megaphone, Bot } from "lucide-react";

const solutions = [
  {
    title: "SMS Platform",
    description: "High-deliverability bulk SMS campaigns, alerts, and customer notifications via direct carrier routing.",
    icon: MessageSquare,
    link: "/sms",
    color: "bg-blue-600 text-white shadow-blue-200/50",
    badge: null,
    features: [
      "Direct carrier network routes",
      "Low-latency transactional delivery",
      "Smart local sender ID masking"
    ]
  },
  {
    title: "WhatsApp Business API",
    description: "Connect verified brand accounts to automate customer service, send orders, and trigger marketing flows.",
    icon: MessageCircle,
    link: "/whatsapp",
    color: "bg-emerald-600 text-white shadow-emerald-200/50",
    badge: "Popular",
    features: [
      "Official green verified badge support",
      "Interactive quick-reply action buttons",
      "Template message broadcast engine"
    ]
  },
  {
    title: "RCS Messaging",
    description: "Next-gen rich texting with verified sender profiles, interactive buttons, and high-engagement media carousels.",
    icon: Send,
    link: "/rcs",
    color: "bg-[#884CED] text-white shadow-purple-200/50",
    badge: "Next-Gen",
    features: [
      "Rich media and interactive cards",
      "Suggested action buttons & replies",
      "Detailed read receipts & statistics"
    ]
  },
  {
    title: "OTP Services",
    description: "Ultra-fast authentication delivery with automated SMS fallback routing and multi-channel failover protection.",
    icon: Key,
    link: "/contact",
    color: "bg-amber-600 text-white shadow-amber-200/50",
    badge: "Sub-3s Delivery",
    features: [
      "Anti-fraud validation controls",
      "Automatic failover routing fallback",
      "99.99% authentication success rate"
    ]
  },
  {
    title: "Campaign Automation",
    description: "Plan, schedule, and orchestrate customer outreach campaigns across channels using smart segment filters.",
    icon: Megaphone,
    link: "/bots",
    color: "bg-rose-600 text-white shadow-rose-200/50",
    badge: null,
    features: [
      "Visual multi-channel flow designer",
      "Broadcasting and scheduler engines",
      "Real-time deliverability statistics"
    ]
  },
  {
    title: "AI Chatbots",
    description: "Empower support teams with automated agent assist tools, NLP response bots, and live agent escalations.",
    icon: Bot,
    link: "/agent",
    color: "bg-cyan-600 text-white shadow-cyan-200/50",
    badge: null,
    features: [
      "Instant FAQ response automation",
      "Lead generation bot templates",
      "Seamless live-chat agent handoff"
    ]
  },
];

export default function ProductSolutions() {
  return (
    <section className="py-24 bg-transparent relative z-10 border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 select-none">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
              Unified Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-950 leading-tight">
            Powering Every Conversational <span className="text-[#884CED]">Channel</span>
          </h2>
          <p className="text-slate-800 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Deploy scalable messaging APIs and smart campaign tools designed to drive higher conversions, build client trust, and scale with ease.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(124,58,237,0.1)] transition-all duration-300 flex flex-col items-center text-center border border-slate-100 overflow-hidden"
              >
                {/* Hover Gradient Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7C3AED] to-[#F9A8D4] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${item.color}`}>
                  <Icon size={28} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mb-4">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
