"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";

// WebEngage Custom SVG Logo
const WebEngageLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10">
    <defs>
      <linearGradient id="webengageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF7A00" />
        <stop offset="100%" stopColor="#FF3D00" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#webengageGrad)" />
    <path
      d="M25,38 L38,65 L50,45 L62,65 L75,38"
      stroke="white"
      strokeWidth="7.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// MoEngage Custom SVG Logo
const MoEngageLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10">
    <defs>
      <linearGradient id="moengageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4E26E8" />
        <stop offset="100%" stopColor="#2E5BFF" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#moengageGrad)" />
    <path
      d="M28,60 L28,42 C28,31 38,31 43,38 C48,31 58,31 63,38 C68,31 78,31 78,42 L78,60"
      stroke="white"
      strokeWidth="7"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// LeadSquared Custom SVG Logo
const LeadSquaredLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="50" cy="50" r="45" fill="#0056B3" />
    <rect x="28" y="28" width="26" height="26" rx="4" fill="none" stroke="white" strokeWidth="6" />
    <rect x="46" y="46" width="26" height="26" rx="4" fill="#FF9900" stroke="#FF9900" strokeWidth="2" />
    <path d="M41,59 L59,41" stroke="white" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

// Zoho Custom SVG Logo (interlocking 4-box layout)
const ZohoLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="50" cy="50" r="45" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
    <g transform="translate(1, 1)">
      <rect x="27" y="27" width="21" height="21" rx="4" fill="#E2231A" />
      <rect x="51" y="27" width="21" height="21" rx="4" fill="#00A753" />
      <rect x="27" y="51" width="21" height="21" rx="4" fill="#007CC3" />
      <rect x="51" y="51" width="21" height="21" rx="4" fill="#F9A01B" />
    </g>
  </svg>
);

// Zapier Custom SVG Logo (orange asterisk)
const ZapierLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="50" cy="50" r="45" fill="#FF4F00" />
    <g transform="translate(50, 50)" stroke="white" strokeWidth="9.5" strokeLinecap="round">
      <line x1="0" y1="0" x2="0" y2="-21" />
      <line x1="0" y1="0" x2="20" y2="-7" />
      <line x1="0" y1="0" x2="12" y2="17" />
      <line x1="0" y1="0" x2="-12" y2="17" />
      <line x1="0" y1="0" x2="-20" y2="-7" />
    </g>
  </svg>
);

const IntegrationsOverview: React.FC = () => {
  const [activeIntegration, setActiveIntegration] = useState<number>(0);

  const points = [
    "CRM integrations for automated communication",
    "Helpdesk tools for real-time support updates",
    "Payment systems for instant alerts & confirmations",
    "Database sync for personalized messaging flows",
    "Webhooks & APIs for flexible system automation",
  ];

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } },
  };

  const integrations = [
    {
      id: 0,
      name: "WebEngage",
      title: "WebEngage CRM & Journeys",
      desc: "Sync user segments dynamically and trigger transactional WhatsApp, SMS, and RCS notifications based on WebEngage user events.",
      status: "Active",
      syncRate: "Real-time (15ms)",
      color: "#FF4D00",
      coords: { x: 12, y: 20 },
      logo: WebEngageLogo,
    },
    {
      id: 1,
      name: "MoEngage",
      title: "MoEngage Customer Engagement",
      desc: "Send personalized alerts, OTP codes, and rich media RCS cards directly via MoEngage workflow campaigns.",
      status: "Active",
      syncRate: "Real-time (12ms)",
      color: "#4E26E8",
      coords: { x: 12, y: 70 },
      logo: MoEngageLogo,
    },
    {
      id: 2,
      name: "LeadSquared",
      title: "LeadSquared Sales CRM",
      desc: "Trigger instant lead alerts, follow-ups, and automated WhatsApp replies as soon as new leads are captured.",
      status: "Connected",
      syncRate: "On Lead Ingest",
      color: "#0056B3",
      coords: { x: 88, y: 15 },
      logo: LeadSquaredLogo,
    },
    {
      id: 3,
      name: "Zoho",
      title: "Zoho CRM & Suite",
      desc: "Pull customer profiles and run drip campaigns. Sync contact properties and response history back to Zoho in real-time.",
      status: "Connected",
      syncRate: "Bi-directional",
      color: "#007CC3",
      coords: { x: 88, y: 48 },
      logo: ZohoLogo,
    },
    {
      id: 4,
      name: "Zapier",
      title: "Zapier Integrations Hub",
      desc: "Connect Vialogue to over 5,000 apps. Create customized zaps to send messages from Google Sheets, Forms, and databases.",
      status: "Active",
      syncRate: "Instant trigger",
      color: "#FF4F00",
      coords: { x: 88, y: 80 },
      logo: ZapierLogo,
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-40 bg-white relative overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={leftVariants}
          className="flex-1 space-y-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
            <Image 
              src="/imgs/logo2.svg" 
              alt="Vialogue Logo" 
              width={85} 
              height={20} 
              className="object-contain"
              priority
            />
            <span className="w-[1px] h-3 bg-slate-300" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-slate-600">Omni Integration</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight heading-two">
            Seamless Integrations That Connect Your <span className="text-gradient">Customer Communication</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed paragraph text-justify">
            Vialogue is built to work with your existing tools. With powerful integrations, you can connect your CRM, helpdesk, payment systems, analytics, and databases to automate messaging and deliver better customer experiences.
          </p>

          <ul className="space-y-3 pt-4">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[14px] md:text-[16px] text-slate-700 font-medium">
                <ShieldCheck className="text-cyan-500 flex-shrink-0" size={18} />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={rightVariants}
          className="flex-1 w-full max-w-[520px]"
        >
          <div className="bg-slate-50/50 rounded-[32px] p-6 border border-slate-100 relative overflow-hidden shadow-sm">
            <div className="absolute top-[-50px] right-[-50px] w-40 h-40 rounded-full bg-cyan-200/20 blur-2xl pointer-events-none" />
            <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 rounded-full bg-purple-200/20 blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">Connection Console</span>
                <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50/50 border border-emerald-100 rounded-full px-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Real-time Sync</span>
                </div>
              </div>

              <div className="hidden sm:block relative w-full aspect-[4/3] max-w-[440px] mx-auto select-none">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  {integrations.map((item) => {
                    const isActive = activeIntegration === item.id;
                    const path = item.id < 2
                      ? `M 50 45 C 32 45, 28 ${item.coords.y}, ${item.coords.x} ${item.coords.y}`
                      : `M 50 45 C 68 45, 72 ${item.coords.y}, ${item.coords.x} ${item.coords.y}`;

                    return (
                      <g key={item.id}>
                        <path
                          d={path}
                          fill="none"
                          stroke={isActive ? item.color : "#E2E8F0"}
                          strokeWidth={isActive ? 2.5 : 1.5}
                          className="transition-all duration-300"
                          opacity={isActive ? 0.75 : 0.4}
                          style={{ filter: isActive ? "url(#glow)" : "none" }}
                        />
                        <path
                          d={path}
                          fill="none"
                          stroke={isActive ? item.color : "#94A3B8"}
                          strokeWidth={isActive ? 3 : 2}
                          strokeLinecap="round"
                          className="animate-flow"
                          opacity={isActive ? 1 : 0.25}
                          style={{
                            animationDuration: isActive ? "0.8s" : "1.8s",
                          }}
                        />
                      </g>
                    );
                  })}
                </svg>

                <div 
                  className="absolute z-20 flex flex-col items-center justify-center transition-all duration-300"
                  style={{ left: "50%", top: "45%", transform: "translate(-50%, -50%)" }}
                >
                  <div className="w-28 h-12 bg-white rounded-2xl border border-slate-200 shadow-[0_8px_20px_rgba(124,58,237,0.08)] flex items-center justify-center px-4 py-2 hover:scale-105 transition-transform duration-300 cursor-default">
                    <Image 
                      src="/imgs/logo2.svg" 
                      alt="Vialogue" 
                      width={80} 
                      height={26} 
                      className="object-contain"
                      priority 
                    />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shadow-[0_0_8px_#6366F1] animate-ping" />
                </div>

                {integrations.map((item) => {
                  const isActive = activeIntegration === item.id;
                  const Logo = item.logo;
                  return (
                    <button
                      key={item.id}
                      onMouseEnter={() => setActiveIntegration(item.id)}
                      onFocus={() => setActiveIntegration(item.id)}
                      className="absolute z-10 focus:outline-none transition-all duration-300 cursor-pointer"
                      style={{
                        left: `${item.coords.x}%`,
                        top: `${item.coords.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div 
                        className="relative p-1 rounded-full transition-all duration-300"
                        style={{
                          background: isActive ? "rgba(255, 255, 255, 0.9)" : "transparent",
                          boxShadow: isActive ? `0 0 16px ${item.color}60` : "none",
                          transform: isActive ? "scale(1.12)" : "scale(1)",
                        }}
                      >
                        <div className="bg-white rounded-full p-0.5 border border-slate-100 shadow-sm">
                          <Logo />
                        </div>
                      </div>
                      <span 
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 text-[9px] font-bold tracking-tight rounded-md px-1.5 py-0.5 border shadow-sm transition-all duration-300 select-none whitespace-nowrap ${
                          isActive 
                            ? "bg-slate-900 border-slate-950 text-white opacity-100" 
                            : "bg-white border-slate-200 text-slate-500 opacity-80"
                        }`}
                      >
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="block sm:hidden space-y-4">
                <div className="flex items-center justify-between gap-3 py-2 px-3 bg-white rounded-2xl border border-slate-150 shadow-sm">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1 flex items-center justify-center h-8 flex-shrink-0">
                    <Image src="/imgs/logo2.svg" alt="Vialogue" width={60} height={20} className="object-contain" />
                  </div>
                  <span className="text-slate-400 font-light text-sm">↔</span>
                  <div className="flex gap-2.5 overflow-x-auto py-1 no-scrollbar items-center">
                    {integrations.map((item) => {
                      const isActive = activeIntegration === item.id;
                      const Logo = item.logo;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveIntegration(item.id)}
                          className={`p-1 rounded-full transition-all flex-shrink-0 ${
                            isActive ? "bg-slate-100 ring-2 ring-indigo-500" : "bg-white"
                          }`}
                        >
                          <Logo />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-150 shadow-sm relative min-h-[145px] flex flex-col justify-between transition-all duration-300">
                <div className="space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-[15px] text-slate-800 tracking-tight">
                      {integrations[activeIntegration].title}
                    </h4>
                    <span 
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full border"
                      style={{
                        borderColor: `${integrations[activeIntegration].color}25`,
                        color: integrations[activeIntegration].color,
                        backgroundColor: `${integrations[activeIntegration].color}10`,
                      }}
                    >
                      {integrations[activeIntegration].status}
                    </span>
                  </div>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-light">
                    {integrations[activeIntegration].desc}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3 mt-3 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1 text-slate-400">
                    <span>Sync Rate:</span>
                    <span className="font-semibold text-slate-600">
                      {integrations[activeIntegration].syncRate}
                    </span>
                  </div>
                  <a 
                    href="/contact"
                    className="font-bold hover:underline transition-colors flex items-center gap-1"
                    style={{ color: integrations[activeIntegration].color }}
                  >
                    <span>Integrate Now</span>
                    <ArrowRight size={10} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes flow {
          to {
            stroke-dashoffset: -32;
          }
        }
        .animate-flow {
          stroke-dasharray: 6, 12;
          animation: flow 1.5s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default IntegrationsOverview;
