import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with Next.js and TypeScript.',
    imageUrl: '/projects/project1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://project1.com',
    githubUrl: 'https://github.com/yourusername/project1'
  },
  {
    title: 'Project Two',
    description: 'A full-stack application with real-time features.',
    imageUrl: '/projects/project2.jpg',
    technologies: ['React', 'Node.js', 'Socket.IO'],
    liveUrl: 'https://project2.com',
    githubUrl: 'https://github.com/yourusername/project2'
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <Section
      title="My Projects"
      subtitle="Here are some of the projects I've worked on"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </Section>
  );
} 