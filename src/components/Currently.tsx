import { SectionMark } from "./SectionMark";
import { useReveal } from "@/hooks/use-reveal";

const words = ["Learning.", "Building.", "Exploring.", "Becoming."];

export const Currently = () => {
  const ref = useReveal();
  return (
    <section className="relative px-6 py-32 md:py-40 max-w-5xl mx-auto">
      <div ref={ref} className="reveal">
        <div className="flex flex-col items-center text-center">
          <SectionMark number="06" label="Now" className="mb-8" />

          <h2 className="font-display text-3xl md:text-4xl font-light tracking-[-0.02em] text-foreground mb-10">
            Right now.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-12 max-w-3xl">
            {words.map((word, i) => (
              <span
                key={word}
                className="font-display text-2xl md:text-4xl font-light tracking-[-0.02em] text-foreground/90"
              >
                {word}
                {i < words.length - 1 && (
                  <span className="text-vermilion/60 ml-4">·</span>
                )}
              </span>
            ))}
          </div>

          <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed max-w-xl">
            I'm exploring technology, developing my skills, learning more about
            people and the world, and figuring out what kind of life I want to
            build.
          </p>

          <div className="mt-12 font-jp text-sm text-muted-foreground/50 tracking-[0.5em]">
            現在
          </div>
        </div>
      </div>
    </section>
  );
};