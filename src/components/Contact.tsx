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
    <section id="connect" className="relative px-6 py-28 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-shiro to-shiro/96 dark:from-kuro dark:to-kuro/96" />
        
        {/* Scattered orbs */}
        <div className="floating-orb orb-sakura w-[550px] h-[550px] top-[-15%] left-[-20%] opacity-30 animate-float-orb" style={{ animationDelay: "-5s" }} />
        <div className="floating-orb orb-matcha w-[450px] h-[450px] bottom-[-20%] right-[-15%] opacity-25 animate-float-orb" style={{ animationDelay: "-11s", animationDuration: "28s" }} />
        <div className="floating-orb orb-ai w-[400px] h-[400px] top-[25%] right-[15%] opacity-20 animate-float-orb" style={{ animationDelay: "-16s", animationDuration: "32s" }} />
        <div className="floating-orb orb-koh w-[350px] h-[350px] bottom-[30%] left-[5%] opacity-18 animate-float-orb" style={{ animationDelay: "-8s", animationDuration: "26s" }} />
        
        {/* Grid texture */}
        <div className="absolute inset-0 grid-texture opacity-20" />
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-kuro/50 dark:text-shiro/50 mb-10">
              <span className="font-mono text-beni/90 text-[10px]">08</span>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-beni/70 to-transparent" />
                <span>Connect</span>
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.035em] text-kuro/95 dark:text-shiro/95 leading-[1.1] max-w-2xl">
              Let's connect.
            </h2>
            <p className="mt-8 text-base font-light text-kuro/65 dark:text-shiro/65 max-w-md">
              Open to conversations, ideas, and the occasional good debate.
            </p>
            <p className="mt-3 font-jp text-base text-kuro/45 dark:text-shiro/45 tracking-[0.1em]">
              出会い — Deai
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
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
                  className="reveal group relative flex flex-col items-start p-7 rounded-2xl glass-washi spatial-shadow transition-all duration-500 hover:spatial-shadow-hover hover:-translate-y-1.5"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 rounded-2xl bg-sakura/0 group-hover:bg-sakura/25 transition-colors duration-700 blur-xl" />
                  
                  {/* Japanese label */}
                  <div className="absolute top-6 right-6 font-jp text-xs text-kuro/35 dark:text-shiro/35 group-hover:text-beni/60 transition-colors duration-500">
                    {jp}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6 w-12 h-12 rounded-xl bg-kuro/5 dark:bg-shiro/12 flex items-center justify-center group-hover:bg-beni/12 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-kuro/75 dark:text-shiro/75 group-hover:text-beni transition-colors duration-500" strokeWidth={1.5} />
                  </div>

                  {/* Name */}
                  <div className="relative font-display text-xl font-light text-kuro/95 dark:text-shiro/95">
                    {name}
                  </div>
                  
                  {/* Handle */}
                  <div className="relative text-xs text-kuro/55 dark:text-shiro/55 mt-2 font-mono">
                    {handle}
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute bottom-7 right-7 text-kuro/35 dark:text-shiro/35 group-hover:text-beni group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
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