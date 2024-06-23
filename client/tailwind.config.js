/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.css","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // screens: {
      //   xxs:"100px",
      //   xs: "480px",
      //   ss: "620px",
      //   sm: "768px",
      //   md: "1060px",
      //   lg: "1200px",
      //   xl: "1700px",
      // },
      fontFamily : {
        poppins: ["Poppins", "sans-serif"],
        roboto : ["Roboto", "sans-serif"]
      },
      wordSpacing: {
        'tight': '-0.05em',
        'normal': '0',
        'wide': '1.2em',
      },
      colors : {
        pink: "#fdf8f7"
      }
    },
  },
  plugins: [],
}