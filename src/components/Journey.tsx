import { SectionMark } from "./SectionMark";
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
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="md:grid md:grid-cols-12 md:gap-8 items-baseline">
        {/* Timeline marker */}
        <div className="hidden md:flex md:col-span-3 items-center justify-end gap-4">
          <div className="text-right">
            <div className="font-mono text-xs text-kuro/50 dark:text-shiro/50 tracking-wider">
              {exp.period}
            </div>
            <div className="mt-1 font-jp text-xs text-beni/70">{exp.jp}</div>
          </div>
          <div className="relative w-3 h-3 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-beni/30" />
            <div className="absolute inset-1 rounded-full bg-beni" />
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-9 md:pl-12 relative">
          {/* Vertical line on desktop */}
          <div className="hidden md:block absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-beni/50 via-beni/20 to-transparent" />

          {/* Mobile timeline */}
          <div className="flex md:hidden items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-beni" />
            <div className="font-mono text-xs text-kuro/50 dark:text-shiro/50">
              {exp.period}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2 md:hidden">
            <span className="text-[10px] uppercase tracking-widest text-beni/70 font-mono">{exp.tag}</span>
            <span className="font-jp text-xs text-kuro/40 dark:text-shiro/40">{exp.jp}</span>
          </div>

          <h3 className="font-display text-xl md:text-2xl font-light tracking-[-0.02em] text-kuro/95 dark:text-shiro/95 leading-tight">
            {exp.title}
          </h3>
          
          <p className="mt-3 text-sm md:text-base font-light text-kuro/60 dark:text-shiro/60 leading-relaxed max-w-2xl">
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
    <section id="journey" className="relative px-6 py-28 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-shiro via-shiro/98 to-shiro dark:from-kuro dark:via-kuro/98 dark:to-kuro" />
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <SectionMark number="04" label="Journey" className="mb-8" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-kuro/95 dark:text-shiro/95 leading-[1.1] max-w-2xl">
              The journey so far.
            </h2>
            <p className="mt-6 font-jp text-sm text-kuro/50 dark:text-shiro/50">
              旅 — Tabi
            </p>
          </div>

          <div className="space-y-12 md:space-y-14">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.title} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};