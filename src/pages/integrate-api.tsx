import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import FAQSection from "@/Global/FaqSection";
import { integrationsFaq } from "@/Global/faqData";
import Why from "@/Sections/Services/SMS/Why";
import ServiceHero from "@/Global/ServiceHero";

// Custom Premium Integrations Sections
import IntegrationsPreviewUI from "@/Sections/Services/Third/IntegrationsPreviewUI";
import IntegrationsOverview from "@/Sections/Services/Third/IntegrationsOverview";
import IntegrationsCapabilities from "@/Sections/Services/Third/IntegrationsCapabilities";
import IntegrationsBusinessBenefits from "@/Sections/Services/Third/IntegrationsBusinessBenefits";
import IntegrationsUseCases from "@/Sections/Services/Third/IntegrationsUseCases";

export default function IntegrateApi() {
  return (
    <div className="bg-white sm:text-left text-center">
      <NavBar />
      <ServiceHero
        title={
          <span className="text-3xl sm:text-5xl lg:text-[46px] leading-tight block uppercase">
            API &amp; CRM INTEGRATIONS FOR <span className="text-gradient">MESSAGING AUTOMATION</span>
          </span>
        }
        description="Integrate Vialogue with CRMs, databases and business tools via APIs and webhooks. Automate messaging workflows and sync customer data seamlessly."
        customRightElement={<IntegrationsPreviewUI />}
        off_nav={false}
      />
      <IntegrationsOverview />
      <Why />
      <IntegrationsCapabilities />
      <IntegrationsBusinessBenefits />
      <IntegrationsUseCases />
      <FAQSection title="FAQs (Integrations)" data={integrationsFaq} />
      <hr className="border-gray-200 mb-0 block" />
      <ReadySection heading="Connect Everything. Automate Everything." paragraph="Integrate Vialogue with your business tools and scale customer communication effortlessly. " btn2="Talk to Our Team"/>
      <Footer />
    </div>
  );
}
