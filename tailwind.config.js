/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mobile: { max: '833px' },
        tablet: '834px',
        laptop: '1194px',
        monitor: '1440px',
        tv: '1920px',
      },
      fontFamily: {
        'aeonik-pro': ['"Aeonik Pro"', 'sans-serif'],
      },
      colors: {
        primary: '#263038',
      },
    },
  },
  plugins: [],
};
