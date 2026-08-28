import { useReveal } from "@/hooks/use-reveal";

export const Mindset = () => {
  const ref = useReveal();
  return (
    <section className="relative px-6 py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-shiro/98 dark:bg-kuro/98" />
        
        {/* Enhanced background patterns */}
        <div className="absolute inset-0 asanoha-pattern opacity-6" />
        <div className="absolute inset-0 komon-pattern opacity-4" />
        <div className="absolute inset-0 kakure-kiri-pattern opacity-4" />
        <div className="absolute inset-0 kagome-pattern opacity-4" />
        <div className="absolute inset-0 hishi-pattern opacity-4" />
        <div className="absolute inset-0 tatehira-pattern opacity-4" />
        
        <div className="glow-ambient glow-beni w-[600px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 animate-breathe-soft" />
        
        <div className="absolute inset-0 grid-veil opacity-25" />
        <div className="absolute inset-0 paper-veil" />
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-beni/70 mb-14">
              A Mindset — 心得
            </div>

            <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-light tracking-[-0.04em] text-kuro/95 dark:text-shiro/95 leading-[1.15] text-balance px-6">
              <span className="text-beni/40 font-mincho text-5xl md:text-7xl align-top">"</span>
              The world doesn't wait for excuses.
              <br className="hidden md:block" />
              <span className="text-kuro/65 dark:text-shiro/65">It only sees results.</span>
              <span className="text-beni/40 font-mincho text-5xl md:text-7xl align-bottom">"</span>
            </blockquote>

            <div className="mt-20 flex items-center justify-center gap-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-beni/40" />
              <span className="font-jp text-base text-kuro/55 dark:text-shiro/55 tracking-wide">
                J. Paudel
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-beni/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};