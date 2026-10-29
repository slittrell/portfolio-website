"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Github, ExternalLink, Globe, Lock } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import type { Project } from "@/lib/data";
import FadeIn from "@/components/fade-in";

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  return (
    <FadeIn
      as="article"
      inView={inView}
      delay={0.2 + index * 0.15}
      className="group flex flex-col rounded-xl border border-card-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-card-border-hover hover:shadow-[0_4px_24px_rgba(59,130,246,0.06)]"
    >
      {/* App icon */}
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl font-mono text-sm font-medium text-foreground"
        style={{
          background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
        }}
      >
        {project.initials}
      </div>

      {/* App name */}
      <h3 className="mb-2 text-lg font-medium text-foreground">
        {project.name}
      </h3>

      {/* Description */}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-background px-2 py-1 font-mono text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
            className="rounded-lg border border-card-border p-2 text-muted-foreground transition-colors hover:border-muted hover:text-foreground"
          >
            <Github size={16} />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name}`}
            className="rounded-lg border border-card-border p-2 text-muted-foreground transition-colors hover:border-muted hover:text-foreground"
          >
            <Globe size={16} />
          </a>
        )}
        {project.appStoreUrl && (
          <a
            href={project.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on App Store`}
            className="rounded-lg border border-card-border p-2 text-muted-foreground transition-colors hover:border-muted hover:text-foreground"
          >
            <ExternalLink size={16} />
          </a>
        )}
        {project.proprietary && (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <Lock size={12} aria-hidden="true" />
            Proprietary work project
          </span>
        )}
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="scroll-mt-20 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn
          as="span"
          inView={inView}
          className="mb-3 block font-mono text-sm text-muted"
        >
          {"// projects"}
        </FadeIn>

        <FadeIn
          as="h2"
          inView={inView}
          delay={0.1}
          className="mb-12 font-serif text-4xl text-foreground md:text-5xl"
        >
          {"Things I've built"}
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
