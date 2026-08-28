import { useReveal } from "@/hooks/use-reveal";

export const Mindset = () => {
  const ref = useReveal();
  return (
    <section className="relative px-6 py-32 md:py-40 max-w-4xl mx-auto">
      <div ref={ref} className="reveal">
        <div className="text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-vermilion/80 mb-8">
            A Mindset
          </div>

          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-foreground leading-[1.1] text-balance">
            <span className="text-vermilion/60 font-serif">"</span>
            The world doesn't wait for excuses.{" "}
            <span className="text-muted-foreground/80">It only sees results.</span>
            <span className="text-vermilion/60 font-serif">"</span>
          </blockquote>

          <div className="mt-12 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-border" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              J. Paudel
            </span>
            <span className="h-px w-8 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};