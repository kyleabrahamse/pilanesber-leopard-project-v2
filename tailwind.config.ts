import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cornsilk: "#fefae0",
        earth: "#d5a769",
        moss: "#6b7c6b",
        tigerseye: "#bc6c25",
        umber: "#896242",
        smoky: "#16170e",
        alabaster: "#e5e2db",
      },
    },
  },
  plugins: [],
};
export default config;
