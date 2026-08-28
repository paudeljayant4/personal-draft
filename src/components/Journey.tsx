import { useReveal } from "@/hooks/use-reveal";

const experiences = [
  {
    title: "National Cadet Corps — Batch 49",
    description:
      "Participated in NCC and developed discipline, teamwork, responsibility and leadership.",
    period: "2022 — 2024",
    tag: "Service",
    jp: "奉仕",
  },
  {
    title: "Debate Club — SOS Hermann Gmeiner School, Surkhet",
    description:
      "Served as Vice President of the school's first debate club. Focus: public speaking, communication, critical thinking, leadership, structured discussion.",
    period: "2023 — 2024",
    tag: "Leadership",
    jp: "指導",
  },
  {
    title: "Environment Club — SOS Hermann Gmeiner School, Surkhet",
    description:
      "Served as Vice Secretary and contributed to environmental and community-oriented activities.",
    period: "2023 — 2024",
    tag: "Community",
    jp: "社会",
  },
  {
    title: "Mahakumba National Debate Championship 2024",
    description:
      "Participated in a national-level debate championship, gaining experience in competitive public speaking, argumentation and communication.",
    period: "2024",
    tag: "Competition",
    jp: "競争",
  },
];

const ExperienceItem = ({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) => {
  const ref = useReveal();
  const colorVar = index % 3 === 0 ? "var(--gold)" : index % 3 === 1 ? "var(--gold-triadic-1)" : "var(--gold-triadic-2)";
  const colorName = colorVar.replace("var(--", "").replace(")", "");

  return (
    <div
      ref={ref}
      className="reveal relative"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="md:grid md:grid-cols-12 md:gap-12 items-baseline">
        {/* Enhanced timeline marker with triadic color rotation */}
        <div className="hidden md:flex md:col-span-3 items-center justify-end gap-6">
          <div className="text-right">
            <div className="font-mono text-xs text-kuro/55 dark:text-shiro/55 tracking-wider">
              {exp.period}
            </div>
            <div
              className="mt-2 font-jp text-xs tracking-wide"
              style={{ color: `hsl(${colorName} / 0.7)` }}
            >
              {exp.jp}
            </div>
          </div>
          <div className="relative w-3 h-3 flex-shrink-0">
            <div
              className="absolute inset-0 rounded-full animate-pulse-subtle"
              style={{ backgroundColor: `hsl(${colorName} / 0.25)` }}
            />
            <div
              className="absolute inset-[2px] rounded-full"
              style={{ backgroundColor: `hsl(${colorName} / 0.8)` }}
            />
          </div>
        </div>

        {/* Enhanced content */}
        <div className="md:col-span-9 md:pl-16 relative">
          {/* Enhanced vertical line with triadic color */}
          <div
            className="hidden md:block absolute left-4 top-3 bottom-0 w-px"
            style={{
              background: `linear-gradient(to bottom, hsl(${colorName} / 0.4), hsl(${colorName} / 0.15), transparent)`,
            }}
          />

          {/* Mobile timeline */}
          <div className="flex md:hidden items-center gap-4 mb-5">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: `hsl(${colorName} / 0.8)` }}
            />
            <div className="font-mono text-xs text-kuro/55 dark:text-shiro/55">
              {exp.period}
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[10px] uppercase tracking-[0.2em] font-mono"
              style={{ color: `hsl(${colorName} / 0.7)` }}
            >
              {exp.tag}
            </span>
            <span className="font-jp text-xs text-kuro/40 dark:text-shiro/40">{exp.jp}</span>
          </div>

          <h3 className="font-display text-xl md:text-2xl font-light tracking-[-0.02em] text-kuro/95 dark:text-shiro/95 leading-tight">
            {exp.title}
          </h3>
          
          <p className="mt-5 text-sm md:text-base font-light text-kuro/65 dark:text-shiro/65 leading-relaxed max-w-2xl">
            {exp.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Journey = () => {
  const ref = useReveal();
  return (
    <section id="journey" className="relative px-6 py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro via-shiro/99 to-shiro dark:from-kuro dark:via-kuro/99 dark:to-kuro" />

        {/* Enhanced background patterns */}
        <div className="absolute inset-0 asanoha-pattern opacity-7" />
        <div className="absolute inset-0 komon-pattern opacity-5" />
        <div className="absolute inset-0 kakure-kiri-pattern opacity-4" />
        <div className="absolute inset-0 kagome-pattern opacity-4" />
        <div className="absolute inset-0 hishi-pattern opacity-3" />
        <div className="absolute inset-0 tatehira-pattern opacity-3" />

        {/* Triadic harmony pattern - more visible */}
        <div className="absolute inset-0 gold-triadic-pattern opacity-20" />

        {/* Triadic radial overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_60%,hsl(var(--gold)/0.06),transparent_60%),radial-gradient(ellipse_50%_40%_at_80%_30%,hsl(var(--gold-triadic-2)/0.06),transparent_60%)] animate-breathe-soft" />

        <div className="glow-ambient glow-koh w-[500px] h-[500px] top-[5%] left-[-15%] opacity-30 animate-breathe-soft" style={{ animationDelay: "-3s" }} />
        <div className="glow-ambient glow-sakura w-[450px] h-[450px] bottom-[5%] right-[-10%] opacity-25 animate-breathe-soft" style={{ animationDelay: "-6s" }} />

        {/* Triadic gold ambient glows */}
        <div className="glow-ambient glow-gold w-[450px] h-[450px] top-[30%] left-[25%] opacity-20 animate-breathe-soft" style={{ animationDelay: "-4s" }} />
        <div className="glow-ambient glow-gold-triadic-1 w-[350px] h-[350px] top-[15%] right-[10%] opacity-15 animate-pulse-subtle" style={{ animationDelay: "-5s" }} />
        <div className="glow-ambient glow-gold-triadic-2 w-[350px] h-[350px] bottom-[25%] right-[15%] opacity-15 animate-breathe-soft" style={{ animationDelay: "-7s" }} />

        <div className="absolute inset-0 grid-veil opacity-30" />
        <div className="absolute inset-0 paper-veil" />
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center mb-24 md:mb-32">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45 mb-12">
              <span className="font-mono text-gold/80 text-[10px]">04</span>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-gradient-to-r from-gold/60 to-transparent" />
                <span>Journey</span>
              </div>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.04em] text-kuro/95 dark:text-shiro/95 leading-[1.05] max-w-2xl">
              The journey so far.
            </h2>
            <p className="mt-8 font-jp text-base text-kuro/50 dark:text-shiro/50 tracking-[0.15em]">
              旅 — Tabi
            </p>
          </div>

          <div className="space-y-20 md:space-y-24">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.title} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};