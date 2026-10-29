import { ArrowDown, Download } from "lucide-react";
import { HERO, RESUME_PDF } from "@/lib/data";
import { asset } from "@/lib/asset";
import FadeIn from "@/components/fade-in";
import { CONTAINER, EYEBROW, PILL_LG, PILL_PRIMARY, PILL_TINTED } from "@/lib/ui";

const PRIMARY = `${PILL_LG} ${PILL_PRIMARY}`;
const TINTED = `${PILL_LG} ${PILL_TINTED}`;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-page">
      {/* Subtle top wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, var(--accent-tint), transparent 70%)",
        }}
      />

      <div className={`relative flex flex-col items-center pt-32 pb-16 text-center md:items-start md:pt-40 md:pb-24 md:text-left ${CONTAINER}`}>
        {/* App icon tile (decorative) */}
        <FadeIn inView y={12} aria-hidden="true" className="mb-6 md:mb-8">
          <div
            className="flex h-24 w-24 items-center justify-center rounded-[22%] text-[34px] font-bold tracking-tight text-white shadow-[var(--icon-hairline),var(--shadow-md)] md:h-[120px] md:w-[120px] md:text-[42px]"
            style={{ background: "linear-gradient(135deg, #0a84ff, #5e5ce6)" }}
          >
            {HERO.firstName[0]}
            {HERO.lastName[0]}
          </div>
        </FadeIn>

        <FadeIn
          as="p"
          inView
          delay={0.05}
          y={12}
          className={`mb-3 text-accent-text ${EYEBROW}`}
        >
          {HERO.tag}
        </FadeIn>

        <FadeIn inView delay={0.1} y={12}>
          <h1 className="mb-4 text-5xl leading-[1.05] font-bold tracking-[-0.025em] text-balance text-label md:text-[80px]">
            {HERO.firstName} {HERO.lastName}
          </h1>
        </FadeIn>

        <FadeIn
          as="p"
          inView
          delay={0.15}
          y={12}
          className="mb-8 max-w-[680px] text-[19px] leading-[1.4] tracking-[-0.01em] text-label-2 md:text-[21px]"
        >
          {HERO.subtitle}
        </FadeIn>

        <FadeIn
          inView
          delay={0.2}
          y={12}
          className="flex flex-wrap justify-center gap-3 md:justify-start"
        >
          <a href="#projects" className={PRIMARY}>
            View Projects
            <ArrowDown size={16} aria-hidden="true" />
          </a>
          {RESUME_PDF ? (
            <a
              href={asset(RESUME_PDF)}
              download
              target="_blank"
              rel="noopener noreferrer"
              className={TINTED}
            >
              Download Resume
              <Download size={16} aria-hidden="true" />
            </a>
          ) : (
            <a href="#resume" className={TINTED}>
              View Experience
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          )}
        </FadeIn>

        {/* TODO(Samuel): keep the "Available for work" badge alongside a full-time role? */}
        <FadeIn
          inView
          delay={0.25}
          y={12}
          className="mt-6 inline-flex items-center gap-2 rounded-pill bg-fill px-3.5 py-1.5 text-[13px] text-label-2"
        >
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-[#34c759]"
          />
          Available for work
        </FadeIn>
      </div>
    </section>
  );
}
