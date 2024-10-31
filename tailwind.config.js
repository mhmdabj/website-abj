/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purple: '#895197',
        coral: '#FF6B6B',
        green: '#99B84A',
        blue: '#1E95E7',
        orange: '#F0B65A',
        black: '#1F1E25',
        white: '#FFFFFF',
        gray: '#2c2c33',
        gray_text: '#515158',
        transparent: 'transparent'
      },
    },
  },
  plugins: [],
}