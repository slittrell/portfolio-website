'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import Button from '@/components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '📦',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: '💼',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🐦',
    },
  ];

  return (
    <Section
      title="Get in Touch"
      subtitle="Have a question or want to work together? Feel free to reach out!"
    >
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>

          <Button type="submit" variant="primary" className="w-full">
            Send Message
          </Button>
        </form>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Or connect with me on:</h3>
          <div className="flex justify-center gap-4">
            <Button
              href={socialLinks[0].url}
              variant="outline"
              className="flex-1 max-w-[200px]"
            >
              GitHub
            </Button>
            <Button
              href={socialLinks[1].url}
              variant="outline"
              className="flex-1 max-w-[200px]"
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
} 