"use client";

import { AnimateIn } from "../AnimateIn";

const techCategories = [
  {
    label: "Languages",
    items: ["Swift", "Objective-C", "Python", "TypeScript", "C++"],
  },
  {
    label: "Frameworks & SDKs",
    items: [
      "SwiftUI",
      "UIKit",
      "Combine",
      "Core Data",
      "Core Animation",
      "WidgetKit",
      "HealthKit",
      "MapKit",
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      "Xcode",
      "Instruments",
      "TestFlight",
      "Git",
      "Fastlane",
      "CocoaPods",
      "SPM",
    ],
  },
  {
    label: "Other",
    items: [
      "REST APIs",
      "GraphQL",
      "CI/CD",
      "Unit Testing",
      "UI Testing",
      "Agile / Scrum",
    ],
  },
];

export function TechSection() {
  return (
    <section className="flex flex-col gap-6">
      <AnimateIn>
        <h2 className="text-lg font-semibold text-foreground">
          Technical Skills
        </h2>
      </AnimateIn>
      <div className="grid gap-6 md:grid-cols-2">
        {techCategories.map((category, i) => (
          <AnimateIn key={category.label} delay={i * 80}>
            <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5">
              <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-muted px-2.5 py-1 text-sm text-card-foreground"
                  >
                    {item}
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
