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
        'catalog-hero': "url('/src/assets/catalog_hero.jpg')",
        'calendar-hero': "url('/src/assets/calendar_hero.jpg')",
        'contact-hero': "url('/src/assets/contact_hero.jpg')",
        'terms-hero': "url('/src/assets/terms_hero.jpg')",
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

