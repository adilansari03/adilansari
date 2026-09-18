"use client";


import { useEffect, useId, useRef } from "react";
import { BriefcaseBusiness, ExternalLink, X } from "lucide-react";
import type { featuredWorkData } from "../data";
import ProjectImage from "./ProjectImage";
import { getProjectUrl } from "../project-links";

type Project = (typeof featuredWorkData.projects)[number];

const linkLabels = {
  live: "Visit website",
  figma: "View Figma design",
  github: "View source code",
};

export default function CaseStudyDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const { projectDetails } = project;
  const projectLinks = (Object.keys(linkLabels) as Array<keyof typeof linkLabels>)
    .map((key) => ({ key, href: getProjectUrl(projectDetails.links[key]) }))
    .filter((link): link is { key: keyof typeof linkLabels; href: string } => Boolean(link.href));

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus({ preventScroll: true });
      }
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        ) {
          onClose();
        }
      }}
      className="case-study-dialog fixed inset-0 m-auto max-h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] sm:max-h-[90dvh] sm:w-[calc(100%-3rem)] max-w-4xl overflow-y-auto overscroll-contain rounded-2xl sm:rounded-3xl border border-white/15 bg-[#202020] p-0 text-white shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-[#202020] px-4 py-3 sm:py-4 backdrop-blur-sm sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
          Case study
        </p>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
        >
          Close <X aria-hidden="true" size={18} className="shrink-0" />
        </button>
      </div>

      <div className="min-w-0 space-y-6 [overflow-wrap:anywhere] p-4 sm:space-y-10 sm:p-8">
        <header className="space-y-4">
          <p className="text-sm text-orange-300">{project.category}</p>
          <h2 id={titleId} className="text-[clamp(1.5rem,5vw,3rem)] font-semibold leading-tight tracking-tight [overflow-wrap:anywhere]">
            {project.title}
          </h2>
          <p className="text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{project.description}</p>
          <dl className="grid gap-6 border-y border-white/10 py-6">
            <div>
              <dt className="flex items-center gap-2 text-sm text-slate-400">
                <BriefcaseBusiness aria-hidden="true" size={16} className="shrink-0" />
                Role
              </dt>
              <dd className="mt-2 font-medium">{projectDetails.role}</dd>
            </div>
          </dl>
        </header>

        <ProjectImage
          src={project.thumbnail}
          alt={`${project.title} cover`}
          sizes="(min-width: 896px) 832px, 100vw"
        />

        {projectDetails.responsibilities.length > 0 && (
          <section className="space-y-3">
            <h3 className="text-xl font-semibold">My responsibilities</h3>
            <ul className="list-disc space-y-2 pl-5 leading-7 text-slate-300 marker:text-orange-300">
              {projectDetails.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </section>
        )}

        {projectDetails.tools.length > 0 && (
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Tools & technologies</h3>
            <ul className="flex flex-wrap gap-2">
              {projectDetails.tools.map((tool) => (
                <li key={tool} className="max-w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 sm:px-4 text-sm text-slate-200">
                  {tool}
                </li>
              ))}
            </ul>
          </section>
        )}

        {projectDetails.gallery.length > 0 && (
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Project gallery</h3>
            <div className="space-y-4">
              {projectDetails.gallery.map((src, index) => (
                <ProjectImage
                  key={`${src}-${index}`}
                  src={src}
                  fit="contain"
                  alt={`${project.title} screenshot ${index + 1}`}
                  sizes="(min-width: 896px) 832px, 100vw"
                />
              ))}
            </div>
          </section>
        )}

      </div>

      {projectLinks.length > 0 && (
        <footer className="sticky bottom-0 z-10 flex flex-col gap-3 border-t border-white/10 bg-[#202020] px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:flex-row sm:flex-wrap sm:px-8">
          {projectLinks.map(({ key, href }) => {
            return (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-full border border-orange-300/30 bg-orange-300/10 px-5 py-3 text-sm font-medium text-orange-200 transition hover:bg-orange-300/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
              >
                {linkLabels[key]} <ExternalLink aria-hidden="true" size={16} className="shrink-0" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            );
          })}
        </footer>
      )}
    </dialog>
  );
}
