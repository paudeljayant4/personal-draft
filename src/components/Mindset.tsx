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

        {/* Triadic harmony pattern */}
        <div className="absolute inset-0 gold-triadic-pattern opacity-18" />

        {/* Triadic radial overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,hsl(var(--gold)/0.10),hsl(var(--gold-triadic-1)/0.04),hsl(var(--gold-triadic-2)/0.04),transparent_70%)] animate-breathe-soft" />

        <div className="glow-ambient glow-gold w-[700px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 animate-breathe-soft" />
        <div className="glow-ambient glow-gold-triadic-1 w-[500px] h-[350px] top-1/3 left-[20%] opacity-15 animate-breathe-soft" style={{ animationDelay: "-4s" }} />
        <div className="glow-ambient glow-gold-triadic-2 w-[450px] h-[300px] bottom-[20%] right-[15%] opacity-12 animate-breathe-soft" style={{ animationDelay: "-6s" }} />

        <div className="absolute inset-0 grid-veil opacity-25" />
        <div className="absolute inset-0 paper-veil" />
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-gold/70 mb-14">
              A Mindset — 心得
            </div>

            <blockquote className="relative font-display text-3xl md:text-5xl lg:text-6xl font-light tracking-[-0.04em] text-kuro/95 dark:text-shiro/95 leading-[1.15] text-balance px-6">
              <span className="absolute -left-4 -top-8 text-gold/25 font-mincho text-5xl md:text-7xl align-top [text-shadow:_0_0_30px_hsl(var(--gold)/0.2)]">"</span>
              The world doesn't wait for excuses.
              <br className="hidden md:block" />
              <span className="text-kuro/65 dark:text-shiro/65">It only sees results.</span>
              <span className="text-gold/25 font-mincho text-5xl md:text-7xl align-bottom [text-shadow:_0_0_30px_hsl(var(--gold)/0.2)]">"</span>
            </blockquote>

            <div className="mt-20 flex items-center justify-center gap-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
              <span className="font-jp text-base text-kuro/55 dark:text-shiro/55 tracking-wide">
                J. Paudel
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};