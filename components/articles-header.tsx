import ThemeToggle from "@/components/theme-toggle";

/** Translucent top bar for the articles pages, matching the homepage navbar. */
export default function ArticlesHeader({
  leading,
  trailing,
}: {
  leading: React.ReactNode;
  trailing: React.ReactNode;
}) {
  return (
    <header className="sticky top-0 z-50 border-b-[0.5px] border-separator bg-nav backdrop-blur-[20px] backdrop-saturate-[1.8]">
      <div className="mx-auto flex h-[52px] max-w-2xl items-center justify-between gap-4 px-[25px]">
        {leading}
        <div className="flex items-center gap-3">
          {trailing}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
