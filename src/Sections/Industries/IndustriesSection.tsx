"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, HeartPulse, ShoppingCart, GraduationCap, Building2, Truck, Smartphone } from "lucide-react";

const industries = [
  {
    id: "bfsi",
    name: "BFSI",
    icon: ShieldCheck,
    title: "Secure, Low-Latency Financial Messaging",
    description: "Deliver instant transaction alerts, high-priority OTPs, and multi-factor login validations over optimized global routes with maximum compliance and security.",
    stats: "99.99% OTP Delivery",
    useCase: "Instant SMS Alerts, WhatsApp Account statements, Secure RCS logins.",
    mockMessage: {
      title: "Secure OTP Notification",
      body: "Vialogue Bank: Your security code is 840291. Valid for 3 minutes. Do not share this OTP.",
      sender: "BANKSEC",
    },
    theme: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      border: "border-blue-200",
    }
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    title: "Patient Engagement & Appointment Alerts",
    description: "Automate appointment confirmations, prescription refills, and medical alerts over WhatsApp and SMS channels while maintaining strict data privacy protocols.",
    stats: "75% No-Show Reduction",
    useCase: "Appointment scheduling, Prescription reminders, Healthcare updates.",
    mockMessage: {
      title: "Clinic Reminder",
      body: "Hi Jane, your dental consult is tomorrow at 10:00 AM. Reply 1 to CONFIRM or 2 to RESCHEDULE.",
      sender: "MEDCARE",
    },
    theme: {
      bg: "bg-emerald-100",
      text: "text-emerald-800",
      border: "border-emerald-200",
    }
  },
  {
    id: "ecommerce",
    name: "Ecommerce",
    icon: ShoppingCart,
    title: "Omnichannel Delivery & Shipping Alerts",
    description: "Trigger real-time shipment tracking, dispatch notifications, feedback surveys, and rich-card promotional WhatsApp catalogues directly to buyers.",
    stats: "40% Higher Cart Recovery",
    useCase: "Order tracking, Cart abandonment reminders, Product catalog broadcasts.",
    mockMessage: {
      title: "Shipping Alert",
      body: "Your Vialogue Shop order #9480 has been shipped! Track delivery: https://vialogue.io/track/9480",
      sender: "SHOPPING",
    },
    theme: {
      bg: "bg-amber-100",
      text: "text-amber-800",
      border: "border-amber-200",
    }
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    title: "Instant Alerts & Class Coordinators",
    description: "Broadcast campus announcements, exam schedules, fee reminders, and virtual class links securely to parents and students alike.",
    stats: "98% Reach Rate",
    useCase: "Student notification broadcasts, Exam timetable reminders, Fee due alerts.",
    mockMessage: {
      title: "Campus Notification",
      body: "Dear Parent, the mid-term exam schedule has been published. View PDF online: https://vialogue.io/exams",
      sender: "ACADEMY",
    },
    theme: {
      bg: "bg-purple-100",
      text: "text-purple-800",
      border: "border-purple-200",
    }
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: Building2,
    title: "Smart Lead Tracking & Viewing Schedules",
    description: "Follow up instantly with prospective property buyers, schedule viewings automatically over WhatsApp API, and send site directions securely.",
    stats: "2.5x Lead Engagement",
    useCase: "Lead nurturing, Viewing schedule coordination, Agent connection bots.",
    mockMessage: {
      title: "Property Viewing",
      body: "Hi Mark, your viewing for Apartment 4B is set for Saturday 2:00 PM. Meet agent Sarah: +1234567890.",
      sender: "ESTATES",
    },
    theme: {
      bg: "bg-cyan-100",
      text: "text-cyan-800",
      border: "border-cyan-200",
    }
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Truck,
    title: "Real-time Fleet Updates & Dispatch Tracking",
    description: "Optimize delivery operations. Send automated driver status logs, delivery confirmations, and real-time live map links to consignees.",
    stats: "30% Delivery Speed Increase",
    useCase: "Real-time dispatch updates, Driver coordinates, Delivery confirmations.",
    mockMessage: {
      title: "Courier Dispatch",
      body: "Package out for delivery today. Driver John is arriving shortly. Share delivery PIN: 5829.",
      sender: "LOGISTICS",
    },
    theme: {
      bg: "bg-rose-100",
      text: "text-rose-800",
      border: "border-rose-200",
    }
  },
];

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto switch industries tabs
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % industries.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleTabClick = (idx: number) => {
    setIsAutoPlay(false);
    setActiveTab(idx);
  };

  const activeInd = industries[activeTab] as typeof industries[0] & { theme: { bg: string; text: string; border: string } };
  const IconActive = activeInd.icon;

  return (
    <section className="py-24 bg-transparent border-y border-slate-200/60 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
              Industry Verticals
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-950">
            Tailored for Every <span className="text-gradient">Sector</span>
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-normal max-w-xl mx-auto">
            See how enterprise leaders drive conversion and build trust using customized messaging flows.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT: Industries selector tabs */}
          <div className="lg:col-span-5 space-y-3">
            {industries.map((item, idx) => {
              const IndIcon = item.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(idx)}
                  className={`w-full text-left flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all duration-300 cursor-pointer ${isActive
                      ? "bg-slate-50 border-slate-900 text-slate-900 shadow-sm"
                      : "bg-transparent border-slate-200/60 text-slate-600 font-medium hover:text-slate-900 hover:border-slate-350"
                    }`}
                >
                  <span className={`p-2.5 rounded-xl transition-all duration-300 ${isActive
                      ? `${item.theme.bg} ${item.theme.text} border ${item.theme.border} shadow-sm scale-105`
                      : "bg-slate-100 text-slate-500 border border-transparent"
                    }`}>
                    <IndIcon size={20} />
                  </span>
                  <div>
                    <h3 className={`font-bold text-sm sm:text-base ${isActive ? "text-slate-900" : "text-slate-600"}`}>{item.name}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Industry Preview Panel */}
          <div className="lg:col-span-7">
            <div className="glass-panel border border-slate-200/80 rounded-3xl p-6 sm:p-8 min-h-[420px] flex flex-col justify-between relative overflow-hidden shadow-xl h-full">

              {/* Backlight glow */}
              <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeInd.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <span className={`p-3 rounded-2xl ${activeInd.theme.bg} ${activeInd.theme.text} border ${activeInd.theme.border} shadow-sm`}>
                        <IconActive size={24} />
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 uppercase">{activeInd.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-750 text-sm sm:text-base font-normal leading-relaxed">
                      {activeInd.description}
                    </p>

                    {/* Stats Metric */}
                    <div className="pt-2 flex flex-wrap gap-6">
                      <div className="bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200">
                        <span className="text-xs text-slate-650 font-medium block mb-0.5">Key Stat</span>
                        <span className={`text-sm font-bold ${activeInd.theme.text}`}>{activeInd.stats}</span>
                      </div>
                      <div className="bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200">
                        <span className="text-xs text-slate-650 font-medium block mb-0.5">Use Cases</span>
                        <span className="text-xs text-slate-800 block font-normal">{activeInd.useCase}</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual mockup of phone notification */}
                  <div className="mt-8 border-t border-slate-200 pt-6">
                    <div className="max-w-md bg-slate-50 rounded-2xl border border-slate-200 p-4 shadow-sm flex gap-3 items-start">
                      <span className={`p-2.5 rounded-xl ${activeInd.theme.bg} ${activeInd.theme.text} border ${activeInd.theme.border} shadow-sm`}>
                        <Smartphone size={18} />
                      </span>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 font-mono">{activeInd.mockMessage.sender}</span>
                          <span className="text-[10px] text-slate-400 font-mono">now</span>
                        </div>
                        <h4 className="text-xs font-semibold text-brand-purple">{activeInd.mockMessage.title}</h4>
                        <p className="text-xs text-slate-700 font-normal leading-relaxed">{activeInd.mockMessage.body}</p>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
