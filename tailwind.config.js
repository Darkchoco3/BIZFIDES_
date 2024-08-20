/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      'primary': 'hsla(237, 63%, 27%, 1)',
      'secondary': 'hsla(180, 100%, 32%, 1)',
      'primary-light': 'hsla(233, 24%, 93%, 1)',
      'neutral-grey-100': 'hsla(0, 0%, 97%, 1)',
      'neutral-grey-300': 'hsla(0, 0%, 42%, 1)',
      'neutral-black': 'hsla(0, 0%, 17%, 1)',
      'white':'hsla(0, 0%, 100%, 1)',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}