import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Style A - 專業科技風
        tech: {
          bg: "#0a0f1a",
          primary: "#00d4ff",
          secondary: "#7c3aed",
          accent: "#10b981",
          text: "#ffffff",
          muted: "#94a3b8",
        },
        // Style B - 工業製造風
        industrial: {
          bg: "#f8fafc",
          primary: "#334155",
          secondary: "#1e3a5f",
          accent: "#f97316",
          text: "#1e293b",
          muted: "#64748b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
