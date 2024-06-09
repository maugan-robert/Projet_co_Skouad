/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        lalezar: ['Lalezar', 'cursive'],
        niramit: ['Niramit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

