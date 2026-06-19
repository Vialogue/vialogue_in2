import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import FAQSection from "@/Global/FaqSection";
import { platformFaq } from "@/Global/faqData";
import ServiceHero from "@/Global/ServiceHero";

// Custom Premium Bots Sections
import BotsPreviewUI from "@/Sections/Services/Bots/BotsPreviewUI";
import BotsOverview from "@/Sections/Services/Bots/BotsOverview";
import BotsWhyImportance from "@/Sections/Services/Bots/BotsWhyImportance";
import BotsKeyFeatures from "@/Sections/Services/Bots/BotsKeyFeatures";
import BotsBusinessBenefits from "@/Sections/Services/Bots/BotsBusinessBenefits";
import BotsIndustryApplications from "@/Sections/Services/Bots/BotsIndustryApplications";

export default function Bots() {
  return (
    <div className="bg-white overflow-x-hidden sm:text-left text-center">
      <NavBar />
      <ServiceHero
        title={
          <span className="text-3xl sm:text-5xl lg:text-[46px] leading-tight block uppercase">
            Omnichannel Campaigns <span className="text-gradient">With Bots Engine</span>
          </span>
        }
        description="Build powerful omnichannel messaging campaigns using Vialogue Bots. Create, schedule, automate and track WhatsApp, SMS & RCS campaigns with real-time analytics."
        customRightElement={<BotsPreviewUI />}
        off_nav={false}
      />
      <BotsOverview />
      <BotsWhyImportance />
      <BotsKeyFeatures />
      <BotsBusinessBenefits />
      <BotsIndustryApplications />
      <FAQSection title="FAQs (Bots)" data={platformFaq} />
      <hr className="border-gray-200 mb-0 block" />
      <ReadySection
        heading="Launch Bots That Drive Real Results"
        paragraph="Build personalized campaigns across channels with Vialogue Bots."
        btn1="Start Now"
        btn2="Request a Demo"
      />
      <Footer />
    </div>
  );
}
