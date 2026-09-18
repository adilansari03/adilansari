import { footerData } from "./data";
import AboutSection from "./components/AboutSection";
import FeaturedWorkSection from "./components/FeaturedWorkSection";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050506] text-white">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#111014] to-transparent" />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <FeaturedWorkSection />
            <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500 sm:px-10">{footerData.text}</footer>
          </main>
        </div>
      </div>
    </div>
  );
}
