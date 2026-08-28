import { SectionMark } from "./SectionMark";
import { useReveal } from "@/hooks/use-reveal";

const skills = [
  "Communication",
  "Leadership",
  "Public Speaking",
  "Critical Thinking",
  "Teamwork",
  "Adaptability",
  "Initiative",
];

export const Skills = () => {
  const ref = useReveal();
  return (
    <section className="relative px-6 py-32 md:py-40 max-w-5xl mx-auto">
      <div ref={ref} className="reveal">
        <div className="flex flex-col items-center text-center mb-14">
          <SectionMark number="05" label="Skills" className="mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-foreground leading-[1.05] text-balance max-w-2xl">
            What I bring.
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {skills.map((skill, i) => {
            const itemRef = useReveal();
            return (
              <div
                key={skill}
                ref={itemRef}
                className="reveal group relative"
                style={{ transitionDelay: `${(i % 7) * 60}ms` }}
              >
                <div className="px-5 py-2.5 rounded-full border border-border/60 bg-card/30 backdrop-blur-sm text-sm font-light text-foreground/90 transition-all duration-500 hover:border-vermilion/50 hover:text-vermilion hover:-translate-y-0.5">
                  <span className="font-mono text-[10px] text-muted-foreground/60 mr-2">
                    0{i + 1}
                  </span>
                  {skill}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};