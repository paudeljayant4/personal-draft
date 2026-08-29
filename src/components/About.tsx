import { useReveal } from "@/hooks/use-reveal";
import { HankoStamp } from "./HankoStamp";

export const About = () => {
  const ref = useReveal();

  return (
    <section id="about" className="relative px-6 py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro via-shiro/99 to-shiro dark:from-kuro dark:via-kuro/99 dark:to-kuro" />
        
        {/* Enhanced background patterns */}
        <div className="absolute inset-0 asanoha-pattern opacity-8" />
        <div className="absolute inset-0 komon-pattern opacity-5" />
        <div className="absolute inset-0 kakure-kiri-pattern opacity-4" />
        <div className="absolute inset-0 kagome-pattern opacity-4" />
        <div className="absolute inset-0 hishi-pattern opacity-3" />
        <div className="absolute inset-0 tatehira-pattern opacity-3" />
        
        {/* Triadic + Analogous harmony patterns */}
        <div className="absolute inset-0 gold-triadic-pattern opacity-25" />
        <div className="absolute inset-0 gold-analogous-pattern opacity-15" />
        
        {/* Triadic color theory radial overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_40%,hsl(var(--gold)_/_0.06)_0%,transparent_60%),radial-gradient(ellipse_50%_40%_at_75%_65%,hsl(var(--gold-triadic-2)_/_0.05)_0%,transparent_60%)]" />
        
        {/* Ambient glows with gold */}
        <div className="glow-ambient glow-ai w-[500px] h-[500px] top-[10%] right-[-10%] opacity-40 animate-breathe-soft" />
        <div className="glow-ambient glow-beni w-[400px] h-[400px] bottom-[20%] left-[-10%] opacity-30 animate-breathe-soft" style={{ animationDelay: "-4s" }} />
        <div className="glow-ambient glow-gold w-[400px] h-[400px] top-[30%] left-[20%] opacity-18 animate-breathe-soft" style={{ animationDelay: "-2s" }} />
        <div className="glow-ambient glow-gold-triadic-1 w-[350px] h-[350px] top-[20%] right-[15%] opacity-15 animate-pulse-subtle" style={{ animationDelay: "-5s" }} />
        
        <div className="absolute inset-0 grid-veil opacity-40" />
        <div className="absolute inset-0 paper-veil" />
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
            {/* Left column - minimal sticky label & Hanko stamp */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45 mb-10">
                <span className="font-mono text-gold/80 text-[10px]">02</span>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-gradient-to-r from-gold/60 to-transparent" />
                  <span>About</span>
                </div>
              </div>
              <div className="font-jp text-6xl text-gold/35 dark:text-gold/25 font-light leading-none [text-shadow:_0_0_30px_hsl(var(--gold)/0.3)]">人</div>
              <div className="mt-4 text-[10px] uppercase tracking-[0.3em] text-kuro/40 dark:text-shiro/40 font-mono">Person · Hito</div>
              
              <div className="mt-10 hidden md:block">
                <HankoStamp size="md" />
              </div>
            </div>

            {/* Right column - content with generous spacing */}
            <div className="md:col-span-9 space-y-10 max-w-2xl">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.04em] text-kuro/95 dark:text-shiro/95 leading-[1.05]">
                A little about me.
              </h2>

              {/* Triadic harmony divider */}
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-gold/0 to-gold" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_hsl(var(--gold)/0.5)]" />
                <div className="w-1 h-1 rounded-full bg-gold-triadic-1" />
                <div className="w-1 h-1 rounded-full bg-gold-triadic-2" />
              </div>

              <div className="space-y-8 text-base md:text-lg font-light text-kuro/72 dark:text-shiro/72 leading-[1.9]">
                <p>
                  I'm Jayant — someone who's constantly curious about how things work,
                  how people think, and what the world has to offer.
                </p>
                <p>
                  I enjoy coding, debating ideas, playing chess, travelling, reading,
                  staying active, exploring different cultures, and simply learning things
                  that catch my attention.
                </p>
                <p>
                  I'm still figuring out exactly where I'm going, and that's part of the
                  journey. For now, I'm focused on becoming someone capable, independent,
                  curious, and comfortable being myself.
                </p>
              </div>

              <div className="flex items-center justify-between pt-6">
                <div className="font-jp text-base text-kuro/45 dark:text-shiro/45 tracking-[0.15em]">
                  自分らしく — As oneself
                </div>
                <div className="md:hidden">
                  <HankoStamp size="sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};