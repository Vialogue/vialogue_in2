import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import SMSPlatform from "@/Sections/Services/Whatsapp/SMSPlatform";
import Choose from "@/Sections/Services/Whatsapp/Choose";
import Features from "@/Sections/Services/Whatsapp/Features";
import HeroWhatsapp from "@/Sections/Services/Whatsapp/hero";
import API_One from "@/Sections/Services/Whatsapp/API_One";
import API_Two from "@/Sections/Services/Whatsapp/API_Two";
import KeyFeatures from "@/Sections/Services/Whatsapp/KeyFeature";
import { wppFeaturesData } from "@/Global/data";
import FAQSection from "@/Global/FaqSection";
import { whatsappFaq } from "@/Global/faqData";
import ServiceHero from "@/Global/ServiceHero";
import CWC from "@/Global/CWC";
import { whatsapp_list } from "@/Global/usecase_data";
import { whatsapp_platform } from "@/Global/platform";
import AnimatedFeatureGrid from "@/Global/FeatureItem";

export default function Service() {
  return (
    <div className="bg-white ">
      <NavBar />
      <ServiceHero
        title="Boost Customer Engagement with WhatsApp Business"
        description="Send secure OTPs, transactional alerts, customer support messages, and promotional updates on the world’s most trusted messaging platform."
        hero_img="./imgs/hm/wapp.png"
        off_nav={true}
      />
      <section id="overview"></section>
      <CWC
        heading="Real Business Use Cases for WhatsApp Business API"
        list={whatsapp_list}
      />
      <section id="platform"></section>
      <API_One />
      <AnimatedFeatureGrid
        title="Whatsapp Platform"
        description="Vialogue enables businesses to reach customers instantly through fast, secure, and highly reliable SMS communication. Deliver transactional alerts, OTPs, and promotional messages with confidence and compliance."
        items={whatsapp_platform}
        columns={4}
      />
      <section id="api-infra"></section>
      <API_Two />
      <section id="features"></section>
      <Features />
      {/* <div className="flex gap-2 text-md font-medium text-[#8C41F5] items-center my-10 justify-center">
        <div className="h-[0.5px] w-10 bg-[#8C41F5]"></div>
        FEATURES
        <div className="h-[0.5px] w-10 bg-[#8C41F5]"></div>
      </div> */}
      <Choose />
      <KeyFeatures title="Key Features" data={wppFeaturesData} />
      <FAQSection data={whatsappFaq} />
      <hr className="border-gray-200 mb-0 block" />
      <ReadySection />
      <Footer />
    </div>
  );
}
