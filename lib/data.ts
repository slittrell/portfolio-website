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

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;

export const STATS: Stat[] = [
  { value: 2, suffix: "+", label: "Years at Veeva" },
  { value: 3, suffix: "", label: "Languages Spoken" },
  { value: 1, suffix: "", label: "USACO Silver" },
  { value: 2, suffix: "x", label: "NSLI-Y Scholar" },
];

export const PRIMARY_SKILLS = [
  "Java",
  "Apex",
  "JavaScript",
  "Swift",
  "Python",
  "SQL",
  "CRM Development",
  "Vault Platform",
  "Automated Testing",
];

export const BROADER_SKILLS = [
  "Git",
  "iOS Development",
  "Objective-C",
  "REST APIs",
  "Firebase",
  "CI/CD",
  "Mandarin Chinese",
  "UI Testing",
  "Next.js",
  "TypeScript",
];

export const PROJECTS: Project[] = [
  {
    name: "Vault CRM Events Management",
    description:
      "Enterprise CRM events management module at Veeva Systems, enabling life sciences companies to plan, execute, and track their events and engagements.",
    tags: ["Java", "Apex", "Vault Platform", "CRM"],
    githubUrl: "#",
    initials: "Ve",
    gradientFrom: "#F97316",
    gradientTo: "#EF4444",
  },
  {
    name: "Belden Horizon Lite",
    description:
      "Automated UI testing for the Belden Horizon Lite Mobile App during a Software R&D internship, improving quality assurance and test coverage.",
    tags: ["Mobile", "UI Testing", "Automation", "R&D"],
    githubUrl: "#",
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

export const RESUME_ENTRIES: ResumeEntry[] = [
  {
    title: "Associate Software Engineer",
    company: "Veeva Systems",
    dateRange: "Feb 2025 - Present",
    bullets: [
      "Working on Vault CRM Events Management, building enterprise software for the life sciences industry.",
      "Developing and maintaining features on the Veeva Vault platform using Java and Apex.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Veeva Systems",
    dateRange: "May 2024 - Aug 2024",
    bullets: [
      "Interned on the Vault CRM Events Management team in Pleasanton, CA.",
      "Contributed to feature development and bug fixes for the CRM platform.",
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

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    degree: "B.S. Electrical Engineering & Computer Sciences",
    school: "UC Berkeley College of Engineering",
    dateRange: "Graduated 2024",
  },
  {
    degree: "M.Div. Theological and Ministerial Studies",
    school: "The Southern Baptist Theological Seminary",
    dateRange: "Aug 2025 - May 2030",
    notes: "Currently enrolled",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/slittrell",
  linkedin: "https://www.linkedin.com/in/slittrell/",
  twitter: "https://twitter.com",
  email: "mailto:samuel.littrell@gmail.com",
};
