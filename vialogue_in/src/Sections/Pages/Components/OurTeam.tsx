"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const team = [
  {
    name: "John Smith",
    role: "Company CEO",
    image: "/imgs/team1.png",
    bg: "#FFE2C7",
    offset: "mt-0",
  },
  {
    name: "David Johnson",
    role: "Co-Founder",
    image: "/imgs/team2.png",
    bg: "#FFC6C1",
    offset: "mt-10",
  },
  {
    name: "Mary Johnson",
    role: "Property Manager",
    image: "/imgs/team3.png",
    bg: "#D9ECFA",
    offset: "mt-0",
  },
  {
    name: "Patricia Davis",
    role: "Estate Consultant",
    image: "/imgs/team4.png",
    bg: "#FFE0BD",
    offset: "mt-10",
  },
];

/* ================= ANIMATION VARIANTS ================= */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const MeetOurTeamWave = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 px-4 sm:px-10 lg:px-40">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-4xl sm:text-center font-medium sm:leading-10 tracking-tight text-gray-900 max-w-full sm:max-w-1/2 text-center m-auto">
            Meet Our Team
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg subheading">
            Our dedicated team of experienced real estate professionals is at
            the heart of what we do.
          </p>
        </motion.div>

        {/* ================= WAVE CARDS ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
            flex gap-10
            justify-center items-start
            flex-wrap lg:flex-nowrap
          "
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className={`
                w-[240px] sm:w-[260px]
                transition-transform duration-300
                hover:-translate-y-2
                ${member.offset}
                sm:mt-0
              `}
            >
              {/* ================= WAVE CARD ================= */}
              <div
                className="
                  relative h-[300px]
                  rounded-[150px]
                  overflow-hidden
                  flex items-end justify-center
                  shadow-sm
                "
                style={{
                  backgroundColor: member.bg,
                  clipPath:
                    "path('M0 40 Q130 0 260 0 V260 Q130 300 0 260 Z')",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* ================= TEXT ================= */}
              <div className="text-center mt-4">
                <h3 className="text-base sm:text-lg font-medium text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default MeetOurTeamWave;
