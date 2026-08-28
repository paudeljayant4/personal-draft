export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Enhanced Japanese art-inspired background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient - warm paper */}
        <div className="absolute inset-0 bg-gradient-to-b from-shiro via-shiro/98 to-shiro/95 dark:from-kuro dark:via-kuro/98 dark:to-kuro/95" />
        
        {/* Multiple layered patterns for depth */}
        <div className="absolute inset-0 asanoha-pattern opacity-15" />
        <div className="absolute inset-0 seigaiha-pattern opacity-10" />
        <div className="absolute inset-0 komon-pattern opacity-8" />
        
        {/* Japanese sakura pattern overlay */}
        <div className="absolute inset-0 sakura-pattern" />
        
        {/* Ukiyo-e wave pattern */}
        <div className="absolute inset-0 wave-pattern opacity-25" />
        
        {/* Sumi-e ink wash effect */}
        <div className="absolute inset-0 sumi-e-wash" />
        
        {/* Traditional ink wash gradient */}
        <div className="absolute inset-0 ink-wash" />
        
        {/* Very faint grid */}
        <div className="absolute inset-0 grid-veil" />
        
        {/* Paper texture overlay */}
        <div className="absolute inset-0 paper-veil" />
        
        {/* Enhanced ambient glows */}
        <div className="glow-ambient glow-beni w-[600px] h-[600px] top-[15%] right-[10%] animate-breathe-soft" />
        <div className="glow-ambient glow-ai w-[500px] h-[500px] bottom-[15%] left-[10%] animate-breathe-soft" style={{ animationDelay: "-2s" }} />
        <div className="glow-ambient glow-sakura w-[400px] h-[400px] top-[35%] left-[25%] opacity-20 animate-breathe-soft" style={{ animationDelay: "-4s" }} />
        
        {/* Floating sakura petals */}
        <div className="absolute top-[-5%] left-[10%] w-[30px] h-[30px] rounded-full bg-sakura/20 animate-petal-fall" style={{ animationDelay: "0s", animationDuration: "12s" }} />
        <div className="absolute top-[-5%] left-[30%] w-[25px] h-[25px] rounded-full bg-sakura/15 animate-petal-fall" style={{ animationDelay: "2s", animationDuration: "15s" }} />
        <div className="absolute top-[-5%] left-[50%] w-[35px] h-[35px] rounded-full bg-sakura/25 animate-petal-fall" style={{ animationDelay: "1s", animationDuration: "10s" }} />
        <div className="absolute top-[-5%] left-[70%] w-[20px] h-[20px] rounded-full bg-sakura/10 animate-petal-fall" style={{ animationDelay: "3s", animationDuration: "18s" }} />
        <div className="absolute top-[-5%] left-[90%] w-[28px] h-[28px] rounded-full bg-sakura/18 animate-petal-fall" style={{ animationDelay: "1.5s", animationDuration: "14s" }} />
        
        {/* Ink bloom effects */}
        <div className="absolute top-[20%] left-[20%] w-[80px] h-[80px] rounded-full bg-beni/10 animate-ink-bloom" />
        <div className="absolute bottom-[15%] right-[25%] w-[60px] h-[60px] rounded-full bg-ai/8 animate-ink-bloom" style={{ animationDelay: "1s" }} />
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