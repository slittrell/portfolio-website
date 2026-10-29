export interface Project {
  name: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  appStoreUrl?: string;
  liveUrl?: string;
  /** Closed-source work project; shows a label instead of a repo link. */
  proprietary?: boolean;
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

export interface EducationEntry {
  degree: string;
  school: string;
  dateRange: string;
  notes?: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const SITE = {
  name: "Sam Littrell",
  fullName: "Samuel Littrell",
  handle: "sam.littrell",
  title: "Sam Littrell | Software Engineer",
  description:
    "Portfolio of Samuel Littrell \u2014 Associate SWE at Veeva Systems, UC Berkeley EECS graduate, and aspiring theologian.",
  // TODO(Samuel): confirm the canonical production URL (GitHub Pages, Firebase, Vercel, or a custom domain).
  url: "https://slittrell.github.io/portfolio-website",
};

export const HERO = {
  tag: "< Software Engineer />",
  firstName: "Sam",
  lastName: "Littrell",
  subtitle: "Software engineer, linguist, and lifelong learner.",
};

export const ABOUT_PARAGRAPHS = [
  "I'm a software engineer at Veeva Systems working on Vault CRM Events Management. I graduated from UC Berkeley with a B.S. in Electrical Engineering & Computer Sciences.",
  // TODO(Samuel): confirm Korean proficiency wording.
  "I speak three languages \u2014 English, Mandarin Chinese (Advanced Mid proficiency), and Korean. I was a two-time NSLI-Y Merit Scholarship recipient through the U.S. Department of State, studying Mandarin immersively in China.",
  "Outside of engineering, I\u2019m currently pursuing a Master of Divinity at The Southern Baptist Theological Seminary. I\u2019m passionate about the intersection of technology, language, and service.",
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;

// TODO(Samuel): confirm "2+ Years at Veeva" (intern May 2024, full-time Feb 2025) and the other stats.
export const STATS: Stat[] = [
  { value: 2, suffix: "+", label: "Years at Veeva" },
  { value: 3, suffix: "", label: "Languages Spoken" },
  { value: 1, suffix: "", label: "USACO Silver" },
  { value: 2, suffix: "x", label: "NSLI-Y Scholar" },
];

export const PRIMARY_SKILLS = [
  "Swift",
  "SwiftUI",
  "Objective-C",
  "iOS Development",
  "CRM Development",
  "Vault Platform",
  "Automated Testing",
];

export const BROADER_SKILLS = [
  "Git",
  "REST APIs",
  "Firebase",
  "Python",
  "SQL",
  "CI/CD",
  "Mandarin Chinese",
  "UI Testing",
  "Next.js",
  "TypeScript",
  "Java"
];

// TODO(Samuel): add new and side projects (name, description, tags, links).
export const PROJECTS: Project[] = [
  {
    name: "Vault CRM Events Management",
    description:
      "Enterprise CRM events management module at Veeva Systems, enabling life sciences companies to plan, execute, and track their events and engagements.",
    tags: ["Swift", "Objective-C", "iOS Development", "Vault Platform", "CRM"],
    proprietary: true,
    initials: "VCRM",
    gradientFrom: "#F97316",
    gradientTo: "#EF4444",
  },
  {
    name: "Belden Horizon Lite",
    description:
      "Automated UI testing for the Belden Horizon Lite Mobile App during a Software R&D internship, improving quality assurance and test coverage.",
    // TODO(Samuel): add Kotlin and Android to skills, since this card lists them?
    tags: ["Kotlin", "Java", "Android Development", "UI Testing", "Automation"],
    proprietary: true,
    initials: "BH",
    gradientFrom: "#3B82F6",
    gradientTo: "#06B6D4",
  },
  {
    name: "Portfolio Website",
    description:
      "This personal portfolio built with Next.js, Tailwind CSS, and Framer Motion. Features a Substack-style articles section with markdown rendering.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/slittrell/portfolio-website",
    initials: "PW",
    gradientFrom: "#10B981",
    gradientTo: "#3B82F6",
  },
];

// TODO(Samuel): confirm current role, title, and dates; add any new experience.
export const RESUME_ENTRIES: ResumeEntry[] = [
  {
    title: "Associate Software Engineer",
    company: "Veeva Systems",
    dateRange: "Feb 2025 - Present",
    bullets: [
      "Working on Vault CRM Events Management, building enterprise software for the life sciences industry.",
      "Developing and maintaining features on the Veeva Vault CRM iPad Application using Swift and Objective-C.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Veeva Systems",
    dateRange: "May 2024 - Aug 2024",
    bullets: [
      "Interned on the Vault CRM Events Management team in Pleasanton, CA.",
      "Contributed to feature development and bug fixes for the Vault CRM iPad App.",
    ],
  },
  {
    title: "Educational Consultant",
    company: "Apex Academy",
    dateRange: "Mar 2020 - Jun 2024",
    bullets: [
      "Helped high school students navigate the college admissions process.",
      "Provided guidance on applications, essays, and academic planning over 4+ years.",
    ],
  },
  {
    title: "Software R&D Intern",
    company: "Belden Inc.",
    dateRange: "May 2023 - Aug 2023",
    bullets: [
      "Automated UI testing for the Belden Horizon Lite Mobile App.",
      "Improved test coverage and quality assurance processes at the Santa Clara office.",
    ],
  },
  {
    title: "NSLI-Y Scholar",
    company: "U.S. Department of State",
    dateRange: "Jun 2019 - Jun 2021",
    bullets: [
      "2x Merit Scholarship Recipient for this government-funded language immersion study abroad program.",
      "Studied Mandarin Chinese and earned Advanced Mid on the ACTFL OPI exam.",
    ],
  },
];

// TODO(Samuel): confirm M.Div. status and expected graduation, and Berkeley graduation month if wanted.
export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    degree: "B.S. Electrical Engineering & Computer Sciences (EECS)",
    school: "UC Berkeley College of Engineering",
    dateRange: "Graduated 2024",
  },
  {
    degree: "M.Div. Theological and Ministerial Studies",
    school: "The Southern Baptist Theological Seminary",
    dateRange: "Aug 2025 - Present",
    notes: "Currently enrolled",
  },
];

// TODO(Samuel): add the resume PDF to public/ (e.g. "/Samuel_Littrell_Resume.pdf") and set this.
// Resume download buttons stay hidden while it is undefined.
export const RESUME_PDF: string | undefined = undefined;

export const SOCIAL_LINKS = {
  github: "https://github.com/slittrell",
  linkedin: "https://www.linkedin.com/in/slittrell/",
  // TODO(Samuel): confirm this address (littrelly vs. littrell).
  email: "mailto:sam@littrelly.com",
};
