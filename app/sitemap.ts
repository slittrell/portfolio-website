import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { SITE } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  return [
    { url: `${SITE.url}/` },
    { url: `${SITE.url}/articles` },
    ...articles.map((article) => ({
      url: `${SITE.url}/articles/${article.slug}`,
      lastModified: article.date || undefined,
    })),
  ];
}
