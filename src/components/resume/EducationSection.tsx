"use client";

import { AnimateIn } from "../AnimateIn";

const education = [
  {
    degree: "B.S. Computer Science",
    school: "University Name",
    period: "2015 -- 2019",
    details: "Focus on mobile computing and software engineering.",
  },
];

export function EducationSection() {
  return (
    <section className="flex flex-col gap-6">
      <AnimateIn>
        <h2 className="text-lg font-semibold text-foreground">Education</h2>
      </AnimateIn>
      <div className="flex flex-col gap-6">
        {education.map((edu, i) => (
          <AnimateIn key={edu.degree} delay={i * 100}>
            <div className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-accent">{edu.school}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{edu.details}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
