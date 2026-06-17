"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Switching our transaction alert SMS routing to Vialogue was a game changer. Our delivery rates rose to 99.8%, and the OTP latencies dropped to under 1.5 seconds. The developer API was incredibly easy to integrate in a single sprint.",
    author: "Rohan Mehta",
    role: "Head of Infrastructure",
    company: "PayGate India",
    rating: 5,
  },
  {
    quote: "With Vialogue's WhatsApp Business API integrations, we automated 75% of our standard delivery queries. Patients now receive prompt prescription alerts and viewing slots instantly. It has drastically reduced clinical no-shows.",
    author: "Dr. Ananya Sharma",
    role: "Director of Operations",
    company: "CareFirst Hospitals",
    rating: 5,
  },
  {
    quote: "The interactive RCS Messaging carousels allowed us to present dynamic product catalogues directly inside the native messaging app. We recorded a 40% increase in cart recovery rates compared to generic SMS blasts.",
    author: "Vikram Sen",
    role: "VP of Product",
    company: "E-Cart Global",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const active = testimonials[current];

  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">
              Client Feedback
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-950">
            Trusted by Industry <span className="text-gradient">Leaders</span>
          </h2>
          <p className="text-slate-800 text-base sm:text-lg font-normal max-w-xl mx-auto">
            Read how Vialogue enables companies to automate messaging, secure OTP alerts, and scale communications.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glass-panel border border-slate-200/80 rounded-3xl p-8 sm:p-12 relative flex flex-col justify-between min-h-[280px]"
            >
              {/* Quote Mark Decoration */}
              <Quote className="absolute top-6 right-8 text-brand-purple/5 w-20 h-20 pointer-events-none" />

              <div className="space-y-6">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-purple text-brand-purple" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-light italic">
                  "{active.quote}"
                </p>
              </div>

              {/* Author details */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between flex-wrap gap-4 text-left">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{active.author}</h4>
                  <p className="text-xs text-slate-500 font-light mt-0.5">{active.role}, <span className="text-brand-purple font-semibold">{active.company}</span></p>
                </div>

                {/* Arrow Controls */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-350 transition-all cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-350 transition-all cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  current === i ? "bg-brand-purple w-6" : "bg-slate-250"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
