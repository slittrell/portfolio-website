"use client";

import { AnimateIn } from "./AnimateIn";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Swift", "Objective-C", "Python", "TypeScript"],
  },
  {
    label: "Frameworks",
    skills: ["SwiftUI", "UIKit", "Combine", "Core Data"],
  },
  {
    label: "Tools",
    skills: ["Xcode", "Git", "Instruments", "TestFlight"],
  },
  {
    label: "Platforms",
    skills: ["iOS", "watchOS", "macOS", "visionOS"],
  },
];

export function SkillsSection() {
  return (
    <section className="flex flex-col gap-6">
      <AnimateIn>
        <h2 className="text-lg font-semibold text-foreground">Skills</h2>
      </AnimateIn>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, i) => (
          <AnimateIn key={category.label} delay={i * 80}>
            <div className="flex flex-col gap-3">
              <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-card-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
