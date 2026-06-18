import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import { rcsList, rcsFeaturesData } from "@/Global/data";
import VerifiedBusinessMessaging from "@/Global/LeftSideIconTimeline";
import FeatureCards from "@/Global/FeatureCards";
import FAQSection from "@/Global/FaqSection";
import { rcsFaq } from "@/Global/faqData";
import { verifiedMessaging } from "@/Global/verifiedMessaging";
import CWC from "@/Global/CWC";
import ServiceHero from "@/Global/ServiceHero";
import LSIRCC from "@/Global/LeftSideImageRightContentCollaps";

import RCSPreviewUI from "@/Sections/Services/RCS/RCSPreviewUIComponent";
import RCS_One from "@/Sections/Services/RCS/RCS_One";
import RCSAPI from "@/Sections/Services/RCS/RCSAPI";
import RCSDI from "@/Sections/Services/RCS/RCSDI";

export default function RCS() {
  return (
    <div className="bg-white sm:text-left text-center">
      <NavBar />
      <ServiceHero
        title={<span className="text-3xl sm:text-5xl lg:text-[46px] leading-tight block font-extrabold uppercase">BOOST CUSTOMER ENGAGEMENT WITH <span className="text-gradient">RCS BUSINESS MESSAGING</span></span>}
        description="Deliver rich, interactive, and verified messages natively to Android devices for unparalleled customer engagement."
        customRightElement={<RCSPreviewUI />}
        off_nav={true}
      />
      
      <RCS_One />
      
      <CWC heading="Why RCS works better than SMS" list={rcsList} />

      <LSIRCC />
      
      <VerifiedBusinessMessaging data={verifiedMessaging} />

      <RCSAPI />
      
      <RCSDI />

      <FeatureCards
        title="RCS Features That Improve Clicks, Trust & Engagement"
        data={rcsFeaturesData}
      />
      
      <FAQSection title="Frequently Asked Questions" data={rcsFaq} />
      
      <hr className="border-gray-200 mb-0 block" />
      <ReadySection />
      <Footer />
    </div>
  );
}
