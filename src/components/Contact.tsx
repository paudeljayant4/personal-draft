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
    <section id="connect" className="relative px-6 py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro to-shiro/95 dark:from-kuro dark:to-kuro/95" />
        
        {/* Scattered orbs */}
        <div className="floating-orb orb-sakura w-[450px] h-[450px] top-[-10%] left-[-15%] opacity-35 animate-float-orb" style={{ animationDelay: "-4s" }} />
        <div className="floating-orb orb-matcha w-[350px] h-[350px] bottom-[-15%] right-[-10%] opacity-30 animate-float-orb" style={{ animationDelay: "-9s", animationDuration: "24s" }} />
        <div className="floating-orb orb-ai w-[300px] h-[300px] top-[30%] right-[20%] opacity-25 animate-float-orb" style={{ animationDelay: "-14s", animationDuration: "28s" }} />
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-kuro/50 dark:text-shiro/50 mb-8">
              <span className="font-mono text-beni/80 text-[10px]">08</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-gradient-to-r from-beni/60 to-transparent" />
                <span>Connect</span>
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-kuro/95 dark:text-shiro/95 leading-[1.1] max-w-2xl">
              Let's connect.
            </h2>
            <p className="mt-6 text-base font-light text-kuro/60 dark:text-shiro/60 max-w-md">
              Open to conversations, ideas, and the occasional good debate.
            </p>
            <p className="mt-2 font-jp text-sm text-kuro/40 dark:text-shiro/40">
              出会い — Deai
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
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
                  className="reveal group relative flex flex-col items-start p-6 rounded-2xl glass-washi spatial-shadow transition-all duration-500 hover:spatial-shadow-hover hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 rounded-2xl bg-sakura/0 group-hover:bg-sakura/20 transition-colors duration-500 blur-xl" />
                  
                  {/* Japanese label */}
                  <div className="absolute top-5 right-5 font-jp text-xs text-kuro/30 dark:text-shiro/30 group-hover:text-beni/50 transition-colors">
                    {jp}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-4 w-10 h-10 rounded-xl bg-kuro/5 dark:bg-shiro/10 flex items-center justify-center group-hover:bg-beni/10 transition-colors duration-500">
                    <Icon className="w-4 h-4 text-kuro/70 dark:text-shiro/70 group-hover:text-beni transition-colors duration-500" strokeWidth={1.5} />
                  </div>

                  {/* Name */}
                  <div className="relative font-display text-lg font-light text-kuro/95 dark:text-shiro/95">
                    {name}
                  </div>
                  
                  {/* Handle */}
                  <div className="relative text-xs text-kuro/50 dark:text-shiro/50 mt-1 font-mono">
                    {handle}
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute bottom-6 right-6 text-kuro/30 dark:text-shiro/30 group-hover:text-beni group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500">
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