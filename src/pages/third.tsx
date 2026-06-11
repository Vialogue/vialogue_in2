import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import GlobalHero from "@/Global/Hero";
import {
  AgentOverviewRev,
  agentSlidingData,
  benefits,
  crmIntegrations,
  industries,
  steps,
  ThirdOverview,
  useCases,
  whoShouldUse,
} from "@/Global/data";
import VerifiedBusinessMessaging from "@/Global/LeftSideIconTimeline";
import FAQSection from "@/Global/FaqSection";
import { integrationsFaq, voiceFaq } from "@/Global/faqData";
import GlobalOverview from "@/Global/OverView";
import { business } from "@/Global/verifiedMessaging";
import Flow from "@/Global/flow";
import SlidingWithHeading from "@/Global/SliderWithHeading";
import HowItWorksTwo from "@/Global/HowItsWorkTwo";
import KeyFeatures from "@/Global/KeyFeatures";
import Industries from "@/Global/Industries";
import WhoShouldUse from "@/Global/WhoShouldUseItem";
import Why from "@/Sections/Services/SMS/Why";
import ServiceHero from "@/Global/ServiceHero";

export default function Third() {
  return (
    <div className="bg-white sm:text-left text-center ">
      <NavBar />
      <ServiceHero
        title="API & CRM Integrations for Messaging Automation | Vialogue"
        description="Integrate Vialogue with CRMs, databases and business tools via APIs and webhooks. Automate messaging workflows and sync customer data seamlessly."
        hero_img={"./services/feature_two.png"}
        off_nav={false}
      />
      <GlobalOverview data={ThirdOverview} />
      <Why />
      <KeyFeatures heading="Key Integration Capabilities" features={crmIntegrations} />
      <HowItWorksTwo heading="Business Benefits" steps={benefits} />
      <WhoShouldUse bgColor="bg-gray-100" heading="Use Cases" items={useCases} />
      <FAQSection title="FAQs (Integrations)" data={integrationsFaq} />
      <hr className="border-gray-200 mb-0 block" />
      <ReadySection heading="Connect Everything. Automate Everything." paragraph="Integrate Vialogue with your business tools and scale customer communication effortlessly. " btn2="Talk to Our Team"/>
      <Footer />
    </div>
  );
}