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
      <div className="relative pb-16 bg-[#39006B]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#571C96] to-[#39006B] opacity-80" />

        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.1]"
          style={{ backgroundImage: "url(/imgs/background.png)" }}
        />

        <div className="relative z-10">
          <NavBar />
          <OtherHero />
        </div>
      </div>
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
