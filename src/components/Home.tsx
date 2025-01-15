// components/Home.tsx
import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

export const Home: React.FC = () => {
  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of project 1",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    },
    // Add more projects as needed
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600">Full Stack Developer | Open Source Enthusiast</p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};