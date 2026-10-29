import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { formatDate, getAllArticles } from "@/lib/articles";
import { SITE } from "@/lib/data";
import { CARD, EYEBROW } from "@/lib/ui";
import ArticlesHeader from "@/components/articles-header";

export const metadata: Metadata = {
  title: `Articles | ${SITE.name}`,
  description: `Essays and articles by ${SITE.fullName} on software engineering, language, theology, and more.`,
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="flex min-h-screen flex-col bg-grouped">
      <ArticlesHeader
        leading={
          <Link
            href="/"
            className="-ml-1 flex items-center gap-0.5 text-[15px] text-accent-text transition-opacity duration-200 hover:opacity-70"
          >
            <ChevronLeft size={20} aria-hidden="true" />
            Home
          </Link>
        }
        trailing={
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-label">
            {SITE.handle}
          </span>
        }
      />

      <main
        id="main"
        className="mx-auto w-full max-w-2xl flex-1 px-[25px] py-14 md:py-20"
      >
        {/* Profile header */}
        <div className="mb-10 flex flex-col items-center text-center md:mb-12">
          <h1 className="mb-3 text-[32px] leading-[1.1] font-bold tracking-[-0.02em] text-balance text-label md:text-[40px]">
            {`${SITE.name}'s Writing`}
          </h1>
          <p className="max-w-md text-[15px] leading-[1.5] text-label-2 md:text-[17px]">
            Thoughts on software engineering, language learning, theology, and
            everything in between.
          </p>
        </div>

        {/* Articles list */}
        {articles.length === 0 ? (
          <div
            className={`flex flex-col items-center px-6 py-16 text-center ${CARD}`}
          >
            <p className="mb-2 text-[19px] font-semibold text-label">
              No articles yet
            </p>
            <p className="text-[14px] text-label-2">
              Check back soon for new writing.
            </p>
          </div>
        ) : (
          <ul className={`overflow-hidden ${CARD}`}>
            {articles.map((article, i) => (
              <li key={article.slug} className="relative">
                {i > 0 && (
                  <div
                    aria-hidden="true"
                    className="absolute top-0 right-0 left-5 border-t border-separator md:left-6"
                  />
                )}
                <Link
                  href={`/articles/${article.slug}`}
                  className="group flex items-center gap-4 px-5 py-5 transition-colors duration-200 hover:bg-fill md:px-6"
                >
                  <article className="min-w-0 flex-1">
                    <div
                      className={`mb-1.5 flex items-center gap-1.5 text-label-3 ${EYEBROW}`}
                    >
                      <time dateTime={article.date}>
                        {formatDate(article.date)}
                      </time>
                      {article.readingTime && (
                        <>
                          <span aria-hidden="true">{"·"}</span>
                          <span>{article.readingTime}</span>
                        </>
                      )}
                    </div>
                    <h2 className="mb-1 text-[17px] leading-[1.29] font-semibold tracking-[-0.01em] text-pretty text-label md:text-[19px]">
                      {article.title}
                    </h2>
                    {article.subtitle && (
                      <p className="text-[14px] leading-[1.4] text-label-2">
                        {article.subtitle}
                      </p>
                    )}
                  </article>
                  <ChevronRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-label-3 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer className="border-t-[0.5px] border-separator">
        <div className="mx-auto max-w-2xl px-[25px] py-6 text-center">
          <p className="text-[12px] leading-[1.3] text-label-3">
            {`${SITE.fullName} · ${new Date().getFullYear()}`}
          </p>
        </div>
      </footer>
    </div>
  );
}
