"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { ABOUT_PARAGRAPHS, STATS } from "@/lib/data";
import FadeIn from "@/components/fade-in";

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setCount(value);
      return;
    }

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, reduceMotion]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn
          as="span"
          inView={inView}
          className="mb-3 block font-mono text-sm text-muted"
        >
          {"// about"}
        </FadeIn>

        <FadeIn
          as="h2"
          inView={inView}
          delay={0.1}
          className="mb-12 font-serif text-4xl text-foreground md:text-5xl"
        >
          A bit about me
        </FadeIn>

        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          {/* Text column */}
          <FadeIn
            as="div"
            inView={inView}
            delay={0.2}
            className="flex-1 space-y-5 text-muted-foreground leading-relaxed"
          >
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </FadeIn>

          {/* Stats grid */}
          <div className="grid flex-1 grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <FadeIn
                key={stat.label}
                inView={inView}
                delay={0.3 + i * 0.1}
                className="flex flex-col items-center justify-center rounded-xl border border-card-border bg-card p-6 text-center"
              >
                <span className="mb-1 font-mono text-3xl text-accent md:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
