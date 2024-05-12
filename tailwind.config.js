/* eslint-env node */
/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'
// const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{vue,js}"],
  theme: {
    extend: { colors },
  },
  plugins: [],
};

