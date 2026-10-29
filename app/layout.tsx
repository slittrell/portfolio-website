import type { Metadata, Viewport } from "next";
import { asset } from "@/lib/asset";
import { SITE } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary",
    title: SITE.title,
    description: SITE.description,
  },
  icons: {
    icon: [
      { url: asset("/favicon.ico") },
      { url: asset("/favicon-16x16.png"), sizes: "16x16", type: "image/png" },
      { url: asset("/favicon-32x32.png"), sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: asset("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <noscript>
          {/* Without JS, FadeIn content would stay at opacity 0. */}
          <style>{"[data-fade]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
