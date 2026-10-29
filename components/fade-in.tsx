"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const EASE = [0.25, 0.4, 0.25, 1] as const;

type FadeInProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "variants" | "custom"
> & {
  as?: "div" | "span" | "h2" | "p" | "article";
  inView: boolean;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
};

/**
 * Fades and slides its content in once `inView` is true. Honors reduced motion.
 * The `data-fade` attribute lets the <noscript> rule in app/layout.tsx show
 * content when JS never runs.
 */
export default function FadeIn({
  as = "div",
  inView,
  delay = 0,
  duration = 0.5,
  x = 0,
  y = 30,
  ...props
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] as typeof motion.div;
  const hidden = { opacity: 0, x, y };

  return (
    <Component
      data-fade=""
      initial={hidden}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                delay: reduceMotion ? 0 : delay,
                duration: reduceMotion ? 0 : duration,
                ease: EASE,
              },
            }
          : hidden
      }
      {...props}
    />
  );
}
