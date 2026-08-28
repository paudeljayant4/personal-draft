import { SectionMark } from "./SectionMark";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Layered Japanese atmosphere */}
      <div className="absolute inset-0 -z-10">
        {/* Main ink wash gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-shiro via-shiro/95 to-shiro/90 dark:from-kuro dark:via-kuro/95 dark:to-kuro/90" />
        
        {/* Subtle texture */}
        <div className="absolute inset-0 paper-texture" />
        
        {/* Sakura fall effect */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-sakura/10 blur-3xl animate-drift" />
        
        {/* Indigo accent */}
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-ai/5 blur-3xl" />
        
        {/* Matcha hint */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-matcha/5 blur-3xl animate-float-gentle" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-12 md:right-24 animate-float-gentle hidden md:block">
        <div className="w-24 h-24 rounded-full border border-beni/20 dark:border-beni/10" />
      </div>
      
      <div className="absolute bottom-32 left-8 md:left-20 animate-float-gentle" style={{ animationDelay: "1s" }}>
        <div className="w-16 h-16 rounded-full border border-matcha/20 dark:border-matcha/10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section marker */}
        <div className="flex justify-center mb-10 animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
          <SectionMark number="01" label="私空間" />
        </div>

        {/* Main title - large, breathing */}
        <h1
          className="font-display text-[clamp(3.5rem,12vw,9rem)] font-light leading-[0.92] tracking-[-0.04em] text-kuro/95 dark:text-shiro/95 mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: "200ms" }}
        >
          JAYANT
        </h1>

        {/* Tagline with Japanese */}
        <div className="space-y-3 mb-10 animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
          <p className="text-base md:text-lg font-light text-kuro/70 dark:text-shiro/70">
            Curious by nature. <span className="text-kuro/90 dark:text-shiro/90">Driven by possibility.</span>
          </p>
          <p className="text-sm font-jp text-kuro/50 dark:text-shiro/50 tracking-wide">
            好奇心 — Kiyoomi
          </p>
        </div>

        {/* Divider - Japanese brush inspired */}
        <div className="flex items-center justify-center gap-4 mb-10 animate-fade-up opacity-0" style={{ animationDelay: "600ms" }}>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-beni/50 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-beni/70" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-beni/50 to-transparent" />
        </div>

        {/* Subtitle */}
        <p
          className="text-xs uppercase tracking-[0.35em] text-kuro/50 dark:text-shiro/50 mb-12 animate-fade-up opacity-0 font-mono"
          style={{ animationDelay: "700ms" }}
        >
          A personal space documenting the person I'm becoming
        </p>

        {/* Scroll indicator */}
        <div
          className="animate-fade-up opacity-0"
          style={{ animationDelay: "900ms" }}
        >
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-2 text-sm text-kuro/60 dark:text-shiro/60 hover:text-beni dark:hover:text-beni transition-colors duration-300"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-current/30 flex items-start justify-center p-1.5">
              <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>

      {/* Bottom meta - Japanese aesthetic */}
      <div className="absolute bottom-8 left-6 right-6 flex justify-between items-end text-[9px] uppercase tracking-[0.35em] text-kuro/40 dark:text-shiro/40 font-mono">
        <span>EST. 2009</span>
        <span className="hidden md:block font-jp">存在 — Sonzai</span>
        <span>J.P.</span>
      </div>
    </section>
  );
};