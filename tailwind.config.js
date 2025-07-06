/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        florisha: ['Florisha',  'Comic Sans MS', 'cursive'], // replace with your font
      },
    },
  },
  plugins: [],
}
