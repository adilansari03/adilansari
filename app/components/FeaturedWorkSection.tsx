"use client";


import { featuredWorkData } from "../data";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import CaseStudyDialog from "./CaseStudyDialog";
import ProjectImage from "./ProjectImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FeaturedWorkSection = () => {
  const featuredRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<
    (typeof featuredWorkData.projects)[number] | null
  >(null);

  useEffect(() => {
    if (!featuredRef.current) return;

    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              once: true,
            },
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "transform,opacity",
          });
        });
      },
      featuredRef,
    );

    return () => media.revert();
  }, []);

  return (
    <section
      id="featured"
      ref={featuredRef}
      className="relative px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-6xl space-y-8 sm:space-y-12">
        <div className="space-y-4 text-center">
          <p className="featured-heading text-sm font-semibold uppercase tracking-[0.32em] text-orange-300">
            {featuredWorkData.label}
          </p>
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-white [overflow-wrap:anywhere]">
            {featuredWorkData.title}
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {featuredWorkData.description}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {featuredWorkData.projects.map((project) => {
            return (
            <article
              key={project.id}
              className="project-card group flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] bg-[#202020] p-3 sm:p-4"
            >
              <div className="relative mb-4">
                <ProjectImage
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  sizes="(min-width: 1280px) 340px, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="mt-1 px-1 [overflow-wrap:anywhere] text-lg sm:text-xl font-semibold text-white">
                {project.title}
              </h3>
              <ul className="mt-4 mb-5 flex flex-wrap gap-2 px-1">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="max-w-full break-words rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                aria-haspopup="dialog"
                aria-label={`${featuredWorkData.actionLabel}: ${project.title}`}
                onClick={() => setSelectedProject(project)}
                className="mt-auto flex min-h-12 w-full items-center gap-3 rounded-lg px-2 text-sm font-medium text-orange-300 transition-colors hover:bg-white/5 hover:text-orange-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300 justify-between"
              >
                <span>{featuredWorkData.actionLabel}</span>
                <ArrowRight aria-hidden="true" size={18} className="shrink-0" />
              </button>
            </article>
            );
          })}
        </div>
      </div>
      {selectedProject && (
        <CaseStudyDialog
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default FeaturedWorkSection;
