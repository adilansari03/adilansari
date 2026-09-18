"use client";


import { featuredWorkData } from "../data";

import { useEffect, useRef, useState } from "react";
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
      className="relative px-6 pb-24 pt-20 sm:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 text-center">
          <p className="featured-heading text-sm font-semibold uppercase tracking-[0.32em] text-orange-300">
            {featuredWorkData.label}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {featuredWorkData.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            {featuredWorkData.description}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredWorkData.projects.map((project) => {
            return (
            <article
              key={project.id}
              className="project-card group flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] bg-zinc-950 p-5 transition-colors hover:bg-zinc-900 sm:p-3"
            >
              <div className="relative mb-6">
                <ProjectImage
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  sizes="(min-width: 1280px) 340px, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="mt-4 break-words text-xl font-semibold text-white">
                {project.title}
              </h3>
              <ul className="mt-5 mb-6 flex flex-wrap gap-2">
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
                className="mt-auto flex min-h-11 items-center gap-3 self-start rounded-lg px-2 text-sm font-medium text-orange-300 transition-colors hover:bg-white/5 hover:text-orange-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300 justify-between"
              >
                <span>{featuredWorkData.actionLabel}</span>
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
