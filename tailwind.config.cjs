/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      cyan: 'hsl(var(--cyan) / <alpha-value>)',
      green: 'hsl(var(--green) / <alpha-value>)',
      grayishBlue: 'hsl(var(--grayish-blue) / <alpha-value>)',
      darkGrayishBlue: 'hsl(var(--dark-grayish-blue) / <alpha-value>)',
      darkBlue: 'hsl(var(--dark-blue) / <alpha-value>)',
    },
    fontFamily: {
      Manrope: ['Manrope', 'sans-serif'],
    },
  },
  plugins: [],
};
