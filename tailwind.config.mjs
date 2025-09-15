/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // importante: no uses 'media'
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5faeb",
          100: "#e7f5d2",
          200: "#d2ebab",
          300: "#b4dc7a",
          400: "#8dc63f", // main
          500: "#78b032",
          600: "#5c8c24",
          700: "#486b20",
          800: "#3b561e",
          900: "#33491e",
          950: "#19280b",
        },
        secondary: {
          50: "#f6f6f7",
          100: "#efeff0",
          200: "#e2e2e3",
          300: "#cfd0d2",
          400: "#bbbbbe",
          500: "#a8a8ac",
          600: "#919195",
          700: "#7f7f83",
          800: "#68686b",
          900: "#575659",
          950: "#323234",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
