import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|avatar|button|code|input|kbd|link|listbox|navbar|scroll-shadow|snippet|toggle|divider|ripple|spinner|popover).js"
  ],
  theme: {
    extend: {
    },
    screens: {
      'sm': '374px',

      'md': '760px',

      'lg': '1440px',
    },
  },
  darkMode:"class",
  plugins: [
    require('tailwind-scrollbar'),
    nextui()
  ],
};
export default config;
