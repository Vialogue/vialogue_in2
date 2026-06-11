import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import ReadySection from "@/Sections/ReadySection";
import GlobalHero from "@/Global/Hero";
import LIRC from "@/Global/LeftImageRightContent";
import ASC from "@/Global/AutoScrollerContent";
import {
  apiInfraData,
  featureTableData,
  rcsFeaturesData,
  rcsList,
  rcsPlatformData,
} from "@/Global/data";
import LSIRCC from "@/Global/LeftSideImageRightContentCollaps";
import VerifiedBusinessMessaging from "@/Global/LeftSideIconTimeline";
import StatsSection from "@/Global/StateSection";
import { rcsStats } from "@/Global/rcsStates";
import CardSection from "@/Global/CardsSection";
import ApiInfraSection from "@/Global/InfraSection";
import FeatureTableSection from "@/Global/Table";
import FeatureCards from "@/Global/FeatureCards";
import FAQSection from "@/Global/FaqSection";
import { rcsFaq } from "@/Global/faqData";
import { verifiedMessaging } from "@/Global/verifiedMessaging";
import CWC from "@/Global/CWC";
import ServiceHero from "@/Global/ServiceHero";
import AnimatedFeatureGrid from "@/Global/FeatureItem";

export default function RCS() {
  return (
    <div className="bg-white sm:text-left text-center ">
      <NavBar />
      <ServiceHero
        title="Boost Customer Engagement with RCS Business Messaging"
        description="Boost Customer Engagement with RCS Business Messaging"
        hero_img={"./imgs/hm/rcs.png"}
        off_nav={true}
      />
      <section id="overview"></section>
      <LIRC
        title="Transform “Texting” into “Connecting”"
        description="In a world where attention is scarce, standard text messages fall short. <b>RCS (Rich Communication Services)</b> is the next generation of business messaging—bridging the gap between SMS and modern chat apps."
        imageSrc={"services/rcs/rcs_img1.png"}
        top_title=""
        is_top_title={false}
      />
      <CWC heading="Why RCS works better than SMS" list={rcsList} />
      <LSIRCC />
      <VerifiedBusinessMessaging data={verifiedMessaging} />
      <div className="heading-two bg-gray-50 text-center my-0 mt-16 pt-16 sm:mt-0 sm:mb-0 pb-0">Our Achievements</div>
      <StatsSection data={rcsStats} />
      <section id="platform"></section>
      <AnimatedFeatureGrid
        title="RCS Platform"
        description="Our RCS platform helps businesses launch verified, rich, and interactive messaging at scale. From onboarding to campaign execution, manage everything in one place — <b>templates, sender verification, analytics, automation, and customer journeys.</b>"
        items={rcsPlatformData}
      />
      <section id="api-infra"></section>
      <ApiInfraSection data={apiInfraData} />
      <section id="features"></section>
      <FeatureTableSection data={featureTableData} />
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
