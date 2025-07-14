import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import TechStackSection from "@/components/TechStackSection";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Topbar />
      <HeroSection />
      <TechStackSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
