import { useReveal } from "@/hooks/use-reveal";
import { Code2, Brain, Crown, Globe, Activity, BookOpen } from "lucide-react";

const interests = [
  {
    title: "Code",
    description: "Exploring technology, programming and building things.",
    Icon: Code2,
    jp: "技",
    jpMeaning: "Waza — Skill",
    color: "orb-ai",
  },
  {
    title: "Mind",
    description: "Interested in psychology, human behaviour and how people think.",
    Icon: Brain,
    jp: "心",
    jpMeaning: "Kokoro — Heart",
    color: "orb-sakura",
  },
  {
    title: "Strategy",
    description: "Chess, problem solving and competitive thinking.",
    Icon: Crown,
    jp: "戦",
    jpMeaning: "Sen — Battle",
    color: "orb-koh",
  },
  {
    title: "World",
    description: "Travelling, discovering cultures and understanding different perspectives.",
    Icon: Globe,
    jp: "界",
    jpMeaning: "Kai — World",
    color: "orb-matcha",
  },
  {
    title: "Movement",
    description: "Football, fitness and staying active.",
    Icon: Activity,
    jp: "動",
    jpMeaning: "Dō — Motion",
    color: "orb-beni",
  },
  {
    title: "Stories",
    description: "Books, anime, ideas and stories that offer different ways of seeing the world.",
    Icon: BookOpen,
    jp: "語",
    jpMeaning: "Go — Language",
    color: "orb-sakura",
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
  const { Icon, title, description, jp, jpMeaning, color } = interest;

  return (
    <div
      ref={ref}
      className="reveal group"
      style={{ transitionDelay: `${(index % 3) * 120}ms` }}
    >
      <div className="relative h-full p-9 rounded-2xl glass-washi spatial-shadow transition-all duration-500 hover:spatial-shadow-hover hover:-translate-y-1.5 group-hover:border-beni/40 dark:group-hover:border-beni/40">
        
        {/* Background glow on hover */}
        <div className={`absolute inset-0 rounded-2xl ${color} opacity-0 group-hover:opacity-35 transition-opacity duration-700 blur-2xl`} />
        
        {/* Japanese character watermark */}
        <div className="absolute top-8 right-8 font-jp text-5xl text-beni/12 dark:text-beni/18 group-hover:text-beni/30 transition-colors duration-700">
          {jp}
        </div>

        {/* Icon container */}
        <div className="relative mb-8 w-14 h-14 rounded-xl bg-kuro/5 dark:bg-shiro/12 flex items-center justify-center group-hover:bg-beni/12 transition-colors duration-500">
          <Icon className="w-6 h-6 text-kuro/75 dark:text-shiro/75 group-hover:text-beni transition-colors duration-500" strokeWidth={1.5} />
        </div>

        <h3 className="font-display text-2xl font-light tracking-[-0.025em] text-kuro/95 dark:text-shiro/95 mb-3">
          {title}
        </h3>
        
        <div className="font-jp text-xs text-beni/65 mb-5 tracking-wide">{jpMeaning}</div>

        <p className="text-sm font-light text-kuro/65 dark:text-shiro/65 leading-relaxed">
          {description}
        </p>

        {/* Hover accent line */}
        <div className="mt-8 h-px w-0 bg-gradient-to-r from-beni to-transparent group-hover:w-20 transition-all duration-700 ease-out" />
      </div>
    </div>
  );
};

export const Interests = () => {
  const ref = useReveal();
  return (
    <section id="interests" className="relative px-6 py-28 md:py-44 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-shiro/96 dark:bg-kuro/96" />
        
        {/* Floating orbs scattered */}
        <div className="floating-orb orb-sakura w-[600px] h-[600px] top-[-25%] left-[-15%] opacity-35 animate-float-orb" style={{ animationDelay: "-4s" }} />
        <div className="floating-orb orb-ai w-[450px] h-[450px] bottom-[-15%] right-[-10%] opacity-30 animate-float-orb" style={{ animationDelay: "-9s", animationDuration: "28s" }} />
        <div className="floating-orb orb-matcha w-[350px] h-[350px] top-[25%] right-[5%] opacity-20 animate-float-orb" style={{ animationDelay: "-14s", animationDuration: "24s" }} />
        <div className="floating-orb orb-koh w-[300px] h-[300px] bottom-[30%] left-[5%] opacity-18 animate-float-orb" style={{ animationDelay: "-7s", animationDuration: "32s" }} />
        
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture opacity-20" />
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20 md:mb-28">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-kuro/50 dark:text-shiro/50 mb-10">
              <span className="font-mono text-beni/90 text-[10px]">03</span>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-beni/70 to-transparent" />
                <span>Interests</span>
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.035em] text-kuro/95 dark:text-shiro/95 leading-[1.1] max-w-2xl">
              Things that keep me curious.
            </h2>
            <p className="mt-8 font-jp text-base text-kuro/50 dark:text-shiro/50 tracking-[0.1em]">
              好奇心 — Kiyoomi
            </p>
          </div>

          {/* Grid */}
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