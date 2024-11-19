/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  blocklist: ["container"],
  theme: {
    extend: {
      colors: {
        mainColor: "#03AA64",
        secondTextColor: "#767676",
        primaryTextColor: "#000000",
        lightBg: "#F5F5F5",
        darkBg: "#242020",
      }
    },
  },
  plugins: [],
}