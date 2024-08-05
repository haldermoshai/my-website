/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'footer': '#eeece2',
      },
    },
    fontFamily: {
      'myfont': ['Josefin Sans', 'sans-seri'],
    },
  },
  plugins: [],
}