const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'gray': {
          900: '#0D1117',
          800: '#161B22',
          700: '#21262D',
          200: '#C9D1D9',
          100: '#F0F6FC'
        },
        'blue': {
          400: '#38BDF8',
          500: '#3B82F6'
        },
        'purple': {
          500: '#8B5CF6'
        }
      }
    },
  },
  plugins: [],
}
