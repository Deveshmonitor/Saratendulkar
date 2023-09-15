/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bggreen: '#f9f6ed',
        green: '#3f5147',
        greenn: '#3f5141',
        
      },
      textUnderlineOffset: {
        4: '4px',
      },
    },
  },
  plugins: [],
}