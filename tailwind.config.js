const defaultTheme = require('tailwindcss/defaultTheme');

const fontFamily = { ...defaultTheme.fontFamily };
fontFamily.serif.unshift('Roboto Slab');

module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    fontFamily,
    extend: {},
  },
  plugins: [],
}
