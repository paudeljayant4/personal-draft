import { Instagram, Facebook, Linkedin } from "lucide-react";
import { SectionMark } from "./SectionMark";
import { useReveal } from "@/hooks/use-reveal";

const socials = [
  {
    name: "Instagram",
    handle: "@grusco_69",
    url: "https://www.instagram.com/grusco_69/",
    Icon: Instagram,
  },
  {
    name: "Facebook",
    handle: "Jayant Paudel",
    url: "https://www.facebook.com/jayant.paudel.682446",
    Icon: Facebook,
  },
  {
    name: "LinkedIn",
    handle: "Jayant Paudel",
    url: "https://www.linkedin.com/in/jayant-paudel-272077369/",
    Icon: Linkedin,
  },
];

export const Contact = () => {
  const ref = useReveal();
  return (
    <section id="connect" className="relative px-6 py-32 md:py-40 max-w-5xl mx-auto">
      <div ref={ref} className="reveal">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionMark number="08" label="Connect" className="mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-foreground leading-[1.05] text-balance max-w-2xl">
            Let's connect.
          </h2>
          <p className="mt-6 text-base font-light text-muted-foreground max-w-md">
            Open to conversations, ideas, and the occasional good debate.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {socials.map((social, i) => {
            const itemRef = useReveal();
            const { Icon, name, handle, url } = social;
            return (
              <a
                key={name}
                ref={itemRef}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group relative flex flex-col items-start p-6 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-vermilion/50 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5 group-hover:bg-vermilion/10 transition-colors duration-500">
                  <Icon className="w-4 h-4 text-foreground/80 group-hover:text-vermilion transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <div className="font-display text-lg font-light text-foreground">
                  {name}
                </div>
                <div className="text-xs text-muted-foreground/80 mt-1 font-mono">
                  {handle}
                </div>
                <div className="absolute top-6 right-6 text-foreground/30 group-hover:text-vermilion group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500">
                  ↗
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};