/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       screens: {
        xs: "345px",   // custom
        tab: "900px",  // custom
      }
    },
  },
  plugins: [],
}