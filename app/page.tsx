import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import TechStackSection from "@/components/TechStackSection";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <div className="min-h-screen w-screen  bg-gradient-to-br from-[#053133] via-[#4A7C7A] to-[#053133]">
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
