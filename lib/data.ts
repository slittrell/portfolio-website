export interface Project {
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  appStoreUrl?: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface ResumeEntry {
  title: string;
  company: string;
  dateRange: string;
  bullets: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;

/* REPLACE: your personal stats */
export const STATS: Stat[] = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Apps Shipped" },
  { value: 10, suffix: "M+", label: "Users Reached" },
  { value: 3, suffix: "", label: "Open Source Projects" },
];

/* REPLACE: your actual skills */
export const IOS_SKILLS = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "Xcode",
  "Combine",
  "async/await",
  "CoreData",
  "Core Animation",
  "XCTest",
];

export const BROADER_SKILLS = [
  "Git",
  "GitHub Actions",
  "Figma",
  "Firebase",
  "REST APIs",
  "GraphQL",
  "Python",
  "CI/CD",
  "App Store Connect",
  "TestFlight",
];

/* REPLACE: your actual projects */
export const PROJECTS: Project[] = [
  {
    name: "Habitual",
    description:
      "A beautifully minimal habit tracker with streak visualization, daily reminders, and detailed analytics to help you build lasting habits.",
    tags: ["SwiftUI", "CoreData", "WidgetKit", "Charts"],
    githubUrl: "#",
    appStoreUrl: "#",
    initials: "Ha",
    gradientFrom: "#3B82F6",
    gradientTo: "#8B5CF6",
  },
  {
    name: "FocusFlow",
    description:
      "Pomodoro timer meets task manager. Integrates with WidgetKit for home screen focus sessions and tracks productivity over time.",
    tags: ["SwiftUI", "WidgetKit", "CoreData", "Combine"],
    githubUrl: "#",
    appStoreUrl: "#",
    initials: "Ff",
    gradientFrom: "#10B981",
    gradientTo: "#3B82F6",
  },
  {
    name: "Luma",
    description:
      "A photo journal app that lets you capture daily moments with rich text entries and automatic CloudKit sync across all your devices.",
    tags: ["SwiftUI", "PhotosUI", "CloudKit", "CoreImage"],
    githubUrl: "#",
    initials: "Lu",
    gradientFrom: "#F59E0B",
    gradientTo: "#EF4444",
  },
];

/* REPLACE: your actual experience */
export const RESUME_ENTRIES: ResumeEntry[] = [
  {
    title: "Senior iOS Engineer",
    company: "Company Name",
    dateRange: "2022 - Present",
    bullets: [
      "Lead architecture and development of flagship iOS application serving 2M+ daily active users.",
      "Migrated legacy UIKit codebase to SwiftUI, reducing view-related bugs by 40%.",
      "Implemented CI/CD pipeline with GitHub Actions, cutting release time from days to hours.",
    ],
  },
  {
    title: "iOS Engineer",
    company: "Company Name",
    dateRange: "2020 - 2022",
    bullets: [
      "Built and shipped 5 new features for the core iOS app, including a real-time messaging system.",
      "Optimized app launch time by 35% through lazy loading and dependency injection improvements.",
      "Mentored two junior developers and led weekly code review sessions.",
    ],
  },
  {
    title: "Junior iOS Developer",
    company: "Company Name",
    dateRange: "2018 - 2020",
    bullets: [
      "Developed UI components following Apple Human Interface Guidelines using UIKit and Auto Layout.",
      "Integrated RESTful APIs with URLSession and implemented offline-first data caching with CoreData.",
      "Contributed to unit and UI testing efforts, achieving 70% code coverage across the app.",
    ],
  },
];

/* REPLACE: your social links */
export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "mailto:hello@example.com",
};
