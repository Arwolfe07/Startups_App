/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      animation: {
        modal: 'slideani 300ms ease-out forwards'
      },
      keyframes: {
        slideani: {
          'from': {
            opacity: '0',
            transform: 'translateY(-3rem)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY()'
          }
        }
      }
    },
  },
  plugins: [
    flowbite
  ],

}

