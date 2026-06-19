"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { AlertCircle, CheckCircle2, ShieldAlert, Zap } from "lucide-react";

const ConversationProblemSolution: React.FC = () => {
  const data = [
    {
      problem: "Customers expect 24/7 instant response support.",
      solution: "Build fully automated 24/7 custom support flows that answer instantly.",
    },
    {
      problem: "Traditional text forms yield extremely low lead conversions.",
      solution: "Deploy engaging, interactive lead generation chat flows to qualify users.",
    },
    {
      problem: "Static notifications lead to dead-end customer responses.",
      solution: "Add interactive reply buttons, action options, and links for instant actions.",
    },
    {
      problem: "Creating conversational chatbots requires complex coding work.",
      solution: "Utilize Vialogue's drag-and-drop visual builder to publish instantly.",
    },
    {
      problem: "High support ticket loads lead to slow agent response rates.",
      solution: "Deflect up to 70% of FAQs using structured self-service paths.",
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
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section className="w-full py-24 px-4 md:px-10 lg:px-40 bg-slate-50 relative overflow-hidden text-left">
      
      {/* Glow highlight in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-100/35 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">Contrast Analysis</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight heading-two">
            Support Challenges <span className="text-gradient">vs. Vialogue Solution</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-xl mx-auto">
            Traditional support channels struggle to scale. Here is how Vialogue's visual builder solves standard operational bottlenecks.
          </p>
        </div>

        {/* Contrast List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-4"
        >
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 bg-white border border-slate-150 rounded-2xl p-5 hover:shadow-md transition-all duration-300 group"
            >
              {/* Problem Panel */}
              <div className="flex items-start gap-3.5 p-1">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
                  <ShieldAlert size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-500 block mb-0.5">The Bottleneck</span>
                  <p className="text-[13px] md:text-[14px] text-slate-600 font-semibold leading-relaxed">
                    {item.problem}
                  </p>
                </div>
              </div>

              {/* Solution Panel */}
              <div className="flex items-start gap-3.5 p-1 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-6">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300">
                  <Zap size={16} className="fill-emerald-500/10" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-500 block mb-0.5">Vialogue Resolution</span>
                  <p className="text-[13px] md:text-[14px] text-slate-800 font-bold leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ConversationProblemSolution;
