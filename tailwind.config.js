/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'sans' : ['Space Grotesk'],
        'serif' : ['Sanchez', 'Playfair Display'],
      }
    }
  },

  plugins: []
}
