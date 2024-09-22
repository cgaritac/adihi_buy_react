/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-hero': "url('/src/assets/home_hero.jpg')",
      },
      colors: {
        'adihi-red': '#df1717',
      },
      fontFamily: {
        'trade-winds': ['"Trade Winds", cursive'],
        'ubuntu': ['"Ubuntu"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

