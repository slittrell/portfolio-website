import Button from '@/components/Button';
import Section from '@/components/Section';

export default function Home() {
  return (
    <>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Hi, I&apos;m Sam Littrell 👋
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A passionate software developer crafting beautiful and functional web experiences
          </p>
          <div className="flex gap-4 justify-center">
            <Button href="/projects" variant="primary">
              View My Work
            </Button>
            <Button href="/contact" variant="outline">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>

      <Section 
        title="What I Do" 
        subtitle="I specialize in building modern web applications with cutting-edge technologies"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
            <p className="text-gray-600">
              Creating responsive and intuitive user interfaces using React, Next.js, and modern CSS
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Backend Development</h3>
            <p className="text-gray-600">
              Building scalable server-side applications and APIs with Node.js and modern frameworks
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
            <p className="text-gray-600">
              Designing beautiful and functional user experiences that delight users
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
