import twElementsPlugin from 'tw-elements/dist/plugin.cjs';
/** @type {import('tailwindcss').Config} */
 const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [twElementsPlugin,require("daisyui")],
  darkMode: 'class',
});

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [twElementsPlugin,require("daisyui")],
//   darkMode: 'class',
// };
