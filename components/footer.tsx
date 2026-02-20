"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

const SOCIALS = [
  { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: Mail, href: SOCIAL_LINKS.email, label: "Email" },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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
    <footer id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            className="mb-4 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl"
          >
            {"Let's build something."}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            className="mb-10 max-w-md text-muted-foreground leading-relaxed"
          >
            Open to interesting projects and collaborations. Always happy to
            connect.
          </motion.p>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
            className="flex gap-4"
          >
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-lg border border-card-border p-3 text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.4}
          className="mt-16 border-t border-card-border pt-6 text-center"
        >
          <p className="font-mono text-xs text-muted">
            {"Built with Next.js & \u2665 by Sam Littrell \u00B7 2026"}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
