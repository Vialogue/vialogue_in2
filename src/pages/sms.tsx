import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import CWC from "@/Global/CWC";
import API from "@/Sections/Services/SMS/API";
import Choose from "@/Sections/Services/SMS/Choose";
import HowItWorks from "@/Sections/Services/SMS/HIW";
import DeveloperIntegration from "@/Sections/Services/SMS/DI";
import FeaturesHero from "@/Sections/Services/SMS/FH";
import Compliances from "@/Sections/Services/SMS/Compliances";
import KeyFeatures from "@/Sections/Services/SMS/Key";
import { sms_list } from "@/Global/usecase_data";
import ServiceHero from "@/Global/ServiceHero";
import AnimatedFeatureGrid from "@/Global/FeatureItem";
import { sms_platform } from "@/Global/platform";

import SMSPreviewUI from "@/Sections/Services/SMS/SMSPreviewUI";

export default function Sms() {
  return (
    <div className="bg-white sm:text-left text-center ">
      <NavBar />
      <ServiceHero 
        title={<span className="text-3xl sm:text-5xl lg:text-[46px] leading-tight block">COMPLIANT, RELIABLE SMS API FOR VERIFICATION & <span className="text-gradient">CUSTOMER ENGAGEMENT</span></span>} 
        description="Engage Your Customers at Every Step of Their Journey<br />An all-in-one messaging platform by Vialogue for OTPs, alerts & potifications, promotional and loyalty messaging-built for scale, security, and performance."
        customRightElement={<SMSPreviewUI />} 
        off_nav={true} 
      />
      <section id="overview"></section>
      <div className="bg-white">
        <CWC heading="Connect with customers at every touchpoint" list={sms_list} />
      </div>
      <section id="platform"></section>
      <div className="bg-[#FDF7FF]">
        <AnimatedFeatureGrid title="SMS Platform" description="Vialogue enables businesses to reach customers instantly through fast, secure, and highly reliable SMS communication." items={sms_platform} />
      </div>
      <section id="api-infra"></section>
      <div className="bg-white">
        <API />
      </div>
      <div className="bg-[#FDF7FF]">
        <Choose />
      </div>
      <div className="bg-white">
        <HowItWorks />
      </div>
      <div className="bg-[#FDF7FF]">
        <DeveloperIntegration />
      </div>
      <section id="features"></section>
      <div className="bg-white">
        <KeyFeatures />
      </div>
      <div className="bg-[#FDF7FF]">
        <Compliances />
      </div>
      <ReadySection heading="Ready to Get Started?" paragraph="Integrate Vialogue SMS APIs today and power your business communication with a secure, scalable, and reliable messaging platform." />
      <Footer />
    </div>
  );
}