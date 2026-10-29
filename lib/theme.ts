export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEME_PREFERENCES: ThemePreference[] = ["system", "light", "dark"];

/** Browser chrome colors; match --page in app/globals.css. */
export const THEME_COLORS: Record<ResolvedTheme, string> = {
  light: "#ffffff",
  dark: "#000000",
};

const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";
const CHANGE_EVENT = "themechange";

// The no-flash script in app/layout.tsx duplicates getPreference/resolveTheme,
// because it runs before any bundle loads. Keep them in sync.

export function getPreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  return "system";
}

function resolveTheme(preference: ThemePreference): ResolvedTheme {
  if (preference !== "system") return preference;
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

/** Writes the resolved theme to <html data-theme> and the theme-color metas. */
export function applyTheme(
  preference: ThemePreference,
  { animate = false }: { animate?: boolean } = {}
) {
  const theme = resolveTheme(preference);
  const root = document.documentElement;

  if (
    animate &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    root.classList.add("theme-switching");
    window.setTimeout(() => root.classList.remove("theme-switching"), 300);
  }

  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  // Next renders one theme-color meta per color scheme. In "system" mode each keeps
  // its own color; an explicit choice points both at the chosen theme.
  document
    .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    .forEach((meta) => {
      const metaTheme: ResolvedTheme = meta.media.includes("dark")
        ? "dark"
        : "light";
      meta.content =
        THEME_COLORS[preference === "system" ? metaTheme : theme];
    });
}

export function setPreference(preference: ThemePreference) {
  try {
    if (preference === "system") localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, preference);
  } catch {}
  applyTheme(preference, { animate: true });
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Calls back when the preference changes here or in another tab. */
export function subscribePreference(callback: () => void) {
  const handleStorage = (e: StorageEvent) => {
    if (e.key !== STORAGE_KEY && e.key !== null) return;
    applyTheme(getPreference());
    callback();
  };
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", handleStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", handleStorage);
  };
}

/** Calls back when the OS color scheme changes. */
export function subscribeSystem(callback: () => void) {
  const query = window.matchMedia(DARK_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
