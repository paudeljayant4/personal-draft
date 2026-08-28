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
      className="relative px-6 py-32 md:py-48 overflow-hidden"
    >
      {/* Background with circular patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro to-shiro/90 dark:from-kuro dark:to-kuro/90" />
        
        {/* Concentric circles - Enso inspired */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] rounded-full border border-beni/10 dark:border-beni/15 animate-pulse-glow" />
          <div className="absolute inset-[40px] w-[520px] h-[520px] rounded-full border border-matcha/8 dark:border-matcha/12 animate-pulse-glow" style={{ animationDelay: "2s" }} />
          <div className="absolute inset-[80px] w-[440px] h-[440px] rounded-full border border-ai/6 dark:border-ai/10 animate-pulse-glow" style={{ animationDelay: "4s" }} />
        </div>
        
        {/* Floating orbs */}
        <div className="floating-orb orb-beni w-[400px] h-[400px] top-[-10%] right-[-10%] opacity-35 animate-float-orb" style={{ animationDelay: "-5s" }} />
        <div className="floating-orb orb-ai w-[350px] h-[350px] bottom-[-15%] left-[-10%] opacity-30 animate-float-orb" style={{ animationDelay: "-10s", animationDuration: "28s" }} />
      </div>

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-kuro/50 dark:text-shiro/50 mb-14">
            <span className="font-mono text-beni/80 text-[10px]">07</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-px bg-gradient-to-r from-beni/60 to-transparent" />
              <span>Vision</span>
            </div>
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-[-0.04em] text-kuro/95 dark:text-shiro/95 leading-[1.05] max-w-3xl">
            To be free to live as myself.
          </h2>

          {/* Decorative divider */}
          <div className="mt-16 flex items-center gap-4">
            <div className="w-8 h-px bg-beni/40" />
            <div className="w-2 h-2 rounded-full bg-beni/60" />
            <div className="w-8 h-px bg-beni/40" />
          </div>

          {/* Vision points */}
          <div className="mt-16 space-y-8 max-w-xl">
            {lines.map((line, i) => (
              <p
                key={line.text}
                className="reveal font-light text-base md:text-lg text-kuro/70 dark:text-shiro/70 leading-relaxed"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-jp text-beni/60 mr-3">{line.jp}</span>
                {line.text}
              </p>
            ))}
          </div>

          {/* Japanese for freedom */}
          <div className="mt-20 font-jp text-base text-kuro/30 dark:text-shiro/30 tracking-[0.5em]">
            自由
          </div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-kuro/25 dark:text-shiro/25 font-mono">
            Jiyū — Freedom
          </div>
        </div>
      </div>
    </section>
  );
};