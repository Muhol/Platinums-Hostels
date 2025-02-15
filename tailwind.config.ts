import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        translusent_green: "var(--translusent_green)",
        translusent_black: "var(--translusent_black)",
        translusent_lightblack: "var(--translusent_lightblack)",
        lightGray: "#F7F7F7",
        blue: "#0068C4 ",
        white: "#FFFFFF ",
        dark_green: "#003600",
        light_green: "var(--lightgreen)",
      },
    },
  },
  plugins: [],
} satisfies Config;
