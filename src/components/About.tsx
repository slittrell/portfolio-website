// components/About.tsx
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 mb-4">
          I'm a passionate developer with experience in building modern web applications.
          My expertise includes React, TypeScript, and various back-end technologies.
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['TypeScript', 'React', 'Node.js', 'Python', 'SQL'].map(skill => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};