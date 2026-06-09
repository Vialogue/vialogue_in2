import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import ContactUs from "@/Sections/ContactUs";
import ContactHero from "@/Sections/ContactUs/Hero";
import MapSection from "@/Sections/Pages/Components/Map";

export default function Contact() {
  return (
    <div className="space-y-0 bg-white">
      <div className="relative py-16 bg-[#39006B]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#571C96] to-[#39006B] opacity-80" />

        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.1]"
          style={{ backgroundImage: "url(/imgs/background.png)" }}
        />

        <div className="relative z-10">
          <NavBar />
          <ContactHero />
        </div>
      </div>
      <ContactUs />
      <MapSection />
      <Footer />
    </div>
  );
}
