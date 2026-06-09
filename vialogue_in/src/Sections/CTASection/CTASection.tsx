"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#FFFFFF] relative z-10">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Large Gradient Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan p-8 sm:p-16 text-center shadow-[0_12px_40px_rgba(124,58,237,0.25)]"
        >
          {/* Subtle overlay grid for tech visual texture */}
          <div 
            className="absolute inset-0 opacity-[0.08] pointer-events-none" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "24px 24px"
            }}
          />

          {/* Background glowing rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/10 opacity-20 pointer-events-none scale-100 animate-pulse-glow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 opacity-10 pointer-events-none scale-100" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Start Today
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
              Ready to Scale Customer Communication?
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/80 max-w-lg mx-auto font-light leading-relaxed">
              Integrate our multi-channel conversational APIs in minutes and start delivering secure, high-deliverability alerts and campaigns globally.
            </p>

            {/* Button */}
            <div className="pt-4">
              <Link href="/contact" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-gray-900 font-bold hover:bg-[#00E5FF] hover:text-gray-950 transition-all duration-300 shadow-xl shadow-indigo-950/20 hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] active:scale-95">
                Schedule Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
