import { Instagram, Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative px-6 py-16 border-t border-kuro/5 dark:border-shiro/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-light tracking-[-0.02em] text-kuro/90 dark:text-shiro/90">
              JAYANT PAUDEL
            </p>
            <p className="mt-1 font-jp text-sm text-kuro/50 dark:text-shiro/50 italic">
              まだ研究中 — Still exploring
            </p>
          </div>

          {/* Center - Japanese phrase */}
          <div className="hidden md:block text-center">
            <p className="font-jp text-sm text-kuro/40 dark:text-shiro/40 tracking-wide">
              一期一会
            </p>
            <p className="text-[9px] uppercase tracking-[0.2em] text-kuro/30 dark:text-shiro/30 mt-1 font-mono">
              Ichi-go ichi-e
            </p>
          </div>

          {/* Right - Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/grusco_69/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kuro/40 dark:text-shiro/40 hover:text-beni transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.facebook.com/jayant.paudel.682446"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kuro/40 dark:text-shiro/40 hover:text-beni transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/jayant-paudel-272077369/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kuro/40 dark:text-shiro/40 hover:text-beni transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-12 pt-6 border-t border-kuro/5 dark:border-shiro/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-kuro/40 dark:text-shiro/40 font-mono">
            © {new Date().getFullYear()} Jayant Paudel
          </p>
          <p className="text-[10px] uppercase tracking-[0.15em] text-kuro/35 dark:text-shiro/35 font-mono">
            好奇心 × 可能性 · Curiosity × Possibility
          </p>
        </div>
      </div>
    </footer>
  );
};