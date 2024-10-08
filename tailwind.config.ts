import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(0deg, transparent 24%, red 25%, red 26%, transparent 27%, transparent 74%, red 75%, red 76%, transparent 77%), linear-gradient(90deg, transparent 24%, red 25%, red 26%, transparent 27%, transparent 74%, red 75%, red 76%, transparent 77%)",
      },
    },
    darkMode: "class",
  plugins: [nextui()]
  },
  plugins: [],
};
export default config;
