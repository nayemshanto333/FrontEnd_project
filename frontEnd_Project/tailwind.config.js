/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: { 
        redhatdisplay: '"Red Hat Display", sans-serif',
       },
      colors:{
        desc:'#26395C',
        
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

