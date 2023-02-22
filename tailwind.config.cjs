/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'muted': '#6B7280',
        'regal-blue': '#243c5a',
      } 
    },
  },
  plugins: [],
}
