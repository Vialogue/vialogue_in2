"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What industries does Vialogue support?",
    a: "Vialogue powers customer communication across BFSI, e-commerce & retail, education, food & beverages, and healthcare with industry-tailored engagement workflows.",
  },
  {
    q: "Can Vialogue be customized for different industry needs?",
    a: "Yes. Vialogue adapts to unique industry workflows, compliance requirements, and customer journeys through flexible automation and personalization tools.",
  },
  {
    q: "Does Vialogue support omnichannel customer communication?",
    a: "Absolutely. Connect with customers across SMS, voice, RCS, WhatsApp, and other digital channels through one unified platform.",
  },
  {
    q: "Is Vialogue secure and compliant for regulated industries?",
    a: "Yes. Vialogue is built with enterprise-grade security, data protection standards, and compliance-ready infrastructure to support sensitive sectors.",
  },
  {
    q: "How can I see Vialogue solutions for my industry?",
    a: "You can request a personalized demo to explore industry-specific use cases, workflows, and engagement strategies tailored to your business.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-28 px-4 md:px-20">

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-[#6d28d9] font-semibold text-sm uppercase tracking-widest mb-3">
          FAQs
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-[#2e1065] leading-tight">
          Frequently Asked Questions
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about how Vialogue adapts across industries.
        </p>
      </div>

      {/* FAQ Container */}
      <div className="max-w-4xl mx-auto space-y-4">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[#ddd6fe] bg-[#faf8ff] overflow-hidden shadow-sm"
          >

            {/* Question */}
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex justify-between items-center px-4 py-5 text-left"
            >
              <span className="text-lg font-medium text-[#2e1065]">
                {faq.q}
              </span>

              <span className="text-[#6d28d9] text-2xl">
                {open === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {open === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}

      </div>
    </section>
  );
}