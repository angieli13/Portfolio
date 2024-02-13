/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        tuesday: ['"Tuesday Night"', "cursive"],
      },
    },
  },
  plugins: [],
};
