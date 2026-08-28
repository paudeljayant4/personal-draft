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
      className="relative px-6 py-44 md:py-64 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro to-shiro/95 dark:from-kuro dark:to-kuro/95" />
        
        {/* Enhanced background patterns */}
        <div className="absolute inset-0 asanoha-pattern opacity-4" />
        <div className="absolute inset-0 komon-pattern opacity-3" />
        <div className="absolute inset-0 kakure-kiri-pattern opacity-3" />
        <div className="absolute inset-0 kagome-pattern opacity-3" />
        <div className="absolute inset-0 hishi-pattern opacity-3" />
        <div className="absolute inset-0 tatehira-pattern opacity-3" />
        
        {/* Single enso circle - very subtle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] rounded-full border border-beni/8 dark:border-beni/12" />
          <div className="absolute inset-[80px] w-[440px] h-[440px] rounded-full border border-matcha/6 dark:border-matcha/10" />
        </div>
        
        <div className="glow-ambient glow-beni w-[500px] h-[500px] top-[-10%] right-[-10%] opacity-25 animate-breathe-soft" style={{ animationDelay: "-3s" }} />
        <div className="glow-ambient glow-ai w-[450px] h-[450px] bottom-[-15%] left-[-10%] opacity-20 animate-breathe-soft" style={{ animationDelay: "-6s" }} />
        
        <div className="absolute inset-0 grid-veil opacity-20" />
      </div>

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45 mb-18">
          <span className="font-mono text-beni/80 text-[10px]">07</span>
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-gradient-to-r from-beni/60 to-transparent" />
            <span>Vision</span>
          </div>
        </div>

        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.05em] text-kuro/95 dark:text-shiro/95 leading-[1.05] max-w-3xl mx-auto">
          To be free to live as myself.
        </h2>

        <div className="mt-24 flex items-center justify-center gap-5">
          <div className="w-12 h-px bg-beni/40" />
          <div className="w-2 h-2 rounded-full bg-beni/60" />
          <div className="w-12 h-px bg-beni/40" />
        </div>

        <div className="mt-24 space-y-12 max-w-xl mx-auto">
          {lines.map((line, i) => (
            <p
              key={line.text}
              className="reveal font-light text-base md:text-lg text-kuro/70 dark:text-shiro/70 leading-relaxed"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="font-jp text-beni/60 mr-4 text-lg">{line.jp}</span>
              {line.text}
            </p>
          ))}
        </div>

        <div className="mt-28 font-jp text-lg text-kuro/35 dark:text-shiro/35 tracking-[0.6em]">
          自由
        </div>
        <div className="mt-3 text-[10px] uppercase tracking-[0.4em] text-kuro/30 dark:text-shiro/30 font-mono">
          Jiyū — Freedom
        </div>
      </div>
    </section>
  );
};