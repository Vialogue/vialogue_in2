import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import FAQSection from "@/Global/FaqSection";
import { agentAssistFaq } from "@/Global/faqData";
import ServiceHero from "@/Global/ServiceHero";

// Custom Premium Agent Sections
import AgentPreviewUI from "@/Sections/Services/Agent/AgentPreviewUI";
import AgentOverviewSection from "@/Sections/Services/Agent/AgentOverviewSection";
import AgentValueStatement from "@/Sections/Services/Agent/AgentValueStatement";
import AgentSolution from "@/Sections/Services/Agent/AgentSolution";
import AgentHowItWorks from "@/Sections/Services/Agent/AgentHowItWorks";
import AgentKeyFeatures from "@/Sections/Services/Agent/AgentKeyFeatures";
import AgentWhoShouldUse from "@/Sections/Services/Agent/AgentWhoShouldUse";
import AgentProblems from "@/Sections/Services/Agent/AgentProblems";
import AgentBusinessBenefits from "@/Sections/Services/Agent/AgentBusinessBenefits";
import AgentIndustries from "@/Sections/Services/Agent/AgentIndustries";

export default function Agent() {
  return (
    <div className="bg-white bg-gray-50 overflow-x-hidden sm:text-left text-center">
      <NavBar />
      <ServiceHero
        title={
          <span className="text-3xl sm:text-5xl lg:text-[46px] leading-tight block uppercase">
            AI AGENT ASSIST SOFTWARE FOR <span className="text-gradient">CUSTOMER SUPPORT TEAMS</span>
          </span>
        }
        description="Boost agent productivity and reduce response time using Vialogue AI Agent Assist. Provide faster, smarter, and more consistent customer support across channels."
        customRightElement={<AgentPreviewUI />}
        off_nav={false}
      />
      <AgentOverviewSection />
      <hr className="border-gray-200 mb-0 block" />
      <AgentValueStatement />
      <AgentProblems />
      <AgentSolution />
      <AgentHowItWorks />
      <AgentKeyFeatures />
      <AgentBusinessBenefits />
      <AgentWhoShouldUse />
      <AgentIndustries />
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

