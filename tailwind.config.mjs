/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        "2xlsm": ".5px .5px 10px 0.9px rgba(0,0,0, 0.3)",
      },
    },
  },
  plugins: [],
};
