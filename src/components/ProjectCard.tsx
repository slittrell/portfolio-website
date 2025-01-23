import Image from 'next/image';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  liveUrl,
  githubUrl
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <Button href={liveUrl} variant="primary">
              View Live
            </Button>
          )}
          {githubUrl && (
            <Button href={githubUrl} variant="outline">
              View Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
} 