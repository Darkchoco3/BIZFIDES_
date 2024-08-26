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
      'primary-dark': 'hsla(237, 62%, 21%, 1)',
      'neutral-grey-100': 'hsla(0, 0%, 97%, 1)',
      'neutral-grey-300': 'hsla(0, 0%, 42%, 1)',
      'neutral-black': 'hsla(0, 0%, 17%, 1)',
      'white':'hsla(0, 0%, 100%, 1)',
      'primary-dark':'hsla(234, 66%, 15%, 1)',
      'transparents': 'hsla(0, 0%, 0%, 0)',
      'neutral-grey-200':' hsla(0, 0%, 90%, 1)'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    animation: {
      'spin-slow': 'spin 20s linear infinite',
      'slide-left': 'slideLeft 4s ease-in-out infinite',
      'slide-right': 'slideRight 4s ease-in-out infinite',
    },
    keyframes: {
      slideLeft: {
        '0%, 100%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(-15px)' },
      },
      slideRight: {
        '0%, 100%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(15px)' },
      },
    },
    extend: {},
  },
  plugins: [],
}