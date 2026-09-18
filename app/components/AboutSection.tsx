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
      className="relative px-6 py-24 sm:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-3xl space-y-14">
        <div className="space-y-6">
          <p className="about-heading text-sm font-semibold uppercase tracking-[0.32em] text-orange-300">{aboutData.label}</p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{aboutData.title}</h2>
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index} className="about-copy max-w-3xl text-lg leading-8 text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="about-cards grid gap-2 sm:grid-cols-4">
          {aboutData.highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-white/5 p-6 text-white/90 shadow-lg shadow-black/20 backdrop-blur-xl"
            >
              <p className="text-[12px] uppercase tracking-[0.24em] text-gray-400">
                {item.label}
              </p>
              <p className="mt-4 text-md leading-5 tracking-[0.05em] font-medium">
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
