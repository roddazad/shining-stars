/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    fontFamily: {
      sans: ['var(--font-nunito)', 'sans-serif'],
      heading: ['var(--font-baloo)', 'cursive'],
    },
  },
},
  plugins: [],
};