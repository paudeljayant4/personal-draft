import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Japanese color palette
        kuro: "hsl(var(--kuro))",
        shiro: "hsl(var(--shiro))",
        ai: "hsl(var(--ai))",
        beni: "hsl(var(--beni))",
        sakura: "hsl(var(--sakura))",
        matcha: "hsl(var(--matcha))",
        koh: "hsl(var(--koh))",
        gold: {
          DEFAULT: "hsl(var(--gold))",
          foreground: "hsl(var(--gold-foreground))",
          triadic1: "hsl(var(--gold-triadic-1))",
          triadic2: "hsl(var(--gold-triadic-2))",
          analogous1: "hsl(var(--gold-analogous-1))",
          analogous2: "hsl(var(--gold-analogous-2))",
          complement: "hsl(var(--gold-complement))",
        },
        karashi: "hsl(var(--karashi))",
        kon: "hsl(var(--kon))",
        mizugaki: "hsl(var(--mizugaki))",
        usuzumi: "hsl(var(--usuzumi))",
        vermilion: {
          DEFAULT: "hsl(var(--vermilion))",
          500: "hsl(var(--vermilion))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['"Zen Kaku Gothic New"', '"Hiragino Kaku Gothic ProN"', '"Noto Sans JP"', "system-ui", "sans-serif"],
        display: ['"Zen Kaku Gothic New"', "system-ui", "sans-serif"],
        mincho: ['"Shippori Mincho"', '"Hiragino Mincho ProN"', '"Yu Mincho"', "Georgia", "serif"],
        jp: ['"Shippori Mincho"', '"Hiragino Mincho ProN"', '"Yu Mincho"', "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;