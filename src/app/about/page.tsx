export default function About() {
  const skills = [
    'JavaScript/TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'Python',
    'SQL',
    'HTML/CSS',
    'Git',
    'AWS',
    'Docker',
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-8 text-4xl font-bold">About Me</h1>
      
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Professional Summary</h2>
        <p className="mb-4 text-gray-600">
          I am a passionate Full Stack Developer with experience in building modern web applications.
          My journey in software development started [Your Background] and I've been creating
          innovative solutions ever since.
        </p>
        <p className="text-gray-600">
          I specialize in creating responsive, user-friendly applications with clean,
          maintainable code. I'm always eager to learn new technologies and tackle
          challenging problems.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold">Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">Senior Developer</h3>
            <p className="text-gray-600">Company Name • 2020 - Present</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
              <li>Led development of multiple full-stack applications</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Implemented CI/CD pipelines and improved deployment processes</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
            <p className="text-gray-600">Previous Company • 2018 - 2020</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
              <li>Developed and maintained client-facing applications</li>
              <li>Collaborated with design team to implement UI/UX improvements</li>
              <li>Optimized database queries and API endpoints</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 