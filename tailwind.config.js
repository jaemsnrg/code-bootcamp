/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "brand-1": '#6C6EA0',
      "brand-2": '#FF1053',
      "neutral-1-100": '#C1CAD6',
      "neutral-1-200": '#A3B7D1',
      "neutral-1-300": '#5C789C',
      "neutral-1-400": '#425875',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-heebo)'],
        mono: ['var(--font-handjet)'],
      }
    }
  },
  plugins: [],
}
