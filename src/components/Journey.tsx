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
  return (
    <div
      ref={ref}
      className="reveal relative"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="md:grid md:grid-cols-12 md:gap-8 items-baseline">
        {/* Timeline marker */}
        <div className="hidden md:flex md:col-span-3 items-center justify-end gap-5">
          <div className="text-right">
            <div className="font-mono text-xs text-kuro/55 dark:text-shiro/55 tracking-wider">
              {exp.period}
            </div>
            <div className="mt-2 font-jp text-xs text-beni/75 tracking-wide">{exp.jp}</div>
          </div>
          <div className="relative w-3.5 h-3.5 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-beni/35" />
            <div className="absolute inset-1 rounded-full bg-beni" />
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-9 md:pl-14 relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-0 top-3 bottom-0 w-px bg-gradient-to-b from-beni/55 via-beni/25 to-transparent" />

          {/* Mobile timeline */}
          <div className="flex md:hidden items-center gap-4 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-beni" />
            <div className="font-mono text-xs text-kuro/55 dark:text-shiro/55">
              {exp.period}
            </div>
          </div>

          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <span className="text-[10px] uppercase tracking-widest text-beni/75 font-mono">{exp.tag}</span>
            <span className="font-jp text-xs text-kuro/45 dark:text-shiro/45">{exp.jp}</span>
          </div>

          <h3 className="font-display text-xl md:text-2xl font-light tracking-[-0.02em] text-kuro/95 dark:text-shiro/95 leading-tight">
            {exp.title}
          </h3>
          
          <p className="mt-4 text-sm md:text-base font-light text-kuro/65 dark:text-shiro/65 leading-relaxed max-w-2xl">
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
    <section id="journey" className="relative px-6 py-28 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro via-shiro/98 to-shiro dark:from-kuro dark:via-kuro/98 dark:to-kuro" />
        
        {/* Atmospheric orbs */}
        <div className="floating-orb orb-koh w-[500px] h-[500px] top-[5%] left-[-20%] opacity-25 animate-float-orb" style={{ animationDelay: "-5s" }} />
        <div className="floating-orb orb-sakura w-[450px] h-[450px] bottom-[5%] right-[-15%] opacity-20 animate-float-orb" style={{ animationDelay: "-11s", animationDuration: "30s" }} />
        <div className="floating-orb orb-ai w-[350px] h-[350px] top-[40%] right-[5%] opacity-15 animate-float-orb" style={{ animationDelay: "-8s", animationDuration: "26s" }} />
        
        {/* Ink wash */}
        <div className="absolute inset-0 ink-wash-top" />
        
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture opacity-25" />
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center mb-20 md:mb-28">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-kuro/50 dark:text-shiro/50 mb-10">
              <span className="font-mono text-beni/90 text-[10px]">04</span>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-beni/70 to-transparent" />
                <span>Journey</span>
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.035em] text-kuro/95 dark:text-shiro/95 leading-[1.1] max-w-2xl">
              The journey so far.
            </h2>
            <p className="mt-8 font-jp text-base text-kuro/50 dark:text-shiro/50 tracking-[0.1em]">
              旅 — Tabi
            </p>
          </div>

          <div className="space-y-14 md:space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.title} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};