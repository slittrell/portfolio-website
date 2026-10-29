import Image from "next/image";
import profileImage from "@/public/images/profile.png";
import { ArrowDown, Download } from "lucide-react";
import { HERO, RESUME_PDF, SITE } from "@/lib/data";
import { asset } from "@/lib/asset";
import FadeIn from "@/components/fade-in";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Faint dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:gap-16 md:py-0">
        {/* Left content */}
        <div className="flex-[3]">
          <FadeIn
            as="span"
            inView
            delay={0.1}
            y={20}
            className="mb-4 inline-block font-mono text-sm text-accent"
          >
            {HERO.tag}
          </FadeIn>

          <h1 className="mb-4 font-serif text-6xl leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <FadeIn
              as="span"
              inView
              delay={0.3}
              y={20}
              className="inline-block"
            >
              {HERO.firstName}
            </FadeIn>{" "}
            <FadeIn
              as="span"
              inView
              delay={0.6}
              y={20}
              className="inline-block"
            >
              {HERO.lastName}
            </FadeIn>
          </h1>

          <FadeIn
            as="p"
            inView
            delay={1.1}
            y={20}
            className="mb-8 max-w-md font-serif text-lg italic text-muted-foreground md:text-xl"
          >
            {HERO.subtitle}
          </FadeIn>

          <FadeIn
            as="div"
            inView
            delay={1.4}
            y={20}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-mono text-sm text-background transition-colors hover:bg-accent-hover"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            {RESUME_PDF ? (
              <a
                href={asset(RESUME_PDF)}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-card-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-muted-foreground"
              >
                Download Resume
                <Download size={16} />
              </a>
            ) : (
              <a
                href="#resume"
                className="inline-flex items-center gap-2 rounded-lg border border-card-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-muted-foreground"
              >
                View Experience
                <ArrowDown size={16} />
              </a>
            )}
          </FadeIn>
        </div>

        {/* Right content - Avatar */}
        <FadeIn
          as="div"
          inView
          delay={0.8}
          y={20}
          className="relative flex-[2] flex justify-center"
        >
          {/* Rotating conic-gradient ring */}
          <div className="relative">
            <div
              className="absolute -inset-2 rounded-full motion-safe:animate-spin"
              style={{
                background:
                  "conic-gradient(from 0deg, #3B82F6, transparent, #3B82F6)",
                animationDuration: "8s",
              }}
            />
            <div className="absolute -inset-1 rounded-full bg-background" />

            <div className="relative h-48 w-48 overflow-hidden rounded-full md:h-56 md:w-56">
              <Image
                src={profileImage}
                alt={SITE.fullName}
                fill
                className="object-cover"
                priority
                sizes="224px"
              />
            </div>
          </div>

          {/* TODO(Samuel): keep the "Available for work" badge alongside a full-time role? */}
          <FadeIn
            as="div"
            inView
            delay={1.6}
            y={20}
            className="absolute -bottom-2 right-4 flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-2 md:right-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              Available for work
            </span>
          </FadeIn>
        </FadeIn>
      </div>
    </section>
  );
}
