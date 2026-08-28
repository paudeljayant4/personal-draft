export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Layered Japanese atmospheric backgrounds */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient - warm paper */}
        <div className="absolute inset-0 bg-gradient-to-b from-shiro via-shiro/95 to-shiro/90 dark:from-kuro dark:via-kuro/95 dark:to-kuro/90" />
        
        {/* Paper texture overlay */}
        <div className="absolute inset-0 paper-texture" />
        
        {/* Ink wash - top */}
        <div className="absolute inset-0 ink-wash-top" />
        
        {/* Atmospheric floating orbs */}
        <div className="floating-orb orb-sakura w-[500px] h-[500px] top-[-10%] right-[-10%] animate-float-orb opacity-60" />
        <div className="floating-orb orb-ai w-[400px] h-[400px] bottom-[20%] left-[-15%] animate-float-orb opacity-40" style={{ animationDelay: "-5s", animationDuration: "25s" }} />
        <div className="floating-orb orb-matcha w-[300px] h-[300px] top-[40%] right-[20%] animate-float-orb opacity-30" style={{ animationDelay: "-10s", animationDuration: "30s" }} />
        <div className="floating-orb orb-koh w-[350px] h-[350px] bottom-0 left-[30%] animate-float-orb opacity-25" style={{ animationDelay: "-15s", animationDuration: "22s" }} />
        
        {/* Sakura glow accent */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] sakura-glow animate-drift" />
        
        {/* Atmospheric fog layers */}
        <div className="absolute bottom-0 left-0 right-0 h-48 atmo-fog" />
        <div className="absolute top-0 left-0 right-0 h-32 atmo-fog rotate-180" />
      </div>

      {/* Floating decorative rings */}
      <div className="absolute top-32 right-12 md:right-24 hidden md:block">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border border-beni/20 dark:border-beni/10 animate-float-gentle" />
          <div className="absolute inset-4 rounded-full border border-sakura/20 dark:border-sakura/10 animate-float-gentle" style={{ animationDelay: "0.5s" }} />
        </div>
      </div>
      
      <div className="absolute bottom-40 left-8 md:left-20">
        <div className="relative">
          <div className="w-20 h-20 rounded-full border border-matcha/25 dark:border-matcha/10 animate-float-gentle" style={{ animationDelay: "1s" }} />
          <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-koh/30 dark:bg-koh/20 animate-pulse-glow" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section marker */}
        <div className="flex justify-center mb-10 animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-kuro/50 dark:text-shiro/50">
            <span className="font-mono text-beni/80 text-[10px]">01</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-px bg-gradient-to-r from-beni/60 to-transparent" />
              <span className="font-jp text-[11px]">私空間</span>
            </div>
          </div>
        </div>

        {/* Main title */}
        <h1
          className="font-display text-[clamp(3.5rem,12vw,9rem)] font-light leading-[0.92] tracking-[-0.04em] text-kuro/95 dark:text-shiro/95 mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: "200ms" }}
        >
          JAYANT
        </h1>

        {/* Tagline */}
        <div className="space-y-3 mb-10 animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
          <p className="text-base md:text-lg font-light text-kuro/70 dark:text-shiro/70">
            Curious by nature. <span className="text-kuro/90 dark:text-shiro/90">Driven by possibility.</span>
          </p>
          <p className="text-sm font-jp text-kuro/50 dark:text-shiro/50 tracking-wide">
            好奇心 — Kiyoomi
          </p>
        </div>

        {/* Divider */}
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

      {/* Bottom meta */}
      <div className="absolute bottom-8 left-6 right-6 flex justify-between items-end text-[9px] uppercase tracking-[0.35em] text-kuro/40 dark:text-shiro/40 font-mono">
        <span>EST. 2009</span>
        <span className="hidden md:block font-jp">存在 — Sonzai</span>
        <span>J.P.</span>
      </div>
    </section>
  );
};