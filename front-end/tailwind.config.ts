import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'noto-serif-jp': ['Noto Serif JP', 'serif'],
        abril: ['Abril Fatface', 'serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
