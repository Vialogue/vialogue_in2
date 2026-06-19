"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Users, BarChart3, ShieldCheck, Zap } from "lucide-react";

const Choose: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 md:px-20 lg:px-40 bg-[#DEDEF4] overflow-hidden" ref={ref}>
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-[20%] w-[400px] h-[400px] bg-purple-200/50 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Custom UI (Replaces Old Image) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-[450px] flex items-center justify-center"
          >
             {/* Main Dashboard Card */}
             <div className="absolute z-10 w-[300px] sm:w-[340px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(124,58,237,0.15)] border border-white p-5 flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                     <div className="w-8 h-8 bg-brand-purple text-white rounded-lg flex items-center justify-center">
                       <MessageSquare size={16} />
                     </div>
                     <div>
                       <div className="text-sm font-bold text-slate-800">Campaigns</div>
                       <div className="text-[10px] text-emerald-500 font-medium">Active now</div>
                     </div>
                  </div>
                  <div className="text-right">
                     <div className="text-xs text-slate-500">Delivery Rate</div>
                     <div className="text-sm font-black text-slate-800">98.5%</div>
                  </div>
                </div>
                
                {/* Chart Area */}
                <div className="h-24 w-full flex items-end gap-2 justify-between mt-2">
                   {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                     <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${h}%` } : { height: 0 }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="w-full bg-gradient-to-t from-purple-500 to-purple-300 rounded-sm opacity-80"
                     />
                   ))}
                </div>

                {/* Sub Cards */}
                <div className="grid grid-cols-2 gap-3 mt-2">
                   <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                     <Users size={16} className="text-blue-500 mb-1" />
                     <div className="text-lg font-black text-slate-800">12k+</div>
                     <div className="text-[10px] text-slate-500">Opt-ins Today</div>
                   </div>
                   <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                     <Zap size={16} className="text-amber-500 mb-1" />
                     <div className="text-lg font-black text-slate-800">0.2s</div>
                     <div className="text-[10px] text-slate-500">Avg. Response</div>
                   </div>
                </div>
             </div>

             {/* Floating Elements */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-4 -left-4 sm:left-4 z-20 bg-white p-3 rounded-2xl shadow-lg border border-purple-50 flex items-center gap-3"
             >
               <ShieldCheck className="text-emerald-500" size={24} />
               <div>
                 <div className="text-xs font-bold text-slate-800">End-to-End</div>
                 <div className="text-[10px] text-slate-500">Encrypted</div>
               </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-8 -right-4 sm:right-0 z-20 bg-white p-3 rounded-2xl shadow-lg border border-purple-50 flex items-center gap-3"
             >
               <BarChart3 className="text-brand-purple" size={24} />
               <div>
                 <div className="text-xs font-bold text-slate-800">Real-time</div>
                 <div className="text-[10px] text-slate-500">Analytics Sync</div>
               </div>
             </motion.div>

          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Why Choose Vialogue <br className="hidden lg:block" />
              <span className="text-[#884CED]">
                WhatsApp Business API?
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              Vialogue brings together template management, messaging flows, AI chatbot automation, live agent conversations, analytics, and compliance into one unified WhatsApp Business API platform.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Choose;
