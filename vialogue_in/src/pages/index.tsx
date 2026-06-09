import React from "react";
import Head from "next/head";
import NavBar from "@/Components/NavBar";
import HeroSection from "@/Sections/HeroSection/HeroSection";
import ClientLogos from "@/Sections/ClientLogos/ClientLogos";
import ProductSolutions from "@/Sections/ProductSolutions/ProductSolutions";
import FeaturesBento from "@/Sections/FeaturesBento/FeaturesBento";
import IndustriesSection from "@/Sections/Industries/IndustriesSection";
import PlatformDemo from "@/Sections/PlatformDemo/PlatformDemo";
import WhyVialogue from "@/Sections/WhyVialogue/WhyVialogue";
import TestimonialsCarousel from "@/Sections/Testimonials/TestimonialsCarousel";
import FAQSection from "@/Sections/FAQSection";
import CTASection from "@/Sections/CTASection/CTASection";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vialogue | Enterprise Messaging Platform - SMS, WhatsApp & RCS</title>
        <meta 
          name="description" 
          content="Power your enterprise communication with Vialogue. Unified REST API for SMS, WhatsApp Business, RCS messaging, verification OTPs, and intelligent AI chatbots at scale." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="bg-[#FFFFFF] text-slate-800 min-h-screen relative overflow-x-hidden">
        {/* Navigation */}
        <NavBar />

        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Client Logos Slider */}
        <ClientLogos />

        {/* 3. Product Solutions */}
        <ProductSolutions />

        {/* 4. Features Bento Grid */}
        <FeaturesBento />

        {/* 5. Industries Section */}
        <IndustriesSection />

        {/* 6. Platform Demo Section */}
        <PlatformDemo />

        {/* 7. Why Vialogue (Stats) */}
        <WhyVialogue />

        {/* 8. Testimonials Carousel */}
        <TestimonialsCarousel />

        {/* FAQ Section */}
        <FAQSection />

        {/* 9. CTA Section */}
        <CTASection />

        {/* 10. Footer */}
        <Footer />
      </div>
    </>
  );
}
