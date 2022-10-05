/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'silver': "#C0C0C0"
      },

      backgroundImage: {
        'responsive': "url('../img/responsive.png')",
        'paper': "url(../img/paper.svg)",
        'moon': "url(../img/moon.svg)",
        'intro': "url(../img/intro.jpg)"
      }
    },
  },
  plugins: [],
};

