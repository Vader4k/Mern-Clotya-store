/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.css","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily : {
        jost : ["Jost", "sans-serif"]
      },
      wordSpacing: {
        'tight': '-0.05em',
        'normal': '0',
        'wide': '1.2em',
      },
      backgroundImage: {
        'women': "url('./assets/banner-1.jpg')",
        'men': "url('./assets/banner-2.jpg')",
        "shoes": "url('./assets/banner-3.jpg')",
        "accessories": "url('./assets/banner-4.jpg')",
        'jewellery': "url('./assets/banner-22.jpg')",
        'fashion': "url('./assets/banner-23.jpg')",
      }
    },
  },
  plugins: [],
}