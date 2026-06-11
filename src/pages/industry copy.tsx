import HeroSection from "@/Sections/HeroSection";
import NavBar from "@/Components/NavBar";
import WelcomeSection from "@/Sections/WelcomSection";
import CompromiseSection from "@/Sections/CompromiseSection";
import ShowSection from "@/Sections/ShowSection";
import IndustrySection from "@/Sections/Industry";
import TestimonialSection from "@/Sections/TestimonialSection";
import Footer from "@/Components/Footer";
import GetInTouch from "@/Sections/GetInTouch";
import EngagementScaleSection from "@/Components/EngagementScaleSection";
import ScrollingBrandsSection from "@/Components/ScrollingBrands";
import BrandPromiseSection from "@/Components/BrandPromiseSection";
import ProductImageStatic from "@/Components/ProductImageStatic";
import IndustryCommunicationPage from "@/Global/Industry/section_one";
import BFSISection from "@/Global/Industry/section_two";
import EcommerceRetailSection from "@/Global/Industry/section_three";
import EducationSection from "@/Global/Industry/section_four";
import FoodBeveragesSection from "@/Global/Industry/section_five";
import HealthcareSection from "@/Global/Industry/section_six";
import ReadySection from "@/Sections/ReadySection";
import FAQSection from "@/Global/FaqSection";
import { industryFaq } from "@/Global/faqData";
import ServiceHero from "@/Global/ServiceHero";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <NavBar />
      <ServiceHero title="Communication Built for
Every Industry" description="Vialogue delivers channel-native messaging solutions across six of India's fastest-growing sectors" hero_img="./industry.png" off_nav={true} />
      <IndustryCommunicationPage />
      <div id="BFSI"></div>
      <BFSISection />
      <div id="E-Commerce"></div>
      <EcommerceRetailSection />
      <div id="Education"></div>
      <EducationSection />
      <div id="Food & Beverages"></div>
      <FoodBeveragesSection />
      <div id="Healthcare"></div>
      <HealthcareSection />
      <FAQSection data={industryFaq} />
      <hr className="border-t border-gray-300" />
      <ReadySection heading="Unlock Unmatched Conversions. Get Started Now With Vialogue" paragraph="See how Vialogue adapts to your industry and scales with your business" btn2="Talk to an expert"/>
      <Footer />
    </div>
  );
}
