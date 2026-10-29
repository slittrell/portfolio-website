"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/lib/data";
import FadeIn from "@/components/fade-in";
import { CONTAINER, PILL_LG, PILL_TINTED, SECTION } from "@/lib/ui";

const EMAIL_ADDRESS = SOCIAL_LINKS.email.replace(/^mailto:/, "");

const SOCIALS = [
  { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub", external: true },
  {
    icon: Linkedin,
    href: SOCIAL_LINKS.linkedin,
    label: "LinkedIn",
    external: true,
  },
  { icon: Mail, href: SOCIAL_LINKS.email, label: "Email", external: false },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer id="contact" className={`bg-grouped ${SECTION}`} ref={ref}>
      <div className={CONTAINER}>
        <div className="flex flex-col items-center text-center">
          <FadeIn
            as="h2"
            inView={inView}
            className="mb-3 text-[22px] leading-[1.18] font-bold tracking-[-0.015em] text-balance text-label md:text-[28px]"
          >
            {"Let's build something."}
          </FadeIn>

          <FadeIn
            as="p"
            inView={inView}
            delay={0.05}
            className="mb-8 max-w-md text-[15px] leading-[1.5] text-label-2 md:text-[17px]"
          >
            Open to interesting projects and collaborations. Always happy to
            connect.
          </FadeIn>

          {/* Social links */}
          <FadeIn
            as="div"
            inView={inView}
            delay={0.1}
            className="flex flex-wrap justify-center gap-3"
          >
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className={`${PILL_LG} ${PILL_TINTED}`}
              >
                <social.icon size={18} aria-hidden="true" />
                {social.label}
              </a>
            ))}
          </FadeIn>

          <FadeIn as="p" inView={inView} delay={0.15} className="mt-5">
            <a
              href={SOCIAL_LINKS.email}
              className="text-[15px] text-accent-text underline-offset-4 transition-colors duration-200 hover:underline"
            >
              {EMAIL_ADDRESS}
            </a>
          </FadeIn>
        </div>

        {/* Global footer line */}
        <FadeIn
          as="div"
          inView={inView}
          delay={0.2}
          className="mt-14 border-t border-separator pt-5 text-center md:mt-16"
        >
          <p className="text-[12px] leading-[1.3] text-label-3">
            {`Built with Next.js & ♥ by ${SITE.name} · ${new Date().getFullYear()}`}
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
