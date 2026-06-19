"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, ArrowRight, ToyBrick, Layers, Webhook } from "lucide-react";

const IntegrationsOverview: React.FC = () => {
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

  const connectors = [
    { name: "HubSpot CRM", bg: "bg-orange-50 border-orange-100 text-orange-600", desc: "Automate leads & data sync" },
    { name: "Salesforce Cloud", bg: "bg-blue-50 border-blue-100 text-blue-600", desc: "Trigger enterprise campaigns" },
    { name: "Shopify Engine", bg: "bg-emerald-50 border-emerald-100 text-emerald-600", desc: "Sync abandoned carts & invoices" },
    { name: "Zoho Suite", bg: "bg-red-50 border-red-100 text-red-600", desc: "Integrate workflow records" },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-40 bg-white relative overflow-hidden">
      
      {/* Background radial lines */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #06B6D4 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Column - Content */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={leftVariants}
          className="flex-1 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-100">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-cyan-700">Omni Integration</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight heading-two">
            Seamless Integrations That Connect Your <span className="text-gradient">Customer Communication</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed paragraph text-justify">
            Vialogue is built to work with your existing tools. With powerful integrations, you can connect your CRM, helpdesk, payment systems, analytics, and databases to automate messaging and deliver better customer experiences.
          </p>

          {/* Points list */}
          <ul className="space-y-3 pt-4">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[14px] md:text-[16px] text-slate-700 font-medium">
                <ShieldCheck className="text-cyan-500 flex-shrink-0" size={18} />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column - Visual Mockup */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={rightVariants}
          className="flex-1 w-full max-w-[500px]"
        >
          <div className="bg-slate-50/50 rounded-[32px] p-6 border border-slate-100 relative overflow-hidden shadow-sm">
            <div className="absolute top-[-50px] right-[-50px] w-40 h-40 rounded-full bg-cyan-200/20 blur-2xl" />
            <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 rounded-full bg-purple-200/20 blur-2xl" />

            <div className="space-y-4 relative z-10">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Connection Console</span>

              {/* Grid of integrations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {connectors.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className={`p-4 rounded-2xl border ${item.bg} shadow-sm flex flex-col justify-between h-[110px] cursor-default transition-all`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-[13px] tracking-tight">{item.name}</span>
                      <ToyBrick size={14} className="opacity-80" />
                    </div>
                    <span className="text-[11px] text-slate-500 font-light leading-snug">{item.desc}</span>
                  </motion.div>
                ))}
              </div>

              {/* Central sync widget */}
              <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2 text-cyan-600 font-bold">
                  <Webhook size={15} />
                  <span>Real-Time Sync</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span>Webhooks</span>
                  <ArrowRight size={12} />
                  <span>CRMs</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsOverview;
