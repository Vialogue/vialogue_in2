import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import FAQSection from "@/Global/FaqSection";
import { conversationBuilderFaq } from "@/Global/faqData";
import ServiceHero from "@/Global/ServiceHero";

// Custom Premium Conversation Builder Sections
import ConversationPreviewUI from "@/Sections/Services/Conversation/ConversationPreviewUI";
import ConversationOverview from "@/Sections/Services/Conversation/ConversationOverview";
import ConversationProblemSolution from "@/Sections/Services/Conversation/ConversationProblemSolution";
import ConversationKeyFeatures from "@/Sections/Services/Conversation/ConversationKeyFeatures";
import ConversationBusinessBenefits from "@/Sections/Services/Conversation/ConversationBusinessBenefits";
import ConversationIndustries from "@/Sections/Services/Conversation/ConversationIndustries";

export default function Conversation() {
  return (
    <div className="bg-white overflow-x-hidden sm:text-left text-center">
      <NavBar />
      <ServiceHero
        title={
          <span className="text-3xl sm:text-5xl lg:text-[46px] leading-tight block uppercase">
            No-Code Conversation <span className="text-gradient">Builder For Chatbots</span>
          </span>
        }
        description="Build automated customer journeys with Vialogue Conversation Builder. Create chatbots, workflows and interactive messaging flows without writing code."
        customRightElement={<ConversationPreviewUI />}
        off_nav={false}
      />
      <ConversationOverview />
      <ConversationProblemSolution />
      <ConversationKeyFeatures />
      <ConversationBusinessBenefits />
      <ConversationIndustries />
      <FAQSection title="FAQs (Conversation Builder)" data={conversationBuilderFaq} />
      <hr className="border-gray-200 mb-0 block" />
      <ReadySection 
        heading="Create Chatbots That Feel Like Conversations" 
        paragraph="Start building automated journeys with Vialogue Conversation Builder." 
      />
      <Footer />
    </div>
  );
}