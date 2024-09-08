const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': 'hsla(237, 63%, 27%, 1)',
        'secondary': 'hsla(180, 100%, 32%, 1)',
        'primary-light': 'hsla(233, 24%, 93%, 1)',
        'primary-dark': 'hsla(237, 62%, 21%, 1)',
        'neutral-grey-100': 'hsla(0, 0%, 97%, 1)',
        'neutral-grey-300': 'hsla(0, 0%, 42%, 1)',
        'neutral-black': 'hsla(0, 0%, 17%, 1)',
        'white': 'hsla(0, 0%, 100%, 1)',
        'primary-dark': 'hsla(234, 66%, 15%, 1)',
        'primary-medium': 'hsla(220, 39%, 25%, 1)',
        'primary-accent': 'hsla(236, 23%, 77%, 1)',
        'transparents': 'hsla(0, 0%, 0%, 0)',
        'neutral-grey-200': 'hsla(0, 0%, 90%, 1)',
        'primary-red': 'hsla(352, 82%, 38%, 1)',
         'error-red': 'hsla(0, 100%, 50%, 1)',
        'secondary-light': 'hsla(180, 47%, 93%, 1)'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(125px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(125px) rotate(-360deg)' },
        },scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        'orbit-1': 'orbit 10s linear infinite',
        'orbit-2': 'orbit 10s linear infinite reverse',
        'orbit-3': 'orbit 10s linear infinite',
        'orbit-4': 'orbit 10s linear infinite reverse',
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      transitionProperty: {
        // Add custom properties if needed
        'transform': 'transform',
        'opacity': 'opacity',
      },
    },
  },
  plugins: [addVariablesForColors],
}


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}