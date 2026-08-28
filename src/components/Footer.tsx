import { Instagram, Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative px-6 py-20 border-t border-kuro/6 dark:border-shiro/12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-light tracking-[-0.02em] text-kuro/92 dark:text-shiro/92">
              JAYANT PAUDEL
            </p>
            <p className="mt-2 font-jp text-sm text-kuro/55 dark:text-shiro/55 italic">
              まだ研究中 — Still exploring
            </p>
          </div>

          {/* Center - Japanese phrase */}
          <div className="hidden md:block text-center">
            <p className="font-jp text-base text-kuro/45 dark:text-shiro/45 tracking-[0.08em]">
              一期一会
            </p>
            <p className="text-[9px] uppercase tracking-[0.25em] text-kuro/35 dark:text-shiro/35 mt-2 font-mono">
              Ichi-go ichi-e
            </p>
          </div>

          {/* Right - Social icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/grusco_69/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kuro/45 dark:text-shiro/45 hover:text-beni transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4.5 h-4.5" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.facebook.com/jayant.paudel.682446"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kuro/45 dark:text-shiro/45 hover:text-beni transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-4.5 h-4.5" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/jayant-paudel-272077369/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kuro/45 dark:text-shiro/45 hover:text-beni transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4.5 h-4.5" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-14 pt-8 border-t border-kuro/6 dark:border-shiro/12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-kuro/45 dark:text-shiro/45 font-mono">
            © {new Date().getFullYear()} Jayant Paudel
          </p>
          <p className="text-[10px] uppercase tracking-[0.18em] text-kuro/40 dark:text-shiro/40 font-mono">
            好奇心 × 可能性 · Curiosity × Possibility
          </p>
        </div>
      </div>
    </footer>
  );
};