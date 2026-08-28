import { SectionMark } from "./SectionMark";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export const About = () => {
  const ref = useReveal();

  return (
    <section id="about" className="relative px-6 py-32 md:py-40 max-w-5xl mx-auto">
      <div ref={ref} className="reveal">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-3 md:sticky md:top-32">
            <SectionMark number="02" label="About" />
            <div className="mt-6 font-serif italic text-2xl text-muted-foreground/70 hidden md:block">
              人
            </div>
          </div>

          <div className="md:col-span-9 space-y-8 max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-foreground leading-[1.05] text-balance">
              A little about me.
            </h2>

            <div className="space-y-6 text-base md:text-lg font-light text-muted-foreground leading-relaxed">
              <p>
                I'm Jayant — someone who's constantly curious about how things work,
                how people think, and what the world has to offer.
              </p>
              <p>
                I enjoy coding, debating ideas, playing chess, travelling, reading,
                staying active, exploring different cultures, and simply learning things
                that catch my attention.
              </p>
              <p>
                I'm still figuring out exactly where I'm going, and that's part of the
                journey. For now, I'm focused on becoming someone capable, independent,
                curious, and comfortable being myself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};