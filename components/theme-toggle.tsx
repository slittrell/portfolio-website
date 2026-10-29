"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { Monitor, Moon, Sun, SunMoon } from "lucide-react";
import {
  THEME_PREFERENCES,
  applyTheme,
  getPreference,
  setPreference,
  subscribePreference,
  subscribeSystem,
  type ThemePreference,
} from "@/lib/theme";

const LABELS: Record<ThemePreference, string> = {
  system: "System",
  light: "Light",
  dark: "Dark",
};

const ICONS = { system: Monitor, light: Sun, dark: Moon };

/** The stored preference, or null during prerender and hydration. */
function usePreference() {
  return useSyncExternalStore(subscribePreference, getPreference, () => null);
}

/** Keeps theme-color in sync on load and follows OS changes in "system" mode. */
function useSystemSync() {
  useEffect(() => {
    applyTheme(getPreference());
    return subscribeSystem(() => {
      if (getPreference() === "system") applyTheme("system", { animate: true });
    });
  }, []);
}

function nextPreference(preference: ThemePreference) {
  const i = THEME_PREFERENCES.indexOf(preference);
  return THEME_PREFERENCES[(i + 1) % THEME_PREFERENCES.length];
}

/** Circular button that cycles System, Light, Dark. */
function ThemeCycleButton({ className = "" }: { className?: string }) {
  const preference = usePreference();
  useSystemSync();

  const label = preference
    ? `Theme: ${LABELS[preference]}. Switch to ${LABELS[nextPreference(preference)]}`
    : "Theme";
  const Icon = preference ? ICONS[preference] : SunMoon;

  return (
    <button
      type="button"
      onClick={() => preference && setPreference(nextPreference(preference))}
      aria-label={label}
      title={label}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-fill text-label transition-colors duration-200 hover:bg-separator ${className}`}
    >
      <Icon size={17} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}

/** Three-segment radio group (System / Light / Dark) for the mobile menu. */
function ThemeSegmented({ className = "" }: { className?: string }) {
  const preference = usePreference();
  const groupRef = useRef<HTMLDivElement>(null);
  useSystemSync();

  const select = (value: ThemePreference) => {
    setPreference(value);
    groupRef.current
      ?.querySelector<HTMLButtonElement>(`[data-value="${value}"]`)
      ?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const current = THEME_PREFERENCES.indexOf(preference ?? "system");
    const step =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? 1
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? -1
          : 0;
    if (!step) return;
    e.preventDefault();
    const n = THEME_PREFERENCES.length;
    select(THEME_PREFERENCES[(current + step + n) % n]);
  };

  return (
    <div
      ref={groupRef}
      role="radiogroup"
      aria-label="Theme"
      onKeyDown={handleKeyDown}
      className={`grid grid-cols-3 rounded-pill bg-fill p-1 ${className}`}
    >
      {THEME_PREFERENCES.map((value) => {
        const Icon = ICONS[value];
        const checked = preference === value;
        const focusable = checked || (preference === null && value === "system");
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={checked}
            tabIndex={focusable ? 0 : -1}
            data-value={value}
            onClick={() => select(value)}
            className={`inline-flex h-9 items-center justify-center gap-1.5 rounded-pill text-[13px] font-medium transition-colors duration-200 ${
              checked
                ? "bg-surface text-label shadow-sm"
                : "text-label-2 hover:text-label"
            }`}
          >
            <Icon size={15} aria-hidden="true" />
            {LABELS[value]}
          </button>
        );
      })}
    </div>
  );
}

export default function ThemeToggle({
  variant = "button",
  className,
}: {
  variant?: "button" | "segmented";
  className?: string;
}) {
  return variant === "segmented" ? (
    <ThemeSegmented className={className} />
  ) : (
    <ThemeCycleButton className={className} />
  );
}
