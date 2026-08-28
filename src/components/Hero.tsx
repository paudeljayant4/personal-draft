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
        <div className="absolute inset-0 kakure-kiri-pattern opacity-6" />
        <div className="absolute inset-0 kagome-pattern opacity-5" />
        <div className="absolute inset-0 hishi-pattern opacity-4" />
        <div className="absolute inset-0 tatehira-pattern opacity-4" />
        
        {/* Japanese sakura pattern overlay */}
        <div className="absolute inset-0 sakura-pattern" />
        
        {/* Ukiyo-e wave pattern */}
        <div className="absolute inset-0 wave-pattern opacity-25" />
        
        {/* Sumi-e ink wash effect */}
        <div className="absolute inset-0 sumi-e-wash" />
        
        {/* Traditional ink wash gradient */}
        <div className="absolute inset-0 ink-wash" />
        
        {/* NEW: Color theory overlay - triadic harmony visualization */}
        <div className="absolute inset-0 color-theory-overlay" />
        
        {/* Very faint grid */}
        <div className="absolute inset-0 grid-veil" />
        
        {/* Paper texture overlay */}
        <div className="absolute inset-0 paper-veil" />
        
        {/* Enhanced ambient glows with gold integration */}
        <div className="glow-ambient glow-beni w-[600px] h-[600px] top-[15%] right-[10%] animate-breathe-soft" />
        <div className="glow-ambient glow-ai w-[500px] h-[500px] bottom-[15%] left-[10%] animate-breathe-soft" style={{ animationDelay: "-2s" }} />
        <div className="glow-ambient glow-sakura w-[400px] h-[400px] top-[35%] left-[25%] opacity-20 animate-breathe-soft" style={{ animationDelay: "-4s" }} />
        <div className="glow-ambient glow-matcha w-[350px] h-[350px] top-[60%] right-[30%] opacity-15 animate-pulse-subtle" style={{ animationDelay: "-1s" }} />
        
        {/* NEW: Gold accent glows - triadic harmony visualization */}
        <div className="glow-ambient glow-gold w-[450px] h-[450px] top-[20%] left-[50%] animate-breathe-soft" style={{ animationDelay: "-3s" }} />
        <div className="glow-ambient glow-gold-triadic-1 w-[350px] h-[350px] top-[50%] right-[15%] animate-breathe-soft" style={{ animationDelay: "-5s" }} />
        <div className="glow-ambient glow-gold-triadic-2 w-[300px] h-[300px] bottom-[25%] left-[20%] opacity-15 animate-pulse-subtle" style={{ animationDelay: "-2.5s" }} />
        
        {/* Floating sakura petals */}
        <div className="absolute top-[-5%] left-[10%] w-[30px] h-[30px] rounded-full bg-sakura/20 animate-petal-fall" style={{ animationDelay: "0s", animationDuration: "12s" }} />
        <div className="absolute top-[-5%] left-[30%] w-[25px] h-[25px] rounded-full bg-sakura/15 animate-petal-fall" style={{ animationDelay: "2s", animationDuration: "15s" }} />
        <div className="absolute top-[-5%] left-[50%] w-[35px] h-[35px] rounded-full bg-sakura/25 animate-petal-fall" style={{ animationDelay: "1s", animationDuration: "10s" }} />
        <div className="absolute top-[-5%] left-[70%] w-[20px] h-[20px] rounded-full bg-sakura/10 animate-petal-fall" style={{ animationDelay: "3s", animationDuration: "18s" }} />
        <div className="absolute top-[-5%] left-[90%] w-[28px] h-[28px] rounded-full bg-sakura/18 animate-petal-fall" style={{ animationDelay: "1.5s", animationDuration: "14s" }} />
        
        {/* NEW: Gold floating orbs */}
        <div className="absolute top-[15%] right-[20%] w-[8px] h-[8px] rounded-full bg-gold/40 animate-float-orb-subtle" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-[40%] left-[15%] w-[6px] h-[6px] rounded-full bg-gold/30 animate-wave-float" style={{ animationDelay: "-6s" }} />
        <div className="absolute bottom-[30%] right-[35%] w-[10px] h-[10px] rounded-full bg-gold/25 animate-float-orb-subtle" style={{ animationDelay: "-8s" }} />
        
        {/* Ink bloom effects */}
        <div className="absolute top-[20%] left-[20%] w-[80px] h-[80px] rounded-full bg-beni/10 animate-ink-bloom" />
        <div className="absolute bottom-[15%] right-[25%] w-[60px] h-[60px] rounded-full bg-ai/8 animate-ink-bloom" style={{ animationDelay: "1s" }} />
        
        {/* Subtle floating orbs */}
        <div className="floating-orb orb-beni w-[300px] h-[300px] top-[40%] right-[40%] opacity-15 animate-float-orb-subtle" />
        <div className="floating-orb orb-ai w-[250px] h-[250px] bottom-[30%] left-[30%] opacity-12 animate-float-orb-subtle" style={{ animationDelay: "-5s" }} />
        <div className="floating-orb orb-matcha w-[200px] h-[200px] top-[70%] left-[60%] opacity-10 animate-wave-float" style={{ animationDelay: "-8s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Enhanced section marker */}
        <div className="flex justify-center mb-16 animate-fade-up opacity-0" style={{ animationDelay: "150ms" }}>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45">
            <span className="font-mono text-gold/80 text-[10px]">01</span>
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-gradient-to-r from-gold/60 to-transparent" />
              <span className="font-jp text-[11px] tracking-[0.2em]">私空間</span>
            </div>
          </div>
        </div>

        {/* Enhanced main title with shimmer effect */}
        <h1
          className="font-display text-[clamp(4.5rem,15vw,11rem)] font-light leading-[0.9] tracking-[-0.05em] text-kuro/95 dark:text-shiro/95 mb-12 animate-fade-up opacity-0 relative"
          style={{ animationDelay: "300ms" }}
        >
          JAYANT
          <span className="absolute -inset-4 bg-gradient-to-r from-gold/10 to-transparent blur-2xl opacity-0 animate-shimmer" />
        </h1>

        {/* Enhanced tagline - restrained */}
        <div className="space-y-5 mb-16 animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
          <p className="text-base md:text-lg font-light text-kuro/70 dark:text-shiro/70 tracking-wide">
            Curious by nature. Driven by possibility.
          </p>
          <p className="text-sm font-jp text-kuro/50 dark:text-shiro/50 tracking-[0.2em]">
            好奇心 — Kiyoomi
          </p>
        </div>

        {/* Enhanced minimal divider with gold accent */}
        <div className="flex items-center justify-center gap-4 mb-16 animate-fade-up opacity-0" style={{ animationDelay: "700ms" }}>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/70" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>

        {/* Enhanced subtitle */}
        <p
          className="text-[10px] uppercase tracking-[0.45em] text-kuro/50 dark:text-shiro/50 mb-20 animate-fade-up opacity-0 font-mono"
          style={{ animationDelay: "800ms" }}
        >
          A personal space documenting the person I'm becoming
        </p>

        {/* Enhanced scroll indicator with gold hover */}
        <div
          className="animate-fade-up opacity-0"
          style={{ animationDelay: "1000ms" }}
        >
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-4 text-xs text-kuro/60 dark:text-shiro/60 hover:text-gold dark:hover:text-gold transition-all duration-500 hover:scale-105"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] font-mono">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-current/20 flex items-start justify-center p-1 group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-500">
              <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>

      {/* Bottom meta - enhanced */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-[9px] uppercase tracking-[0.4em] text-kuro/40 dark:text-shiro/40 font-mono">
        <span>EST. 2009</span>
        <span className="hidden md:block font-jp tracking-[0.15em]">存在 — Sonzai</span>
        <span>J.P.</span>
      </div>
    </section>
  );
};