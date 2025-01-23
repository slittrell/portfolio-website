import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A full-stack web application that helps users manage their tasks and stay organized.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: '/project1.jpg',
    demoUrl: 'https://project1.demo',
    githubUrl: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform built with modern web technologies.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    imageUrl: '/project2.jpg',
    demoUrl: 'https://project2.demo',
    githubUrl: 'https://github.com/yourusername/project2',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="mb-8 text-4xl font-bold">My Projects</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-lg border transition-transform hover:scale-[1.02]"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-gray-600">{project.description}</p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  className="rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                >
                  Live Demo
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="rounded border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50"
                >
                  View Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 