/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export const content = ["./layouts/**/*.{html,js}"];
export const theme = {
  extend: {
    // fontFamily: {
    //   sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    // },
  },
};
export const plugins = [];
