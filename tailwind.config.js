/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  darkMode:'selector',
  theme: {
    extend: {
      colors: {
      'custom-grey':'#282d30',
      'my-light-grey':'#bbceed',
    },},
  },
  plugins: [],
}

