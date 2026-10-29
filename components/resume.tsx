"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Download } from "lucide-react";
import { EDUCATION_ENTRIES, RESUME_ENTRIES, RESUME_PDF } from "@/lib/data";
import { asset } from "@/lib/asset";
import FadeIn from "@/components/fade-in";
import SectionHeader from "@/components/section-header";
import { CARD, CONTAINER, PILL_LG, PILL_PRIMARY, SECTION } from "@/lib/ui";

const TITLE_2 =
  "text-[17px] leading-[1.29] font-semibold tracking-[-0.01em] text-label md:text-[19px]";

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className={`bg-page ${SECTION}`} ref={ref}>
      <div className={CONTAINER}>
        <SectionHeader eyebrow="Resume" title="My experience" inView={inView} />

        {/* Timeline as an inset grouped list, like "Version History" */}
        <FadeIn inView={inView} delay={0.1}>
          <ol className={`overflow-hidden ${CARD}`}>
            {RESUME_ENTRIES.map((entry, i) => (
              <li
                key={entry.dateRange}
                className="relative px-5 py-5 md:px-6 md:py-6"
              >
                {i > 0 && (
                  <div
                    aria-hidden="true"
                    className="absolute top-0 right-0 left-5 border-t border-separator md:left-6"
                  />
                )}
                <div className="mb-3 flex flex-col gap-0.5 md:flex-row md:items-start md:justify-between md:gap-6">
                  <div>
                    <h3 className={TITLE_2}>{entry.title}</h3>
                    <p className="text-[15px] leading-[1.4] font-semibold text-accent-text">
                      {entry.company}
                    </p>
                  </div>
                  <p className="mt-1 shrink-0 text-[12px] leading-[1.3] tabular-nums text-label-3 md:mt-1.5">
                    {entry.dateRange}
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {entry.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-[15px] leading-[1.5] text-label-2 md:text-[17px]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-label-3"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </FadeIn>

        {/* Education */}
        <FadeIn inView={inView} delay={0.15} className="mt-10 md:mt-12">
          <h3 className="mb-3 text-[20px] leading-[1.18] font-semibold tracking-[-0.015em] text-label md:mb-4 md:text-[22px]">
            Education
          </h3>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {EDUCATION_ENTRIES.map((entry) => (
              <div key={entry.degree} className={`p-5 ${CARD}`}>
                <h4 className={`mb-1 ${TITLE_2}`}>{entry.degree}</h4>
                <p className="mb-2 text-[15px] leading-[1.4] font-semibold text-accent-text">
                  {entry.school}
                </p>
                <span className="block text-[12px] leading-[1.3] text-label-3">
                  {entry.dateRange}
                  {entry.notes && ` · ${entry.notes}`}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Download button */}
        {RESUME_PDF && (
          <FadeIn
            as="div"
            inView={inView}
            delay={0.2}
            className="mt-10 flex justify-center md:mt-12"
          >
            <a
              href={asset(RESUME_PDF)}
              download
              target="_blank"
              rel="noopener noreferrer"
              className={`${PILL_LG} ${PILL_PRIMARY}`}
            >
              <Download size={16} aria-hidden="true" />
              Download Full Resume
            </a>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
