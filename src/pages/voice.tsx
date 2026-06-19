import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import CWC from "@/Global/CWC";
import VoiceAPI from "@/Sections/Services/Voice/VoiceAPI";
import VoiceHIW from "@/Sections/Services/Voice/VoiceHIW";
import VoiceDeveloper from "@/Sections/Services/Voice/VoiceDeveloper";
import VoiceCoreFeatures from "@/Sections/Services/Voice/VoiceCoreFeatures";
import ServiceHero from "@/Global/ServiceHero";
import AnimatedFeatureGrid from "@/Global/FeatureItem";
import { voice_list } from "@/Global/usecase_data";
import { voice_platform } from "@/Global/platform";
import FAQSection from "@/Global/FaqSection";
import { voiceFaq } from "@/Global/faqData";
import VoicePreviewUI from "@/Sections/Services/Voice/VoicePreviewUI";
import { motion, Variants } from "framer-motion";
import { Truck, CreditCard, Calendar, AlertTriangle, Megaphone } from "lucide-react";

const overviewPoints = [
  {
    text: "Delivery confirmations",
    icon: Truck,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100 hover:border-emerald-200 hover:shadow-emerald-100/30",
    glowColor: "bg-emerald-500",
  },
  {
    text: "Payment reminders",
    icon: CreditCard,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100 hover:border-amber-200 hover:shadow-amber-100/30",
    glowColor: "bg-amber-500",
  },
  {
    text: "Appointment confirmations",
    icon: Calendar,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100 hover:border-blue-200 hover:shadow-blue-100/30",
    glowColor: "bg-blue-500",
  },
  {
    text: "Service outage alerts",
    icon: AlertTriangle,
    iconColor: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100 hover:border-rose-200 hover:shadow-rose-100/30",
    glowColor: "bg-rose-500",
  },
  {
    text: "Promotional voice broadcasts",
    icon: Megaphone,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100 hover:border-purple-200 hover:shadow-purple-100/30",
    glowColor: "bg-purple-500",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Voice() {
  return (
    <div className="bg-white sm:text-left text-center">
      <NavBar />

      {/* 1. HERO */}
      <ServiceHero
        title={
          <span className="text-3xl sm:text-5xl lg:text-[46px] leading-tight block">
            AUTOMATE CUSTOMER COMMUNICATION WITH{" "}
            <span className="text-gradient">SMART VOICE SOLUTIONS</span>
          </span>
        }
        description="Vialogue Voice enables businesses to communicate with customers at scale using a unified voice platform designed for <b>speed, reliability, personalization, and automation.</b>"
        customRightElement={<VoicePreviewUI />}

      />

      {/* 2. OVERVIEW — Voice Communication That Customers Actually Respond To */}
      <section id="overview"></section>
      <div className="bg-white overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="px-4 md:px-40 py-20 max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-purple-50 border border-purple-200 shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">Overview</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 heading-two leading-tight mb-6"
            >
              Voice Communication That Customers{" "}
              <span className="text-gradient">Actually Respond To</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-slate-600 subheading leading-relaxed max-w-3xl mx-auto text-justify font-light"
            >
              Voice is one of the most effective channels for urgent, high-importance customer
              communication because it reaches instantly and gets attention, works without internet
              or smartphone dependency, improves trust for transactional and security messages,
              and supports regional languages and accessibility.
            </motion.p>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-12">
            {/* Left — Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              className="lg:col-span-6 flex justify-center relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 to-[#F9A8D4]/10 blur-[80px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700" />
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative z-10"
              >
                <img
                  src="/services/voice/overview.png"
                  alt="Voice Communication Overview"
                  className="rounded-3xl w-full max-w-[500px] object-contain shadow-2xl border border-slate-100"
                />
              </motion.div>
            </motion.div>

            {/* Right — Points */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-lg font-bold text-slate-800 mb-2 border-l-4 border-[#884CED] pl-3"
              >
                Trusted by businesses for:
              </motion.p>

              <motion.div
                variants={containerVariants}
                className="flex flex-col gap-4"
              >
                {overviewPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl bg-white border ${point.borderColor} shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 group cursor-default`}
                  >
                    <div className={`w-11 h-11 rounded-xl ${point.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                      <point.icon size={20} className={point.iconColor} />
                    </div>
                    <div className="flex-1">
                      <span className="text-slate-700 font-semibold text-[15px] group-hover:text-[#884CED] transition-colors duration-300 capitalize">
                        {point.text}
                      </span>
                    </div>
                    <span className={`w-2.5 h-2.5 rounded-full ${point.glowColor} opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-sm`} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. USE CASES */}
      <section id="use-cases"></section>
      <div className="bg-gray-50">
        <CWC heading="Use Cases" list={voice_list} />
      </div>

      {/* 4. PLATFORM CAPABILITIES (FEATURES) */}
      <section id="platform"></section>
      <div className="bg-[#FDF7FF]">
        <AnimatedFeatureGrid
          title="FEATURES"
          description="Powerful Voice Features That Improve Customer Outcomes"
          items={voice_platform}
        />
      </div>

      {/* 5. VOICE API */}
      <section id="api-infra"></section>
      <div className="bg-white">
        <VoiceAPI />
      </div>

      {/* 6. VOICE API HIGHLIGHTS */}
      <div className="bg-white">
        <VoiceHIW />
      </div>

      {/* 7. DEVELOPER INTEGRATION */}
      <div className="bg-white">
        <VoiceDeveloper />
      </div>

      {/* 8. CORE FEATURES */}
      {/* <div className="bg-white">
        <VoiceCoreFeatures />
      </div> */}

      {/* 9. FAQ */}
      <FAQSection title="SEO FAQs – Vialogue Voice" data={voiceFaq} />

      <hr className="border-gray-200 mb-0 block" />
      <ReadySection
        heading="Ready to Scale Your Customer Communication with Voice?"
        paragraph="Make customer updates instant, trusted and actionable with Vialogue Voice."
      />
      <Footer />
    </div>
  );
}
