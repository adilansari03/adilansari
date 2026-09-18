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
      className="case-study-dialog fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto overscroll-contain rounded-3xl border border-white/15 bg-zinc-950 p-0 text-white shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-zinc-950/95 px-6 py-4 backdrop-blur-sm sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
          Case study
        </p>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
        >
          Close <X aria-hidden="true" size={18} className="shrink-0" />
        </button>
      </div>

      <div className="space-y-8 break-words p-5 sm:space-y-10 sm:p-8">
        <header className="space-y-4">
          <p className="text-sm text-orange-300">{project.category}</p>
          <h2 id={titleId} className="break-words text-3xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h2>
          <p className="text-lg leading-8 text-slate-300">{project.description}</p>
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
                <li key={tool} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
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

        <div className="flex flex-wrap gap-3">
          {(Object.keys(linkLabels) as Array<keyof typeof linkLabels>).map((key) => {
            const href = getProjectUrl(projectDetails.links[key]);
            if (!href) return null;
            return (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-300/10 px-5 py-3 text-sm font-medium text-orange-200 transition hover:bg-orange-300/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
              >
                {linkLabels[key]} <ExternalLink aria-hidden="true" size={16} className="shrink-0" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            );
          })}
        </div>
      </div>
    </dialog>
  );
}
