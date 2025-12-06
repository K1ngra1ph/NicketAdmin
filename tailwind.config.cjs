/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonred: "#ff0033",
        darkbg: "#0a0a0b",
        darkcard: "#111114",
      },
    },
  },
  plugins: [],
};
