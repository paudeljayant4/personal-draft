import { useReveal } from "@/hooks/use-reveal";

export const Mindset = () => {
  const ref = useReveal();
  return (
    <section className="relative px-6 py-28 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-shiro/96 dark:bg-kuro/96" />
        
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-gradient-to-t from-beni/10 via-sakura/6 to-transparent blur-3xl" />
        
        {/* Orbs */}
        <div className="floating-orb orb-sakura w-[600px] h-[600px] top-[-25%] left-[-20%] opacity-25 animate-float-orb" style={{ animationDelay: "-4s" }} />
        <div className="floating-orb orb-koh w-[500px] h-[500px] bottom-[-25%] right-[-15%] opacity-20 animate-float-orb" style={{ animationDelay: "-9s", animationDuration: "30s" }} />
        <div className="floating-orb orb-matcha w-[400px] h-[400px] top-[20%] right-[10%] opacity-18 animate-float-orb" style={{ animationDelay: "-14s", animationDuration: "26s" }} />
        
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture opacity-20" />
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="text-center">
            {/* Small label */}
            <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-beni/75 mb-12">
              A Mindset — 心得
            </div>

            {/* Quote */}
            <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-light tracking-[-0.035em] text-kuro/95 dark:text-shiro/95 leading-[1.18] text-balance px-4">
              <span className="text-beni/45 font-mincho text-5xl md:text-7xl align-top">"</span>
              The world doesn't wait for excuses.
              <br className="hidden md:block" />
              <span className="text-kuro/65 dark:text-shiro/65">It only sees results.</span>
              <span className="text-beni/45 font-mincho text-5xl md:text-7xl align-bottom">"</span>
            </blockquote>

            {/* Attribution */}
            <div className="mt-16 flex items-center justify-center gap-5">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-beni/45" />
              <span className="font-jp text-base text-kuro/55 dark:text-shiro/55">
                J. Paudel
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-beni/45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};