import { useReveal } from "@/hooks/use-reveal";
import { BookOpen, Sparkles, Quote } from "lucide-react";

const influences = [
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    category: "Stoicism & Mindset",
    takeaway: "Mastering one's inner state regardless of outer chaos.",
    jp: "自省録",
  },
  {
    title: "Vagabond & The Book of Five Rings",
    author: "Takehiko Inoue / Miyamoto Musashi",
    category: "Strategy & Mastery",
    takeaway: "The infinite path of refining mind, body, and singular purpose.",
    jp: "五輪書",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Psychology & Cognition",
    takeaway: "Understanding cognitive biases and how we formulate decisions.",
    jp: "思考の技法",
  },
  {
    title: "1984 & Brave New World",
    author: "George Orwell / Aldous Huxley",
    category: "Societal Systems",
    takeaway: "Vigilance over freedom of thought and human independence.",
    jp: "自由と社会",
  },
];

export const Library = () => {
  const ref = useReveal();

  return (
    <section id="library" className="relative px-6 py-40 md:py-56 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-shiro/98 dark:bg-kuro/98" />
        <div className="absolute inset-0 asanoha-pattern opacity-6" />
        <div className="absolute inset-0 komon-pattern opacity-4" />
        <div className="absolute inset-0 gold-analogous-pattern opacity-15" />

        <div className="glow-ambient glow-gold w-[550px] h-[550px] top-[30%] left-[20%] opacity-18 animate-breathe-soft" />
        <div className="glow-ambient glow-beni w-[400px] h-[400px] bottom-[20%] right-[10%] opacity-15 animate-breathe-soft" style={{ animationDelay: "-4s" }} />

        <div className="absolute inset-0 grid-veil opacity-25" />
        <div className="absolute inset-0 paper-veil" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="flex flex-col items-center text-center mb-24 md:mb-32">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45 mb-12">
              <span className="font-mono text-gold/80 text-[10px]">06</span>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-gradient-to-r from-gold/60 to-transparent" />
                <span>Influences</span>
              </div>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.04em] text-kuro/95 dark:text-shiro/95 leading-[1.05] max-w-2xl">
              Ideas that shaped me.
            </h2>
            <p className="mt-8 font-jp text-base text-kuro/50 dark:text-shiro/50 tracking-[0.15em]">
              読書と知性 — Dokusho to Chisei
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {influences.map((book, idx) => {
              const bookRef = useReveal();
              return (
                <div
                  key={book.title}
                  ref={bookRef}
                  className="reveal group flex flex-col justify-between p-7 rounded-2xl bg-card/45 backdrop-blur-sm border border-border/40 transition-all duration-700 hover:-translate-y-1 shadow-soft"
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-jp text-sm text-gold font-light tracking-wider">
                        {book.jp}
                      </span>
                      <BookOpen className="w-4 h-4 text-kuro/40 dark:text-shiro/40 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                    </div>

                    <h3 className="font-display text-xl font-light tracking-tight text-kuro/95 dark:text-shiro/95 mb-1">
                      {book.title}
                    </h3>
                    <p className="font-mono text-xs text-gold/80 mb-4">
                      {book.author}
                    </p>
                    <p className="text-xs text-kuro/60 dark:text-shiro/60 leading-relaxed font-light">
                      "{book.takeaway}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-[10px] uppercase font-mono tracking-wider text-kuro/40 dark:text-shiro/40">
                    <span>{book.category}</span>
                    <span className="text-gold">0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};