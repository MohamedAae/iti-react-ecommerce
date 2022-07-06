/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        minicash: 'url("../public/images/minicash-bg.png")',
        summer: 'url("../public/images/summer-bg.png")',
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
