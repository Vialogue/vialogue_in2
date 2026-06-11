import NavBar from "@/Components/NavBar";
import WelcomeSection from "@/Sections/WelcomSection";
import CompromiseSection from "@/Sections/CompromiseSection";
import ShowSection from "@/Sections/ShowSection";
import IndustrySection from "@/Sections/Industry";
import TestimonialSection from "@/Sections/TestimonialSection";
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
import MeetOurTeam from "@/Sections/Pages/Components/OurTeam";
import Brands from "@/Components/Brands";
import EngineeringGrowthTimeline from "@/Sections/Pages/Components/EngineeringGrowthTimeling";
import GuidedByVision from "@/Sections/Pages/Components/GuidedByVision";
import MapSection from "@/Sections/Pages/Components/Map";
import RevolvingCards from "@/Sections/Pages/Components/WhyWeStart";

export default function About() {
  return (
    <div className="bg-white">
      <NavBar />
      <OtherHero />
      <RevolvingCards />
      <FounderNote />
      <MeetOurTeam />
      <div className="bg-white sm:px-0 px-4">
        <Brands color="black" />
      </div>
      <IndustrySection />
   
      <EngineeringGrowthTimeline />
      <br />
      <br />
      <GuidedByVision />
      <TestimonialSection />
      <GetInTouch />
      <MapSection />
      <Footer />
    </div>
  );
}
