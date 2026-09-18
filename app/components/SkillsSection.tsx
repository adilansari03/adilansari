"use client";


import { skillsData } from "../data";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!skillsRef.current) return;

    const ctx = gsap.context(() => {

      gsap.from(".skill-group", {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 85%",
        },
        y: 25,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="relative px-6 py-24 sm:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 text-center">
          <p className="skills-heading text-sm font-semibold uppercase tracking-[0.32em] text-orange-300">{skillsData.label}</p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{skillsData.title}</h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">{skillsData.description}</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {skillsData.groups.map((group) => (
            <div
              key={group.title}
              className="skill-group min-w-0 rounded-2xl bg-white/5 p-6 shadow-lg shadow-black/20 last:md:col-span-2 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-orange-300">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="skill-bubble max-w-full rounded-3xl bg-white/5 px-5 py-2 text-sm leading-6  font-medium text-gray-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
