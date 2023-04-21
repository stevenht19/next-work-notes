/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fadeIn': {
          'to': {
            opacity: 1
          }
        },
        'toast': {
          '0%': {
            transform: 'translate(-50%, -4rem) scale(.5)',
            opacity: 0
          },
          '50%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%, 0)'
          }
        },
        'toast-leave': {
          'from': {
            opacity: 1,
            transform: 'translate(-50%, 0)'
          },
          'to': {
            transform: 'translate(-50%, -4rem) scale(.5)',
            opacity: 0
          },
        }
      },
      animation: {
        'toast': 'toast .25s ease forwards',
        'toastLeave': 'toast-leave .2s ease forwards',
        'fadeIn': 'fadeIn 1s ease forwards'
      },
      backgroundSize: {
        'expanded': '15000%',
        'full': '100%'
      },
      transitionProperty: {
        'background': 'background'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, transparent, red)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
