import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import GlobalHero from "@/Global/Hero";
import {
  AgentOverviewRev,
  agentSlidingData,
  benefits,
  bestUseCases,
  Build,
  businessBenefitsFlow,
  conversationBuilderFeatures,
  crmIntegrations,
  industries,
  steps,
  supportBenefits,
  ThirdOverview,
  useCases,
  whoShouldUse,
} from "@/Global/data";
import VerifiedBusinessMessaging from "@/Global/LeftSideIconTimeline";
import FAQSection from "@/Global/FaqSection";
import { conversationBuilderFaq, voiceFaq } from "@/Global/faqData";
import GlobalOverview from "@/Global/OverView";
import { business } from "@/Global/verifiedMessaging";
import Flow from "@/Global/flow";
import SlidingWithHeading from "@/Global/SliderWithHeading";
import HowItWorksTwo from "@/Global/HowItsWorkTwo";
import KeyFeatures from "@/Global/KeyFeatures";
import Industries from "@/Global/Industries";
import WhoShouldUse from "@/Global/WhoShouldUseItem";
import Why from "@/Sections/Services/SMS/Why";
import ProblemSolution from "@/Global/ProblemSolution";
import ServiceHero from "@/Global/ServiceHero";

export default function Conversation() {
  return (
    <div className="bg-white sm:text-left text-center ">
      <NavBar />
      <ServiceHero
        title="No-Code Conversation Builder for Chatbots & Customer Journeys | Vialogue"
        description="Build automated customer journeys with Vialogue Conversation Builder. Create chatbots, workflows and interactive messaging flows without coding."
        hero_img={"./imgs/hm/conv.png"}
        off_nav={false}
      />
      <GlobalOverview data={Build} />
      <ProblemSolution />
      <KeyFeatures heading="Key Features" features={conversationBuilderFeatures} />
      <HowItWorksTwo heading="Business Benefits" steps={businessBenefitsFlow} />
      <Industries bgColor="bg-gray-100" heading="Industries That Benefit" items={bestUseCases} />
      <FAQSection title="FAQs (Conversation Builder)" data={conversationBuilderFaq} />
      <hr className="border-gray-200 mb-0 block" />
      <ReadySection heading="Create Chatbots That Feel Like Conversations" paragraph="Start building automated journeys with Vialogue Conversation Builder." />
      <Footer />
    </div>
  );
}