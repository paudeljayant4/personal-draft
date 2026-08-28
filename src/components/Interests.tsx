import { useReveal } from "@/hooks/use-reveal";
import { Code2, Brain, Crown, Globe, Activity, BookOpen } from "lucide-react";

const interests = [
  {
    title: "Code",
    description: "Exploring technology, programming and building things.",
    Icon: Code2,
    jp: "技",
    jpMeaning: "Waza — Skill",
  },
  {
    title: "Mind",
    description: "Interested in psychology, human behaviour and how people think.",
    Icon: Brain,
    jp: "心",
    jpMeaning: "Kokoro — Heart",
  },
  {
    title: "Strategy",
    description: "Chess, problem solving and competitive thinking.",
    Icon: Crown,
    jp: "戦",
    jpMeaning: "Sen — Battle",
  },
  {
    title: "World",
    description: "Travelling, discovering cultures and understanding different perspectives.",
    Icon: Globe,
    jp: "界",
    jpMeaning: "Kai — World",
  },
  {
    title: "Movement",
    description: "Football, fitness and staying active.",
    Icon: Activity,
    jp: "動",
    jpMeaning: "Dō — Motion",
  },
  {
    title: "Stories",
    description: "Books, anime, ideas and stories that offer different ways of seeing the world.",
    Icon: BookOpen,
    jp: "語",
    jpMeaning: "Go — Language",
  },
];

const InterestCard = ({
  interest,
  index,
}: {
  interest: (typeof interests)[number];
  index: number;
}) => {
  const ref = useReveal();
  const { Icon, title, description, jp, jpMeaning } = interest;

  return (
    <div
      ref={ref}
      className="reveal group"
      style={{ transitionDelay: `${(index % 3) * 150}ms` }}
    >
      <div
        className="relative h-full p-10 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 transition-all duration-700 hover:-translate-y-1"
        data-card-index={index % 3}
      >
        {/* Hover glow - card-specific triadic color */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl pointer-events-none"
          style={{
            background:
              index % 3 === 0
                ? "radial-gradient(circle at 50% 0%, hsl(var(--gold) / 0.14), transparent 60%)"
                : index % 3 === 1
                ? "radial-gradient(circle at 50% 0%, hsl(var(--gold-triadic-1) / 0.14), transparent 60%)"
                : "radial-gradient(circle at 50% 0%, hsl(var(--gold-triadic-2) / 0.14), transparent 60%)",
          }}
        />

        {/* Japanese character - colored per index */}
        <div
          className="absolute top-8 right-8 font-jp text-4xl font-light transition-colors duration-700"
          style={{
            color:
              index % 3 === 0
                ? "hsl(var(--gold) / 0.12)"
                : index % 3 === 1
                ? "hsl(var(--gold-triadic-1) / 0.18)"
                : "hsl(var(--gold-triadic-2) / 0.20)",
          }}
        >
          {jp}
        </div>

        {/* Icon - colored per index on hover */}
        <div className="relative mb-8 w-12 h-12 rounded-lg bg-kuro/5 dark:bg-shiro/10 flex items-center justify-center transition-colors duration-500">
          <div
            className="absolute inset-0 rounded-lg transition-all duration-500 opacity-0 group-hover:opacity-100"
            style={{
              backgroundColor:
                index % 3 === 0
                  ? "hsl(var(--gold) / 0.15)"
                  : index % 3 === 1
                  ? "hsl(var(--gold-triadic-1) / 0.18)"
                  : "hsl(var(--gold-triadic-2) / 0.20)",
            }}
          />
          <Icon
            className="relative w-5 h-5 text-kuro/70 dark:text-shiro/70 transition-colors duration-500"
            strokeWidth={1.5}
          />
        </div>

        <h3 className="font-display text-2xl font-light tracking-[-0.02em] text-kuro/95 dark:text-shiro/95 mb-2">
          {title}
        </h3>

        <div
          className="font-jp text-xs mb-5 tracking-wide"
          style={{
            color:
              index % 3 === 0
                ? "hsl(var(--gold) / 0.7)"
                : index % 3 === 1
                ? "hsl(var(--gold-triadic-1) / 0.75)"
                : "hsl(var(--gold-triadic-2) / 0.75)",
          }}
        >
          {jpMeaning}
        </div>

        <p className="text-sm font-light text-kuro/60 dark:text-shiro/60 leading-relaxed">
          {description}
        </p>

        {/* Triadic color accent line */}
        <div
          className="mt-8 h-px w-0 group-hover:w-20 transition-all duration-700 ease-out"
          style={{
            background:
              index % 3 === 0
                ? "linear-gradient(90deg, hsl(var(--gold)), transparent)"
                : index % 3 === 1
                ? "linear-gradient(90deg, hsl(var(--gold-triadic-1)), transparent)"
                : "linear-gradient(90deg, hsl(var(--gold-triadic-2)), transparent)",
          }}
        />
      </div>
    </div>
  );
};

export const Interests = () => {
  const ref = useReveal();
  return (
    <section id="interests" className="relative px-6 py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-shiro/98 dark:bg-kuro/98" />
        
        {/* Enhanced background patterns */}
        <div className="absolute inset-0 asanoha-pattern opacity-6" />
        <div className="absolute inset-0 komon-pattern opacity-4" />
        <div className="absolute inset-0 kakure-kiri-pattern opacity-3" />
        <div className="absolute inset-0 kagome-pattern opacity-3" />
        <div className="absolute inset-0 hishi-pattern opacity-3" />
        <div className="absolute inset-0 tatehira-pattern opacity-3" />
        
        {/* NEW: Color theory background art - analogous harmony */}
        <div className="absolute inset-0 gold-analogous-pattern opacity-12" />
        <div className="absolute inset-0 color-theory-overlay" />
        
        {/* Enhanced ambient glows with gold */}
        <div className="glow-ambient glow-sakura w-[600px] h-[600px] top-[-15%] left-[-10%] opacity-40 animate-breathe-soft" style={{ animationDelay: "-2s" }} />
        <div className="glow-ambient glow-ai w-[500px] h-[500px] bottom-[-10%] right-[-10%] opacity-30 animate-breathe-soft" style={{ animationDelay: "-5s" }} />
        
        {/* NEW: Gold ambient glows */}
        <div className="glow-ambient glow-gold w-[400px] h-[400px] top-[30%] right-[20%] opacity-20 animate-breathe-soft" style={{ animationDelay: "-3s" }} />
        <div className="glow-ambient glow-gold-analogous-2 w-[300px] h-[300px] bottom-[25%] left-[15%] opacity-15 animate-pulse-subtle" style={{ animationDelay: "-6s" }} />
        
        <div className="absolute inset-0 grid-veil opacity-30" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center mb-24 md:mb-32">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45 mb-12">
              <span className="font-mono text-gold/80 text-[10px]">03</span>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-gradient-to-r from-gold/60 to-transparent" />
                <span>Interests</span>
              </div>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.04em] text-kuro/95 dark:text-shiro/95 leading-[1.05] max-w-2xl">
              Things that keep me curious.
            </h2>
            <p className="mt-8 font-jp text-base text-kuro/50 dark:text-shiro/50 tracking-[0.15em]">
              好奇心 — Kiyoomi
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest, index) => (
              <InterestCard key={interest.title} interest={interest} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};