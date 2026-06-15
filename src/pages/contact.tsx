import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import ContactUs from "@/Sections/ContactUs";
import ContactHero from "@/Sections/ContactUs/Hero";
import MapSection from "@/Sections/Pages/Components/Map";

export default function Contact() {
  return (
    <div className="space-y-0 bg-[#FAF3FF]">
      <NavBar />
      <ContactHero />
      <ContactUs />
      <MapSection />
      <Footer />
    </div>
  );
}
