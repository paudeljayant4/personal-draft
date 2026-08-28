import { useReveal } from "@/hooks/use-reveal";

const words = [
  { en: "Learning.", jp: "学" },
  { en: "Building.", jp: "造" },
  { en: "Exploring.", jp: "探" },
  { en: "Becoming.", jp: "成" },
];

export const Currently = () => {
  const ref = useReveal();
  return (
    <section className="relative px-6 py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro via-shiro/99 to-shiro dark:from-kuro dark:via-kuro/99 dark:to-kuro" />

        {/* Enhanced background patterns */}
        <div className="absolute inset-0 asanoha-pattern opacity-5" />
        <div className="absolute inset-0 komon-pattern opacity-3" />
        <div className="absolute inset-0 kakure-kiri-pattern opacity-3" />
        <div className="absolute inset-0 kagome-pattern opacity-3" />
        <div className="absolute inset-0 hishi-pattern opacity-3" />
        <div className="absolute inset-0 tatehira-pattern opacity-3" />

        {/* Analogous harmony pattern - more visible */}
        <div className="absolute inset-0 gold-analogous-pattern opacity-18" />

        {/* ANALOGOUS color theory radial overlay - warm gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(var(--gold-analogous-1)/0.06),hsl(var(--gold)/0.10),hsl(var(--gold-analogous-2)/0.04),transparent_70%)] animate-breathe-soft" />

        {/* Powerful central gold glow - the focal point */}
        <div className="glow-ambient glow-gold w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-35 animate-breathe-soft" />
        <div className="glow-ambient glow-sakura w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 animate-breathe-soft" style={{ animationDelay: "-3s" }} />

        <div className="absolute inset-0 grid-veil opacity-20" />
        <div className="absolute inset-0 paper-veil" />
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45 mb-14">
              <span className="font-mono text-gold/80 text-[10px]">06</span>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-gradient-to-r from-gold/60 to-transparent" />
                <span>Now</span>
              </div>
            </div>

            <h2 className="relative font-display text-4xl md:text-5xl font-light tracking-[-0.03em] text-kuro/95 dark:text-shiro/95 mb-18">
              <span className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_50%,hsl(var(--gold)/0.12),transparent_70%)] blur-xl -z-10" />
              Right now.
            </h2>

            {/* Words with Japanese characters - generous spacing */}
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mb-18">
              {words.map((word, i) => (
                <span
                  key={word.en}
                  className="group flex items-center gap-3"
                >
                  <span className="font-display text-3xl md:text-5xl font-light tracking-[-0.03em] text-kuro/92 dark:text-shiro/92">
                    {word.en}
                  </span>
                  <span className="font-jp text-base text-gold/50 group-hover:text-gold/80 transition-colors duration-500">
                    {word.jp}
                  </span>
                  {i < words.length - 1 && (
                    <span className="text-gold/35 ml-4 hidden sm:inline text-lg">·</span>
                  )}
                </span>
              ))}
            </div>

            <p className="text-base md:text-lg font-light text-kuro/65 dark:text-shiro/65 leading-relaxed max-w-xl mb-14">
              I'm exploring technology, developing my skills, learning more about
              people and the world, and figuring out what kind of life I want to build.
            </p>

            <div className="font-jp text-base text-kuro/45 dark:text-shiro/45 tracking-[0.4em]">
              現在
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.4em] text-kuro/35 dark:text-shiro/35 font-mono">
              Genzai
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};