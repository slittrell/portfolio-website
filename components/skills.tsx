"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { PRIMARY_SKILLS, BROADER_SKILLS } from "@/lib/data";
import FadeIn from "@/components/fade-in";

function SkillChip({
  label,
  index,
  inView,
  variant,
}: {
  label: string;
  index: number;
  inView: boolean;
  variant: "accent" | "neutral";
}) {
  return (
    <FadeIn
      as="span"
      inView={inView}
      delay={index * 0.05}
      duration={0.4}
      y={16}
      className={`inline-block rounded-lg border px-4 py-2 font-mono text-sm transition-all duration-200 ${
        variant === "accent"
          ? "border-accent/20 bg-accent/5 text-accent hover:border-accent/40 hover:bg-accent/10 hover:shadow-[0_0_12px_rgba(59,130,246,0.15)]"
          : "border-card-border bg-card text-muted-foreground hover:border-muted hover:text-foreground"
      }`}
    >
      {label}
    </FadeIn>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="scroll-mt-20 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn
          as="span"
          inView={inView}
          className="mb-3 block font-mono text-sm text-muted"
        >
          {"// skills"}
        </FadeIn>

        <FadeIn
          as="h2"
          inView={inView}
          delay={0.1}
          className="mb-12 font-serif text-4xl text-foreground md:text-5xl"
        >
          What I work with
        </FadeIn>

        <div className="space-y-10">
          {/* Primary Skills */}
          <FadeIn
            as="div"
            inView={inView}
            delay={0.2}
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              Primary Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {PRIMARY_SKILLS.map((skill, i) => (
                <SkillChip
                  key={skill}
                  label={skill}
                  index={i}
                  inView={inView}
                  variant="accent"
                />
              ))}
            </div>
          </FadeIn>

          {/* Broader Toolbelt */}
          <FadeIn
            as="div"
            inView={inView}
            delay={0.4}
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              Broader Toolbelt
            </h3>
            <div className="flex flex-wrap gap-3">
              {BROADER_SKILLS.map((skill, i) => (
                <SkillChip
                  key={skill}
                  label={skill}
                  index={i}
                  inView={inView}
                  variant="neutral"
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
