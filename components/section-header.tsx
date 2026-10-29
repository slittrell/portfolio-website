import FadeIn from "@/components/fade-in";
import { EYEBROW } from "@/lib/ui";

/** Shelf-style section header: uppercase eyebrow, Large Title, optional trailing action. */
export default function SectionHeader({
  eyebrow,
  title,
  inView,
  action,
}: {
  eyebrow: string;
  title: string;
  inView: boolean;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4 md:mb-6">
      <div>
        <FadeIn as="p" inView={inView} className={`mb-1.5 text-label-3 ${EYEBROW}`}>
          {eyebrow}
        </FadeIn>
        <FadeIn
          as="h2"
          inView={inView}
          delay={0.05}
          className="text-[32px] leading-[1.1] font-bold tracking-[-0.02em] text-balance text-label md:text-[40px]"
        >
          {title}
        </FadeIn>
      </div>
      {action && (
        <FadeIn inView={inView} delay={0.1} className="shrink-0">
          {action}
        </FadeIn>
      )}
    </div>
  );
}
