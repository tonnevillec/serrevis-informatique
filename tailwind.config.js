/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#0e8adf',
          200: '#6da9d3',
        },
        serrevis: {
          100: '#333541',
          200: '#2F2F2F',
        },
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["winter"],
  },
  safelist: [
    'border-b', 'bg-error'
  ]
}

