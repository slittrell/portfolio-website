"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const FIRST_NAME = "Sam";
const LAST_NAME = "Littrell";
const SUBTITLE = "Software engineer, linguist, and lifelong learner.";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : 0.3 + i * 0.3,
        duration: reduceMotion ? 0 : 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : delay,
        duration: reduceMotion ? 0 : 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Hero"
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
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="mb-4 inline-block font-mono text-sm text-accent"
          >
            {"< Software Engineer />"}
          </motion.span>

          <h1 className="mb-4 font-serif text-6xl leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <motion.span
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-block"
            >
              {FIRST_NAME}
            </motion.span>{" "}
            <motion.span
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              className="inline-block"
            >
              {LAST_NAME}
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.1}
            className="mb-8 max-w-md font-serif text-lg italic text-muted-foreground md:text-xl"
          >
            {SUBTITLE}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.4}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-mono text-sm text-background transition-colors hover:bg-accent-hover"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            {/* REPLACE: link to your actual resume file */}
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-lg border border-card-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-muted-foreground"
            >
              Download Resume
              <Download size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right content - Avatar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="relative flex-[2] flex justify-center"
        >
          {/* Rotating conic-gradient ring */}
          <div className="relative">
            <div
              className="absolute -inset-2 animate-spin rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #3B82F6, transparent, #3B82F6)",
                animationDuration: "8s",
              }}
            />
            <div className="absolute -inset-1 rounded-full bg-background" />

            <div className="relative h-48 w-48 overflow-hidden rounded-full md:h-56 md:w-56">
              <Image
                src="/images/profile.png"
                alt="Samuel Littrell"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Available for work badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.6}
            className="absolute -bottom-2 right-4 flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-2 md:right-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              Available for work
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
