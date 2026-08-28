import { SectionMark } from "./SectionMark";
import { useReveal } from "@/hooks/use-reveal";
import { Code2, Brain, Crown, Globe, Activity, BookOpen } from "lucide-react";

const interests = [
  {
    title: "Code",
    description: "Exploring technology, programming and building things.",
    Icon: Code2,
    jp: "技",
  },
  {
    title: "Mind",
    description: "Interested in psychology, human behaviour and how people think.",
    Icon: Brain,
    jp: "心",
  },
  {
    title: "Strategy",
    description: "Chess, problem solving and competitive thinking.",
    Icon: Crown,
    jp: "戦",
  },
  {
    title: "World",
    description: "Travelling, discovering cultures and understanding different perspectives.",
    Icon: Globe,
    jp: "界",
  },
  {
    title: "Movement",
    description: "Football, fitness and staying active.",
    Icon: Activity,
    jp: "動",
  },
  {
    title: "Stories",
    description: "Books, anime, ideas and stories that offer different ways of seeing the world.",
    Icon: BookOpen,
    jp: "語",
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
  const { Icon, title, description, jp } = interest;

  return (
    <div
      ref={ref}
      className="reveal group relative"
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="relative h-full p-7 md:p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm transition-all duration-500 hover:border-vermilion/40 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]">
        {/* Japanese character mark */}
        <div className="absolute top-5 right-5 text-xs font-jp text-muted-foreground/40 group-hover:text-vermilion/70 transition-colors">
          {jp}
        </div>

        <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/5 group-hover:bg-vermilion/10 transition-colors duration-500">
          <Icon className="w-5 h-5 text-foreground/80 group-hover:text-vermilion transition-colors duration-500" strokeWidth={1.5} />
        </div>

        <h3 className="font-display text-2xl font-light tracking-[-0.02em] text-foreground mb-3">
          {title}
        </h3>

        <p className="text-sm font-light text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="mt-6 h-px w-0 bg-vermilion/50 group-hover:w-10 transition-all duration-700" />
      </div>
    </div>
  );
};

export const Interests = () => {
  const ref = useReveal();
  return (
    <section id="interests" className="relative px-6 py-32 md:py-40 max-w-6xl mx-auto">
      <div ref={ref} className="reveal">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <SectionMark number="03" label="Interests" className="mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-foreground leading-[1.05] text-balance max-w-2xl">
            Things that keep me curious.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest, index) => (
            <InterestCard key={interest.title} interest={interest} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};