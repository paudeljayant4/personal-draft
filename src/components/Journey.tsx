import { SectionMark } from "./SectionMark";
import { useReveal } from "@/hooks/use-reveal";

const experiences = [
  {
    title: "National Cadet Corps — Batch 49",
    description:
      "Participated in NCC and developed discipline, teamwork, responsibility and leadership.",
    period: "2022 — 2024",
    tag: "Service",
  },
  {
    title: "Debate Club — SOS Hermann Gmeiner School, Surkhet",
    description:
      "Served as Vice President of the school's first debate club. Focus: public speaking, communication, critical thinking, leadership, structured discussion.",
    period: "2023 — 2024",
    tag: "Leadership",
  },
  {
    title: "Environment Club — SOS Hermann Gmeiner School, Surkhet",
    description:
      "Served as Vice Secretary and contributed to environmental and community-oriented activities.",
    period: "2023 — 2024",
    tag: "Community",
  },
  {
    title: "Mahakumba National Debate Championship 2024",
    description:
      "Participated in a national-level debate championship, gaining experience in competitive public speaking, argumentation and communication.",
    period: "2024",
    tag: "Competition",
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
      className="reveal relative pl-8 md:pl-0"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Mobile vertical line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border md:hidden" />
      <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-vermilion md:hidden" />

      <div className="md:grid md:grid-cols-12 md:gap-12 items-baseline">
        <div className="hidden md:block md:col-span-3 text-right">
          <div className="font-mono text-xs text-muted-foreground tracking-wider">
            {exp.period}
          </div>
          <div className="mt-2 inline-block text-[10px] uppercase tracking-[0.25em] text-vermilion">
            {exp.tag}
          </div>
        </div>

        <div className="md:col-span-9 relative md:pl-8 md:border-l md:border-border/60">
          <div className="hidden md:block absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-vermilion" />

          <div className="md:hidden text-xs font-mono text-muted-foreground mb-2">
            {exp.period} · {exp.tag}
          </div>

          <h3 className="font-display text-xl md:text-2xl font-light tracking-[-0.02em] text-foreground leading-tight">
            {exp.title}
          </h3>
          <p className="mt-3 text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-2xl">
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
    <section id="journey" className="relative px-6 py-32 md:py-40 max-w-5xl mx-auto">
      <div ref={ref} className="reveal">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <SectionMark number="04" label="Journey" className="mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-foreground leading-[1.05] text-balance max-w-2xl">
            The journey so far.
          </h2>
        </div>

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.title} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};