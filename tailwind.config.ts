import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend Deca"],
      },
      screens: {
        md: "568px",
        lg: "1440px",
      },
      backgroundImage: {
        "hero-img": 'url("/images/hero-img.png")',
        "hero-img-landscape": 'url("/images/hero-img-landscape.png")',
        "hero-img-desktop": 'url("/images/hero-img-desktop.png")',
      },
    },
    colors: {
      "pure-white": "#FFFFFF",
      white: "#F5F5F5",
      primary: {
        100: "#D1ECFD",
        200: "#5468E7",
        300: "#232340",
        400: "#7676B2",
      },
    },
  },
  plugins: [],
};
export default config;
