/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
    fontFamily: {
      'Sora': ['Sora, sans-serif'],
    },
    extend: {
      colors: {
        primary: '#00FFFF',
        secondary: '#FFA800',
        background: '#001e34'
      }
    },
  },
  plugins: [],
}

