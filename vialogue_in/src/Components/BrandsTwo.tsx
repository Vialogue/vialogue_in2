"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const logoVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function BrandsTwo() {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-0">
      <div className="mx-auto text-center grid justify-center content-center items-center">

        {/* ===== Logos ===== */}
        <motion.div
          className="flex flex-wrap gap-6 items-center justify-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
        >
          {[...Array(7)].map((_, index) => (
            <motion.div
              key={index}
              variants={logoVariant}
              className="flex items-center justify-center"
            >
              <Image
                src={`/imgs/brand_${index + 1}.png`}
                width={120}
                height={100}
                alt={`Brand ${index + 1}`}
                className="object-contain transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}