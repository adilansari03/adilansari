import { footerData } from "./data";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FeaturedWorkSection from "./components/FeaturedWorkSection";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#111111] text-white">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="relative mx-auto flex min-h-screen w-full max-w-[1600px] min-w-0 flex-col">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#111014] to-transparent" />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <FeaturedWorkSection />
            <ContactSection />
            <footer className="border-t border-white/10 px-5 py-6 text-center text-xs leading-6 text-slate-400 sm:px-8 sm:py-8 sm:text-sm">{footerData.text}</footer>
          </main>
        </div>
      </div>
    </div>
  );
}
