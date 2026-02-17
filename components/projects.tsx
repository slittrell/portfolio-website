"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import type { Project } from "@/lib/data";

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                delay: reduceMotion ? 0 : 0.2 + index * 0.15,
                duration: reduceMotion ? 0 : 0.5,
                ease: [0.25, 0.4, 0.25, 1] as const,
              },
            }
          : { opacity: 0, y: 30 }
      }
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
      <div className="flex gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} on GitHub`}
          className="rounded-lg border border-card-border p-2 text-muted-foreground transition-colors hover:border-muted hover:text-foreground"
        >
          <Github size={16} />
        </a>
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
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : delay,
        duration: reduceMotion ? 0 : 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="mb-3 block font-mono text-sm text-muted"
        >
          {"// projects"}
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.1}
          className="mb-12 font-serif text-4xl text-foreground md:text-5xl"
        >
          {"Things I've built"}
        </motion.h2>

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
