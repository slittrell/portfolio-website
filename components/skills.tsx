"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { PRIMARY_SKILLS, BROADER_SKILLS } from "@/lib/data";

function SkillChip({
  label,
  index,
  inView,
  variant,
}: {
  label: string;
  index: number;
  inView: boolean;
  variant: "accent" | "neutral";
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      initial={{ opacity: 0, y: 16 }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              transition: {
                delay: reduceMotion ? 0 : index * 0.05,
                duration: reduceMotion ? 0 : 0.4,
                ease: [0.25, 0.4, 0.25, 1] as const,
              },
            }
          : { opacity: 0, y: 16 }
      }
      className={`inline-block rounded-lg border px-4 py-2 font-mono text-sm transition-all duration-200 ${
        variant === "accent"
          ? "border-accent/20 bg-accent/5 text-accent hover:border-accent/40 hover:bg-accent/10 hover:shadow-[0_0_12px_rgba(59,130,246,0.15)]"
          : "border-card-border bg-card text-muted-foreground hover:border-muted hover:text-foreground"
      }`}
    >
      {label}
    </motion.span>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="skills" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="mb-3 block font-mono text-sm text-muted"
        >
          {"// skills"}
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.1}
          className="mb-12 font-serif text-4xl text-foreground md:text-5xl"
        >
          What I work with
        </motion.h2>

        <div className="space-y-10">
          {/* Primary Skills */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              Primary Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {PRIMARY_SKILLS.map((skill, i) => (
                <SkillChip
                  key={skill}
                  label={skill}
                  index={i}
                  inView={inView}
                  variant="accent"
                />
              ))}
            </div>
          </motion.div>

          {/* Broader Toolbelt */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.4}
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              Broader Toolbelt
            </h3>
            <div className="flex flex-wrap gap-3">
              {BROADER_SKILLS.map((skill, i) => (
                <SkillChip
                  key={skill}
                  label={skill}
                  index={i}
                  inView={inView}
                  variant="neutral"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
