import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import { AnimateIn } from "./AnimateIn";

const featuredProjects = [
  {
    title: "Weather App",
    description:
      "A clean iOS weather application built with SwiftUI featuring real-time data, beautiful animations, and dynamic backgrounds that reflect current conditions.",
    tags: ["Swift", "SwiftUI", "CoreLocation", "WeatherKit"],
    href: "https://github.com/slittrell",
  },
  {
    title: "Task Manager",
    description:
      "A minimalist task management app with iCloud sync, widget support, and a focus on simplicity. Built entirely with SwiftUI and Core Data.",
    tags: ["Swift", "SwiftUI", "Core Data", "WidgetKit"],
    href: "https://github.com/slittrell",
  },
  {
    title: "Fitness Tracker",
    description:
      "An iOS fitness companion that integrates with HealthKit to provide insights on workouts, activity trends, and personalized goals.",
    tags: ["Swift", "UIKit", "HealthKit", "Charts"],
    href: "https://github.com/slittrell",
  },
];

export function FeaturedProjects() {
  return (
    <section className="flex flex-col gap-6">
      <AnimateIn>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            View all
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
        </div>
      </AnimateIn>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.title} {...project} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
