/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B4252',
        secondary: '#4C566A',
        accent: '#88C0D0',
        background: '#ECEFF4',
        typeface: '2E3440',
        highlight: '#8FBCBB',
      },
    },
  },
  plugins: [],
}