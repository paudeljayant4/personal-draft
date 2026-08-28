import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", to: "#about" },
  { label: "Interests", to: "#interests" },
  { label: "Journey", to: "#journey" },
  { label: "Vision", to: "#vision" },
  { label: "Connect", to: "#connect" },
];

export const Nav = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-shiro/80 dark:bg-kuro/80 backdrop-blur-xl border-b border-ai/10 dark:border-shiro/10"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-2.5 hover:no-underline"
          >
            {/* Mon (family crest) inspired dot */}
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-beni/80 group-hover:bg-beni transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-beni/20 group-hover:bg-beni/30 scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            <span className="text-[15px] font-medium tracking-[0.02em] text-kuro/90 dark:text-shiro/90">
              Jayant
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <a
                key={link.to}
                href={link.to}
                className="group relative text-[13px] font-normal text-kuro/60 dark:text-shiro/60 hover:text-kuro dark:hover:text-shiro transition-colors duration-300"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-beni scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left rounded-full" />
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4">
              <span className={cn(
                "absolute left-0 w-full h-px bg-kuro dark:bg-shiro transition-all duration-300",
                isOpen ? "top-1/2 rotate-45" : "top-0"
              )} />
              <span className={cn(
                "absolute top-1/2 left-0 w-full h-px bg-kuro dark:bg-shiro transition-all duration-300",
                isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              )} />
              <span className={cn(
                "absolute left-0 w-full h-px bg-kuro dark:bg-shiro transition-all duration-300",
                isOpen ? "top-1/2 -rotate-45" : "bottom-0"
              )} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-shiro dark:bg-kuro transition-all duration-500 flex flex-col",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <nav className="space-y-8 text-center">
            {navLinks.map((link, i) => (
              <a
                key={link.to}
                href={link.to}
                onClick={() => setIsOpen(false)}
                className="block text-3xl font-light text-kuro/90 dark:text-shiro/90 hover:text-beni dark:hover:text-beni transition-colors duration-300"
                style={{ 
                  transitionDelay: isOpen ? `${i * 80}ms` : "0ms",
                  transform: isOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: isOpen ? 1 : 0
                }}
              >
                <span className="font-mono text-xs text-beni/50 mr-3">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="pb-16 text-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-kuro/40 dark:text-shiro/40 font-mono">
            一期一会 — Ichi-go ichi-e
          </span>
        </div>
      </div>
    </>
  );
};