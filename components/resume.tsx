"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Download } from "lucide-react";
import { EDUCATION_ENTRIES, RESUME_ENTRIES, RESUME_PDF } from "@/lib/data";
import { asset } from "@/lib/asset";
import FadeIn from "@/components/fade-in";

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="scroll-mt-20 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn
          as="span"
          inView={inView}
          className="mb-3 block font-mono text-sm text-muted"
        >
          {"// resume"}
        </FadeIn>

        <FadeIn
          as="h2"
          inView={inView}
          delay={0.1}
          className="mb-12 font-serif text-4xl text-foreground md:text-5xl"
        >
          My experience
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-card-border md:left-4" />

          <div className="space-y-12">
            {RESUME_ENTRIES.map((entry, i) => (
              <FadeIn
                key={entry.dateRange}
                inView={inView}
                delay={0.2 + i * 0.15}
                x={-20}
                y={0}
                className="relative pl-10 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background md:left-2.5" />

                <div className="rounded-xl border border-card-border bg-card p-6">
                  <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
                    <h3 className="text-lg font-medium text-foreground">
                      {entry.title}
                    </h3>
                    <span className="hidden text-muted md:inline">
                      {"//"}
                    </span>
                    <span className="font-mono text-sm text-accent">
                      {entry.company}
                    </span>
                  </div>
                  <span className="mb-4 block font-mono text-xs text-muted-foreground">
                    {entry.dateRange}
                  </span>
                  <ul className="space-y-2">
                    {entry.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent/50" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Education */}
        <FadeIn inView={inView} delay={0.6} className="mt-16">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">
            Education
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {EDUCATION_ENTRIES.map((entry) => (
              <div
                key={entry.degree}
                className="rounded-xl border border-card-border bg-card p-6"
              >
                <h4 className="mb-1 text-lg font-medium text-foreground">
                  {entry.degree}
                </h4>
                <p className="mb-3 font-mono text-sm text-accent">
                  {entry.school}
                </p>
                <span className="block font-mono text-xs text-muted-foreground">
                  {entry.dateRange}
                  {entry.notes && ` \u00B7 ${entry.notes}`}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Download button */}
        {RESUME_PDF && (
          <FadeIn
            as="div"
            inView={inView}
            delay={0.8}
            className="mt-12 flex justify-center"
          >
            <a
              href={asset(RESUME_PDF)}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-card-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-muted-foreground"
            >
              <Download size={16} />
              Download Full Resume
            </a>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
