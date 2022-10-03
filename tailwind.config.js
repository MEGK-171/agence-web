/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'bg-silver': "#C0C0C0"
      },

      backgroundImage: {
        'bg-img': "url(../../src/assets/img/responsive.png)"
      }
    },
  },
  plugins: [],
};

