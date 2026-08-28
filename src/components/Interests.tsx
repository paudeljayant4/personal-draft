import { SectionMark } from "./SectionMark";
import { useReveal } from "@/hooks/use-reveal";
import { Code2, Brain, Crown, Globe, Activity, BookOpen } from "lucide-react";

const interests = [
  {
    title: "Code",
    description: "Exploring technology, programming and building things.",
    Icon: Code2,
    jp: "技",
    jpMeaning: "Waza - Skill",
  },
  {
    title: "Mind",
    description: "Interested in psychology, human behaviour and how people think.",
    Icon: Brain,
    jp: "心",
    jpMeaning: "Kokoro - Heart",
  },
  {
    title: "Strategy",
    description: "Chess, problem solving and competitive thinking.",
    Icon: Crown,
    jp: "戦",
    jpMeaning: "Sen - Battle",
  },
  {
    title: "World",
    description: "Travelling, discovering cultures and understanding different perspectives.",
    Icon: Globe,
    jp: "界",
    jpMeaning: "Kai - World",
  },
  {
    title: "Movement",
    description: "Football, fitness and staying active.",
    Icon: Activity,
    jp: "動",
    jpMeaning: "Dō - Motion",
  },
  {
    title: "Stories",
    description: "Books, anime, ideas and stories that offer different ways of seeing the world.",
    Icon: BookOpen,
    jp: "語",
    jpMeaning: "Go - Language",
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
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="relative h-full p-8 rounded-2xl bg-shiro/80 dark:bg-kuro/80 backdrop-blur-sm border border-kuro/5 dark:border-shiro/10 transition-all duration-500 hover:border-beni/30 dark:hover:border-beni/30 hover:shadow-lg hover:shadow-beni/5 dark:hover:shadow-beni/10 hover:-translate-y-1">
        
        {/* Japanese character watermark */}
        <div className="absolute top-6 right-6 font-jp text-4xl text-beni/10 dark:text-beni/20 group-hover:text-beni/20 transition-colors duration-500">
          {jp}
        </div>

        {/* Icon container */}
        <div className="relative mb-6 w-12 h-12 rounded-xl bg-kuro/5 dark:bg-shiro/10 flex items-center justify-center group-hover:bg-beni/10 transition-colors duration-500">
          <Icon className="w-5 h-5 text-kuro/70 dark:text-shiro/70 group-hover:text-beni transition-colors duration-500" strokeWidth={1.5} />
        </div>

        <h3 className="font-display text-2xl font-light tracking-[-0.02em] text-kuro/95 dark:text-shiro/95 mb-2">
          {title}
        </h3>
        
        <div className="font-jp text-xs text-beni/60 mb-4">{jpMeaning}</div>

        <p className="text-sm font-light text-kuro/60 dark:text-shiro/60 leading-relaxed">
          {description}
        </p>

        {/* Hover accent line */}
        <div className="mt-6 h-px w-0 bg-gradient-to-r from-beni to-transparent group-hover:w-16 transition-all duration-700" />
      </div>
    </div>
  );
};

export const Interests = () => {
  const ref = useReveal();
  return (
    <section id="interests" className="relative px-6 py-28 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-shiro/95 dark:bg-kuro/95" />
      
      <div className="relative max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <SectionMark number="03" label="Interests" className="mb-8" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-kuro/95 dark:text-shiro/95 leading-[1.1] max-w-2xl">
              Things that keep me curious.
            </h2>
            <p className="mt-6 font-jp text-sm text-kuro/50 dark:text-shiro/50">
              好奇心 — Kiyoomi
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest, index) => (
              <InterestCard key={interest.title} interest={interest} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};