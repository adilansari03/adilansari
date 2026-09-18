"use client";


import { aboutData } from "../data";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aboutRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".about-cards > div", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        y: 35,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-3xl space-y-8 sm:space-y-12">
        <div className="space-y-6">
          <p className="about-heading text-sm font-semibold uppercase tracking-[0.32em] text-orange-300">{aboutData.label}</p>
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-white [overflow-wrap:anywhere]">{aboutData.title}</h2>
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index} className="about-copy max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="about-cards grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {aboutData.highlights.map((item) => (
            <div
              key={item.label}
              className="min-w-0 rounded-xl bg-[#202020] p-5 text-white/90 shadow-lg shadow-black/20 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-gray-400">
                {item.label}
              </p>
              <p className="mt-3 text-base leading-6 font-medium [overflow-wrap:anywhere]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
