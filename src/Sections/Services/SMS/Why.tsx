import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, AlertTriangle, Workflow, Sparkles, Database, Clock, Smile, ServerCrash } from "lucide-react";

const Why: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const frictionItems = [
    {
      title: "Manual Overhead",
      desc: "Copying data between CRM, ticketing, and support apps manually.",
      icon: ServerCrash,
    },
    {
      title: "Delayed Responses",
      desc: "Checking separate dashboards causes major response latency.",
      icon: Clock,
    },
    {
      title: "Data Mismatch",
      desc: "Customer profiles get out of sync, leading to double-messaging.",
      icon: AlertTriangle,
    },
    {
      title: "Frictioned Experience",
      desc: "Customers repeat details because context isn't shared.",
      icon: XCircle,
    },
  ];

  const synergyItems = [
    {
      title: "Automated Workflows",
      desc: "Data syncs automatically upon triggers like sign-ups or payments.",
      icon: Workflow,
    },
    {
      title: "Instant Deliveries",
      desc: "APIs trigger transactional messages instantly in milliseconds.",
      icon: Sparkles,
    },
    {
      title: "Unified Database Context",
      desc: "Single customer profile is shared across all backend tools.",
      icon: Database,
    },
    {
      title: "Delightful Journeys",
      desc: "Consistent, personalized answers from a single CPaaS node.",
      icon: Smile,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-slate-50 relative overflow-hidden select-none">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.02),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">Why Integrations Matter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 mb-6 leading-tight heading-two">
            Unified Communication vs. <span className="text-gradient">Disconnected Friction</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto subheading">
            Running business tools in silos hurts conversion rates and customer satisfaction. Vialogue bridges the gap by making every tool work in synergy.
          </p>
        </div>

        {/* Content Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Disconnected Tools */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col bg-white rounded-3xl p-6 sm:p-8 border border-red-100 shadow-[0_4px_25px_rgba(239,68,68,0.02)] hover:shadow-lg hover:border-red-200/60 transition-all duration-300 relative group"
          >
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-red-50/50 flex items-center justify-center border border-red-100/50">
              <AlertTriangle className="text-red-500" size={18} />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              Without Vialogue (Silos)
            </h3>
            <p className="text-sm text-slate-500 font-medium mb-8">
              Disconnected tools create friction, slow operations, and lead to lost revenue.
            </p>

            <div className="flex-1 flex flex-col gap-6">
              {frictionItems.map((item, i) => (
                <div key={i} className="flex gap-4 items-start group/item">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100/70 text-red-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-105 transition-transform duration-200 shadow-sm">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-slate-800 group-hover/item:text-red-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Unified Platform */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-[0_4px_25px_rgba(16,185,129,0.02)] hover:shadow-lg hover:border-emerald-200/60 transition-all duration-300 relative group"
          >
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-emerald-50/50 flex items-center justify-center border border-emerald-100/50">
              <CheckCircle2 className="text-emerald-500" size={18} />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              With Vialogue Integrations
            </h3>
            <p className="text-sm text-slate-500 font-medium mb-8">
              APIs and workflows sync in real-time, delivering a seamless experience.
            </p>

            <div className="flex-1 flex flex-col gap-6">
              {synergyItems.map((item, i) => (
                <div key={i} className="flex gap-4 items-start group/item">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100/70 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover/item:scale-105 transition-transform duration-200 shadow-sm">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-slate-800 group-hover/item:text-emerald-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Why;
