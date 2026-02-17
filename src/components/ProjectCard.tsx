"use client";

import { AnimateIn } from "./AnimateIn";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  href,
  delay = 0,
}: ProjectCardProps) {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <AnimateIn delay={delay}>
      <Wrapper
        {...wrapperProps}
        className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
      >
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-card-foreground transition-colors group-hover:text-accent">
            {title}
          </h3>
          {href && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          )}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </Wrapper>
    </AnimateIn>
  );
}
