const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        18: '4.5rem'
      },
      fontSize: {
        '2.5xl': '1.75rem',
        '3.5xl': '2rem'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          orange: '#FF9900',
          blue: '#0C79DF',
          bg: '#FAF7F5'
        },
        secondary: {
          yellow: '#FFD246',
          black: '#000000',
          white: '#FFFFFF'
        },
        gray: {
          f7: '#F7F7F7',
          e9: '#E9E9E9',
          d4: '#D4D4D4',
          '9f': '#9F9F9F',
          66: '#666666',
          33: '#333333',
          '1d': '#1D1D1D'
        }
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
