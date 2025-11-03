/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/javascript/**/*.{js,jsx}",  // ← Added .js
    "./app/views/**/*.{erb,html}"      // ← Added .html
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}