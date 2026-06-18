import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import SMSPlatform from "@/Sections/Services/Whatsapp/SMSPlatform";
import Choose from "@/Sections/Services/Whatsapp/Choose";
import Features from "@/Sections/Services/Whatsapp/Features";
import HeroWhatsapp from "@/Sections/Services/Whatsapp/hero";
import API_One from "@/Sections/Services/Whatsapp/API_One";
import KeyFeatures from "@/Sections/Services/Whatsapp/KeyFeature";
import { wppFeaturesData } from "@/Global/data";
import FAQSection from "@/Global/FaqSection";
import { whatsappFaq } from "@/Global/faqData";
import ServiceHero from "@/Global/ServiceHero";
import CWC from "@/Global/CWC";
import { whatsapp_list } from "@/Global/usecase_data";
import { whatsapp_platform } from "@/Global/platform";
import AnimatedFeatureGrid from "@/Global/FeatureItem";
import WhatsappPreviewUI from "@/Sections/Services/Whatsapp/WhatsappPreviewUIComponent";
import WhatsappAPI from "@/Sections/Services/Whatsapp/WhatsappAPI";
import WhatsappDI from "@/Sections/Services/Whatsapp/WhatsappDI";

export default function Service() {
  return (
    <div className="bg-white sm:text-left text-center">
      <NavBar />
      <ServiceHero
        title={<span className="text-3xl sm:text-5xl lg:text-[46px] leading-tight block font-extrabold uppercase">BOOST CUSTOMER ENGAGEMENT WITH <span className="text-gradient">WHATSAPP BUSINESS</span></span>}
        description="Send secure OTPs, transactional alerts, customer support messages, and promotional updates on the world’s most trusted messaging platform."
        customRightElement={<WhatsappPreviewUI />}
        off_nav={true}
      />
      <section id="overview"></section>
      <div className="bg-white">
        <CWC
          heading="Real Business Use Cases for WhatsApp Business API"
          list={whatsapp_list}
        />
      </div>
      <section id="platform"></section>
      <div className="bg-[#FDF7FF]">
        <AnimatedFeatureGrid
          title="Whatsapp Platform"
          description="Vialogue enables businesses to reach customers instantly through fast, secure, and highly reliable SMS communication. Deliver transactional alerts, OTPs, and promotional messages with confidence and compliance."
          items={whatsapp_platform}
          columns={4}
        />
      </div>
      <section id="api-infra"></section>
      <div className="bg-white">
        <API_One />
      </div>
      <section id="features"></section>
      <div className="bg-[#FDF7FF]">
        <Features />
      </div>
      <div className="bg-white">
        <Choose />
      </div>
      <div className="bg-[#FDF7FF]">
        <WhatsappAPI />
      </div>
      <div className="bg-white">
        <WhatsappDI />
      </div>
      <div className="bg-[#FDF7FF]">
        <KeyFeatures title="Key Features" data={wppFeaturesData} />
      </div>
      <div className="bg-white">
        <FAQSection data={whatsappFaq} />
      </div>
      <hr className="border-gray-200 mb-0 block" />
      <ReadySection heading="Ready to Get Started?" paragraph="Integrate Vialogue WhatsApp APIs today and power your business communication with a secure, scalable, and reliable messaging platform." />
      <Footer />
    </div>
  );
}
