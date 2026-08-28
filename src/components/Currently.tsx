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
        
        {/* Single central glow */}
        <div className="glow-ambient glow-sakura w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 animate-breathe-soft" />
        
        <div className="absolute inset-0 grid-veil opacity-20" />
        <div className="absolute inset-0 paper-veil" />
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45 mb-14">
              <span className="font-mono text-beni/80 text-[10px]">06</span>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-gradient-to-r from-beni/60 to-transparent" />
                <span>Now</span>
              </div>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-light tracking-[-0.03em] text-kuro/95 dark:text-shiro/95 mb-18">
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
                  <span className="font-jp text-base text-beni/50 group-hover:text-beni/80 transition-colors duration-500">
                    {word.jp}
                  </span>
                  {i < words.length - 1 && (
                    <span className="text-beni/35 ml-4 hidden sm:inline text-lg">·</span>
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