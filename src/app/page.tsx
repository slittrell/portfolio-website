import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 py-16">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          Full Stack Developer | Designer | Problem Solver
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 transition-colors hover:bg-blue-50"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-lg border p-6 text-center">
          <h2 className="mb-2 text-xl font-semibold">Frontend Development</h2>
          <p className="text-gray-600">
            Creating beautiful and responsive user interfaces with modern technologies.
          </p>
        </div>
        <div className="rounded-lg border p-6 text-center">
          <h2 className="mb-2 text-xl font-semibold">Backend Development</h2>
          <p className="text-gray-600">
            Building robust and scalable server-side applications.
          </p>
        </div>
        <div className="rounded-lg border p-6 text-center">
          <h2 className="mb-2 text-xl font-semibold">UI/UX Design</h2>
          <p className="text-gray-600">
            Designing intuitive and user-friendly experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
