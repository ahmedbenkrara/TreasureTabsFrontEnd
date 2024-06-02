/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '0px',
        'sm': '320px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Poppins', 'sans-serif'],
        'imenglish': ["IM Fell English SC", 'serif'],
      },
    },
  },
  plugins: [],
}

