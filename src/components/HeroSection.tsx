"use client";

import Link from "next/link";
import { AnimateIn } from "./AnimateIn";

export function HeroSection() {
  return (
    <section className="flex flex-col gap-6 pt-12">
      <AnimateIn delay={0}>
        <p className="font-mono text-sm text-accent">{"Hello, I'm"}</p>
      </AnimateIn>
      <AnimateIn delay={100}>
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Sam Littrell
        </h1>
      </AnimateIn>
      <AnimateIn delay={200}>
        <h2 className="text-xl text-muted-foreground md:text-2xl">
          iOS Software Engineer
        </h2>
      </AnimateIn>
      <AnimateIn delay={300}>
        <p className="max-w-xl leading-relaxed text-muted-foreground">
          I build polished, performant mobile applications for iOS. Passionate
          about crafting intuitive user experiences with Swift, SwiftUI, and the
          Apple ecosystem.
        </p>
      </AnimateIn>
      <AnimateIn delay={400}>
        <div className="flex items-center gap-4 pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            View Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Resume
          </Link>
        </div>
      </AnimateIn>
    </section>
  );
}
