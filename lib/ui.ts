// Shared class strings for the App Store-style UI. Tokens live in app/globals.css.

/** Page container: 25px gutter, 40px at lg (App Store --bodyGutter). */
export const CONTAINER = "mx-auto max-w-[1080px] px-[25px] lg:px-10";

/** Section band spacing; scroll margin clears the 52px navbar. */
export const SECTION = "scroll-mt-[52px] py-16 md:py-24";

/** Uppercase semibold kicker, like "APP OF THE DAY". */
export const EYEBROW =
  "text-[11px] leading-[1.27] font-semibold tracking-[0.06em] uppercase md:text-[12px]";

const PILL_BASE =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold whitespace-nowrap transition-[background-color,scale] duration-200 ease-apple active:scale-[.98]";

/** 44px pill for primary page actions. */
export const PILL_LG = `${PILL_BASE} h-11 px-5 text-[15px]`;

/** 32px pill for card actions. */
export const PILL_SM = `${PILL_BASE} h-8 px-3.5 text-[13px]`;

/** Solid blue, like the App Store GET button. */
export const PILL_PRIMARY =
  "bg-accent-fill text-on-accent hover:bg-accent-fill-hover";

/** Accent-tinted, like the App Store .button.pill. */
export const PILL_TINTED =
  "bg-accent-tint text-accent-text hover:bg-accent-tint-hover";

/** Elevated card: shadow in light, hairline edge in dark. */
export const CARD = "rounded-lg bg-surface shadow-card";

/** Hover lift and press for interactive cards. */
export const CARD_INTERACTIVE =
  "transition-[translate,box-shadow,background-color] duration-200 ease-apple hover:-translate-y-0.5 hover:bg-surface-hover hover:shadow-card-hover";
