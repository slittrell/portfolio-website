import { ProjectCard } from "../../components/ProjectCard";
import { AnimateIn } from "../../components/AnimateIn";

const allProjects = [
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
  {
    title: "Photo Gallery",
    description:
      "A high-performance photo browsing app with smooth scrolling, pinch-to-zoom, and PhotoKit integration for accessing the user's library.",
    tags: ["Swift", "SwiftUI", "PhotoKit", "AsyncImage"],
    href: "https://github.com/slittrell",
  },
  {
    title: "Expense Tracker",
    description:
      "A personal finance app with category-based tracking, monthly summaries, and interactive charts built with Swift Charts.",
    tags: ["Swift", "SwiftUI", "Core Data", "Swift Charts"],
    href: "https://github.com/slittrell",
  },
  {
    title: "Chat Client",
    description:
      "A real-time messaging client featuring end-to-end encryption, push notifications, and a fluid conversational interface.",
    tags: ["Swift", "UIKit", "WebSocket", "Push Notifications"],
    href: "https://github.com/slittrell",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <AnimateIn>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Projects
          </h1>
        </AnimateIn>
        <AnimateIn delay={100}>
          <p className="text-muted-foreground">
            A collection of iOS applications and side projects.
          </p>
        </AnimateIn>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {allProjects.map((project, i) => (
          <ProjectCard key={project.title} {...project} delay={i * 80} />
        ))}
      </div>
    </div>
  );
}
