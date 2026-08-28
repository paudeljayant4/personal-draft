import { useReveal } from "@/hooks/use-reveal";

export const About = () => {
  const ref = useReveal();

  return (
    <section id="about" className="relative px-6 py-28 md:py-40 overflow-hidden">
      {/* Background with atmospheric layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro via-shiro/98 to-shiro dark:from-kuro dark:via-kuro/98 dark:to-kuro" />
        
        {/* Floating orbs */}
        <div className="floating-orb orb-matcha w-[400px] h-[400px] top-0 right-[-20%] opacity-30 animate-float-orb" style={{ animationDelay: "-8s" }} />
        <div className="floating-orb orb-sakura w-[300px] h-[300px] bottom-[20%] left-[-10%] opacity-25 animate-float-orb" style={{ animationDelay: "-12s", animationDuration: "28s" }} />
        
        {/* Ink wash gradient */}
        <div className="absolute inset-0 ink-wash-bottom" />
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
            {/* Left column - sticky label */}
            <div className="md:col-span-3 md:sticky md:top-32">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-kuro/50 dark:text-shiro/50 mb-8">
                <span className="font-mono text-beni/80 text-[10px]">02</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-px bg-gradient-to-r from-beni/60 to-transparent" />
                  <span>About</span>
                </div>
              </div>
              <div className="font-jp text-3xl text-beni/30 dark:text-beni/20">人</div>
              <div className="mt-4 text-[10px] uppercase tracking-[0.2em] text-kuro/40 dark:text-shiro/40 font-mono">Person / Hito</div>
            </div>

            {/* Right column - content */}
            <div className="md:col-span-9 space-y-10 max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-kuro/95 dark:text-shiro/95 leading-[1.1]">
                A little about me.
              </h2>

              {/* Decorative line */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-beni to-beni/30 rounded-full" />

              <div className="space-y-6 text-base md:text-lg font-light text-kuro/70 dark:text-shiro/70 leading-[1.8]">
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
              <div className="pt-6 font-jp text-sm text-kuro/40 dark:text-shiro/40 tracking-wide">
                自分らしく — As oneself
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};