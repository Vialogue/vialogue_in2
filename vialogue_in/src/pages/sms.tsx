import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import CWC from "@/Global/CWC";
import SMSPlatform from "@/Global/FeatureItem";
import PCM from "@/Sections/Services/SMS/PCM";
import API from "@/Sections/Services/SMS/API";
import Choose from "@/Sections/Services/SMS/Choose";
import HowItWorks from "@/Sections/Services/SMS/HIW";
import Features from "@/Sections/Services/SMS/Features";
import DeveloperIntegration from "@/Sections/Services/SMS/DI";
import FeaturesHero from "@/Sections/Services/SMS/FH";
import Compliances from "@/Sections/Services/SMS/Compliances";
import KeyFeatures from "@/Sections/Services/SMS/Key";
import { sms_list } from "@/Global/usecase_data";
import ServiceHero from "@/Global/ServiceHero";
import AnimatedFeatureGrid from "@/Global/FeatureItem";
import { sms_platform } from "@/Global/platform";

export default function Sms() {
  return (
    <div className="bg-white sm:text-left text-center ">
      <div className="relative pb-[0%] bg-[#39006B]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#571C96] to-[#39006B] opacity-80" />

        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.1]"
          style={{ backgroundImage: "url(/imgs/background.png)" }}
        />

        <div className="relative z-10">
        <NavBar />
        <ServiceHero title="Compliant, Reliable SMS API for Verification & Customer Engagement" description="<b>Engage Your Customers at Every Step of Their Journey</b><br />An all-in-one messaging platform by Vialogue for OTPs, alerts & potifications, promotional and loyalty messaging-built for scale, security, and performance." hero_img="./imgs/hm/sms.png" off_nav={true} />
      </div>
      </div>
      <section id="overview"></section>
      <CWC heading="Connect with customers at every touchpoint" list={sms_list} />
      <section id="platform"></section>
      <AnimatedFeatureGrid title="SMS Platform" description="Vialogue enables businesses to reach customers instantly through fast, secure, and highly reliable SMS communication." items={sms_platform}  />
      <PCM />
      <section id="api-infra"></section>
      <API />
      <Choose />
      <HowItWorks />
      <Features />
      <DeveloperIntegration />
      <section id="features"></section>
      <FeaturesHero />
      <KeyFeatures />
      <Compliances />
      <ReadySection heading="Ready to Get Started?" paragraph="Integrate Vialogue SMS APIs today and power your business communication with a secure, scalable, and reliable messaging platform." />
      <Footer />
    </div>
  );
}