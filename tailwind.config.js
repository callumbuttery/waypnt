/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('assets/images/login.jpg')",
      }
    },
  },
  plugins: [],
}