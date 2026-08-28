import { Instagram, Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative px-6 py-16 border-t border-border/40">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-light tracking-[-0.02em] text-foreground">
              JAYANT PAUDEL
            </p>
            <p className="mt-1 text-xs font-light text-muted-foreground italic font-serif">
              Still becoming.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/grusco_69/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-vermilion transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.facebook.com/jayant.paudel.682446"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-vermilion transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/jayant-paudel-272077369/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-vermilion transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 font-mono">
            © {new Date().getFullYear()} Jayant Paudel
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 font-mono">
            EST. 2009 · Curiosity × Possibility
          </p>
        </div>
      </div>
    </footer>
  );
};