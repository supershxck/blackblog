// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0a0a23',
          800: '#1a1a40',
          700: '#2d2b55',
          600: '#453c67',
          500: '#6c47ff',
          400: '#a259ff',
          300: '#c589e8',
          200: '#e0aaff',
          100: '#f3e8ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}