import { SectionMark } from "./SectionMark";
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
    <section className="relative px-6 py-28 md:py-40">
      <div className="absolute inset-0 bg-shiro/95 dark:bg-kuro/95" />
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center mb-14">
            <SectionMark number="05" label="Skills" className="mb-8" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-kuro/95 dark:text-shiro/95 leading-[1.1] max-w-2xl">
              What I bring.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {skills.map((skill, i) => {
              const itemRef = useReveal();
              return (
                <div
                  key={skill.name}
                  ref={itemRef}
                  className="reveal group"
                  style={{ transitionDelay: `${(i % 7) * 60}ms` }}
                >
                  <div className="relative px-5 py-3 rounded-full border border-kuro/10 dark:border-shiro/10 bg-shiro/60 dark:bg-kuro/60 backdrop-blur-sm text-sm font-light text-kuro/80 dark:text-shiro/80 transition-all duration-500 hover:border-beni/40 hover:text-beni dark:hover:text-beni hover:-translate-y-0.5 hover:shadow-sm hover:shadow-beni/10">
                    <span className="font-mono text-[10px] text-kuro/40 dark:text-shiro/40 mr-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {skill.name}
                    <span className="ml-2 font-jp text-[10px] text-kuro/30 dark:text-shiro/30 group-hover:text-beni/50 transition-colors">
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