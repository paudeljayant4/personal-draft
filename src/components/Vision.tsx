import { SectionMark } from "./SectionMark";
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
      {/* Background with subtle pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro to-shiro/90 dark:from-kuro dark:to-kuro/90" />
        
        {/* Circular enso-like decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[500px] h-[500px] rounded-full border border-beni/5 dark:border-beni/10" />
          <div className="absolute inset-8 w-[484px] h-[484px] rounded-full border border-matcha/5 dark:border-matcha/10" />
          <div className="absolute inset-16 w-[468px] h-[468px] rounded-full border border-ai/5 dark:border-ai/10" />
        </div>
      </div>

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <SectionMark number="07" label="Vision" className="mb-14" />

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