import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center opacity-0" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative w-9 h-9 rounded-full bg-card/60 backdrop-blur-md border border-gold/25 hover:border-gold transition-all duration-500 flex items-center justify-center shadow-soft"
      aria-label="Toggle theme (Kinari / Shikkoku)"
      title={isDark ? "Switch to Kinari (Light)" : "Switch to Shikkoku (Dark)"}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-gold transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.75} />
        ) : (
          <Moon className="w-4 h-4 text-kuro/80 group-hover:text-gold transition-transform duration-500 group-hover:-rotate-12" strokeWidth={1.75} />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};