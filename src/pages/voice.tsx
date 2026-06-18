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
        off_nav={true}
      />

      {/* 2. OVERVIEW — Voice Communication That Customers Actually Respond To */}
      <section id="overview"></section>
      <div className="bg-white">
        <div className="px-4 md:px-40 py-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-purple-50 border border-purple-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-purple">Overview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 heading-two leading-tight mb-6">
              Voice Communication That Customers{" "}
              <span className="text-gradient">Actually Respond To</span>
            </h2>
            <p className="text-lg text-slate-600 subheading leading-relaxed max-w-3xl mx-auto text-justify">
              Voice is one of the most effective channels for urgent, high-importance customer
              communication because it reaches instantly and gets attention, works without internet
              or smartphone dependency, improves trust for transactional and security messages,
              and supports regional languages and accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            {/* Left — Image */}
            <div className="flex justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 to-[#F9A8D4]/10 blur-[80px] rounded-full pointer-events-none" />
              <img
                src="/services/voice/overview.png"
                alt="Voice Communication Overview"
                className="rounded-3xl w-full max-w-[500px] object-contain filter drop-shadow-xl relative z-10"
              />
            </div>

            {/* Right — Points */}
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold text-slate-800 mb-2">
                Trusted by businesses for:
              </p>
              {[
                "Delivery confirmations",
                "Payment reminders",
                "Appointment confirmations",
                "Service outage alerts",
                "Promotional voice broadcasts",
              ].map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-purple-50 border border-purple-100 hover:border-purple-300 transition-all duration-200 group"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-purple-400 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-slate-700 font-medium capitalize">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
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
