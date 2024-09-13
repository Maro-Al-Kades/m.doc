/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#c91c53",
              foreground: "#fff",
            },
            secondary: "#910e37",
            background: "#131313",
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#c91c53",
              foreground: "#fff",
            },
            secondary: "#910e37",
            background: "#f9f9f9",
          },
        },
      },
    }),
  ],
};
