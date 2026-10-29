"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { PRIMARY_SKILLS, BROADER_SKILLS } from "@/lib/data";
import FadeIn from "@/components/fade-in";
import SectionHeader from "@/components/section-header";
import { CONTAINER, SECTION } from "@/lib/ui";

function SkillGroup({
  title,
  skills,
  variant,
  inView,
  delay,
}: {
  title: string;
  skills: string[];
  variant: "accent" | "neutral";
  inView: boolean;
  delay: number;
}) {
  return (
    <FadeIn inView={inView} delay={delay}>
      <h3 className="mb-3 text-[20px] leading-[1.18] font-semibold tracking-[-0.015em] text-label md:mb-4 md:text-[22px]">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2 md:gap-2.5">
        {skills.map((skill) => (
          <li
            key={skill}
            className={`inline-flex h-9 items-center rounded-pill px-4 text-[14px] font-medium transition-colors duration-200 ${
              variant === "accent"
                ? "bg-accent-tint text-accent-text hover:bg-accent-tint-hover"
                : "bg-fill text-label hover:bg-separator"
            }`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className={`bg-page ${SECTION}`} ref={ref}>
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Skills"
          title="What I work with"
          inView={inView}
        />

        <div className="space-y-8 md:space-y-10">
          <SkillGroup
            title="Primary Stack"
            skills={PRIMARY_SKILLS}
            variant="accent"
            inView={inView}
            delay={0.1}
          />
          <SkillGroup
            title="Broader Toolbelt"
            skills={BROADER_SKILLS}
            variant="neutral"
            inView={inView}
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}
