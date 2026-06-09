import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import GlobalHero from "@/Global/Hero";
import ASC from "@/Global/AutoScrollerContent";
import {
  AgentOverview,
  AgentOverviewRev,
  agentSlidingData,
  industries,
  keyFeatures,
  steps,
  voiceApiHighlights,
  voiceApiInfra,
  voiceFeaturesData,
  whoShouldUse,
} from "@/Global/data";
import VerifiedBusinessMessaging from "@/Global/LeftSideIconTimeline";
import CardSection from "@/Global/CardsSection";
import FAQSection from "@/Global/FaqSection";
import { agentAssistFaq, voiceFaq } from "@/Global/faqData";
import GlobalOverview from "@/Global/OverView";
import HowItWorks from "@/Global/HowItsWork";
import { business, caseIndustry } from "@/Global/verifiedMessaging";
import Flow from "@/Global/flow";
import SlidingWithHeading from "@/Global/SliderWithHeading";
import HowItWorksTwo from "@/Global/HowItsWorkTwo";
import KeyFeatures from "@/Global/KeyFeatures";
import Industries from "@/Global/Industries";
import WhoShouldUse from "@/Global/WhoShouldUseItem";
import ServiceHero from "@/Global/ServiceHero";

export default function Agent() {
  return (
    <div className="bg-white bg-gray-50 overflow-x-hidden sm:text-left text-center">
      <div className="relative pb-[0%] bg-[#39006B]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#571C96] to-[#39006B] opacity-80" />

        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.1]"
          style={{ backgroundImage: "url(/imgs/background.png)" }}
        />

        <div className="relative z-10">
          <NavBar />
          <ServiceHero
            title="AI Agent Assist Software for Customer Support Teams | Vialogue"
            description="Boost agent productivity and reduce response time using Vialogue AI Agent Assist. Provide faster, smarter, and more consistent customer support across channels."
            hero_img={"./services/feature_one.png"}
            off_nav={false}
          />
        </div>
      </div>
      <GlobalOverview data={AgentOverview} />
      <hr className="border-gray-200 mb-0 block" />
      <Flow />
      <SlidingWithHeading capabilities={agentSlidingData} />
      <GlobalOverview data={AgentOverviewRev} rev={true} />
      <HowItWorksTwo heading="How It Works" steps={steps} />
      <KeyFeatures heading="Key Features" features={keyFeatures} />
      <VerifiedBusinessMessaging data={business} />
      <WhoShouldUse items={whoShouldUse} />
      <Industries items={industries} bgColor="bg-gray-100" />
      <FAQSection title="FAQs (Agent Assist)" data={agentAssistFaq} />
      <hr className="border-gray-200 mb-0 block" />
      <ReadySection
        heading="Upgrade Your Support Experience With Agent Assist"
        paragraph="Deliver faster support and stronger customer satisfaction using Vialogue AI Agent Assist. "
      />
      <Footer />
    </div>
  );
}
