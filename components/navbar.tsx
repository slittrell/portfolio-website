"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import ThemeToggle from "@/components/theme-toggle";

const BAR_BLUR = "bg-nav backdrop-blur-[20px] backdrop-saturate-[1.8]";

function NavItem({
  href,
  isHome,
  className,
  onClick,
  children,
}: {
  href: string;
  isHome: boolean;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  // On the homepage, plain hash anchors scroll natively (smooth + scroll-margin via CSS).
  // Elsewhere, route back to the homepage section.
  if (isHome) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={`/${href}`} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const isHome = usePathname() === "/";

  // Highlight the section crossing a band just above the middle of the viewport.
  useEffect(() => {
    const ids = ["top", ...NAV_LINKS.map((link) => link.href.slice(1))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape or a click outside the nav.
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    const handlePointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav ref={navRef} aria-label="Main" className="fixed top-0 left-0 right-0 z-50">
      <div className={`border-b-[0.5px] border-separator ${BAR_BLUR}`}>
        <div className="mx-auto flex h-[52px] max-w-[1080px] items-center justify-between gap-4 px-[25px] lg:px-10">
          <NavItem
            href="#top"
            isHome={isHome}
            className="text-[15px] font-semibold tracking-[-0.01em] text-label transition-opacity duration-200 hover:opacity-70"
          >
            {SITE.handle}
          </NavItem>

          <div className="flex items-center gap-2">
            {/* Desktop: segmented tab group */}
            <div className="hidden items-center gap-2 md:flex">
              <div className="flex items-center rounded-pill bg-fill p-1">
                {NAV_LINKS.map((link) => {
                  const active = activeSection === link.href;
                  return (
                    <NavItem
                      key={link.href}
                      href={link.href}
                      isHome={isHome}
                      className={`relative rounded-pill px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200 ${
                        active ? "text-label" : "text-label-2 hover:text-label"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          aria-hidden="true"
                          className="absolute inset-0 rounded-pill bg-surface shadow-sm"
                          transition={
                            reduceMotion
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 400, damping: 34 }
                          }
                        />
                      )}
                      <span className="relative">{link.label}</span>
                    </NavItem>
                  );
                })}
              </div>
              <Link
                href="/articles"
                className="rounded-pill px-3 py-1.5 text-[13px] font-medium text-label-2 transition-colors duration-200 hover:text-label"
              >
                Articles
              </Link>
            </div>

            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-label transition-colors duration-200 hover:bg-fill md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className={`rounded-b-xl border-b-[0.5px] border-separator shadow-lift md:hidden ${BAR_BLUR}`}
          >
            <ul className="px-[25px] pt-1">
              {[...NAV_LINKS, { label: "Articles", href: "/articles" }].map(
                (link) => {
                  const rowClass =
                    "flex min-h-11 items-center justify-between border-b-[0.5px] border-separator py-2.5 text-[17px] text-label";
                  const content = (
                    <>
                      {link.label}
                      <ChevronRight size={18} aria-hidden="true" className="text-label-3" />
                    </>
                  );
                  return (
                    <li key={link.href}>
                      {link.href.startsWith("#") ? (
                        <NavItem
                          href={link.href}
                          isHome={isHome}
                          onClick={closeMenu}
                          className={rowClass}
                        >
                          {content}
                        </NavItem>
                      ) : (
                        <Link href={link.href} onClick={closeMenu} className={rowClass}>
                          {content}
                        </Link>
                      )}
                    </li>
                  );
                }
              )}
            </ul>
            <div className="px-[25px] pt-4 pb-5">
              <ThemeToggle variant="segmented" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
