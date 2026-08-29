import { useReveal } from "@/hooks/use-reveal";
import { ExternalLink, Github, Code, Compass, ShieldCheck, Sparkles } from "lucide-react";

const creations = [
  {
    title: "Algorithmic & Strategic Thinking Hub",
    category: "Software & Logic",
    description:
      "A collection of algorithms, data structures, and chess engine logic exploring computational complexity and heuristics.",
    tags: ["Algorithms", "TypeScript", "Chess Logic", "Problem Solving"],
    jp: "論理",
    jpTag: "Ronri — Logic",
    icon: Code,
    status: "Active",
  },
  {
    title: "Debate Frameworks & Critical Reasoning",
    category: "Speech & Oratory",
    description:
      "Curated parliamentary motion breakdowns, counter-arguments, and persuasive communication principles developed across national tournaments.",
    tags: ["Debate", "Public Speaking", "Rhetoric", "Leadership"],
    jp: "弁論",
    jpTag: "Benron — Discourse",
    icon: Compass,
    status: "Ongoing",
  },
  {
    title: "NCC Cadre Leadership System",
    category: "Discipline & Cadre",
    description:
      "Insights, drills, teamwork frameworks, and physical endurance methodologies synthesized from Cadet Corps training (Batch 49).",
    tags: ["Discipline", "Team Dynamics", "Tactics", "Service"],
    jp: "規律",
    jpTag: "Kiritsu — Discipline",
    icon: ShieldCheck,
    status: "Field Experience",
  },
];

export const Creations = () => {
  const ref = useReveal();

  return (
    <section id="creations" className="relative px-6 py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-shiro/99 dark:bg-kuro/99" />
        <div className="absolute inset-0 asanoha-pattern opacity-6" />
        <div className="absolute inset-0 komon-pattern opacity-4" />
        <div className="absolute inset-0 kakure-kiri-pattern opacity-3" />
        <div className="absolute inset-0 gold-triadic-pattern opacity-18" />

        {/* Ambient color theory glow */}
        <div className="glow-ambient glow-gold w-[600px] h-[600px] top-[20%] right-[-10%] opacity-20 animate-breathe-soft" />
        <div className="glow-ambient glow-gold-triadic-1 w-[450px] h-[450px] bottom-[15%] left-[-5%] opacity-15 animate-breathe-soft" style={{ animationDelay: "-3s" }} />

        <div className="absolute inset-0 grid-veil opacity-25" />
        <div className="absolute inset-0 paper-veil" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center mb-24 md:mb-32">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45 mb-12">
              <span className="font-mono text-gold/80 text-[10px]">04</span>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-gradient-to-r from-gold/60 to-transparent" />
                <span>Creations</span>
              </div>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.04em] text-kuro/95 dark:text-shiro/95 leading-[1.05] max-w-2xl">
              Explorations & Craft.
            </h2>
            <p className="mt-8 font-jp text-base text-kuro/50 dark:text-shiro/50 tracking-[0.15em]">
              創作と探求 — Sōsaku to Tankyū
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {creations.map((item, index) => {
              const Icon = item.icon;
              const cardRef = useReveal();
              const colors = ["var(--gold)", "var(--gold-triadic-1)", "var(--gold-triadic-2)"];
              const currentColor = colors[index % 3];
              const colorName = currentColor.replace("var(--", "").replace(")", "");

              return (
                <div
                  key={item.title}
                  ref={cardRef}
                  className="reveal group flex flex-col justify-between p-8 md:p-9 rounded-2xl bg-card/45 backdrop-blur-sm border border-border/40 transition-all duration-700 hover:-translate-y-1.5 shadow-soft relative overflow-hidden"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Subtle Japanese kanji watermark in the background */}
                  <div
                    className="absolute -bottom-4 -right-4 font-jp text-8xl font-light select-none pointer-events-none opacity-5 transition-transform duration-700 group-hover:scale-110"
                    style={{ color: `hsl(${colorName})` }}
                  >
                    {item.jp}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500"
                        style={{
                          backgroundColor: `hsl(${colorName} / 0.12)`,
                          color: `hsl(${colorName})`,
                        }}
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-gold/25 text-kuro/60 dark:text-shiro/60 bg-card/60">
                        {item.status}
                      </span>
                    </div>

                    <div
                      className="font-jp text-xs mb-2 tracking-widest font-light"
                      style={{ color: `hsl(${colorName} / 0.8)` }}
                    >
                      {item.jpTag}
                    </div>

                    <h3 className="font-display text-2xl font-light tracking-tight text-kuro/95 dark:text-shiro/95 mb-4 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm font-light text-kuro/65 dark:text-shiro/65 leading-relaxed mb-8">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-kuro/5 dark:bg-shiro/5 text-kuro/70 dark:text-shiro/70"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};