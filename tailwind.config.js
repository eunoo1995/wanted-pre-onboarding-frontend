/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#222222',
        white: '#fefefe',
        primary: 'rgba(100,149,237,0.9)',
      },
    },
  },
  plugins: [],
};
