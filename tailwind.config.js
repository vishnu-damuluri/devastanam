/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./views/*.ejs"
  ],
  theme: {
    extend: {
      screens: {
        phone: { min: "360px", max: "640px" },
        ipad: { min: "768px", max: "1024px" },
        pc: { min: "1280px", max: "7680px" },
      },
      colors: {
        clifford: "#da373d",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};