import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import GlobalHero from "@/Global/Hero";
import {
  AgentOverviewRev,
  agentSlidingData,
  benefits,
  BuildBottomRev,
  businessBenefits,
  campaignKeyFeatures,
  crmIntegrations,
  industries,
  industry,
  Omni,
  steps,
  ThirdOverview,
  UseCase,
  useCases,
  whoShouldUse,
} from "@/Global/data";
import VerifiedBusinessMessaging from "@/Global/LeftSideIconTimeline";
import FAQSection from "@/Global/FaqSection";
import { platformFaq, voiceFaq } from "@/Global/faqData";
import GlobalOverview from "@/Global/OverView";
import { business } from "@/Global/verifiedMessaging";
import Flow from "@/Global/flow";
import SlidingWithHeading from "@/Global/SliderWithHeading";
import HowItWorksTwo from "@/Global/HowItsWorkTwo";
import KeyFeatures from "@/Global/KeyFeatures";
import Industries from "@/Global/Industries";
import WhoShouldUse from "@/Global/WhoShouldUseItem";
import GlobalOverviewRev from "@/Global/overviewRev";
import ServiceHero from "@/Global/ServiceHero";

export default function Bots() {
  return (
    <div className="bg-white overflow-x-hidden sm:text-left text-center ">
      <NavBar />
      <ServiceHero
        title="Bots for WhatsApp, SMS & RCS Marketing | Vialogue"
        description="Build powerful omnichannel messaging campaigns using Vialogue Bots. Create, schedule, automate and track WhatsApp, SMS & RCS campaigns with analytics."
        hero_img={"./services/feature_three.png"}
        off_nav={false}
      />
      <GlobalOverview data={Omni} />
      <GlobalOverviewRev data={BuildBottomRev} />
      <br className="block sm:hidden" />
      <br className="block sm:hidden"/>
      <KeyFeatures heading="Key Features" features={campaignKeyFeatures} />
      <HowItWorksTwo heading="Business Benefits" steps={businessBenefits} />
      
      <GlobalOverviewRev data={UseCase} />
      <WhoShouldUse bgColor="bg-gray-100" heading="Industry Applications" items={industry} />
      <FAQSection title="FAQs (Bots)" data={platformFaq} />
      <hr className="border-gray-200 mb-0 block" />
      <ReadySection
        heading="Launch Botss That Drive Real Results"
        paragraph="Build personalized campaigns across channels with Vialogue Bots."
        btn1="Start Now"
        btn2="Request a Demo"
      />
      <Footer />
    </div>
  );
}
