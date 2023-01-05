/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*'],
  theme: {
    fontFamily: {
      sans: ['Sevillana', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#357a38',
        'secondary': '#003603',
        'alert':'#006dc7'
      },
      borderRadius: {
        'sm': '0.25rem',
      },
      spacing: {
        'sm': '0.5rem',
      }
    },
  },
  plugins: [],
}
