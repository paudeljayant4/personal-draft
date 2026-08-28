export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Japanese art-inspired background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient - warm paper */}
        <div className="absolute inset-0 bg-gradient-to-b from-shiro via-shiro/98 to-shiro/95 dark:from-kuro dark:via-kuro/98 dark:to-kuro/95" />
        
        {/* Japanese sakura pattern overlay */}
        <div className="absolute inset-0 sakura-pattern" />
        
        {/* Ukiyo-e wave pattern */}
        <div className="absolute inset-0 wave-pattern opacity-30" />
        
        {/* Sumi-e ink wash effect */}
        <div className="absolute inset-0 sumi-e-wash" />
        
        {/* Traditional ink wash gradient */}
        <div className="absolute inset-0 ink-wash" />
        
        {/* Very faint grid */}
        <div className="absolute inset-0 grid-veil" />
        
        {/* Paper texture overlay */}
        <div className="absolute inset-0 paper-veil" />
        
        {/* Single ambient glow - beni, very subtle */}
        <div className="glow-ambient glow-beni w-[500px] h-[500px] top-[20%] right-[15%] animate-breathe-soft" />
        
        {/* Single ai glow - bottom left */}
        <div className="glow-ambient glow-ai w-[400px] h-[400px] bottom-[10%] left-[10%] animate-breathe-soft" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Minimal section marker */}
        <div className="flex justify-center mb-16 animate-fade-up opacity-0" style={{ animationDelay: "150ms" }}>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45">
            <span className="font-mono text-beni/80 text-[10px]">01</span>
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-gradient-to-r from-beni/60 to-transparent" />
              <span className="font-jp text-[11px] tracking-[0.2em]">私空間</span>
            </div>
          </div>
        </div>

        {/* Main title - generous spacing */}
        <h1
          className="font-display text-[clamp(4.5rem,15vw,11rem)] font-light leading-[0.9] tracking-[-0.05em] text-kuro/95 dark:text-shiro/95 mb-12 animate-fade-up opacity-0"
          style={{ animationDelay: "300ms" }}
        >
          JAYANT
        </h1>

        {/* Tagline - restrained */}
        <div className="space-y-5 mb-16 animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
          <p className="text-base md:text-lg font-light text-kuro/70 dark:text-shiro/70 tracking-wide">
            Curious by nature. Driven by possibility.
          </p>
          <p className="text-sm font-jp text-kuro/50 dark:text-shiro/50 tracking-[0.2em]">
            好奇心 — Kiyoomi
          </p>
        </div>

        {/* Minimal divider */}
        <div className="flex items-center justify-center gap-4 mb-16 animate-fade-up opacity-0" style={{ animationDelay: "700ms" }}>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-beni/50 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-beni/70" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-beni/50 to-transparent" />
        </div>

        {/* Subtitle */}
        <p
          className="text-[10px] uppercase tracking-[0.45em] text-kuro/50 dark:text-shiro/50 mb-20 animate-fade-up opacity-0 font-mono"
          style={{ animationDelay: "800ms" }}
        >
          A personal space documenting the person I'm becoming
        </p>

        {/* Scroll indicator - minimal */}
        <div
          className="animate-fade-up opacity-0"
          style={{ animationDelay: "1000ms" }}
        >
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-4 text-xs text-kuro/60 dark:text-shiro/60 hover:text-beni dark:hover:text-beni transition-colors duration-500"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] font-mono">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-current/20 flex items-start justify-center p-1 group-hover:border-beni/40 transition-colors duration-500">
              <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>

      {/* Bottom meta - minimal */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-[9px] uppercase tracking-[0.4em] text-kuro/40 dark:text-shiro/40 font-mono">
        <span>EST. 2009</span>
        <span className="hidden md:block font-jp tracking-[0.15em]">存在 — Sonzai</span>
        <span>J.P.</span>
      </div>
    </section>
  );
};