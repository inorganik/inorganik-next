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
          'base-content': '#4d63bc',
        },
        inorganikDark: {
          primary: '#6e90da',
          secondary: '#8cc448',
          accent: '#ff5638',
          neutral: '#a9a9a9',
          'base-100': '#1c1c1c',
          'base-content': '#a9a9a9',
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
