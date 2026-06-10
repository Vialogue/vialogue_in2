"use client";

import React from "react";
import { MessageSquare, MessageCircle, Send, Key, Megaphone, Bot, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "SMS Platform",
    description: "High-deliverability bulk SMS campaigns, alerts, and customer notifications via direct carrier routing.",
    icon: MessageSquare,
    link: "/sms",
    color: "text-blue-600 bg-blue-50 border-blue-100",
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
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
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
    color: "text-purple-600 bg-purple-50 border-purple-100",
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
    color: "text-amber-600 bg-amber-50 border-amber-100",
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
    color: "text-rose-600 bg-rose-50 border-rose-100",
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
    color: "text-cyan-600 bg-cyan-50 border-cyan-100",
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
    <section className="py-24 bg-[#FFFFFF] relative z-10 border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 select-none">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
              Unified Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-slate-900 leading-tight">
            Powering Every Conversational Channel
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-light">
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
                className="group bg-white border border-slate-200/85 rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.015)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.05)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between relative"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-brand-purple group-hover:to-brand-cyan transition-colors" />

                <div>
                  {/* Card Header (Icon, Title, Badge) */}
                  <div className="flex justify-between items-start mb-6 select-none">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color} shadow-xs`}>
                      <Icon size={24} />
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-250">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-3 mb-8">
                    {item.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 select-none">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={10} className="text-emerald-600 font-bold" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer CTA */}
                <div className="pt-5 border-t border-slate-100">
                  <Link 
                    href={item.link} 
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-350 hover:bg-slate-50 text-xs font-bold text-slate-700 hover:text-slate-900 transition-all cursor-pointer"
                  >
                    Explore Channel <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
