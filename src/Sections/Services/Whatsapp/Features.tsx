"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Bell, Code, Zap, Image as ImageIcon, MousePointerClick, Webhook, Route, MessageSquare, CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    id: 0,
    title: "Customer Notifications",
    icon: Bell,
    ui: (
      <div className="relative bg-gradient-to-br from-purple-50 to-slate-50 p-8 rounded-[32px] border border-purple-100 shadow-lg w-full h-full flex flex-col justify-center items-center overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/40 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="w-full max-w-[280px] bg-white rounded-[2rem] shadow-2xl border-4 border-slate-100 overflow-hidden flex flex-col relative z-10 transform transition-transform group-hover:scale-105 duration-500">
          <div className="bg-[#075e54] text-white p-3 text-sm font-bold flex items-center justify-between">
            <div className="flex items-center gap-2"><MessageSquare size={16} /> WhatsApp</div>
            <div className="text-[10px] font-normal opacity-80">now</div>
          </div>
          <div className="p-5 space-y-3 bg-[#efeae2] h-[240px] flex flex-col justify-end bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-cover bg-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-xs text-slate-700 relative"
            >
              <span className="font-bold text-[#075e54] block mb-1">Order Confirmed! 📦</span>
              Hey John, order #49281 is packed and will be shipped today.
              <div className="text-[9px] text-right text-slate-400 mt-1">10:42 AM</div>
            </motion.div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: "RESTful WhatsApp Messaging APIs",
    icon: Code,
    ui: (
      <div className="relative bg-[#0f172a] p-8 rounded-[32px] border border-slate-800 shadow-2xl w-full h-full flex flex-col justify-center text-left overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-brand-purple to-pink-500"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-brand-purple rounded-full blur-[80px] opacity-30"></div>

        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="text-slate-500 text-xs ml-2 font-mono">api-request.json</span>
        </div>

        <div className="bg-[#1e293b]/80 rounded-xl p-5 font-mono text-sm overflow-hidden border border-slate-700/50 shadow-inner">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <span className="text-emerald-400 font-bold">POST</span> <span className="text-slate-200">/v1/messages</span>
            <br /><br />
            <span className="text-purple-400">{`{`}</span><br />
            <span className="text-blue-300 ml-4">{`"messaging_product"`}</span><span className="text-slate-300">:</span> <span className="text-amber-300">{`"whatsapp"`}</span>,<br />
            <span className="text-blue-300 ml-4">{`"to"`}</span><span className="text-slate-300">:</span> <span className="text-amber-300">{`"919876543210"`}</span>,<br />
            <span className="text-blue-300 ml-4">{`"type"`}</span><span className="text-slate-300">:</span> <span className="text-amber-300">{`"template"`}</span>,<br />
            <span className="text-purple-400 ml-4">{`...`}</span><br />
            <span className="text-purple-400">{`}`}</span>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "High-Throughput Messaging",
    icon: Zap,
    ui: (
      <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-[32px] border border-blue-100 shadow-lg w-full h-full flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="w-full flex items-end justify-center gap-3 h-[180px] relative z-10 border-b-2 border-blue-200 pb-2">
          {[40, 60, 30, 80, 100, 75, 90].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
              className="w-10 bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-lg shadow-md hover:opacity-80 cursor-pointer"
            />
          ))}
        </div>
        <div className="mt-8 text-center relative z-10 bg-white px-8 py-4 rounded-2xl shadow-sm border border-blue-50">
          <div className="text-4xl font-black text-[#884CED]">10M+</div>
          <div className="text-xs text-slate-500 font-bold uppercase mt-1 tracking-wider">Messages / Hour</div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Media Message APIs",
    icon: ImageIcon,
    ui: (
      <div className="relative bg-gradient-to-br from-rose-50 to-orange-50 p-8 rounded-[32px] border border-rose-100 shadow-lg w-full h-full flex flex-col justify-center items-center overflow-hidden group">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-200/50 rounded-full blur-[60px] pointer-events-none"></div>
        <div className="w-full max-w-[280px] bg-[#efeae2] rounded-[2rem] shadow-2xl border-4 border-slate-100 overflow-hidden flex flex-col h-[300px] p-4 justify-end relative z-10 transform transition-transform group-hover:-translate-y-2 duration-500">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-2 rounded-xl rounded-tl-none shadow-sm flex flex-col gap-2"
          >
            <div className="w-full h-36 rounded-lg overflow-hidden relative group-hover:scale-[1.02] transition-transform">
              <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400" alt="Media" className="w-full h-full object-cover" />
            </div>
            <p className="text-[12px] text-slate-700 font-medium px-1">Check out our new summer collection! Get 20% off today. 🌞👗</p>
            <div className="text-[9px] text-right text-slate-400 mt-1">10:45 AM</div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Interactive Messages (buttons, CTA)",
    icon: MousePointerClick,
    ui: (
      <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-[32px] border border-emerald-100 shadow-lg w-full h-full flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute right-0 bottom-0 w-48 h-48 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="w-full max-w-[280px] bg-[#efeae2] rounded-[2rem] shadow-2xl border-4 border-slate-100 overflow-hidden flex flex-col p-4 justify-end h-[300px] relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            className="bg-white rounded-xl rounded-tl-none shadow-sm flex flex-col"
          >
            <div className="p-4 text-[13px] text-slate-700 font-medium border-b border-slate-100 leading-relaxed">
              Please confirm your appointment for tomorrow at <span className="font-bold">10:00 AM</span> with Dr. Smith.
            </div>
            <div className="text-center py-3 border-b border-slate-100 text-[#00a884] text-[13px] font-bold cursor-pointer hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
              <CheckCircle2 size={14} /> Yes, Confirm
            </div>
            <div className="text-center py-3 text-slate-500 text-[13px] font-bold cursor-pointer hover:bg-slate-50 transition-colors">
              Reschedule
            </div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Template Status Webhooks",
    icon: Webhook,
    ui: (
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-[32px] border border-slate-700 shadow-2xl w-full h-full flex flex-col justify-center items-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20"></div>

        <div className="flex items-center gap-6 relative z-10 w-full justify-center">
          <div className="w-16 h-16 bg-brand-purple rounded-2xl shadow-[0_0_30px_rgba(124,58,237,0.4)] flex items-center justify-center border-2 border-purple-400 z-10">
            <MessageSquare className="text-white" size={28} />
          </div>

          <div className="flex-1 max-w-[120px] h-1.5 bg-slate-700 relative rounded-full overflow-hidden">
            <motion.div
              animate={{ x: [-20, 140] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="absolute top-0 bottom-0 w-8 bg-emerald-400 rounded-full shadow-[0_0_15px_#34d399]"
            />
          </div>

          <div className="w-16 h-16 bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center border-2 border-slate-600 z-10">
            <Webhook className="text-emerald-400" size={28} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-slate-600 shadow-lg text-sm font-mono text-slate-300 relative z-10 w-full max-w-[250px]"
        >
          event: <span className="text-purple-400">"status_update"</span><br />
          status: <span className="text-emerald-400 font-bold">"APPROVED"</span>
        </motion.div>
      </div>
    )
  },
  {
    id: 6,
    title: "Journey & Flow Automation",
    icon: Route,
    ui: (
      <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-[32px] border border-orange-100 shadow-lg w-full h-full flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-waves.png')] opacity-10"></div>

        <div className="flex flex-col items-center gap-2 w-full max-w-[280px] relative z-10">
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="bg-white border-2 border-brand-purple shadow-md px-4 py-3 rounded-xl text-xs font-bold text-center w-[80%] text-brand-purple flex items-center justify-center gap-2">
            <MessageSquare size={14} /> Customer Opt-in
          </motion.div>

          <div className="w-0.5 h-6 bg-brand-purple/30"></div>

          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }} className="bg-white border-2 border-slate-200 shadow-md px-4 py-3 rounded-xl text-xs font-bold text-center w-[90%] text-slate-700">
            Send Welcome Offer
          </motion.div>

          <div className="w-0.5 h-6 bg-slate-300"></div>

          <div className="flex gap-4 w-full justify-center relative">
            <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-slate-300"></div>
            <div className="absolute top-0 left-1/4 w-0.5 h-4 bg-slate-300"></div>
            <div className="absolute top-0 right-1/4 w-0.5 h-4 bg-slate-300"></div>

            <div className="flex-1 flex flex-col items-center gap-2 pt-4">
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="bg-emerald-50 border-2 border-emerald-200 shadow-sm px-2 py-3 rounded-xl text-[11px] font-bold text-center w-full text-emerald-700">
                If Reads
              </motion.div>
            </div>

            <div className="flex-1 flex flex-col items-center gap-2 pt-4">
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} className="bg-rose-50 border-2 border-rose-200 shadow-sm px-2 py-3 rounded-xl text-[11px] font-bold text-center w-full text-rose-700">
                If Ignores
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const Features: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-16 px-4 md:px-12 lg:px-40 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl text-center font-bold mb-12 heading-two text-slate-900">
        Key Capabilities
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center min-h-[400px]">

        {/* LEFT: Capabilities List */}
        <div className="flex flex-col gap-2">
          {capabilities.map((item, index) => {
            const isActive = activeIndex === index;
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl cursor-pointer transition-all duration-300 ${isActive
                  ? "bg-white shadow-[0_8px_30px_rgba(124,58,237,0.12)] border border-purple-100 scale-105"
                  : "hover:bg-white/60 hover:scale-100 text-slate-600 border border-transparent"
                  }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isActive ? "bg-purple-100 text-brand-purple" : "bg-slate-100 text-slate-400"
                  }`}>
                  <Icon size={20} />
                </div>
                <span className={`text-lg md:text-xl font-medium ${isActive ? "text-slate-900" : ""}`}>
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* RIGHT: Dynamic UI Mockups */}
        <div className="w-full h-[400px] lg:h-[500px] relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-full max-w-[450px] mx-auto absolute inset-0 flex items-center justify-center"
            >
              {capabilities[activeIndex].ui}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Features;