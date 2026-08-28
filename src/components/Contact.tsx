import { useReveal } from "@/hooks/use-reveal";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    handle: "@grusco_69",
    url: "https://www.instagram.com/grusco_69/",
    Icon: Instagram,
    jp: "写真",
  },
  {
    name: "Facebook",
    handle: "Jayant Paudel",
    url: "https://www.facebook.com/jayant.paudel.682446",
    Icon: Facebook,
    jp: "交友",
  },
  {
    name: "LinkedIn",
    handle: "Jayant Paudel",
    url: "https://www.linkedin.com/in/jayant-paudel-272077369/",
    Icon: Linkedin,
    jp: "人脈",
  },
];

export const Contact = () => {
  const ref = useReveal();
  return (
    <section id="connect" className="relative px-6 py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro to-shiro/98 dark:from-kuro dark:to-kuro/98" />
        <div className="absolute inset-0 asanoha-pattern opacity-5" />
        <div className="absolute inset-0 komon-pattern opacity-3" />
        <div className="absolute inset-0 kakure-kiri-pattern opacity-3" />
        <div className="absolute inset-0 kagome-pattern opacity-3" />
        <div className="absolute inset-0 hishi-pattern opacity-3" />
        <div className="absolute inset-0 tatehira-pattern opacity-3" />
        <div className="glow-ambient glow-sakura w-[500px] h-[500px] top-[-10%] left-[-15%] opacity-25 animate-breathe-soft" style={{ animationDelay: "-3s" }} />
        <div className="glow-ambient glow-matcha w-[450px] h-[450px] bottom-[-15%] right-[-10%] opacity-20 animate-breathe-soft" style={{ animationDelay: "-6s" }} />
        <div className="absolute inset-0 grid-veil opacity-25" />
        <div className="absolute inset-0 paper-veil" />
      </div>
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center mb-24">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45 mb-12">
              <span className="font-mono text-beni/80 text-[10px]">08</span>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-gradient-to-r from-beni/60 to-transparent" />
                <span>Connect</span>
              </div>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.04em] text-kuro/95 dark:text-shiro/95 leading-[1.05] max-w-2xl">
              Let&apos;s connect.
            </h2>
            <p className="mt-8 text-base font-light text-kuro/65 dark:text-shiro/65 max-w-md">
              Open to conversations, ideas, and the occasional good debate.
            </p>
            <p className="mt-3 font-jp text-base text-kuro/45 dark:text-shiro/45 tracking-[0.15em]">
              出会い — Deai
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {socials.map((social, i) => {
              const itemRef = useReveal();
              const { Icon, name, handle, url, jp } = social;
              return (
                <a
                  key={name}
                  ref={itemRef}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group relative flex flex-col items-start p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 transition-all duration-700 hover:border-beni/30 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="glow-ambient glow-beni w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ position: "absolute", inset: 0 }} />
                  <div className="absolute top-6 right-6 font-jp text-xs text-kuro/35 dark:text-shiro/35 group-hover:text-beni/50 transition-colors duration-500">
                    {jp}
                  </div>
                  <div className="relative mb-6 w-12 h-12 rounded-lg bg-kuro/5 dark:bg-shiro/10 flex items-center justify-center group-hover:bg-beni/10 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-kuro/70 dark:text-shiro/70 group-hover:text-beni transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <div className="relative font-display text-xl font-light text-kuro/95 dark:text-shiro/95">
                    {name}
                  </div>
                  <div className="relative text-xs text-kuro/55 dark:text-shiro/55 mt-2 font-mono">
                    {handle}
                  </div>
                  <div className="absolute bottom-6 right-6 text-kuro/35 dark:text-shiro/35 group-hover:text-beni group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
                    ↗
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};