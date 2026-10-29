import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { formatDate, getAllArticles, getArticleBySlug } from "@/lib/articles";
import ArticleContent from "@/components/article-content";
import { SITE } from "@/lib/data";
import ArticlesHeader from "@/components/articles-header";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  const title = `${article.title} | ${SITE.name}`;
  const description = article.subtitle || `An article by ${SITE.fullName}`;

  return {
    title,
    description,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/articles/${slug}`,
      publishedTime: article.date,
      authors: [SITE.fullName],
    },
    twitter: { card: "summary", title, description },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-page">
      <ArticlesHeader
        leading={
          <Link
            href="/articles"
            className="-ml-1 flex items-center gap-0.5 text-[15px] text-accent-text transition-opacity duration-200 hover:opacity-70"
          >
            <ChevronLeft size={20} aria-hidden="true" />
            All Articles
          </Link>
        }
        trailing={
          <Link
            href="/"
            className="text-[15px] text-label-2 transition-colors duration-200 hover:text-label"
          >
            Home
          </Link>
        }
      />

      <main
        id="main"
        className="mx-auto w-full max-w-2xl flex-1 px-[25px] py-14 md:py-20"
      >
        {/* Article header */}
        <header className="mb-10 border-b border-separator pb-8 md:mb-12 md:pb-10">
          <h1 className="mb-3 text-[32px] leading-[1.1] font-bold tracking-[-0.02em] text-balance text-label md:text-[48px] md:leading-[1.05] md:tracking-[-0.025em]">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="mb-6 text-[19px] leading-[1.4] tracking-[-0.01em] text-label-2 md:text-[21px]">
              {article.subtitle}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-x-1.5 text-[13px] leading-[1.4] text-label-3">
            <p className="font-semibold text-label">{SITE.name}</p>
            <span aria-hidden="true">{"\u00B7"}</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            {article.readingTime && (
              <>
                <span aria-hidden="true">{"\u00B7"}</span>
                <span>{article.readingTime}</span>
              </>
            )}
          </div>
        </header>

        {/* Article body */}
        <ArticleContent content={article.content} />
      </main>

      <footer className="border-t-[0.5px] border-separator">
        <div className="mx-auto max-w-2xl px-[25px] py-8 text-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-0.5 text-[15px] text-accent-text transition-opacity duration-200 hover:opacity-70"
          >
            <ChevronLeft size={18} aria-hidden="true" />
            Back to all articles
          </Link>
        </div>
      </footer>
    </div>
  );
}
