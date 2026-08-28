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
    <section className="relative px-6 py-28 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro via-shiro/96 to-shiro dark:from-kuro dark:via-kuro/96 dark:to-kuro" />
        
        {/* Large central sakura glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-sakura/12 dark:bg-sakura/10 blur-3xl animate-breathe" />
        
        {/* Scattered orbs */}
        <div className="floating-orb orb-sakura w-[500px] h-[500px] top-[-15%] left-[25%] opacity-35 animate-float-orb" style={{ animationDelay: "-3s" }} />
        <div className="floating-orb orb-matcha w-[400px] h-[400px] bottom-[15%] right-[5%] opacity-25 animate-float-orb" style={{ animationDelay: "-10s", animationDuration: "28s" }} />
        <div className="floating-orb orb-koh w-[300px] h-[300px] top-[40%] right-[25%] opacity-18 animate-float-orb" style={{ animationDelay: "-6s", animationDuration: "32s" }} />
        
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture opacity-15" />
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-kuro/50 dark:text-shiro/50 mb-12">
              <span className="font-mono text-beni/90 text-[10px]">06</span>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-beni/70 to-transparent" />
                <span>Now</span>
              </div>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-light tracking-[-0.025em] text-kuro/95 dark:text-shiro/95 mb-16">
              Right now.
            </h2>

            {/* Words with Japanese characters */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 mb-16">
              {words.map((word, i) => (
                <span
                  key={word.en}
                  className="group flex items-center gap-3"
                >
                  <span className="font-display text-2xl md:text-4xl font-light tracking-[-0.025em] text-kuro/92 dark:text-shiro/92">
                    {word.en}
                  </span>
                  <span className="font-jp text-base text-beni/55 group-hover:text-beni/90 transition-colors duration-500">
                    {word.jp}
                  </span>
                  {i < words.length - 1 && (
                    <span className="text-beni/45 ml-3 hidden sm:inline text-lg">·</span>
                  )}
                </span>
              ))}
            </div>

            <p className="text-base md:text-lg font-light text-kuro/65 dark:text-shiro/65 leading-relaxed max-w-xl mb-12">
              I'm exploring technology, developing my skills, learning more about
              people and the world, and figuring out what kind of life I want to build.
            </p>

            <div className="font-jp text-base text-kuro/45 dark:text-shiro/45 tracking-[0.35em]">
              現在
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.35em] text-kuro/35 dark:text-shiro/35 font-mono">
              Genzai
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};