import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        tetradecagon1: 'polygon( 50% 0%, 74% 6%, 93% 25%, 100% 50%,93% 75%, 74% 94%, 50% 100%,26% 94%, 7% 75%,  0% 50%,  7% 25%,  26% 6%,  50% 0% )',
        
      },
      fontFamily: {
        Emberly: ["Emberly"],
        MrEavesXLModOT: ["MrEavesXLModOT-Bold"],
        MrEavesXLModOTReg: [" MrEavesXLModOT-Reg"],
        AutoGraph: ["autograf-personal-use-only"],
        MrEavesXLModNarOTBook: ["MrEavesXLModNarOT-Book"]

      },
      screens: {
        md: "767px", //laptop
        xl: "1440px", //desktop
        
        'lxl': "1920px", 
        "10xl": "2880px", // ultra wide
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
} satisfies Config;
