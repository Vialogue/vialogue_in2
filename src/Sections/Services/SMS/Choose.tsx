"use client";
 
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Smartphone, Zap, Activity, MessageSquare, Check, Server } from "lucide-react";
 
const Choose: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
 
  return (
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 md:px-20 lg:px-40 bg-[#F5F3FF] overflow-hidden" ref={ref}>
      {/* Decorative Blur background */}
      <div className="absolute top-1/2 right-[10%] w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-indigo-200/30 rounded-full blur-[90px] pointer-events-none"></div>
 
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-left"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8 uppercase text-center sm:text-left">
              Why Choose Vialogue <br />
              <span className="text-[#7C3AED]">
                SMS APIs?
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium text-center sm:text-left">
              Vialogue SMS APIs enable enterprises and startups to integrate SMS
              messaging effortlessly into their applications, platforms, and
              workflows. Whether you are delivering time-sensitive OTPs, customer
              notifications, or large-scale campaigns, our infrastructure guarantees
              reliability, low latency, and regulatory compliance.
            </p>
          </motion.div>
 
          {/* Right Side: Custom Interactive Dashboard UI */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-[450px] flex items-center justify-center"
          >
            {/* Main SMS API Dashboard Card */}
            <div className="absolute z-10 w-[300px] sm:w-[340px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(124,58,237,0.12)] border border-slate-100 p-5 flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-purple-600 text-white rounded-xl flex items-center justify-center shadow-md shadow-purple-200">
                    <Server size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">SMS API Gateway</div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[10px] text-emerald-600 font-semibold">Online</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Uptime</div>
                  <div className="text-sm font-black text-slate-800">99.99%</div>
                </div>
              </div>
 
              {/* Transmission Logs */}
              <div className="space-y-2.5 my-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Live Requests</div>
                
                {/* Log Item 1 */}
                <div className="flex items-center justify-between bg-slate-50 rounded-xl p-2.5 border border-slate-100/70">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">POST</span>
                    <span className="text-xs font-semibold text-slate-700 font-mono">/sms/send-otp</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold">
                    <Check size={12} strokeWidth={3} />
                    <span>0.8s</span>
                  </div>
                </div>
 
                {/* Log Item 2 */}
                <div className="flex items-center justify-between bg-slate-50 rounded-xl p-2.5 border border-slate-100/70">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">POST</span>
                    <span className="text-xs font-semibold text-slate-700 font-mono">/sms/notify</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold">
                    <Check size={12} strokeWidth={3} />
                    <span>1.1s</span>
                  </div>
                </div>
              </div>
 
              {/* Stats Footer */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-slate-50/50 p-2.5 rounded-xl border border-slate-100 flex flex-col">
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Avg Latency</div>
                  <div className="text-base font-black text-[#7C3AED] flex items-center gap-1 mt-0.5">
                    <Zap size={14} className="text-amber-500 fill-amber-500" />
                    <span>180ms</span>
                  </div>
                </div>
                <div className="bg-slate-50/50 p-2.5 rounded-xl border border-slate-100 flex flex-col">
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Capacity</div>
                  <div className="text-base font-black text-slate-800 flex items-center gap-1 mt-0.5">
                    <Activity size={14} className="text-purple-500" />
                    <span>5k/sec</span>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Floating Widget 1: Mock Phone Notification */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:left-4 z-20 bg-white p-3 rounded-2xl shadow-xl border border-purple-50 flex items-center gap-3 w-[200px]"
            >
              <div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                <Smartphone size={18} />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-slate-800 flex items-center justify-between">
                  <span>Messages</span>
                  <span className="text-[8px] font-normal text-slate-400">now</span>
                </div>
                <div className="text-[10px] text-slate-500 truncate font-semibold">OTP: 581903 is your code</div>
              </div>
            </motion.div>
 
            {/* Floating Widget 2: Shield/Security compliance */}
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -right-4 sm:right-4 z-20 bg-white p-3 rounded-2xl shadow-lg border border-purple-50 flex items-center gap-3 w-[180px]"
            >
              <div className="w-8 h-8 bg-emerald-50 text-emerald-500 rounded-xl flex items-center justify-center shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">DLT Compliant</div>
                <div className="text-[9px] text-slate-400 font-semibold">100% Approved Routes</div>
              </div>
            </motion.div>
 
          </motion.div>
 
        </div>
      </div>
    </section>
  );
};
 
export default Choose;
