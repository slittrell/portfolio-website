"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Globe,
  Lock,
} from "lucide-react";
import { PROJECTS } from "@/lib/data";
import type { Project } from "@/lib/data";
import FadeIn from "@/components/fade-in";
import SectionHeader from "@/components/section-header";
import {
  CARD,
  CARD_INTERACTIVE,
  CONTAINER,
  EYEBROW,
  PILL_PRIMARY,
  PILL_SM,
  PILL_TINTED,
  SECTION,
} from "@/lib/ui";

const TINTED = `${PILL_SM} ${PILL_TINTED}`;
const PRIMARY = `${PILL_SM} ${PILL_PRIMARY}`;

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`flex h-full flex-col p-5 ${CARD} ${CARD_INTERACTIVE}`}>
      <p className={`mb-3 text-label-3 ${EYEBROW}`}>
        {project.proprietary ? "Proprietary" : project.tags[0]}
      </p>

      {/* App lockup: icon, name, category line */}
      <div className="mb-3 flex items-center gap-3.5">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22%] text-[15px] font-bold tracking-tight text-white shadow-hairline"
          style={{
            background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
          }}
        >
          {project.initials}
        </div>
        <div className="min-w-0">
          <h3 className="text-[17px] leading-[1.29] font-semibold tracking-[-0.01em] text-balance text-label md:text-[19px]">
            {project.name}
          </h3>
          <p className="mt-0.5 text-[13px] leading-[1.4] text-label-2 md:text-[14px]">
            {project.tags.join(" · ")}
          </p>
        </div>
      </div>

      <p className="mb-5 flex-1 text-[14px] leading-[1.45] text-label-2">
        {project.description}
      </p>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
            className={TINTED}
          >
            <Github size={14} aria-hidden="true" />
            View Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name}`}
            className={TINTED}
          >
            <Globe size={14} aria-hidden="true" />
            Visit
          </a>
        )}
        {project.appStoreUrl && (
          <a
            href={project.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on App Store`}
            className={PRIMARY}
          >
            App Store
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        )}
        {project.proprietary && (
          <span className="inline-flex items-center gap-1.5 text-[12px] leading-[1.3] text-label-3">
            <Lock size={12} aria-hidden="true" />
            Proprietary work project
          </span>
        )}
      </div>
    </article>
  );
}

function ShelfArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous projects" : "Next projects"}
      className={`absolute top-1/2 z-10 hidden h-16 w-7 -translate-y-1/2 items-center justify-center rounded-[6px] bg-nav text-label shadow-card backdrop-blur-[20px] backdrop-saturate-[1.8] transition-colors duration-200 hover:bg-surface md:inline-flex ${
        direction === "prev" ? "left-1 lg:left-3" : "right-1 lg:right-3"
      }`}
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const observer = new ResizeObserver(updateArrows);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      observer.disconnect();
    };
  }, [updateArrows]);

  const page = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * el.clientWidth * 0.9,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section id="projects" className={`bg-grouped ${SECTION}`} ref={ref}>
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built"
          inView={inView}
        />

        <div className="relative">
          {canPrev && <ShelfArrow direction="prev" onClick={() => page(-1)} />}

          {/* Shelf: bleeds to the page gutter and snaps card by card */}
          <div
            ref={scrollerRef}
            role="region"
            aria-label="Projects"
            tabIndex={0}
            data-at-end={!canNext}
            className="shelf -mx-[25px] -my-4 snap-x snap-mandatory scroll-px-[25px] overflow-x-auto px-[25px] py-4 lg:-mx-10 lg:scroll-px-10 lg:px-10"
          >
            <ul className="flex gap-4 md:gap-6">
              {PROJECTS.map((project, i) => (
                <li
                  key={project.name}
                  className="w-[85%] shrink-0 snap-start sm:w-[60%] md:w-[calc((100%-48px)/3)]"
                >
                  <FadeIn
                    inView={inView}
                    delay={0.1 + Math.min(i, 4) * 0.05}
                    className="h-full"
                  >
                    <ProjectCard project={project} />
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>

          {canNext && <ShelfArrow direction="next" onClick={() => page(1)} />}
        </div>
      </div>
    </section>
  );
}
