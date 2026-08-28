export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Layered Japanese atmospheric backgrounds */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient - warm paper */}
        <div className="absolute inset-0 bg-gradient-to-b from-shiro via-shiro/95 to-shiro/90 dark:from-kuro dark:via-kuro/95 dark:to-kuro/90" />
        
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture opacity-50" />
        
        {/* Paper texture overlay */}
        <div className="absolute inset-0 paper-texture" />
        
        {/* Ink wash - top */}
        <div className="absolute inset-0 ink-wash-top" />
        
        {/* Ink wash - side */}
        <div className="absolute inset-0 ink-wash-side" />
        
        {/* Atmospheric floating orbs */}
        <div className="floating-orb orb-sakura w-[600px] h-[600px] top-[-15%] right-[-15%] animate-float-orb opacity-50" />
        <div className="floating-orb orb-ai w-[450px] h-[450px] bottom-[25%] left-[-20%] animate-float-orb opacity-35" style={{ animationDelay: "-6s", animationDuration: "28s" }} />
        <div className="floating-orb orb-matcha w-[350px] h-[350px] top-[35%] right-[15%] animate-float-orb opacity-25" style={{ animationDelay: "-12s", animationDuration: "32s" }} />
        <div className="floating-orb orb-koh w-[400px] h-[400px] bottom-0 left-[25%] animate-float-orb opacity-20" style={{ animationDelay: "-18s", animationDuration: "25s" }} />
        <div className="floating-orb orb-karashi w-[300px] h-[300px] top-[10%] left-[40%] animate-float-orb opacity-20" style={{ animationDelay: "-8s", animationDuration: "30s" }} />
        
        {/* Sakura glow accent */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[500px] sakura-glow animate-drift" />
        
        {/* Atmospheric fog layers */}
        <div className="absolute bottom-0 left-0 right-0 h-48 atmo-fog" />
        <div className="absolute top-0 left-0 right-0 h-32 atmo-fog rotate-180" />
        
        {/* Light ray effect */}
        <div className="absolute top-0 left-1/4 w-32 h-64 light-ray opacity-40" />
      </div>

      {/* Floating decorative rings */}
      <div className="absolute top-36 right-14 md:right-28 hidden md:block">
        <div className="relative">
          <div className="w-36 h-36 rounded-full border border-beni/25 dark:border-beni/15 animate-float-gentle" />
          <div className="absolute inset-5 rounded-full border border-sakura/20 dark:border-sakura/12 animate-float-gentle" style={{ animationDelay: "0.7s" }} />
          <div className="absolute inset-10 rounded-full bg-beni/5 dark:bg-beni/10 animate-pulse-glow" />
        </div>
      </div>
      
      <div className="absolute bottom-44 left-10 md:left-24">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border border-matcha/25 dark:border-matcha/12 animate-float-gentle" style={{ animationDelay: "1.2s" }} />
          <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-koh/40 dark:bg-koh/25 animate-pulse-glow" />
        </div>
      </div>

      {/* Another floating element */}
      <div className="absolute top-1/3 left-8 hidden lg:block">
        <div className="w-2 h-2 rounded-full bg-beni/40 dark:bg-beni/30 animate-breathe" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section marker */}
        <div className="flex justify-center mb-12 animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-kuro/50 dark:text-shiro/50">
            <span className="font-mono text-beni/90 text-[10px]">01</span>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-beni/70 to-transparent" />
              <span className="font-jp text-[12px] tracking-wider">私空間</span>
            </div>
          </div>
        </div>

        {/* Main title */}
        <h1
          className="font-display text-[clamp(4rem,14vw,10rem)] font-light leading-[0.88] tracking-[-0.04em] text-kuro/95 dark:text-shiro/95 mb-10 animate-fade-up opacity-0"
          style={{ animationDelay: "200ms" }}
        >
          JAYANT
        </h1>

        {/* Tagline */}
        <div className="space-y-4 mb-12 animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
          <p className="text-base md:text-lg font-light text-kuro/75 dark:text-shiro/75">
            Curious by nature. <span className="text-kuro/90 dark:text-shiro/90">Driven by possibility.</span>
          </p>
          <p className="text-sm font-jp text-kuro/55 dark:text-shiro/55 tracking-[0.15em]">
            好奇心 — Kiyoomi
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-5 mb-12 animate-fade-up opacity-0" style={{ animationDelay: "600ms" }}>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-beni/60 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-beni/80" />
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-beni/60 to-transparent" />
        </div>

        {/* Subtitle */}
        <p
          className="text-[11px] uppercase tracking-[0.4em] text-kuro/55 dark:text-shiro/55 mb-16 animate-fade-up opacity-0 font-mono"
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
            className="group inline-flex flex-col items-center gap-3 text-sm text-kuro/65 dark:text-shiro/65 hover:text-beni dark:hover:text-beni transition-colors duration-300"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono">Scroll</span>
            <div className="w-6 h-9 rounded-full border border-current/25 flex items-start justify-center p-1.5 group-hover:border-beni/40 transition-colors duration-300">
              <div className="w-1.5 h-2.5 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>

      {/* Bottom meta */}
      <div className="absolute bottom-8 left-6 right-6 flex justify-between items-end text-[9px] uppercase tracking-[0.4em] text-kuro/45 dark:text-shiro/45 font-mono">
        <span>EST. 2009</span>
        <span className="hidden md:block font-jp tracking-[0.1em]">存在 — Sonzai</span>
        <span>J.P.</span>
      </div>
    </section>
  );
};