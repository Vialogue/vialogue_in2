"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { easeOut, motion } from "framer-motion";
import Heading from "@/Components/InnerComponents/Heading";

interface FAQItem {
  question: string;
  answer: string;
}

const faqsLeft: FAQItem[] = [
  {
    question: "What is Vialogue?",
    answer:
      "Vialogue is a unified customer communication platform designed to help businesses engage with customers across voice, messaging, and chat channels with enterprise-grade reliability and scalability.",
  },
  {
    question: "How is Vialogue different from other communication platforms?",
    answer:
      "Vialogue combines multi-channel communication, intelligent routing, real-time analytics, and developer-friendly APIs into a single, high-performance platform built for scale.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve fintech, e-commerce, logistics, healthcare, education, retail, SaaS, and customer support industries with tailored communication solutions.",
  },
];

const faqsRight: FAQItem[] = [
  {
    question: "What industries does Talk To Agent cater to?",
    answer:
      "Talk To Agent is ideal for customer support centers, banking, insurance, healthcare, travel, real estate, and e-commerce businesses that require real-time customer interaction.",
  },
  {
    question: "What security measures does Vialogue have in place?",
    answer:
      "Vialogue implements data encryption, secure API authentication, role-based access control, and continuous monitoring to ensure enterprise-level security and compliance.",
  },
  {
    question: "How customizable is the Talk To Agent widget?",
    answer:
      "The widget is fully customizable, allowing branding, layout, behavior, routing logic, and integrations to match your business workflows and user experience.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const answerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.01 },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: easeOut },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-10 px-4 sm:py-16 sm:pb-0 sm:px-40 bg-transparent text-slate-800"
    >
      <div className="">
        {/* HEADING */}
        <div className="text-left mb-14">
          <h1 className="text-center text-2xl sm:text-4xl font-semibold text-slate-900 tracking-tight uppercase">Frequently Asked Questions</h1>
        </div>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
          {[faqsLeft, faqsRight].map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-4 mx-auto md:min-w-full">
              {group.map((faq, index) => {
                const currentIndex = groupIndex * 10 + index;
                const isOpen = openIndex === currentIndex;

                return (
                  <div
                    key={currentIndex}
                    className={`rounded-2xl border transition-all duration-300
                      ${
                        isOpen
                          ? "border-brand-purple bg-slate-50 shadow-sm"
                          : "border-slate-200 bg-white"
                      }`}
                  >
                    <button
                      onClick={() => toggleFAQ(currentIndex)}
                      className="w-full cursor-pointer flex items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm sm:text-base font-semibold text-slate-800">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-brand-purple" : "text-slate-500"
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <motion.div
                        variants={answerContainer}
                        initial="hidden"
                        animate="visible"
                        className="px-5 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed flex flex-wrap font-light"
                      >
                        {faq.answer.split(" ").map((char, i) => (
                        <motion.span
                          key={i}
                          variants={charVariants}
                          className="whitespace-pre"
                        >
                          {char + " "}
                        </motion.span>
                      ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
