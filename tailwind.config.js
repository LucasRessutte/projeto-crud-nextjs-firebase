/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  safelist: [{ pattern: /(from|to)-(green|blue|gray)-(400|700)/ }],

  theme: {
    extend: {},
  },
  plugins: [],
}
