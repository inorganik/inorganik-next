/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        inorganik: {
          primary: '#4d63bc',
          secondary: '#8bc53f',
          accent: '#ff5638',
          neutral: '#33273F',
          'base-100': '#fff',
          'base-content': '#5c5c5c',
        },
        inorganikDark: {
          primary: '#6e90da',
          secondary: '#8cc448',
          accent: '#ff5638',
          neutral: '#a9a9a9',
          'base-100': '#1c1c1c',
          'base-content': '#d7d7d7',
        },
      },
    ],
    darkTheme: 'inorganikDark',
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        '4xl': ['2.25rem', {
          lineHeight: '3rem',
        }],
        '6xl': ['3.75rem', {
          lineHeight: '5rem',
        }],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: '200',
              letterSpacing: '0.025em',
            },
          },
        },
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
