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
    <section className="relative px-6 py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro via-shiro/95 to-shiro dark:from-kuro dark:via-kuro/95 dark:to-kuro" />
        
        {/* Large central sakura glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-sakura/10 dark:bg-sakura/8 blur-3xl animate-breathe" />
        
        {/* Scattered orbs */}
        <div className="floating-orb orb-sakura w-[400px] h-[400px] top-[-10%] left-[30%] opacity-40 animate-float-orb" style={{ animationDelay: "-2s" }} />
        <div className="floating-orb orb-matcha w-[300px] h-[300px] bottom-[20%] right-[10%] opacity-30 animate-float-orb" style={{ animationDelay: "-8s", animationDuration: "24s" }} />
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-kuro/50 dark:text-shiro/50 mb-10">
              <span className="font-mono text-beni/80 text-[10px]">06</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-gradient-to-r from-beni/60 to-transparent" />
                <span>Now</span>
              </div>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-light tracking-[-0.02em] text-kuro/95 dark:text-shiro/95 mb-12">
              Right now.
            </h2>

            {/* Words with Japanese characters */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 mb-14">
              {words.map((word, i) => (
                <span
                  key={word.en}
                  className="group flex items-center gap-2"
                >
                  <span className="font-display text-2xl md:text-4xl font-light tracking-[-0.02em] text-kuro/90 dark:text-shiro/90">
                    {word.en}
                  </span>
                  <span className="font-jp text-sm text-beni/50 group-hover:text-beni/80 transition-colors">
                    {word.jp}
                  </span>
                  {i < words.length - 1 && (
                    <span className="text-beni/40 ml-2 hidden sm:inline">·</span>
                  )}
                </span>
              ))}
            </div>

            <p className="text-base md:text-lg font-light text-kuro/60 dark:text-shiro/60 leading-relaxed max-w-xl mb-10">
              I'm exploring technology, developing my skills, learning more about
              people and the world, and figuring out what kind of life I want to build.
            </p>

            <div className="font-jp text-sm text-kuro/40 dark:text-shiro/40 tracking-[0.3em]">
              現在
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-kuro/30 dark:text-shiro/30 font-mono">
              Genzai
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};