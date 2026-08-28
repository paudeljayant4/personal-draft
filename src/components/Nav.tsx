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
    const onScroll = () => setScrolled(window.scrollY > 24);
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
          "fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 md:px-10 transition-all duration-500",
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border/40"
            : "bg-transparent"
        )}
      >
        <Link
          to="/"
          className="text-[15px] font-medium tracking-tight text-foreground hover:no-underline group flex items-center gap-2"
        >
          <span className="text-vermilion opacity-70 group-hover:opacity-100 transition-opacity">●</span>
          Jayant
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="text-[13px] font-normal text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-vermilion scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 text-foreground hover:text-muted-foreground"
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {isMobile && isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-2xl animate-fade-in">
          <div className="space-y-8 text-center">
            {navLinks.map((link, i) => (
              <a
                key={link.to}
                href={link.to}
                onClick={() => setIsOpen(false)}
                className="block text-3xl font-display font-light text-foreground hover:no-underline hover:text-vermilion transition-colors"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-xs font-mono text-muted-foreground mr-3">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            ))}
          </div>
          <div className="absolute bottom-12 text-xs tracking-[0.3em] uppercase text-muted-foreground font-mono">
            EST. 2009
          </div>
        </div>
      )}
    </>
  );
};