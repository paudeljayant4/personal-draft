import { SectionMark } from "./SectionMark";
import { useReveal } from "@/hooks/use-reveal";
import { Enso } from "./Enso";

const lines = [
  "To explore without unnecessary limits.",
  "To create without constantly seeking permission.",
  "To keep learning.",
  "To become someone I'm genuinely proud of.",
];

export const Vision = () => {
  const ref = useReveal();
  return (
    <section
      id="vision"
      className="relative px-6 py-32 md:py-48 max-w-4xl mx-auto overflow-hidden"
    >
      {/* Background enso */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-vermilion/[0.04] pointer-events-none">
        <Enso size={500} />
      </div>

      <div ref={ref} className="reveal relative z-10">
        <div className="flex flex-col items-center text-center">
          <SectionMark number="07" label="Vision" className="mb-12" />

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-[-0.04em] text-foreground leading-[1.02] text-balance max-w-3xl">
            To be free to live as myself.
          </h2>

          <div className="mt-16 w-12 h-px bg-vermilion/60" />

          <div className="mt-16 space-y-6 max-w-xl">
            {lines.map((line, i) => (
              <p
                key={line}
                className="font-light text-base md:text-lg text-muted-foreground leading-relaxed reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-mono text-xs text-vermilion/70 mr-3">
                  —
                </span>
                {line}
              </p>
            ))}
          </div>

          <div className="mt-16 font-jp text-sm text-muted-foreground/50 tracking-[0.5em]">
            自由
          </div>
        </div>
      </div>
    </section>
  );
};