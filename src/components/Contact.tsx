import { Instagram, Facebook, Linkedin } from "lucide-react";
import { SectionMark } from "./SectionMark";
import { useReveal } from "@/hooks/use-reveal";

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
    <section id="connect" className="relative px-6 py-28 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-shiro to-shiro/95 dark:from-kuro dark:to-kuro/95" />
      
      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center mb-16">
            <SectionMark number="08" label="Connect" className="mb-8" />
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
                  className="reveal group relative flex flex-col items-start p-6 rounded-2xl bg-shiro/80 dark:bg-kuro/80 backdrop-blur-sm border border-kuro/5 dark:border-shiro/10 transition-all duration-500 hover:border-beni/30 dark:hover:border-beni/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-beni/5"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Japanese label */}
                  <div className="absolute top-5 right-5 font-jp text-xs text-kuro/30 dark:text-shiro/30 group-hover:text-beni/50 transition-colors">
                    {jp}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 w-10 h-10 rounded-xl bg-kuro/5 dark:bg-shiro/10 flex items-center justify-center group-hover:bg-beni/10 transition-colors duration-500">
                    <Icon className="w-4 h-4 text-kuro/70 dark:text-shiro/70 group-hover:text-beni transition-colors duration-500" strokeWidth={1.5} />
                  </div>

                  {/* Name */}
                  <div className="font-display text-lg font-light text-kuro/95 dark:text-shiro/95">
                    {name}
                  </div>
                  
                  {/* Handle */}
                  <div className="text-xs text-kuro/50 dark:text-shiro/50 mt-1 font-mono">
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