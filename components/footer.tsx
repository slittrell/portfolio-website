"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/lib/data";
import FadeIn from "@/components/fade-in";

const SOCIALS = [
  { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: Mail, href: SOCIAL_LINKS.email, label: "Email" },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer id="contact" className="scroll-mt-20 py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center">
          <FadeIn
            as="h2"
            inView={inView}
            className="mb-4 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl"
          >
            {"Let's build something."}
          </FadeIn>

          <FadeIn
            as="p"
            inView={inView}
            delay={0.1}
            className="mb-10 max-w-md text-muted-foreground leading-relaxed"
          >
            Open to interesting projects and collaborations. Always happy to
            connect.
          </FadeIn>

          {/* Social links */}
          <FadeIn
            as="div"
            inView={inView}
            delay={0.2}
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
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <FadeIn
          as="div"
          inView={inView}
          delay={0.4}
          className="mt-16 border-t border-card-border pt-6 text-center"
        >
          <p className="font-mono text-xs text-muted">
            {`Built with Next.js & \u2665 by ${SITE.name} \u00B7 ${new Date().getFullYear()}`}
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
