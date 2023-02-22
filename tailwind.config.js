/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundColor: {
        bgcard: {
          '01': '#fdefe6',
          '02': '#d6e5fb',
          '03': '#ceebe9',
          '04': '#e2f2b2',
        },
        bghero: {
          '01': '#d6e5fb',
        },
      },
    },
  },
  plugins: [],
};
