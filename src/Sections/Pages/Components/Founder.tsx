"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";

/* ================= ANIMATIONS ================= */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const FounderNote = () => {
  const nav = useRouter();
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-10 lg:px-40">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="
          mx-auto
          flex flex-col lg:flex-row
          gap-8 lg:gap-10
          items-stretch
          bg-[#F5D6FD61]
          overflow-hidden
          rounded-3xl
          max-w-7xl
          border-1 border-gray-300
        "
      >
        {/* ================= IMAGE ================= */}
        <motion.div
          variants={fadeScale}
          className="
            relative
            w-full
            h-[260px] sm:h-[320px] lg:h-[600px]
            lg:flex-[0.85]
          "
        >
          <Image
            src="/imgs/founder.png"
            alt="Founder"
            fill
            className="object-cover object-[0px_-50px]"
            priority
          />
        </motion.div>

        {/* ================= CONTENT ================= */}
        <motion.div
          className="
            flex flex-col justify-center
            flex-1
            p-6 sm:p-10 lg:p-16
          "
        >
          {/* TITLE */}
          <motion.h2
            variants={fadeUp}
            className="
              text-2xl sm:text-3xl lg:text-4xl
              font-medium text-gray-900
              mb-4 sm:mb-6
            "
          >
            Who you are
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="
              text-gray-600
              leading-relaxed
              text-sm sm:text-base lg:text-lg
            "
          >
            Experienced Enterprise Sales Manager with a demonstrated history of
            working in the internet industry.
            <br />
            <br />
            Skilled in Marketing Management,
            Sales, Customer Relationship Management (CRM), International
            Relations, and Institutional Selling. Strong business development
            professional with a Master of Business Administration (MBA) focused
            in Marketing/Marketing Management, General from IIM Calcutta.
          </motion.p>

          {/* FOUNDER NAME */}
          <motion.div variants={fadeUp} className="mt-6 sm:mt-8">
            <p className="text-base sm:text-lg font-medium text-gray-900">
              — Vineet Kumar Singh
            </p>
            <p className="text-xs sm:text-sm text-gray-500">Founder & CEO</p>
          </motion.div>

          <FaLinkedin onClick={()=>nav.push("https://www.linkedin.com/in/vineet-kumar-singh-b7675257/")} className="text-blue-500 hover:text-blue-700 cursor-pointer mt-7 w-10 h-10" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FounderNote;
