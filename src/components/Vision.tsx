import { useReveal } from "@/hooks/use-reveal";
import { HankoStamp } from "./HankoStamp";

const lines = [
  { text: "To explore without unnecessary limits.", jp: "自由" },
  { text: "To create without constantly seeking permission.", jp: "創造" },
  { text: "To keep learning with humility and hunger.", jp: "成長" },
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

        {/* Complementary harmony pattern */}
        <div className="absolute inset-0 gold-complement-pattern opacity-18" />

        {/* Complementary color theory radial overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,hsl(var(--gold)_/_0.10)_0%,transparent_60%),radial-gradient(ellipse_60%_40%_at_75%_50%,hsl(var(--gold-complement)_/_0.12)_0%,transparent_60%)] animate-breathe-soft" />

        {/* Concentric enso circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full border border-gold/12 dark:border-gold/18" />
          <div className="absolute inset-[60px] w-[580px] h-[580px] rounded-full border border-gold-complement/8 dark:border-gold-complement/14" />
          <div className="absolute inset-[140px] w-[420px] h-[420px] rounded-full border border-gold/8 dark:border-gold/12" />
        </div>

        <div className="glow-ambient glow-beni w-[500px] h-[500px] top-[-10%] right-[-10%] opacity-25 animate-breathe-soft" style={{ animationDelay: "-3s" }} />
        <div className="glow-ambient glow-ai w-[450px] h-[450px] bottom-[-15%] left-[-10%] opacity-30 animate-breathe-soft" style={{ animationDelay: "-6s" }} />

        {/* Complementary gold + indigo glows */}
        <div className="glow-ambient glow-gold w-[450px] h-[450px] top-[15%] left-[15%] opacity-22 animate-breathe-soft" style={{ animationDelay: "-4s" }} />
        <div className="glow-ambient glow-gold-complement w-[400px] h-[400px] bottom-[15%] right-[15%] opacity-25 animate-pulse-subtle" style={{ animationDelay: "-7s" }} />

        <div className="absolute inset-0 grid-veil opacity-20" />
      </div>

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45 mb-16">
          <span className="font-mono text-gold/80 text-[10px]">07</span>
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-gradient-to-r from-gold/60 to-transparent" />
            <span>Vision</span>
          </div>
        </div>

        {/* Golden glow behind<dyad-write path="src/components/Vision.tsx" description="Completing Vision section with Japanese styling and gold accents">
import { useReveal } from "@/hooks/use-reveal";
import { HankoStamp } from "./HankoStamp";

const lines = [
  { text: "To explore without unnecessary limits.", jp: "自由" },
  { text: "To create without constantly seeking permission.", jp: "創造" },
  { text: "To keep learning with humility and hunger.", jp: "成長" },
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

        {/* Complementary harmony pattern */}
        <div className="absolute inset-0 gold-complement-pattern opacity-18" />

        {/* Complementary color theory radial overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,hsl(var(--gold)_/_0.10)_0%,transparent_60%),radial-gradient(ellipse_60%_40%_at_75%_50%,hsl(var(--gold-complement)_/_0.12)_0%,transparent_60%)] animate-breathe-soft" />

        {/* Concentric enso circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full border border-gold/12 dark:border-gold/18" />
          <div className="absolute inset-[60px] w-[580px] h-[580px] rounded-full border border-gold-complement/8 dark:border-gold-complement/14" />
          <div className="absolute inset-[140px] w-[420px] h-[420px] rounded-full border border-gold/8 dark:border-gold/12" />
        </div>

        <div className="glow-ambient glow-beni w-[500px] h-[500px] top-[-10%] right-[-10%] opacity-25 animate-breathe-soft" style={{ animationDelay: "-3s" }} />
        <div className="glow-ambient glow-ai w-[450px] h-[450px] bottom-[-15%] left-[-10%] opacity-30 animate-breathe-soft" style={{ animationDelay: "-6s" }} />

        {/* Complementary gold + indigo glows */}
        <div className="glow-ambient glow-gold w-[450px] h-[450px] top-[15%] left-[15%] opacity-22 animate-breathe-soft" style={{ animationDelay: "-4s" }} />
        <div className="glow-ambient glow-gold-complement w-[400px] h-[400px] bottom-[15%] right-[15%] opacity-25 animate-pulse-subtle" style={{ animationDelay: "-7s" }} />

        <div className="absolute inset-0 grid-veil opacity-20" />
      </div>

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45 mb-16">
          <span className="font-mono text-gold/80 text-[10px]">07</span>
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-gradient-to-r from-gold/60 to-transparent" />
            <span>Vision</span>
          </div>
        </div>

        {/* Golden glow behind the vision statement */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_50%,hsl(var(--gold)/0.15),transparent_70%)] blur-2xl -z-10" />
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.05em] text-kuro/95 dark:text-shiro/95 leading-[1.05] max-w-3xl mx-auto">
            To be free to live as myself.
          </h2>
        </div>

        {/* Complementary color harmony divider */}
        <div className="mt-20 flex items-center justify-center gap-3">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
          <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_14px_hsl(var(--gold)/0.5)]" />
          <div className="w-1 h-1 rounded-full bg-gold-complement/60" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        <div className="mt-20 space-y-10 max-w-xl mx-auto">
          {lines.map((line, i) => (
            <p
              key={line.text}
              className="reveal font-light text-base md:text-lg text-kuro/70 dark:text-shiro/70 leading-relaxed"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="font-jp text-gold/80 mr-4 text-lg [text-shadow:_0_0_20px_hsl(var(--gold)/0.3)]">{line.jp}</span>
              {line.text}
            </p>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center justify-center">
          <div className="font-jp text-3xl text-gold/60 dark:text-gold/45 tracking-[0.6em] [text-shadow:_0_0_25px_hsl(var(--gold)/0.2)]">
            自由
          </div>
          <div className="mt-3 text-[10px] uppercase tracking-[0.4em] text-kuro/30 dark:text-shiro/30 font-mono">
            Jiyū — Freedom
          </div>
          <div className="mt-8">
            <HankoStamp size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
};