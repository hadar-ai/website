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
		container: {
			center: true,
			padding: '1.5rem',
		},
    extend: {
      screens: {
        '2xl': '1400px',
      },
      fontFamily: {
        heading: ['var(--font-comfortaa)'],
        body: ['var(--font-noto-sans)'],
      },
      boxShadow: {
        'icon': '8px -7px 2px 0 rgba(27,38,59,0.9)'
      },
    },
    colors: {
      ...colors,
      col1: '#006D77',
      col2: '#83C5BE',
      col3: '#EDF6F9',
      col4: '#FFDDD2',
      col5: '#E29578',
    },
  },  
  plugins: [],
}