import NavBar from "@/Components/NavBar";
import WelcomeSection from "@/Sections/WelcomSection";
import CompromiseSection from "@/Sections/CompromiseSection";
import ShowSection from "@/Sections/ShowSection";
import IndustrySection from "@/Sections/Industry";
import FAQSection from "@/Sections/FAQSection";
import ReadySection from "@/Sections/ReadySection";
import Footer from "@/Components/Footer";
import GetInTouch from "@/Sections/GetInTouch";
import EngagementScaleSection from "@/Components/EngagementScaleSection";
import AiSuccessSection from "@/Components/AiSuccessSection";
import ScrollingBrandsSection from "@/Components/ScrollingBrands";
import BrandPromiseSection from "@/Components/BrandPromiseSection";
import OtherHero from "@/Sections/Pages/other_hero";
import FounderNote from "@/Sections/Pages/Components/Founder";
import ClientLogos from "@/Sections/ClientLogos/ClientLogos";
import EngineeringGrowthTimeline from "@/Sections/Pages/Components/EngineeringGrowthTimeling";
import MapSection from "@/Sections/Pages/Components/Map";
import RevolvingCards from "@/Sections/Pages/Components/WhyWeStart";

export default function About() {
  return (
    <div className="bg-white">
      <NavBar />
      <OtherHero />
      <RevolvingCards />
      <FounderNote />
      <div className="bg-white sm:px-0 px-0">
        <ClientLogos />
      </div>
      <IndustrySection />
   
      <EngineeringGrowthTimeline />
      <br />
      <br />
      <GetInTouch />
      <MapSection />
      <Footer />
    </div>
  );
}
