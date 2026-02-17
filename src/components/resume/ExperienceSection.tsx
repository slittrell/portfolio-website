"use client";

import { AnimateIn } from "../AnimateIn";

const experiences = [
  {
    title: "Senior iOS Engineer",
    company: "Tech Company",
    companyUrl: "#",
    period: "2023 -- Present",
    description:
      "Lead iOS development for the flagship mobile application serving millions of users. Architect and implement new features using SwiftUI, drive technical decisions, and mentor junior engineers.",
    tags: ["Swift", "SwiftUI", "Combine", "Core Data", "CI/CD"],
  },
  {
    title: "iOS Engineer",
    company: "Startup Inc.",
    companyUrl: "#",
    period: "2021 -- 2023",
    description:
      "Built and shipped multiple iOS applications from concept to App Store. Implemented complex UI interactions, integrated RESTful APIs, and established testing best practices across the mobile team.",
    tags: ["Swift", "UIKit", "Alamofire", "XCTest", "SnapKit"],
  },
  {
    title: "Junior iOS Developer",
    company: "Agency Co.",
    companyUrl: "#",
    period: "2019 -- 2021",
    description:
      "Developed client-facing iOS applications across various industries. Collaborated with designers and backend engineers to deliver polished, on-time releases.",
    tags: ["Swift", "UIKit", "Core Animation", "Firebase"],
  },
];

export function ExperienceSection() {
  return (
    <section className="flex flex-col gap-6">
      <AnimateIn>
        <h2 className="text-lg font-semibold text-foreground">Experience</h2>
      </AnimateIn>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, i) => (
          <AnimateIn key={exp.title} delay={i * 100}>
            <div className="group relative flex flex-col gap-3 border-l-2 border-border py-1 pl-6 transition-colors hover:border-accent">
              <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-border transition-colors group-hover:bg-accent" />
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    className="text-sm text-accent transition-opacity hover:opacity-80"
                  >
                    {exp.company}
                  </a>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
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
