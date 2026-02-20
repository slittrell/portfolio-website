"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { STATS } from "@/lib/data";

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
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="mb-3 block font-mono text-sm text-muted"
        >
          {"// about"}
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.1}
          className="mb-12 font-serif text-4xl text-foreground md:text-5xl"
        >
          A bit about me
        </motion.h2>

        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          {/* Text column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
            className="flex-1 space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              {
                "I'm a software engineer at Veeva Systems working on Vault CRM Events Management. I graduated from UC Berkeley with a B.S. in Electrical Engineering & Computer Sciences."
              }
            </p>
            <p>
              {
                "I speak three languages \u2014 English, Mandarin Chinese (Advanced Mid proficiency), and Korean. I was a two-time NSLI-Y Merit Scholarship recipient through the U.S. Department of State, studying Mandarin immersively in China."
              }
            </p>
            <p>
              {
                "Outside of engineering, I\u2019m currently pursuing a Master of Divinity at The Southern Baptist Theological Seminary. I\u2019m passionate about the intersection of technology, language, and service."
              }
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid flex-1 grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={0.3 + i * 0.1}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
