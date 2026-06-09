import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import GlobalHero from "@/Global/Hero";
import ASC from "@/Global/AutoScrollerContent";
import {
  rcsList,
  voiceApiHighlights,
  voiceApiInfra,
  voiceFeaturesData,
  voiceOverviewData,
  voicePlatformCapabilities,
  voicePlatformOverview,
  voiceUseCasesData,
} from "@/Global/data";
import VerifiedBusinessMessaging from "@/Global/LeftSideIconTimeline";
import CardSection from "@/Global/CardsSection";
import FAQSection from "@/Global/FaqSection";
import { voiceFaq } from "@/Global/faqData";
import GlobalOverview from "@/Global/OverView";
import SlidingCards from "@/Global/SlidingCards";
import HowItWorks from "@/Global/HowItsWork";
import { caseIndustry } from "@/Global/verifiedMessaging";
import ServiceHero from "@/Global/ServiceHero";
import CWC from "@/Global/CWC";
import AnimatedFeatureGrid from "@/Global/FeatureItem";

export default function Voice() {
  return (
    <div className="bg-white sm:text-left text-center ">
      <div className="relative pb-[0%] bg-[#39006B]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#571C96] to-[#39006B] opacity-80" />

        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.1]"
          style={{ backgroundImage: "url(/imgs/background.png)" }}
        />

        <div className="relative z-10">
          <NavBar />
          <ServiceHero
            title="Automate Customer Communication with Smart Voice Solutions"
            description="Vialogue Voice enables businesses to communicate with customers at scale using a unified voice platform designed for <b>speed, reliability, personalization, and automation.</b>"
            hero_img="./imgs/hm/voice.png"
            off_nav={true}
          />
        </div>
      </div>
      <section id="overview"></section>
      <GlobalOverview data={voiceOverviewData} />
      <CWC heading="Use Cases" list={voiceUseCasesData} />
      <section id="platform"></section>
      <GlobalOverview data={voicePlatformOverview} />
      <SlidingCards capabilities={voicePlatformCapabilities} />
      <section id="api-infra"></section>
      <GlobalOverview data={voiceApiInfra} />
      <HowItWorks title={"Voice API Highlights"} steps={voiceApiHighlights} />
      <section id="features"></section>
      <AnimatedFeatureGrid
        title="FEATURES"
        description="Powerful Voice Features That Improve Customer Outcomes"
        items={voiceFeaturesData}
      />
      <VerifiedBusinessMessaging data={caseIndustry} />
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
