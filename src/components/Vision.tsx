import { useReveal } from "@/hooks/use-reveal";

const lines = [
  { text: "To explore without unnecessary limits.", jp: "自由" },
  { text: "To create without constantly seeking permission.", jp: "創造" },
  { text: "To keep learning.", jp: "成長" },
  { text: "To become someone I'm genuinely proud of.", jp: "完成" },
];

export const Vision = () => {
  const ref = useReveal();
  return (
    <section
      id="vision"
      className="relative px-6 py-32 md:py-56 overflow-hidden"
    >
      {/* Background with circular patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro to-shiro/92 dark:from-kuro dark:to-kuro/92" />
        
        {/* Concentric circles - Enso inspired */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow">
          <div className="w-[700px] h-[700px] rounded-full border border-beni/12 dark:border-beni/18" />
          <div className="absolute inset-[50px] w-[600px] h-[600px] rounded-full border border-matcha/10 dark:border-matcha/15" />
          <div className="absolute inset-[100px] w-[500px] h-[500px] rounded-full border border-ai/8 dark:border-ai/12" />
          <div className="absolute inset-[150px] w-[400px] h-[400px] rounded-full border border-sakura/6 dark:border-sakura/10" />
        </div>
        
        {/* Floating orbs */}
        <div className="floating-orb orb-beni w-[500px] h-[500px] top-[-15%] right-[-15%] opacity-30 animate-float-orb" style={{ animationDelay: "-6s" }} />
        <div className="floating-orb orb-ai w-[450px] h-[450px] bottom-[-20%] left-[-15%] opacity-25 animate-float-orb" style={{ animationDelay: "-12s", animationDuration: "32s" }} />
        <div className="floating-orb orb-sakura w-[350px] h-[350px] top-[30%] left-[10%] opacity-20 animate-float-orb" style={{ animationDelay: "-9s", animationDuration: "28s" }} />
        
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture opacity-15" />
      </div>

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-kuro/50 dark:text-shiro/50 mb-16">
            <span className="font-mono text-beni/90 text-[10px]">07</span>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-beni/70 to-transparent" />
              <span>Vision</span>
            </div>
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-[-0.045em] text-kuro/95 dark:text-shiro/95 leading-[1.05] max-w-3xl">
            To be free to live as myself.
          </h2>

          {/* Decorative divider */}
          <div className="mt-20 flex items-center gap-5">
            <div className="w-12 h-px bg-beni/45" />
            <div className="w-2.5 h-2.5 rounded-full bg-beni/65" />
            <div className="w-12 h-px bg-beni/45" />
          </div>

          {/* Vision points */}
          <div className="mt-20 space-y-10 max-w-xl">
            {lines.map((line, i) => (
              <p
                key={line.text}
                className="reveal font-light text-base md:text-lg text-kuro/72 dark:text-shiro/72 leading-relaxed"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="font-jp text-beni/65 mr-4">{line.jp}</span>
                {line.text}
              </p>
            ))}
          </div>

          {/* Japanese for freedom */}
          <div className="mt-24 font-jp text-lg text-kuro/35 dark:text-shiro/35 tracking-[0.6em]">
            自由
          </div>
          <div className="mt-3 text-[10px] uppercase tracking-[0.35em] text-kuro/30 dark:text-shiro/30 font-mono">
            Jiyū — Freedom
          </div>
        </div>
      </div>
    </section>
  );
};