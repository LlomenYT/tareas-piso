/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/astro/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'antonio': '#EF4444',
        'ruben': '#10B981',
        'carlos': '#F59E0B',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  darkMode: 'class',
}
