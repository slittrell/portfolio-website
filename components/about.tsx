"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { ABOUT_PARAGRAPHS, STATS } from "@/lib/data";
import FadeIn from "@/components/fade-in";
import SectionHeader from "@/components/section-header";
import { CARD, CONTAINER, EYEBROW, SECTION } from "@/lib/ui";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className={`bg-grouped ${SECTION}`} ref={ref}>
      <div className={CONTAINER}>
        <SectionHeader eyebrow="About" title="A bit about me" inView={inView} />

        {/* Story card */}
        <FadeIn inView={inView} delay={0.1} className={`p-6 md:p-8 ${CARD}`}>
          <div className="max-w-[680px] space-y-4 text-[15px] leading-[1.5] text-label-2 md:text-[17px]">
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>

        {/* Info strip, like the ratings/age/rank row on an app page */}
        <FadeIn
          inView={inView}
          delay={0.15}
          className={`mt-4 overflow-hidden md:mt-6 ${CARD}`}
        >
          {/* Scrolls on mobile, so it needs a name and a tab stop for keyboard users. */}
          <div
            role="region"
            aria-label="Stats"
            tabIndex={0}
            className="shelf snap-x snap-mandatory overflow-x-auto md:overflow-visible md:[mask-image:none]"
          >
            <dl className="flex py-5 md:grid md:grid-cols-4">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex min-w-[38%] shrink-0 snap-start flex-col items-center gap-1.5 px-5 text-center whitespace-nowrap sm:min-w-[30%] md:min-w-0 ${
                    i > 0 ? "border-l border-separator" : ""
                  }`}
                >
                  <dt className={`text-label-3 ${EYEBROW}`}>{stat.label}</dt>
                  <dd className="text-[28px] leading-none font-bold tabular-nums tracking-[-0.02em] text-label">
                    {stat.value}
                    {stat.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
