import { useReveal } from "@/hooks/use-reveal";

export const Mindset = () => {
  const ref = useReveal();
  return (
    <section className="relative px-6 py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-shiro/95 dark:bg-kuro/95" />
        
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-t from-beni/8 via-sakura/5 to-transparent blur-3xl" />
        
        {/* Orbs */}
        <div className="floating-orb orb-sakura w-[500px] h-[500px] top-[-20%] left-[-15%] opacity-30 animate-float-orb" style={{ animationDelay: "-3s" }} />
        <div className="floating-orb orb-koh w-[400px] h-[400px] bottom-[-20%] right-[-10%] opacity-25 animate-float-orb" style={{ animationDelay: "-7s", animationDuration: "26s" }} />
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="text-center">
            {/* Small label */}
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-beni/70 mb-10">
              A Mindset — 心得
            </div>

            {/* Quote */}
            <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-kuro/95 dark:text-shiro/95 leading-[1.15] text-balance">
              <span className="text-beni/40 font-mincho text-5xl md:text-7xl align-top">"</span>
              The world doesn't wait for excuses.
              <br className="hidden md:block" />
              <span className="text-kuro/60 dark:text-shiro/60">It only sees results.</span>
              <span className="text-beni/40 font-mincho text-5xl md:text-7xl align-bottom">"</span>
            </blockquote>

            {/* Attribution */}
            <div className="mt-14 flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-beni/40" />
              <span className="font-jp text-sm text-kuro/50 dark:text-shiro/50">
                J. Paudel
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-beni/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};