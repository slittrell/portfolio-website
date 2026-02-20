import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import ArticleContent from "@/components/article-content";

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

  return {
    title: `${article.title} | Sam Littrell`,
    description: article.subtitle || `An article by Samuel Littrell`,
  };
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-card-border">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <Link
            href="/articles"
            className="flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            All Articles
          </Link>
          <Link
            href="/"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            sam.littrell
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        {/* Article header */}
        <header className="mb-12 border-b border-card-border pb-12">
          <h1 className="mb-3 font-serif text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              {article.subtitle}
            </p>
          )}
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="/images/profile.png"
                alt="Samuel Littrell"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Sam Littrell
              </p>
              <div className="flex items-center gap-2">
                <time className="font-mono text-xs text-muted-foreground">
                  {formatDate(article.date)}
                </time>
                {article.readingTime && (
                  <>
                    <span className="text-muted-foreground/40">{"--"}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {article.readingTime}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Article body */}
        <ArticleContent content={article.content} />
      </main>

      {/* Footer */}
      <footer className="border-t border-card-border">
        <div className="mx-auto max-w-2xl px-6 py-8 text-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back to all articles
          </Link>
        </div>
      </footer>
    </div>
  );
}
