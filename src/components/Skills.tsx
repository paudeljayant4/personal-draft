import { useReveal } from "@/hooks/use-reveal";

const skills = [
  { name: "Communication", jp: "通信" },
  { name: "Leadership", jp: "リーダーシップ" },
  { name: "Public Speaking", jp: "演説" },
  { name: "Critical Thinking", jp: "批判的思考" },
  { name: "Teamwork", jp: "チームワーク" },
  { name: "Adaptability", jp: "適応性" },
  { name: "Initiative", jp: "自主性" },
];

export const Skills = () => {
  const ref = useReveal();
  return (
    <section className="relative px-6 py-28 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-shiro/96 dark:bg-kuro/96" />
        
        {/* Floating orbs */}
        <div className="floating-orb orb-matcha w-[600px] h-[600px] top-[-35%] right-[-25%] opacity-30 animate-float-orb" style={{ animationDelay: "-7s" }} />
        <div className="floating-orb orb-ai w-[400px] h-[400px] bottom-[-25%] left-[15%] opacity-25 animate-float-orb" style={{ animationDelay: "-15s", animationDuration: "26s" }} />
        <div className="floating-orb orb-sakura w-[350px] h-[350px] top-[20%] left-[30%] opacity-20 animate-float-orb" style={{ animationDelay: "-10s", animationDuration: "30s" }} />
        
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture opacity-20" />
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-kuro/50 dark:text-shiro/50 mb-10">
              <span className="font-mono text-beni/90 text-[10px]">05</span>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-beni/70 to-transparent" />
                <span>Skills</span>
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.035em] text-kuro/95 dark:text-shiro/95 leading-[1.1] max-w-2xl">
              What I bring.
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
            {skills.map((skill, i) => {
              const itemRef = useReveal();
              return (
                <div
                  key={skill.name}
                  ref={itemRef}
                  className="reveal group"
                  style={{ transitionDelay: `${(i % 7) * 70}ms` }}
                >
                  <div className="relative px-6 py-4 rounded-full glass-washi spatial-shadow text-sm font-light text-kuro/85 dark:text-shiro/85 transition-all duration-500 hover:spatial-shadow-hover hover:-translate-y-1 hover:border-beni/50 dark:hover:border-beni/50 group-hover:text-beni dark:group-hover:text-beni">
                    <span className="font-mono text-[10px] text-kuro/45 dark:text-shiro/45 mr-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {skill.name}
                    <span className="ml-3 font-jp text-[10px] text-kuro/35 dark:text-shiro/35 group-hover:text-beni/60 transition-colors duration-500">
                      {skill.jp}
                    </span>
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