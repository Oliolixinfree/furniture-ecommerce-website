/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      backgroundColor: {
        bgcard: {
          '01': '#fdefe6',
          '02': '#d6e5fb',
          '03': '#ceebe9',
          '04': '#e2f2b2',
        },
        bgprod: {
          '01': '#d6e5fb',
        },
      },
    },
  },
  plugins: [],
};
