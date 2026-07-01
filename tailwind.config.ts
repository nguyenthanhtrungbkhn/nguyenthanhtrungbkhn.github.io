import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef5ff",
          100: "#d9e9ff",
          600: "#1f5f99",
          700: "#184d7d",
          800: "#123b61",
          900: "#0b2944"
        },
        ink: "#172033"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 42, 68, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
