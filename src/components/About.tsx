import { useReveal } from "@/hooks/use-reveal";

export const About = () => {
  const ref = useReveal();

  return (
    <section id="about" className="relative px-6 py-28 md:py-44 overflow-hidden">
      {/* Background with atmospheric layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro via-shiro/98 to-shiro dark:from-kuro dark:via-kuro/98 dark:to-kuro" />
        
        {/* Floating orbs */}
        <div className="floating-orb orb-matcha w-[500px] h-[500px] top-[-10%] right-[-25%] opacity-25 animate-float-orb" style={{ animationDelay: "-8s" }} />
        <div className="floating-orb orb-sakura w-[400px] h-[400px] bottom-[15%] left-[-15%] opacity-20 animate-float-orb" style={{ animationDelay: "-14s", animationDuration: "30s" }} />
        <div className="floating-orb orb-koh w-[300px] h-[300px] top-[30%] left-[10%] opacity-15 animate-float-orb" style={{ animationDelay: "-5s", animationDuration: "25s" }} />
        
        {/* Ink wash gradient */}
        <div className="absolute inset-0 ink-wash-bottom" />
        
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture opacity-30" />
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
            {/* Left column - sticky label */}
            <div className="md:col-span-3 md:sticky md:top-36">
              <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-kuro/50 dark:text-shiro/50 mb-8">
                <span className="font-mono text-beni/90 text-[10px]">02</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-gradient-to-r from-beni/70 to-transparent" />
                  <span>About</span>
                </div>
              </div>
              <div className="font-jp text-4xl text-beni/35 dark:text-beni/25">人</div>
              <div className="mt-5 text-[10px] uppercase tracking-[0.25em] text-kuro/40 dark:text-shiro/40 font-mono">Person · Hito</div>
            </div>

            {/* Right column - content */}
            <div className="md:col-span-9 space-y-12 max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.035em] text-kuro/95 dark:text-shiro/95 leading-[1.1]">
                A little about me.
              </h2>

              {/* Decorative line */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-beni to-beni/40 rounded-full" />

              <div className="space-y-7 text-base md:text-lg font-light text-kuro/70 dark:text-shiro/70 leading-[1.85]">
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

              {/* Japanese accent */}
              <div className="pt-8 font-jp text-base text-kuro/45 dark:text-shiro/45 tracking-[0.1em]">
                自分らしく — As oneself
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};