import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "About", to: "#about" },
  { label: "Interests", to: "#interests" },
  { label: "Creations", to: "#creations" },
  { label: "Journey", to: "#journey" },
  { label: "Library", to: "#library" },
  { label: "Vision", to: "#vision" },
  { label: "Connect", to: "#connect" },
];

export const Nav = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-shiro/85 dark:bg-kuro/85 backdrop-blur-xl border-b border-gold/15 dark:border-gold/20 shadow-soft"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-3 hover:no-underline"
          >
            {/* Mon (family crest) inspired dot with gold ring accent */}
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gold/90 group-hover:bg-gold transition-colors duration-300 shadow-[0_0_8px_hsl(var(--gold)/0.6)]" />
              <div className="absolute inset-0 rounded-full border border-gold/30 group-hover:border-gold/60 scale-125 transition-all duration-500" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[15px] font-medium tracking-[0.03em] text-kuro/90 dark:text-shiro/90 font-display">
                Jayant
              </span>
              <span className="font-jp text-[11px] text-gold/80 font-light hidden sm:inline">
                ポーデル
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <nav className="flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  className="group relative text-[13px] font-normal text-kuro/65 dark:text-shiro/65 hover:text-kuro dark:hover:text-shiro transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left rounded-full" />
                </a>
              ))}
            </nav>
            <div className="w-px h-4 bg-gold/20" />
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-9 h-9 rounded-full bg-card/60 backdrop-blur-md border border-gold/25 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-4 h-3.5 flex flex-col justify-between">
                <span
                  className={cn(
                    "w-full h-px bg-kuro dark:bg-shiro transition-all duration-300 origin-center",
                    isOpen ? "rotate-45 translate-y-[5.5px]" : ""
                  )}
                />
                <span
                  className={cn(
                    "w-full h-px bg-kuro dark:bg-shiro transition-all duration-300",
                    isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  )}
                />
                <span
                  className={cn(
                    "w-full h-px bg-kuro dark:bg-shiro transition-all duration-300 origin-center",
                    isOpen ? "-rotate-45 -translate-y-[5.5px]" : ""
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu with Japanese zen aesthetic */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-shiro/98 dark:bg-kuro/98 backdrop-blur-2xl transition-all duration-500 flex flex-col",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="absolute inset-0 asanoha-pattern opacity-10 pointer-events-none" />
        <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
          <nav className="space-y-6 text-center">
            {navLinks.map((link, i) => (
              <a
                key={link.to}
                href={link.to}
                onClick={() => setIsOpen(false)}
                className="block text-2xl sm:text-3xl font-light text-kuro/90 dark:text-shiro/90 hover:text-gold dark:hover:text-gold transition-colors duration-300"
                style={{
                  transitionDelay: isOpen ? `${i * 60}ms` : "0ms",
                  transform: isOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <span className="font-mono text-xs text-gold/60 mr-3">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pb-12 text-center relative z-10">
          <span className="text-[10px] tracking-[0.4em] uppercase text-kuro/40 dark:text-shiro/40 font-mono">
            一期一会 — Ichi-go ichi-e
          </span>
        </div>
      </div>
    </>
  );
};