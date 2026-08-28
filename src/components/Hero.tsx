import { Enso } from "./Enso";
import { SectionMark } from "./SectionMark";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-20 pb-12 text-center overflow-hidden">
      {/* Subtle gradient backdrop */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(233, 128, 140, 0.06), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 -z-10 ink-texture" />

      {/* Floating Enso circle - top right */}
      <div className="absolute top-24 right-8 md:right-24 text-vermilion/30 animate-float hidden md:block">
        <Enso size={120} />
      </div>

      {/* Drifting orb */}
      <div
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full -z-10 animate-drift"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 128, 140, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8 animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
          <SectionMark number="01" label="Personal Space" />
        </div>

        <h1
          className="font-display text-[clamp(4rem,14vw,11rem)] font-light leading-[0.95] tracking-[-0.04em] text-foreground mb-8 animate-fade-up opacity-0 text-balance"
          style={{ animationDelay: "250ms" }}
        >
          JAYANT
        </h1>

        <p
          className="text-base md:text-lg font-light text-muted-foreground mb-3 animate-fade-up opacity-0 tracking-tight"
          style={{ animationDelay: "500ms" }}
        >
          Curious by nature. <span className="text-foreground/80">Driven by possibility.</span>
        </p>

        <p
          className="text-sm md:text-base font-light text-muted-foreground/80 mb-12 animate-fade-up opacity-0"
          style={{ animationDelay: "650ms" }}
        >
          Coding. Ideas. People. The world.
        </p>

        <p
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70 mb-10 animate-fade-up opacity-0 font-mono"
          style={{ animationDelay: "800ms" }}
        >
          A personal space documenting the person I'm becoming
        </p>

        <div
          className="animate-fade-up opacity-0"
          style={{ animationDelay: "950ms" }}
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-3 text-sm font-medium text-foreground hover:text-vermilion transition-colors"
          >
            <span>Explore</span>
            <span className="inline-block group-hover:translate-y-1 transition-transform duration-300">↓</span>
          </a>
        </div>
      </div>

      {/* Bottom meta */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 font-mono">
        <span>EST. 2009</span>
        <span className="hidden md:block">好奇心 — Curiosity</span>
        <span>J.P.</span>
      </div>
    </section>
  );
};