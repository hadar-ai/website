/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-comfortaa)'],
        body: ['var(--font-noto-sans)'],
      },
    },
    colors: {
      ...colors,
      col1: '#0D1B2A',
      col2: '#1B263B',
      col3: '#415A77',
      col4: '#778DA9',
      col5: '#E0E1DD',
      col6: '#D99EA5',
    },
  },  
  plugins: [],
}