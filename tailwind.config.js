/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'sans' : ['League Spartan'],
        'serif' : ['Sanchez', 'Playfair Display'],
      }
    }
  },
  plugins: []
}
