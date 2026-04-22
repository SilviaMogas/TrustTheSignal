import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f4f1ea",
        ink: "#111111",
        "ink-red": "#d62828",
        "ink-gray": "#6b6b6b",
      },
      fontFamily: {
        blackletter: ["var(--font-blackletter)", "serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        meta: ["var(--font-meta)", "'Arial Narrow'", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        "extra-wide": "0.15em",
      },
      borderWidth: {
        "3": "3px",
      },
    },
  },
  plugins: [],
};

export default config;
