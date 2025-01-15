import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        Emberly: ["Emberly"],
        MrEavesXLModOT: ["MrEavesXLModOT-Bold"],
        MrEavesXLModOTReg: [" MrEavesXLModOT-Reg"],
        AutoGraph: ["autograf-personal-use-only"],
        MrEavesXLModNarOTBook: ["MrEavesXLModNarOT-Book"],
        Questrial: ["Questrial"]

      },
      screens: {
        'xxl': '1920px', 
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
