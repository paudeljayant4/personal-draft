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
    <section className="relative px-6 py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-shiro/98 dark:bg-kuro/98" />
        
        {/* Enhanced background patterns */}
        <div className="absolute inset-0 asanoha-pattern opacity-6" />
        <div className="absolute inset-0 komon-pattern opacity-4" />
        <div className="absolute inset-0 kakure-kiri-pattern opacity-3" />
        <div className="absolute inset-0 kagome-pattern opacity-3" />
        <div className="absolute inset-0 hishi-pattern opacity-3" />
        <div className="absolute inset-0 tatehira-pattern opacity-3" />
        
        {/* NEW: Color theory background art - complementary harmony */
        <div className="absolute inset-0 gold-complement-pattern opacity-15" />
        <div className="absolute inset-0 color-theory-overlay" />
        
        <div className="glow-ambient glow-matcha w-[600px] h-[600px] top-[-20%] right-[-15%] opacity-25 animate-breathe-soft" style={{ animationDelay: "-4s" }} />
        <div className="glow-ambient glow-ai w-[400px] h-[400px] bottom-[-15%] left-[10%] opacity-20 animate-breathe-soft" style={{ animationDelay: "-7s" }} />
        
        {/* NEW: Gold ambient glows */
        <div className="glow-ambient glow-gold w-[350px] h-[350px] top-[40%] left-[30%] opacity-15 animate-breathe-soft" style={{ animationDelay: "-3s" }} />
        <div className="glow-ambient glow-gold-triadic-1 w-[250px] h-[250px] bottom-[20%] right-[25%] opacity-10 animate-pulse-subtle" style={{ animationDelay: "-6s" }} />
        
        <div className="absolute inset-0 grid-veil opacity-30" />
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45 mb-12">
              <span className="font-mono text-gold/80 text-[10px]">05</span>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-gradient-to-r from-gold/60 to-transparent" />
                <span>Skills</span>
              </div>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.04em] text-kuro/95 dark:text-shiro/95 leading-[1.05] max-w-2xl">
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
                  style={{ transitionDelay: `${(i % 7) * 100}ms` }}
                >
                  <div className="relative px-6 py-4 rounded-full bg-card/40 backdrop-blur-sm border border-border/40 text-sm font-light text-kuro/80 dark:text-shiro/80 transition-all duration-500 hover:border-gold/30 hover:-translate-y-0.5 group-hover:text-gold dark:group-hover:text-gold">
                    <span className="font-mono text-[10px] text-kuro/40 dark:text-shiro/40 mr-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {skill.name}
                    <span className="ml-3 font-jp text-[10px] text-kuro/30 dark:text-shiro/30 group-hover:text-gold/50 transition-colors duration-500">
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