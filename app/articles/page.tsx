import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles | Sam Littrell",
  description:
    "Essays and articles by Samuel Littrell on software engineering, language, theology, and more.",
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-card-border">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Home
          </Link>
          <span className="font-mono text-sm text-muted-foreground">
            sam.littrell
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        {/* Profile header -- Substack-style */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="relative mb-6 h-20 w-20 overflow-hidden rounded-full">
            <Image
              src="/images/profile.png"
              alt="Samuel Littrell"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mb-2 font-serif text-3xl text-foreground md:text-4xl text-balance">
            {"Sam Littrell's Writing"}
          </h1>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Thoughts on software engineering, language learning, theology, and
            everything in between.
          </p>
        </div>

        {/* Articles list */}
        {articles.length === 0 ? (
          <div className="flex flex-col items-center py-16 text-center">
            <p className="mb-2 font-serif text-xl text-foreground">
              No articles yet
            </p>
            <p className="text-sm text-muted-foreground">
              Check back soon for new writing.
            </p>
          </div>
        ) : (
          <div className="space-y-0 divide-y divide-card-border">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group block py-8 first:pt-0 transition-colors"
              >
                <article>
                  <div className="mb-2 flex items-center gap-3">
                    <time className="font-mono text-xs text-muted-foreground">
                      {formatDate(article.date)}
                    </time>
                    {article.readingTime && (
                      <>
                        <span className="text-muted-foreground/40">
                          {"--"}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {article.readingTime}
                        </span>
                      </>
                    )}
                  </div>
                  <h2 className="mb-1 font-serif text-xl text-foreground transition-colors group-hover:text-accent md:text-2xl text-pretty">
                    {article.title}
                  </h2>
                  {article.subtitle && (
                    <p className="text-muted-foreground leading-relaxed">
                      {article.subtitle}
                    </p>
                  )}
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-card-border">
        <div className="mx-auto max-w-2xl px-6 py-6 text-center">
          <p className="font-mono text-xs text-muted">
            {"Samuel Littrell \u00B7 2026"}
          </p>
        </div>
      </footer>
    </div>
  );
}
