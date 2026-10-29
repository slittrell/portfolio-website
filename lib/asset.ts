const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a root-relative public path with the deploy basePath (GitHub Pages). */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
