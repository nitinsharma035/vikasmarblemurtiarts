/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          950: '#1e1b4b', // Aapka manga hua Violet color
        },
        pink: {
          750: '#be185d', // Pink shade
        },
      },
      // --- FONTS ADDED HERE ---
      fontFamily: {
        heading: ['Satoshi', 'sans-serif'], // Heading font
        body: ['Erode', 'serif'],           // Regular text font
      },
    },
  },
  plugins: [],
}