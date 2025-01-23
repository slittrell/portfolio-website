import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sam littrell",
  description: "welcome to my world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen px-4 py-8 md:px-8 lg:px-16">
          {children}
        </main>
        <footer className="py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} sam littrell. all rights reserved.
        </footer>
      </body>
    </html>
  );
}
